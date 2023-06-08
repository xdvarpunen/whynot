import { useRef, useEffect } from 'react'
import { EditorState } from '@codemirror/state'
import { EditorView, keymap } from '@codemirror/view'
import { defaultKeymap } from '@codemirror/commands'
import { oneDark } from '@codemirror/theme-one-dark'

export const Editor = () => {
    const editor = useRef(null)

    useEffect(() => {
        const startState = EditorState.create({
            doc: `<!DOCTYPE html>
                <html>
                    <head>
                        <style>
                            div { height: 50vh; width: 50vw; } 
                            model-viewer { height: inherit; width: inherit; }
                        </style>
                        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
                    </head>
                    <body>
                        <div>
                            <model-viewer src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
                            ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
                            alt="A 3D model of an astronaut"
                            ar
                            auto-rotate
                            camera-controls>
                                <button slot="ar-button" style="background-color: white; border-radius: 4px; border: none; position: absolute; top: 16px; right: 16px; ">
                                    👋 Activate AR
                                </button>
                            </model-viewer>
                        </div>
                    </body>
                </html>`,
            extensions: [
                    keymap.of(defaultKeymap),
                    oneDark
                ]
        })

        const view = new EditorView({ state: startState, parent: editor.current as any })

        return () => {
            view.destroy()
        }
    }, [])

    return <div ref={editor}></div>
}