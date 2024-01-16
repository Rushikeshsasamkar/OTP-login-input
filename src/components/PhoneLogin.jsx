import React from 'react'
import { useState } from 'react'
import OtpInput from './OtpInput'

const PhoneLogin = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [showOtpInput, setShowOtpInput] = useState(false)
    
    
    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handlePhoneSubmit = (e) => {
        e.preventDefault();
        // Phone validations

        const regex = /[^0-9]/g;
        if(phoneNumber.length<10 || regex.test(phoneNumber)){
            alert("Invalid phone number")
            return;
        }

        // Call BE API
        setShowOtpInput(true)

    }

    const onOtpSubmit =(otp)=>{
            console.log("Login sucessful");
    }
    return (

        <div>
            {!showOtpInput?<form onSubmit={handlePhoneSubmit}>
                <input type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                    placeholder='Enter Phone Number'
                />

                <button type="submit">Submit</button>
            </form>:
            <div>
                    <p>Enter OTP Send to <b>{phoneNumber}</b></p>
                    <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
            </div>}
        </div>
    )
}

export default PhoneLogin