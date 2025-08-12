"use client"

import Button from "@/components/Button"
import Input from "@/components/Input"
import Title from "@/components/Title"

export default function ContadorPage() {
    const [cuenta, setCuenta] = useState(0)
    const [chequear, setChequear] = useState(false)

    function incrementar() {
        setCuenta(cuenta + 1)
    }

    function decrementar() {
        setCuenta(cuenta - 1)
    }

    function checkBoxCambio(event) {
        chequear(event.target.checked)
    }

    function comprobar() {
        if(chequear == true){
            incrementar()
        } else{
            decrementar()
        }
    }
    
    return (
        <>
            <Title title="Pagina del contador"></Title>
            <Button onClick={comprobar} text="Incrementar/Decretementar"></Button>
            <Input type="checkbox" onChange={checkBoxCambio}></Input>
        </>
    )
}