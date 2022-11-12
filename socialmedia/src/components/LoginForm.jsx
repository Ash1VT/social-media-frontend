import React, { useContext, useEffect, useState } from 'react'
import Button from './UI/button/Button'
import Input from './UI/input/Input'
import CurrentUserContext from '../context/CurrentUserContext'
import { observer } from 'mobx-react-lite'
import useRequest from '../hooks/useRequest'
import useStateWithError from '../hooks/useStateWithError'
import ComponentWithLoading from './ComponentWithLoading'


const LoginForm = observer(() => {

    const {currentUserStore} = useContext(CurrentUserContext)
    
    const [username, usernameError, setUsername, setUsernameError] = useStateWithError('');
    const [password, passwordError, setPassword, setPasswordError] = useStateWithError('');


    const [loading, initCurrentUserWithLogin] = useRequest(async () => {
        return await currentUserStore.login(username, password);
    })

    const login = async (event) => {
        event.preventDefault();
        setUsernameError('');
        setPasswordError('');
        const data = await initCurrentUserWithLogin();
        if(data){
            if (data.field == 'username'){
                setUsernameError(data.message)
            }
            if (data.field == 'password'){
                setPasswordError(data.message)
            }
        }
    }

   

    const usernameChanged = (event) =>{
        setUsername(event.target.value)
    }


    const passwordChanged = (event) =>{
        setPassword(event.target.value)
    }

    return (
            <ComponentWithLoading loading={loading} loaderColor='red' loaderSize={50}>
                <form onSubmit={login}>
                    <Input type="text"
                            defaultText={username}
                            errorText={usernameError} 
                            placeholder="Enter your username"
                            onChange={usernameChanged}
                            required/>
                    <Input type="password" 
                            defaultText={password}
                            errorText={passwordError}
                            className="password" 
                            placeholder="Enter your password" 
                            onChange={passwordChanged}
                            required/>
                    <Button>Login</Button>
                </form>
            </ComponentWithLoading>
  )
})

export default LoginForm;
