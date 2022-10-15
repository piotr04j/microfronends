import * as React from 'react'
import { createRoot } from 'react-dom/client'
import {
    createMemoryHistory,
    MemoryHistory,
    LocationListener,
    createBrowserHistory,
    InitialEntry,
} from 'history';
import App from './App'

export type typeCreateBrowserHistory = typeof createBrowserHistory

export const mountAuthApp = (el: HTMLElement | null, navigationObject?: {onNavigate?: LocationListener, defaultHistory?: typeCreateBrowserHistory,  initialPath?: InitialEntry[] }) => {
    if (el === null) throw new Error('Failed to find the root element')
    const root = createRoot(el)

    if(!navigationObject) {
        root.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        )
    } else {
        const history: MemoryHistory | ReturnType<typeCreateBrowserHistory> = navigationObject
            && navigationObject.defaultHistory && navigationObject.defaultHistory()
            || createMemoryHistory({ initialEntries: navigationObject.initialPath })

        if (navigationObject && navigationObject.onNavigate) {
            history.listen(navigationObject.onNavigate);
        }

        root.render(
            <React.StrictMode>
                <App  history={history}/>
            </React.StrictMode>
        )

        return {
            onParentNavigate: (nextPathname: string) => {
                if (history.location.pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            }
        }
    }
}

const rootElement = document.getElementById('dev-auth')
if (process.env.NODE_ENV === 'development' && (rootElement != null)) {
    mountAuthApp(
        rootElement
    )
}
