import { useRef, useEffect } from 'react'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { oneDark } from '@codemirror/theme-one-dark'

export const Editor = () => {
    const editor = useRef()

    useEffect(() => {
        const startState = EditorState.create({
            doc: `<!DOCTYPE html>
                <html>
                    <head>
                    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
                    </head>
                    <body>
                    <model-viewer src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                    ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
                    alt="A 3D model of an astronaut"
                    ar
                    auto-rotate
                    camera-controls></model-viewer>
                    </body>
                </html>`,
            extensions: [
                    keymap.of(defaultKeymap),
                    oneDark
                ]
        })

        const view = new EditorView({ state: startState, parent: editor.current })

        return () => {
            view.destroy()
        }
    }, [])

    return <div ref={editor}></div>
}