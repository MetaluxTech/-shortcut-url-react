import React, {useEffect, useState} from 'react'
import './linkshortner.css' 
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaClone } from 'react-icons/fa';
function Resultshorten({inputValue}) {
    const [shortenLink , setShortenLink] = useState('');
    const [copied , setCopied] = useState(false)
    const [loading , setLoading] = useState(false)
    const [err , setErr] =useState(false)
    
    const fetchData = async ()=>{
        try {
            setLoading(true)
            await fetch('https://api.urlo.in/api/short-url'
            ,{
                method: 'POST',
                body: JSON.stringify({ "originalUrl": inputValue})
                ,headers: { 'Content-type': 'application/json; charset=UTF-8', },
                })
                .then((response) => response.json())
                .then((data) => 
                {  
                    setShortenLink(data['data']['shortUrl']); //here is must set in short link text iput 
                })
                
        } catch (error) {
            setErr(error)
        } finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(inputValue.length){
            fetchData()
        }
    },[inputValue])

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setCopied(false)
        },2000)
        return ()=>clearTimeout(timer)
    },[copied]);

    if(loading){
        return <p className='noData'>Loading ...</p>
    }
    if(err){
        return <p className='noData'>Something Went Wrong</p>
    }
    return (
        <>
        {shortenLink && (
            <div className='link_shortened'>
                <h2 className='link_shortened_head'>the url shortened</h2>
                <div className='link_shortened_content'>
                    <p className='link_shorten_text'>{shortenLink}</p>
                    <CopyToClipboard 
                        text={shortenLink}
                        onCopy={()=>{setCopied(true)}}>
                    <button  className={copied ? "copied" : ''} type="button"><FaClone className='clone_icon'/></button>
                    </CopyToClipboard>
                </div>
            </div>
        )}
        </>
    
    )
}

export default Resultshorten
