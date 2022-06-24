import { useMemo, useReducer, useState } from 'react'

import SvelteHost from './svelte-host'

import {
    PaperCard,
    PaperCounter,
    PaperCompound
} from '@saltyaom/svelte-native-component'

import './App.css'

interface PaperCounterProps {
    counter: number
}

interface PaperCardProps {
    src?: string
    alt?: string
    title?: string
}

function App() {
    const [counter, increase] = useReducer((v) => ++v, 0)

    return (
        <main id="playground">
            <SvelteHost<PaperCounterProps>
                component={PaperCounter}
                counter={5}
            />
            <button onClick={increase}>Local Counter: {counter}</button>
            <SvelteHost<PaperCardProps>
                component={PaperCard}
                src="https://i.ytimg.com/vi/_35D5gvqDR8/maxresdefault.jpg"
                alt="Takodachi"
                title={`From React: ${counter}`}
            >
                <h1>Hi</h1>
            </SvelteHost>
        </main>
    )
}

export default App
