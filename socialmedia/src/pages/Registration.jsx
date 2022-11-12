import React, { useContext, useEffect, useState } from 'react'
import RegistrationForm from '../components/RegistrationForm'
import { Link } from 'react-router-dom'

const Registration = () => {


    return (
        <div className="container">
            <div className="form login">
                <span className="title">Registration</span>
                <RegistrationForm/>
                <div className="login-signup">
                        <span className="text">Already a member?</span>
                        <Link to='/login' className="text login-link">Login Now</Link>
                </div>
            </div>
        </div>
    )
}

export default Registration;
