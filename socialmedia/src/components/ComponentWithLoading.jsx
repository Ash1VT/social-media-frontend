import React from 'react'
import Loader from './UI/loader/Loader'

const ComponentWithLoading = ({loading, children, loaderSize, loaderColor, ...props}) => {
    
    if(loading)
        return <Loader text="Loading..." color={loaderColor} size={loaderSize}></Loader>
    return (
        children
    )
}

export default ComponentWithLoading;
