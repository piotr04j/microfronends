import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const rootElement = document.getElementById('dev-products')
if (rootElement == null) throw new Error('Failed to find the root element')
const root = createRoot(rootElement)
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
)


export const foo = 12
