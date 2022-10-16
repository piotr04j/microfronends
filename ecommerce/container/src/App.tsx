import Header from './components/Header'
import { createGenerateClassName, StylesProvider } from '@material-ui/core'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const generateClassName = createGenerateClassName({
  productionPrefix: 'con'
})

const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))
const DashboardLazy = lazy(() => import('./components/DashboaradApp'))

const App: () => JSX.Element = () => {
  return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <Header signedIn={false} onSignOut={true}/>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/auth/*'} element={<AuthLazy />} />
                        <Route path={'/dashboard'} element={<DashboardLazy />} />
                        <Route path={'*'} element={<MarketingLazy />} />
                    </Routes>
                </Suspense>
            </StylesProvider>
        </BrowserRouter>
  )
}

export default App
