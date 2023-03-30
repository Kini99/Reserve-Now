import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

function AuthContextProvider(props) {

    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [token, setToken] = useState(null);
    const navigate=useNavigate();

    const loginUser = async (email, password) => {
        // setLoading(true);
        console.log("login" + email, password)
        try {
            const response = await fetch("http://localhost:8080/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            const data = await response.json();
            setToken(data.token);
            // console.log(token)
            setIsAuth(true);
            // console.log(isAuth)
            // setLoading(false);
            navigate("/dashboard");
        } catch (err) {
            setErr(true);
            // setLoading(false);
        }
    }


    const logoutUser = () => {
        setIsAuth(false);
        setToken(null);
    }

    const authState = {
        isAuth, token
    }


    return (
        <AuthContext.Provider value={{ authState, loginUser, logoutUser, loading, err }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;
