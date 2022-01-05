import React, {useState , useEffect} from 'react'

export default function Counter() {
    const[counter, setCounter] = useState(0);
    const[isStart, setStart] = useState(false);
    const[isDownCount , setDownCount] =useState(true);
    useEffect(()=>{
        let intervalId;
        console.log(counter);
        if(isStart){
            if(isDownCount){
                intervalId = setInterval(()=>{
                    setCounter(counter=>counter+1);
                }, 1000)  
            }
            else{
                intervalId = setInterval(()=>{
                    setCounter(counter=>counter-1);
                }, 1000)
            }
        }
        return()=> clearInterval(intervalId);
    }, [isStart,  counter])
        
    const reset = ()=>{
        console.log(isStart);
        setStart(false);
        setCounter(0);
    }

    useEffect(()=>{
        // let intervalId;
        console.log(counter);
        // if(isDownCount & !isStart){
        // intervalId = setInterval(()=>{
        //     setCounter(counter=>counter-1);
        // }, 1000)  
        // }
        // return()=> clearInterval(intervalId);
    }, [isDownCount])
    
    return (
        <div className="container">
            <div className="counter">
                <span className="count">{counter}</span>
            </div>
            <div className="buttons">
                <button onClick={(reset)} className="reset">Reset</button>
                <button onClick={()=>setStart(!isStart)} className="start">{isStart ? "Pause":"Start"}</button>
                <button onClick={()=>setDownCount(!isDownCount)} className="downCount">{isDownCount ? "Down Counting":"Up Counting"}</button>
            </div>
        </div>
    )
}