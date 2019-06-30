import { h, app } from "hyperapp";
import marked from 'marked';
import "../sass/style.sass";
import hljs from 'highlightjs';
import 'highlight.js/styles/monokai.css'

marked.setOptions({
    breaks: true,
    highlight: function (code, lang) {
        return hljs.highlightAuto(code, lang).value
    }
})

const state = {
    'output': ''
}

const actions = {
    setOutput: (input) => state => ({ output: marked(input) })
}

const view = (state, actions) => (
    <main>
        <textarea id='editor' oninput={e => actions.setOutput(document.getElementById('editor').value)} />
        <div id='preview' innerHTML={state.output}></div>
    </main>
)

export const main = app(state, actions, view, document.body)