import React, { useContext, useEffect, useState } from 'react'
import CurrentUserContext from '../context/CurrentUserContext'
import useRequest from '../hooks/useRequest'
import Loader from '../components/UI/loader/Loader'
import Button from '../components/UI/button/Button'


const Home = () => {

    const {currentUserStore} = useContext(CurrentUserContext)

    const [loading, clearUser] = useRequest(async () => {
        return await currentUserStore.logout();
    }) 

    const logout = async (event) => {
        event.preventDefault();
        await clearUser();
    }

    if(loading){
		return <Loader text="Loading..." color='white' size={50}></Loader>
	}

    return (
        <div>
            Welcome {currentUserStore.user.username}, it's private home page
            <Button backgroundColor='red' hoverColor='black' onClick={logout}>Logout</Button>
        </div>
    )
}

export default Home