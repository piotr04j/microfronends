import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

export const mountMarketingApp = (el: HTMLElement | null) => {
    if (el === null) throw new Error('Failed to find the root element')
    const root = createRoot(el)
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

const rootElement = document.getElementById('dev-marketing')
if(process.env.NODE_ENV === 'development' && rootElement) {
    mountMarketingApp(rootElement)
}
