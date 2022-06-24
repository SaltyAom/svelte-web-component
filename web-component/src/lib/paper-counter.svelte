<svelte:options tag="paper-counter" />

<script lang="ts">
    export let counter = 0
</script>

<button on:click={() => counter++}>+</button>
{counter}
<button on:click={() => counter--}>-</button>

<style lang="sass">
    :host
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
        display: flex
        flex-direction: row
        align-items: center
        color: #313131
        gap: 1em

    button
        appearance: none
        font-size: 1.25em
        width: 2em
        height: 2em
        background-color: #fff
        border: 0
        border-radius: .25em
        box-shadow: 0 1px 2px rgba(0,0,0,.375)
        transition: box-shadow .2s ease-out

        &:hover,
        &:focus
            box-shadow: 0 2px 4px rgba(0,0,0,.375)
</style>
