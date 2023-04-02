import { createContext, useState } from "react";
import { TbRuler } from "react-icons/tb";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

function AuthContextProvider(props) {

    const [isAuth, setIsAuth] = useState(true);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);
    const [token, setToken] = useState(null);
    const navigate=useNavigate();

    const handleExistingUser=(email,password,id)=>{
      console.log(email)
      console.log(id)
        setLoading(true)
        fetch(`https://reserve-now-server.onrender.com/users/${id}`)
        .then(response => response.json())
        .then((data) => {
          console.log('existing user fetch data')
          console.log(data)
          console.log(data[0].password)
          console.log(password)
          if (data.length > 0) {
            const userPassword = data[0].password;
            if (password == userPassword) {
                setToken(data.token);
                setIsAuth(true);
              alert("Login successful");
              if(email=="admin@mail.com"){
                navigate("/admin")
              }
              navigate("/");
            } else {
              alert("Incorrect password");
            }
          } else {
            alert("User not found");
          }
        })
        .catch(error => {
          console.log(error)
          alert("Error retrieving user data");
        });
        setLoading(false)
      }

      const handleNewUser=async(email,password)=>{
        setLoading(true)
        try {
          const response = await fetch('https://reserve-now-server.onrender.com/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email,
              password: password
            })
          });
      
          if (response.ok) {
            // setToken(data.token);
            console.log('new user fetch data')
            console.log(response)
                setIsAuth(true);
            alert('Login Successful');
            window.scrollTo(0, 0);
            navigate("/");
          } else {
            throw new Error('Failed to create user');
          }
        } catch (error) {
          console.error(error);
          alert('Failed to create user');
        }
        setLoading(false)
      }

    const logoutUser = () => {
        setIsAuth(false);
        setToken(null);
    }


    return (
        <AuthContext.Provider value={{ isAuth, handleExistingUser, handleNewUser, logoutUser, loading, err }}>{props.children}</AuthContext.Provider>
    )
}

export default AuthContextProvider;
