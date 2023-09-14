import React,{useState} from 'react'
export default function TextForm(props) {
    const handleupclick= ()=>{
        let newtext=text.toUpperCase();
      setText(newtext)
      props.showAlert("Converted to uppercase","success")
    }
    const handlelowclick= ()=>{
        let newtext=text.toLowerCase();
      setText(newtext)
      props.showAlert("Converted to lowercase","success")
    }
    const handleclearclick= ()=>{
        let newtext="";
      setText(newtext)
      props.showAlert("Text removed","success")
    }
    const handleonchange= (event)=>{
      setText(event.target.value);
     
    }
    const handleCopy=()=>{
      var text =document.getElementById("myBox");
      text.select()
      navigator.clipboard.writeText(text.value)
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied to clipboard!","success")
    }
    const handleExtraspace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!","success")
    }
    const [text, setText] = useState('');
  return (
    <>

    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick} >Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handlelowclick} >Convert to Lowecase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleclearclick} >Clear text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleCopy} >Copy text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleExtraspace} >Handle ExtraSpace</button>

    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.08*text.split(" ").filter((element)=>{return element.length!==0}).length}minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
