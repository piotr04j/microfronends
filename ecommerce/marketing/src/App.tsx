import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateGenerateClassName = createGenerateClassName({
    productionPrefix: 'mar'
})

const App: () => JSX.Element = () => {

  return (
        <StylesProvider generateClassName={generateGenerateClassName}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/pricing'} element={<Pricing />} />
                    <Route path={'/'} element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </StylesProvider>
  )
}

export default App
