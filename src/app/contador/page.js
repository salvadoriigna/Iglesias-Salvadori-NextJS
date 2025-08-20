"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Title from "@/components/Title"
import { useState } from "react"

export default function ContadorPage() {
    const [cuenta, setCuenta] = useState(0)
    const [chequear, setChequear] = useState(false)
    const [nombre, setNombre] = useState ("")
    const [apellido, setApellido] = useState ("")

    function cambiarCuenta() {
        let nuevoValor = cuenta 
        if (chequear) {
            nuevoValor = cuenta + 1
        } else {
            nuevoValor = cuenta - 1
        }

        if (nuevoValor == 20) {
            nuevoValor = 0
        }
        setCuenta(nuevoValor)
    }

    function checkBoxCambio(event) {
        setChequear(event.target.checked)
    }
    function ver1(event){
        setNombre(event.target.checked)
    }
    function ver2(event){
        setApellido(event.target.checked)
    }

    return (
        <>
            <Title title="Pagina del contador"></Title>
            { cuenta>= 0 ? <h3>Contador es postivo</h3>:
                            <h3>Contador es negativo</h3>}
            <Button onClick={cambiarCuenta} text="Incrementar/decrementar"></Button>
            <Input type="checkbox" onChange={checkBoxCambio}></Input>
            <h2>{cuenta}</h2>
            <h3>Nombre:</h3>
            <Input onChange={ver1}></Input>
            <h3>Apellido:</h3>
            <Input onChange={ver2}></Input>
            {nombre != "" && apellido != "" && <h2>Hola {nombre} {apellido}</h2>}
        </>
    )
}
