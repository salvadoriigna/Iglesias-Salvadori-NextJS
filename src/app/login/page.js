"use client"

import Button from "@/components/Button"
import Form from "@/components/Form"


export default function Login() {

    function imprimirChau() {
        console.log("Chau")
    }
    
    function imprimirHola() {
        console.log("Hola")
    }

    function cambio1() {
        console.log("Cambio1")
    }

    function cambio2() {
        console.log("Cambio2")
    }

    function cambio3() {
        console.log("Cambio3")
    }

    return(
        <>
            <h1>Esta es la pagina del Login</h1>
            <Form text= {"Formulario1"} onClick= {imprimirChau} onChange1={cambio1} onChange2={cambio2} onChange3={cambio3} type={"checkbox"}></Form>
            <Form text= {"Formulario2"} onClick= {imprimirHola} onChange1={cambio1} onChange2={cambio2} onChange3={cambio3} type={"checkbox"}></Form>
            <Button></Button>      
        </>
    )
}