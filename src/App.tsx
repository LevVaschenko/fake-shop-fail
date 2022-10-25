// import React from "react"

// // React Element (with jsx)
// // const title = <h1>Hello React.js</h1>

// // without jsx
// // const title = React.createElement('h1', null, 'React')

// const list = (
//     <ul>
//         <li>List item 1</li>
//         <li>List item 2</li>
//         <li>List item 3</li>
//     </ul>
// )



// // React Component

// type TitleProps = {
//     title: string
//     text?: string // (если ставиться ? - значит это не обязательный параметр)
//     num: number;
// }
// const Title = (props: TitleProps) => {
//     console.log(props)
//     return (
//         <>
//         <h1>
//             {props.text} {props.title}
//         </h1>
//         <div>{props.num}</div>
//         </>
//     )
// }
    

// const Title1 = () =>  {
//     let a = 0;
//     return (
// /* (или можно написать React.Fragment) */ <> 
//            <ul>
//                 <li>{a + 1} 123</li>
//                 <li>456</li>
//                 <li>789</li>
//             </ul>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi possimus error blanditiis repellendus impedit laborum beatae dignissimos doloribus excepturi fugit soluta praesentium architecto, quo ducimus perspiciatis veritatis corrupti sint voluptatibus.</p>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi possimus error blanditiis repellendus impedit laborum beatae dignissimos doloribus excepturi fugit soluta praesentium architecto, quo ducimus perspiciatis veritatis corrupti sint voluptatibus.</p>
//         </>
//     )
// }
    

// function App() {
//     return (
//         <div className="App">
//             <Title title="App.js" text = "Hi" num={10}/>
//             <Title title="Test.js" text = "Hello" num={20}/>
//             <Title1 />
//             {list}
//         </div> )
// }

// export default App




/* здесь я прописал tsrafce и можно по быстрому написать то, что снизу */ import React from 'react'

type Props = {}

export const App = (props: Props) => {
  return (
    <div>App</div>
  )
}

// export default App