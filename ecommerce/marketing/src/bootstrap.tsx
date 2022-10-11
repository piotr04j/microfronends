import * as React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createMemoryHistory,
  MemoryHistory,
  LocationListener,
  createBrowserHistory,
} from 'history';
import App from './App'

export type typeCreateBrowserHistory = typeof createBrowserHistory

export const mountMarketingApp = (el: HTMLElement | null, navigationObject?: {onNavigate?: LocationListener, defaultHistory?: typeCreateBrowserHistory }) => {
  if (el === null) throw new Error('Failed to find the root element')
  const root = createRoot(el)
  const history: MemoryHistory | ReturnType<typeCreateBrowserHistory> = navigationObject && navigationObject.defaultHistory && navigationObject.defaultHistory() || createMemoryHistory()

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

const rootElement = document.getElementById('dev-marketing')
if (process.env.NODE_ENV === 'development' && (rootElement != null)) {
  mountMarketingApp(
      rootElement,
      {
        defaultHistory: createBrowserHistory
      }
  )
}
