import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }
  
  const handleLoClick = () =>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleCopy= () =>{
    var text = document.getElementById("Mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Copied!", "success");
  }

  const handleClearClick = () =>{
    console.log("Cleared" + text);
    let newText = ''
    setText(newText)
    props.showAlert("Text Cleared!", "success");
  }

  const handleOnChange = (event) =>{ 
    console.log('OnChange');
    setText(event.target.value);
  }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1 className='mb-2'>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color:props.mode === 'dark'?'white':'#042743'}} id="Mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleUpClick}> Convert to Uppercase </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleLoClick}> Convert to Lowercase </button>
        <button disabled={text.length===0} className="btn btn-success mx-1 my-1"  onClick={handleCopy}> Copy Text </button>
        <button disabled={text.length===0} className= "btn btn-danger mx-1 my-1" onClick={handleClearClick}> Clear Text </button>
    </div> 
    <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h2><b>Your Text Summary :-</b></h2>
      <p> There are <u>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words</u> & <u>{text.length} Characters</u></p>
    </div>
    </>
  )
}
