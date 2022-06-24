<script lang="ts">
    import PaperCard from './paper-card.svelte'
    import PaperCounter from './paper-counter.svelte'
</script>

<main id="playground">
    <slot name="up" />
    <div class="divider" />
    <slot name="down" />
</main>

<style lang="sass">
    #playground
        display: flex
        flex-direction: column
        align-items: center
        padding: 4em
        border-radius: .25em
        border: 1px solid #aaa
        box-sizing: border-box

    .divider
        width: 100%
        height: 1px
        margin: 2em
        background-color: #cacaca
</style>
