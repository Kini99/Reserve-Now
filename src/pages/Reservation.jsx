import Header from "../components/Header";
import { useState } from "react";

function Reservation() {
    const [step, setStep] = useState(1);
    const handleNextStep = () => {
        setStep(step + 1);
    };

    return (
        <>
            <Header />
            <div className="slider">
                <div className={`step ${step >= 1 ? 'completed' : ''}`}>
                    <span>{step >= 1 ? <span>&#10003;</span> : '1'}</span>
                    <p>Select Flight</p>
                </div>
                <div className={`step ${step >= 2 ? 'completed' : ''}`}>
                    <span>{step >= 2 ? <span>&#10003;</span> : '2'}</span>
                    <p>Who's Flying</p>
                </div>
                <div className={`step ${step >= 3 ? 'completed' : ''}`}>
                    <span>{step >= 3 ? <span>&#10003;</span> : '3'}</span>
                    <p>Check and Pay</p>
                </div>
                
            </div>
            <div className="button-container">
                    {step < 3 ? (
                        <button onClick={handleNextStep}>Next</button>
                    ) : (
                        <button>Finish</button>
                    )}
                </div>
        </>

    )
}

export default Reservation;