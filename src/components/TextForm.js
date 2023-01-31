import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleFind = (event) => {      
        setFind(event.target.value);
    }

    const handleReplace = (event) => {
        setReplace(event.target.value);
    }

    const handleUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleClear = () => {
        let newText =''
        setText(newText)
    }

    const Replace = () => {
        if(text.includes(find))
        setText(text.replace(' '+find+' ',' '+replace+' '))
        else 
        alert('No Such Word Found!')
    }
    
    const [text, setText] = useState('Enter text here')
    const [find, setFind] = useState(0)
    const [replace, setReplace] = useState(0)

  return (
    <>
    <div className="container">
        <div className="mb-3" style={{color:props.mode==='light'?'black':'white'}}>
        <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>Enter Text Here</h1></label>
        <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8" value={text} style={{color:props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'black'}}/>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
        <br/><br/><h3 style={{color:props.mode==='light'?'black':'white'}}>Find Word</h3>
        <input type="text" className="form-control" onChange={handleFind} placeholder="Enter word to find" style={{color:props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'black'}} /> 
        <h3 style={{color:props.mode==='light'?'black':'white'}}>Replace Word</h3> <input type="text" className="form-control" onChange={handleReplace} placeholder="Enter word to replace" style={{color:props.mode==='light'?'black':'white', backgroundColor:props.mode==='light'?'white':'black'}}/>
        <button className='btn btn-primary' onClick={Replace}>Replace Word</button>
        <br/><br/>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Text Summary</h2>
        <p>Your text has {text.split(' ').length} words and {text.length} characters.</p>
        <p>{text.split(' ').length*0.008} total number of minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
        </div>
    </div>
    </>
  )
}
