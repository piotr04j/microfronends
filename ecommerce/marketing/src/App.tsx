import { StylesProvider } from '@material-ui/core';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const App: () => JSX.Element = () => {

  return (
        <StylesProvider>
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
