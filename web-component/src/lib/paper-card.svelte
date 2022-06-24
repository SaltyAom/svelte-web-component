<svelte:options tag="paper-card" />

<script lang="ts">
    export let title = ''
    export let src = ''
    export let alt = ''
</script>

<article class="card">
    {#if src}
        <img class="image" {src} {alt} />
    {/if}
    <summary class="summary">
        {#if title}
            <h1 class="title">{title}</h1>
        {/if}
        <slot />
    </summary>
</article>

<style lang="sass">
    :host
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif

    *
        box-sizing: border-box

    .card
        display: flex
        flex-direction: column
        max-width: 360px
        background-color: #fff
        border-radius: .25em
        box-shadow: 0 1px 2px rgba(0,0,0,.375)
        transition: transform .2s ease-out, box-shadow .2s ease-out

        &:hover,
        &:focus
            transform: translateY(-.25em)
            box-shadow: 0 4px 8px rgba(0,0,0,.375)

    .summary
        display: flex
        flex-direction: column
        width: 100%
        padding: 1em
        gap: .5em

    .image
        width: 100%

    .title
        font-size: 1.5em
        color: #313131
        font-weight: 500
        margin: 0 0 .125em

    .summary
        font-size: 1em
        color: #757575
</style>
