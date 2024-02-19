import React, { useState } from 'react'//importing react library
//importing usestate for modifying the state of variable 

function TextForm(props) {
    const [btnstyle, setBtnstyle] = useState({//changing dark/light mode button style
        color: 'white',
        backgroundColor: 'black',
        border: '3px solid gray'
    })
    const [mystyle, setMystyle] = useState({//changing dark/light mode textform style
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid blue'

    })
    const [copybtntxt, setCopybtntxt] = useState('Copy text');//copy text button variable
    const [btntext, setBtntext] = useState("Enable Dark Mode");//changing the text inside  dark/light mode button varaiable
    //function which toggle between dark/light mode
    const togglemode = () => {
        if (mystyle.color === "black" && btnstyle.color === "white") {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid blue'
            })
            setBtntext('Enable Light Mode');
            setBtnstyle({
                color: 'black',
                backgroundColor: 'white',
                border: '3px solid gray'
            })
        }
        else {
            setMystyle({
                color: 'black',
                backgroundColor: 'white',
                border: '2px solid blue'
            })
            setBtntext('Enable Dark Mode');
            setBtnstyle({
                color: 'white',
                backgroundColor: 'black',
                border: '3px solid gray'
            })
        }
    }
    const [text, setText] = useState('')//creating text variable for userinput
    const handleUpclick = () => {//Uppercase function
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const onchangehandle = (event) => {//handling changes in textform
        setText(event.target.value)
        setCopybtntxt("Copy text");
    }
    const clearText = () => {//cleartext function
        let newtext = '';
        setText(newtext)
    }
    const handleLowclick = () => {//Lowercase function
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleTitleclick = () => {//Titlecase function
        try {
            let lowercasestring = text.toLowerCase();
            let userinputtitletext = lowercasestring.split(' ');
            let titlearray = userinputtitletext.map((word) => {
                return word[0].toUpperCase() + word.slice(1);
            })
            let titlesentence = titlearray.join(' ');
            setText(titlesentence);
        }
        catch (error) {
            alert("Please insert the text ");
        }
    }
    const handleCopyText = () => {//Copytext function
        if (copybtntxt === "Copy text") {
            let text = document.getElementById('mybox');
            text.select();
            navigator.clipboard.writeText(text.value);
            document.getSelection().removeAllRanges();
            setCopybtntxt("Copied");
        }
        else {
            let text = document.getElementById('mybox');
            text.select();
            navigator.clipboard.writeText(text.value);
            document.getSelection().removeAllRanges();
            setCopybtntxt("Copy text");
        }
    }
    const handleExtraspace = () => {// function removing extra spaces
        let newtext = text.split(/[  ]+/);
        let removedspace = newtext.join(' ');
        setText(removedspace);
    }
    //Textform content
    return (
        <>
            <div className='container  ml-1 mt-1'>
                <div className="flex flex-row">
                    <h1 className='text-4xl text-black'>{props.text}</h1>
                    <button className="p-2  text-xl h-17 w-25 mt-1 ml-10 mb-5 rounded" style={btnstyle} onClick={togglemode}>{btntext}</button>
                </div>
                <textarea style={mystyle} placeholder="Type Your Text here " value={text} id="mybox" onChange={onchangehandle} className='flex p-2.5   w-full text-sm text-gray-900 bg-gray-50 rounded-lg ' rows="8"></textarea>
                <div className="flex flex-row">
                    <button onClick={handleUpclick} className=' hover:bg-blue-900 p-2  text-xl h-17 w-25 bg-blue-700 mt-4 rounded  text-slate-50'>Upper case</button>
                    <button onClick={handleLowclick} className='  hover:bg-blue-900 p-2 ml-3 text-xl h-17 w-25 bg-blue-700 mt-4 rounded  text-slate-50'>Lower case</button>
                    <button onClick={handleTitleclick} className='  hover:bg-blue-900 p-2 ml-3 text-xl h-17 w-25 bg-blue-700 mt-4 rounded  text-slate-50'>Title case</button>
                </div>
                <div className="flex flex-row">
                    <button onClick={handleExtraspace} className='  hover:bg-blue-900 p-2  text-xl h-17 w-25 bg-blue-700 mt-4 rounded  text-slate-50'>Remove space</button>
                    <button onClick={handleCopyText} className='  hover:bg-blue-900 p-2 ml-3 text-xl h-17 w-25 bg-blue-700 mt-4 rounded  text-slate-50'>{copybtntxt}</button>
                    <button onClick={clearText} className='  hover:bg-blue-900 p-2 ml-3 text-xl h-17 w-25 bg-blue-700 mt-4 rounded  text-slate-50'>Clear text</button>
                </div>
            </div>
            <div className=' container ml-3 mt-3'>
                <p className='text-4xl'><b>Your Text Summary</b></p>
                <p className='mt-3'> No of words:{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</p>
                <p className='mt-3'>No of characters:{text.length}</p>
            </div>
        </>
    )
}
export default TextForm
