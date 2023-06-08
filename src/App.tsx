import './App.css'
import { Editor } from './components/Editor'

function openNewTab() {
  const winHtml = `<!DOCTYPE html>
  <html>
      <head>
          <style>
              div { height: 100vh; width: 100vw; } 
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
              camera-controls></model-viewer>
          </div>
      </body>
  </html>`;
  const winUrl = URL.createObjectURL(
    new Blob([winHtml], { type: "text/html" })
  );
  window.open(winUrl)
}

function App() {
  return (
    <>
      <h1>Editor</h1>
      <Editor />
      <button onClick={openNewTab}>Open In New Tab</button>
    </>
  )
}

export default App
