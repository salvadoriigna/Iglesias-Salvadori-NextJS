"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Title from "@/components/Title"
import { useState } from "react"

export default function ContadorPage() {
    const [cuenta, setCuenta] = useState(0)
    const [chequear, setChequear] = useState(false)

    function cambiarCuenta() {
        let valor = cuenta 
        if (chequear) {
            valor = cuenta + 1
        } else {
            valor = cuenta - 1
        }

        if (valor == 20) {
            valor = 0
        }
        setCuenta(valor)
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
