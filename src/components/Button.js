"use client"

export default function Button({texto}){
    
    function imprimir() {
        console.log("Hola")
    }

    return(
        <>
            <button onClick={imprimir()}>{texto}</button>
        </>
    )
}