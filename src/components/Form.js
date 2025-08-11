"use client"

import Button from "./Button";
import Input from "./Input";
import Title from "./Title";

export default function Form(props){
    return(
        <>
            <Title text={props.text}></Title>
            <h3>Usuario:</h3>
            <Input onChange= {props.onChange1} type={"text"}></Input>
            <h3>Email:</h3>
            <Input onChange={props.onChange2} type={"text"}></Input>
            <h3>Contraseña:</h3>
            <Input onChange={props.onChange3} type={"text"}></Input>
            <Input type={props.type}></Input>
            <Button text={props.text} onClick={props.onClick}></Button>
        </>
    )
}   