import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText] = useState('Enter text here');
    // setText{""    }
    const handleUpClick =()=>{
        // console.log("UpperCase was Clicked..!"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick =()=>{
        // console.log("UpperCase was Clicked..!"+text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

  return (
    <>
    <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" >TextArea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppcase</button>    
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>    

    </div>
    <div className="container my-2">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
