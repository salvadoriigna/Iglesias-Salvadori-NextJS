"use client"

import Button from "@/components/Button"
import Form from "@/components/Form"
import Input from "@/components/Input"
import Title from "@/components/Title"


export default function LoginPage() {

    function imprimirChau() {
        console.log("Hola")
    }

    function imprimirHola() {
        console.log("Chau")    
    }

    function cambio1() {
        console.log("Cambio1")
    }

    function cambio2() {
        console.log("Cambio2")
    }

    function cambio3() {
    }

    return(
        <>
            <h1>Esta es la pagina del Login</h1>
            <Form text={"Formulario1"} onClick={imprimirChau}></Form>
            <Input></Input>
            <Title></Title>
            <Button></Button>
            
        </>
    )
}