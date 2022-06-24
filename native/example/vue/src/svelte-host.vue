<script lang="ts">
export default {
    inheritAttrs: false
}
</script>

<script setup lang="ts">
import { ref, onMounted, useSlots, useAttrs } from 'vue'

type AnyObject = Record<string, any>

let { component } = defineProps<{
    component: Record<
        string,
        new (
            props: AnyObject & {
                target: HTMLElement
                props?: AnyObject
            }
        ) => any
    >
}>()

const element = ref<HTMLDivElement>()

const props = useAttrs()
const slots = useSlots()

onMounted(() => {
    const svelte = component[Object.keys(component)[0]]

    new svelte({
        target: element.value!,
        props
    })
})
</script>

<template>
    <div ref="element" />
</template>
