import * as React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('container-app')
if (rootElement === null) throw new Error('Failed to find the root element')

const root = createRoot(rootElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

export default {}
