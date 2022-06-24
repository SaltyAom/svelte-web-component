<script setup lang="ts">
import { PaperCard, PaperCounter } from '@saltyaom/svelte-native-component'
import { ref } from 'vue'

import SvelteHost from './svelte-host.vue'
</script>

<template>
    <h1>Hello Vue</h1>
    <SvelteHost
        :component="{ PaperCard }"
        src="https://i.ytimg.com/vi/_35D5gvqDR8/maxresdefault.jpg"
        title="Tako"
        alt="Takodachi"
    >
        <p>Here's a slot</p>
    </SvelteHost>
    <SvelteHost :component="{ PaperCounter }" />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    gap: 2em;
}
</style>
