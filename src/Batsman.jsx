import { useState } from "react"
export default function Batsman (){
    const[runs, setRuns] = useState(0);

    const handleSingles =()=>{
        const updatedRuns = runs +1;
        setRuns(updatedRuns);
    }

    const handleSix=()=>{
        const updatedRuns = runs+6;
        setRuns(updatedRuns);
    }

    const handleFour=()=>{
        const updatedRuns = runs+4;
        setRuns(updatedRuns);
    }

    const handleDouble=()=>{
        const updatedRuns = runs+2;
        setRuns(updatedRuns)
    }


    const batsmanStyle = {
        border:'2px solid yellow',
        margin:'10px'
    }
    const btnStyle = {

        padding:'5px',
        margin:'5px'
    }
    return(
        <div style={batsmanStyle}>
            <h2>Name: Bangu Batsman</h2>
            {
                runs>=50 && <p>Half century!!! Congratulations 🥳🙌</p>
            }
            {
                runs>=100 && <p>Century!!! Congratulations 🥳🙌</p>
            }
            <h1>Score: {runs} </h1>
            <div style={btnStyle}>
            <button style={btnStyle} onClick={handleSingles}>Single</button>
            <button style={btnStyle} onClick={handleDouble}>Double</button>
            <button style={btnStyle} onClick={handleSix}>Six</button>
            <button style={btnStyle}onClick={handleFour}>Four</button>
            </div>
        </div>
    )
}