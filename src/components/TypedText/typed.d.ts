import type { TypedOptions } from 'typed.js'

export type TypedOptions = TypedOptions

export interface TypedInstance {
    toggle: () => void
    stop: () => void
    start: () => void
    destroy: () => void
    reset: () => void
}

export interface TypedInstanceRef extends TypedInstance {
    rebuild: () => void
}
