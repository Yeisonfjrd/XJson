import React from 'react'

declare global {
namespace JSX {
    // This interface extends React.ReactElement for custom JSX elements.
    // This interface is kept to allow extensions for custom JSX elements in the future.
    interface Element extends React.ReactElement<unknown, HTMLElement> {}
    interface IntrinsicElements {
        [elemName: string]: unknown; // Using 'unknown' for flexibility with custom elements
    }
}
}

// Common React component type declarations
declare type ReactNode = React.ReactNode
declare type ReactElement = React.ReactElement
declare type FC<P = Record<string, never>> = React.FC<P>
declare type PropsWithChildren<P = Record<string, never>> = React.PropsWithChildren<P>

// Ensure this is treated as a module
export {}

