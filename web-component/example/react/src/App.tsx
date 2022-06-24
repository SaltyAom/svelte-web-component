import { useState } from 'react'

import '@saltyaom/svelte-component'

import './App.css'

function App() {
    return (
        <main id="playground">
            <paper-card
                src="https://i.ytimg.com/vi/_35D5gvqDR8/maxresdefault.jpg"
                alt="Takodachi"
            >
                Takodachi
            </paper-card>
            <paper-counter />
            <paper-compound>
                <main slot="up">
                    <p style={{ fontSize: '2em', margin: 0 }}>
                        React in Svelte Web Component
                    </p>
                </main>
                <paper-counter slot="down" />
            </paper-compound>
        </main>
    )
}

export default App
