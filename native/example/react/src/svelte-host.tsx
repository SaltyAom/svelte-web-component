import { useEffect, useRef, ReactNode } from 'react'

type AnyObject = Record<string, any>

type Props<T> = T & {
    component: new (
        props: AnyObject & {
            target: HTMLElement
            props?: AnyObject
        }
    ) => any
    children?: ReactNode
    slot?: string
}

const SvelteHost = <T extends AnyObject>({ component, ...props }: Props<T>) => {
    const div = useRef<HTMLDivElement>(null)
    const stateRef = useRef<any>(null)

    useEffect(() => {
        if (stateRef.current) stateRef.current!.$$set(props)
        else
            stateRef.current = new component({
                target: div.current!,
                props
            })
    }, [props])

    return <div ref={div} />
}

export default SvelteHost
