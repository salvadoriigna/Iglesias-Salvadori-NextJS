"use client"

export default function Input() {
    function cambio(){
        console.log("Cambie")
    }
    return(
        <>
            <input type= "text" onChange={cambio}></input>
        </>
    )
}