import React, { useState } from 'react'
import Linkshortner from './component/Linkshortner'
import Background from './component/Background'
import Resultshorten from './component/Resultshorten'
function App() {
    const [inputValue , setInputValue]=useState("")
    return (
        <div>
            <Linkshortner setInputValue={setInputValue}/>
            <Background/>
            <Resultshorten inputValue={inputValue}/>
        </div>
    )
}

export default App
