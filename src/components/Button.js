"use client"
import clsx from "clsx"

export default function Button(props){
    

    return(
        <>
            <button className ={
                clsx(
                {
                    
                    
                }
                )
            }
             onClick={props.onClick}>{props.text}</button>
        </>
    )
}