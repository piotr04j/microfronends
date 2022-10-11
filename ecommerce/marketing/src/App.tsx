import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import { Router, Route, Switch } from 'react-router-dom';
import Pricing from './components/Pricing'
import Landing from './components/Landing'
import { MemoryHistory } from 'history';
import * as React from 'react';
import { typeCreateBrowserHistory } from './bootstrap';

const generateGenerateClassName = createGenerateClassName({
  productionPrefix: 'mar'
})

const App: React.FC<{history: MemoryHistory | ReturnType<typeCreateBrowserHistory>}> = ({history}) => {

    return (
        <>
            <StylesProvider generateClassName={generateGenerateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </>

    )
}

export default App
