import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        setText(text.toUpperCase())
        props.showAlert("Converted to Uppercase","success");
    }
    const handleOnchange=(event)=>{
        setText(event.target.value);
    }
    const handlelowClick=()=>{
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase","success");
    }
    const handleclrClick=()=>{
        setText(" ");
        props.showAlert("Text has been Cleared","success");
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been Copied","success");
    }
    const handleSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed","success");
    }
    const[text,setText]=useState("");
    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}onChange={handleOnchange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handlelowClick}>convert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleclrClick}>clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleSpaces}>Remove ExtraSpaces</button>
        </div>
        <div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>Reading Time: {0.008*text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"enter something above to preview "}</p>
        </div>
        </>
    )
}
