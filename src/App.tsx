import React from "react"

// with jsx
const title = <h1>Hello React.js</h1>

const list = (
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
)

// without jsx
// const title = React.createElement('h1', null, 'React')

function App() {
    return (
        <div className="App">
            {title} {list} {10+5}
        </div> )
}

export default App
