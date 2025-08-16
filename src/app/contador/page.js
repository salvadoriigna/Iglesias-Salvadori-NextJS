"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Title from "@/components/Title"
import { useState } from "react"

export default function ContadorPage() {
    const [cuenta, setCuenta] = useState(0)
    const [chequear, setChequear] = useState(false)

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

    return (
        <>
            <Title title="Pagina del contador"></Title>
            <Button onClick={cambiarCuenta} text="Incrementar/decrementar"></Button>
            <Input type="checkbox" onChange={checkBoxCambio}></Input>
            <h2>{cuenta}</h2>
        </>
    )
}
