import MarketingApp from './components/MarketingApp'
import Header from './components/Header'
import { createGenerateClassName, StylesProvider } from '@material-ui/core'
import { BrowserRouter } from 'react-router-dom'

const generateClassName = createGenerateClassName({
  productionPrefix: 'con'
})

const App: () => JSX.Element = () => {
  return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header signedIn={true} onSignOut={false}/>
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
  )
}

export default App
