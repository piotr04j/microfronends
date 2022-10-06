import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { mountAuthApp } from 'auth/AuthIndex'
import { mountMarketingApp } from 'marketing/MarketingIndex'
import App from './App';

// const marketingAppRoot = document.getElementById('marketing-app')
// mountMarketingApp(marketingAppRoot)
//
// const authAppRoot = document.getElementById('auth-app')
// mountAuthApp(authAppRoot)

const rootElement = document.getElementById('container-app')
if (rootElement === null) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)


export default {}
