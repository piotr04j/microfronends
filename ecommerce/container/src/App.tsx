import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from '@material-ui/core';

const generateClassName = createGenerateClassName({
    productionPrefix: 'con'
})

const App: () => JSX.Element = () => {

    return (
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header signedIn={true} onSignOut={false}/>
                <MarketingApp />
            </div>
        </StylesProvider>
    )
}

export default App
