import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

export const mountProductsApp = (el: HTMLElement | null) => {
    console.log(el)
    if (el === null) throw new Error('Failed to find the root element')
    const root = createRoot(el)
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

const rootElement = document.getElementById('dev-products')
if(process.env.NODE_ENV === 'development' && rootElement) {
    mountProductsApp(rootElement)
}


