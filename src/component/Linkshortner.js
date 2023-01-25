import React ,{useState} from 'react'

import { SiConvertio } from 'react-icons/si';
import './linkshortner.css' 

function Linkshortner({setInputValue}) {
    const [value, setValue] = useState('');
    const handleClick= ()=>{
        setInputValue(value);
        setValue("")
    }

    return (
        <>
            <div className='link'>
                <h1 className='link_head'>url <span className='shortener'>shortener</span> </h1>
                {/* Enter The Link */}
                <div className='link_long'>
                    <input 
                    className='link_input' 
                    type='text' 
                    placeholder='Enter The Url'
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}/>
                    <button onClick={handleClick} className='link_button' type="button"><SiConvertio className='convert_icon'/></button>
                </div>
                
            </div>
        </>
    )
}

export default Linkshortner
