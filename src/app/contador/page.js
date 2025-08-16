"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Title from "@/components/Title"
import { useEffect, useState } from "react"

export default function ContadorPage() {
    const [cuenta, setCuenta] = useState(0)
    const [chequear, setChequear] = useState(false)

    function incrementar() {
        setCuenta(cuenta + 1)
        if (cuenta == 20){
            setCuenta(0)
        }
    }

    function decrementar() {
        setCuenta(cuenta - 1)
    }

    function checkBoxCambio(event) {
        setChequear(event.target.checked)
    }

    return (
        <>
            <Title title="Pagina del contador"></Title>
            <Button onClick={incrementar} text="Incrementar"></Button>
            <br></br>
            <Button onClick={decrementar} text="Decretementar"></Button>
            <br></br>
            <Input type="checkbox" onChange={checkBoxCambio}></Input>
            <h2>{cuenta}</h2>
        </>
    )
}