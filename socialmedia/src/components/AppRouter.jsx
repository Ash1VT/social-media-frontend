import { observer } from 'mobx-react'   ;
import React, { useContext, useEffect, useState } from 'react'
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import CurrentUserContext from '../context/CurrentUserContext';
import { publicRoutes, privateRoutes } from '../routes';
import useComponentWillMount from '../hooks/useComponentWillMount';
import useRequest from '../hooks/useRequest';
import ComponentWithLoading from './ComponentWithLoading';

const AppRouter = observer(() => {

	
    const {currentUserStore} = useContext(CurrentUserContext)

    const [loading, initCurrentUserWithAccessToken] = useRequest(async () => {
        await currentUserStore.get()
    })

    useComponentWillMount(() => {
        initCurrentUserWithAccessToken()
    })

    return (
            <ComponentWithLoading loading={loading} loaderSize={50} loaderColor='white'>
                {
                    currentUserStore.auth
                    ?
                    <Switch>
                        {privateRoutes.map(route => 
                            <Route component={route.component} path={route.path} exact={route.exact} key={route.path}/>
                        )}
                        <Redirect to="/"/>
                    </Switch>
                    :
                    <Switch>    
                            {publicRoutes.map(route => 
                                <Route component={route.component} path={route.path} exact={route.exact} key={route.path}/>
                            )}
                            <Redirect to="/login"/>
                    </Switch>
                }
            </ComponentWithLoading>
        )
            
})

export default AppRouter;
