import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client"

function PasswordGenerator(){

    const [Password, setPassword]=useState("ASDFGHKLPOIUYTREWQ");
    const [length, setLength]=useState(10);
    const [numberChanged, setnumberChanged]=useState(false);
    const [charChanged, setcharChanged]= useState(false);

    function generatepassword(){;
        let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberChanged)
            str+="0123456789"
        if(charChanged)
            str+="+-)(*&^%$#@!{}[]"

        let pass="";
        for(let i=0;i<length;i++){
            pass+=str[Math.floor(Math.random()*str.length)]
        }

        setPassword(pass);
    };

    useEffect(()=>{
        generatepassword();
    },[length, numberChanged, charChanged]);

    // generatepassword();



    
    return (
        <>
        <h1>{Password}</h1>
        <div className="second">
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)} ></input>
            <label>Length{length}</label>

            <input id="include-number" type="checkbox"  defaultChecked={numberChanged}  onChange={()=>setnumberChanged(!numberChanged)}></input>
            <label htmlFor="include-number">Number</label>

            <input id="include-character" type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>
            <label htmlFor="include-character">Character</label>
        </div> 
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);