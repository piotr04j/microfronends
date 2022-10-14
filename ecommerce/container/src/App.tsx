import Header from './components/Header'
import { createGenerateClassName, StylesProvider } from '@material-ui/core'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import AuthApp from './components/AuthApp';
import MarketingApp from './components/MarketingApp';

const generateClassName = createGenerateClassName({
  productionPrefix: 'con'
})

const App: () => JSX.Element = () => {
  return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <Header signedIn={false} onSignOut={true}/>
                <Routes>
                    <Route path={'/auth/*'} element={<AuthApp />} />
                    <Route path={'*'} element={<MarketingApp />} />
                </Routes>
            </StylesProvider>
        </BrowserRouter>
  )
}

export default App
