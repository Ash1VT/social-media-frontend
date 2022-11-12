import React, { useState, useContext } from 'react'
import Button from './UI/button/Button'
import Input from './UI/input/Input'
import CurrentUserContext from '../context/CurrentUserContext'
import useRequest from '../hooks/useRequest'
import useStateWithError from '../hooks/useStateWithError'
import ComponentWithLoading from './ComponentWithLoading'


const RegistrationForm = () => {

    const {currentUserStore} = useContext(CurrentUserContext)

    const [firstName, firstNameError, setFirstName, setFirstNameError] = useStateWithError('');
    const [lastName, lastNameError, setLastName, setLastNameError] = useStateWithError('');
    const [username, usernameError, setUsername, setUsernameError] = useStateWithError('');
    const [email, emailError, setEmail, setEmailError] = useStateWithError('');
    const [password, passwordError, setPassword, setPasswordError] = useStateWithError('');
    const [confirmPassword, confirmPasswordError, setConfirmPassword, setConfirmPasswordError] = useStateWithError('');

    const [loading, initCurrentUserWithRegistration] = useRequest(async() => {
        return await currentUserStore.register(firstName, lastName, username, email, password);
    })

    const register = async (event) => {
        event.preventDefault();

        setFirstNameError('');
        setLastNameError('');
        setUsernameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');

        if (confirmPassword !== password)
            setConfirmPasswordError('Passwords must match')
        
        const data = await initCurrentUserWithRegistration();
    
        if(data){
            if(data.fields.includes('first_name')){
                setFirstNameError(data.errors['first_name'][0])
            }
            if(data.fields.includes('last_name')){
                setLastNameError(data.errors['last_name'][0])
            }
            if (data.fields.includes('username')){
                if(data.errors)
                    setUsernameError(data.errors['username'][0])
                else if(data.message)
                    setUsernameError(data.message)
            }
            if (data.fields.includes('email')){
                if(data.errors)
                    setEmailError(data.errors['email'][0])
                else if(data.message)
                    setEmailError(data.message)
            }
            if (data.fields.includes('password')){
                setPasswordError(data.errors['password'][0])
            }
        }

    }

    const firstNameChanged = (event) => {
        setFirstName(event.target.value)
    }

    const lastNameChanged = (event) => {
        setLastName(event.target.value)
    }

    const usernameChanged = (event) =>{
        setUsername(event.target.value)
    }

    const emailChanged = (event) => {
        setEmail(event.target.value)
    }

    const passwordChanged = (event) =>{
        setPassword(event.target.value)
    }

    const confirmPasswordChanged = (event) =>{
        setConfirmPassword(event.target.value)
    }

    return (
            <ComponentWithLoading loading={loading} loaderColor='red' loaderSize={50}>
                <form onSubmit={register}>
                        <Input type="text"
                                defaultText={firstName}
                                errorText={firstNameError}
                                placeholder="Enter your first name"
                                onChange={firstNameChanged}
                                required/>
                        <Input type="text"
                                defaultText={lastName}
                                errorText={lastNameError} 
                                placeholder="Enter your last name" 
                                onChange={lastNameChanged}
                                required/>
                        <Input type="text"
                                defaultText={username}
                                errorText={usernameError} 
                                placeholder="Enter your username" 
                                onChange={usernameChanged}
                                required/>
                        <Input type="text"
                                defaultText={email}
                                errorText={emailError} 
                                placeholder="Enter your email" 
                                onChange={emailChanged}
                                required/>
                        <Input type="password"
                                defaultText={password}
                                errorText={passwordError} 
                                className="password" 
                                placeholder="Input a password" 
                                onChange={passwordChanged}
                                required/>
                        <Input type="password"
                                defaultText={confirmPassword}
                                errorText={confirmPasswordError} 
                                className="password" 
                                placeholder="Confirm a password" 
                                onChange={confirmPasswordChanged}
                                required/>
                        <Button>Signup</Button>
                </form>
            </ComponentWithLoading>
    )
}

export default RegistrationForm