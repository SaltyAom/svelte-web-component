import React, { HTMLAttributes, type ReactNode } from 'react'
import ReactDOM from 'react-dom/client'

import '@saltyaom/svelte-component'

import App from './App'

import './index.css'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            ['paper-card']: HTMLAttributes<HTMLElement> & {
                src: string
                alt: string
            }
            ['paper-counter']: HTMLAttributes<HTMLElement>
            ['paper-compound']: HTMLAttributes<HTMLElement>
        }
    }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
