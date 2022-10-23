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
    let a = 0;
    return (
        <React.Fragment>
           <ul>
                <li>{a + 1} 123</li>
                <li>456</li>
                <li>789</li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi possimus error blanditiis repellendus impedit laborum beatae dignissimos doloribus excepturi fugit soluta praesentium architecto, quo ducimus perspiciatis veritatis corrupti sint voluptatibus.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi possimus error blanditiis repellendus impedit laborum beatae dignissimos doloribus excepturi fugit soluta praesentium architecto, quo ducimus perspiciatis veritatis corrupti sint voluptatibus.</p>
        </React.Fragment>
    )
}
    

function App() {
    return (
        <div className="App">
            <Title/>
            <Title1/>
            {list}
        </div> )
}

export default App
