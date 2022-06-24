<script lang="ts">
    import PaperCard from './lib/paper-card.svelte'
    import PaperCounter from './lib/paper-counter.svelte'
    import PaperCompound from './lib/paper-compound.svelte'
</script>

<main id="playground">
    <PaperCard
        src="https://i.ytimg.com/vi/_35D5gvqDR8/maxresdefault.jpg"
        alt="Takodachi"
    >
        Takodachi
    </PaperCard>

    <PaperCounter />

    <PaperCompound>
        <PaperCard
            slot="up"
            src="https://i.ytimg.com/vi/_35D5gvqDR8/maxresdefault.jpg"
            alt="Takodachi"
        >
            Takodachi
        </PaperCard>
        <PaperCounter slot="down" />
    </PaperCompound>
</main>

<style lang="sass">
    body
        margin: 0

    *
        box-sizing: border-box

    #playground
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        gap: 2.5em
        width: 100%
        min-height: 100vh
        padding: 4em
        background-color: #fafafa
</style>