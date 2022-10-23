import React from "react"

// React Element (with jsx)
// const title = <h1>Hello React.js</h1>

// without jsx
// const title = React.createElement('h1', null, 'React')

const list = (
    <ul>
        <li>List item 1</li>
        <li>List item 2</li>
        <li>List item 3</li>
    </ul>
)



// React Component
const Title = () => <h1>Hello React Component</h1>

const Title1 = () =>  {
    return (   
        <ul>
            <li>123</li>
            <li>456</li>
            <li>789</li>
        </ul>
    )
}
    

function App() {
    return (
        <div className="App">
            <Title/>
            <Title1/>
            {list} {10+5}
        </div> )
}

export default App
