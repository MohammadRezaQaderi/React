import React, {useState , useEffect} from 'react';
import style from './counter.module.css';

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
                    if(counter > 0){
                        setCounter(counter=>counter-1);
                    }
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
    
    return (
        <div className={style.container}>
            <div className={style.counter}>
                <span>{counter}</span>
            </div>
            <div className={style.buttons}>
                <button onClick={(reset)} className={style.reset}>Reset</button>
                <button onClick={()=>setStart(!isStart)} className={style.start}>{isStart ? "Pause":"Start"}</button>
                <button onClick={()=>setDownCount(!isDownCount)} className={style.downCount}>{isDownCount ? "Down Counting":"Up Counting"}</button>
            </div>
        </div>
    )
}