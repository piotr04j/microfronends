import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { Router, Route, Routes, BrowserRouter, } from 'react-router-dom';
import { MemoryHistory } from 'history';
import * as React from 'react';
import { typeCreateBrowserHistory } from './bootstrap';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateGenerateClassName = createGenerateClassName({
    productionPrefix: 'auth'
})

const App: React.FC<{history?: MemoryHistory | ReturnType<typeCreateBrowserHistory>}> = ({history}) => {

    return (
        <>
            {
                history ? (
                    <StylesProvider generateClassName={generateGenerateClassName}>
                        <Router navigator={history} location={history.location}>
                            <Routes>
                                <Route path={'/auth/signin'} element={<SignIn onSignIn={() => {}} />} />
                                <Route path={'/auth/signup'} element={<SignUp onSignIn={() => {}} />} />
                            </Routes>
                        </Router>
                    </StylesProvider>
                ) : (
                    <StylesProvider generateClassName={generateGenerateClassName}>
                        <BrowserRouter>
                            <Routes>
                                <Route path={'/auth/signin'} element={<SignIn onSignIn={() => {}} />} />
                                <Route path={'/auth/signup'} element={<SignUp onSignIn={() => {}} />} />
                            </Routes>
                        </BrowserRouter>
                    </StylesProvider>
                )
            }
        </>
    )
}

export default App
