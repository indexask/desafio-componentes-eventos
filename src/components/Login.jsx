import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState } from 'react'

const Formulario = ({setResult}) => {
    

    const [correo, setCorreo] = useState('')
    const [pw, setPw] = useState('')

    

    const validarFormulario = (e) => {

        e.preventDefault();
        if(correo === '' || pw === '') {
            setResult({ isShown: true, msg : 'Debe completar los campos', variant:'warning'});
            return
        }

        if (correo === 'matias@gmail.com' && pw === '1234') {
            setResult({ isShown: true, msg: 'Datos ingresados Correctamente', variant: 'success' });
            return;

        } else {
            setResult({ isShown: true, msg: 'datos incorrectos', variant: 'danger' });
        }
    }


    const handleOnChange = (e) => {


        switch (e.target.name) {
            case 'correo':
                setCorreo(e.target.value);
                break;
            case 'pw':
                setPw(e.target.value);
                break;
            default:
                console.log("Formulario -> handleOnChange : Switch don't have any case");         
        }
    };

    
    return (
        <Form onSubmit={validarFormulario} className='mb-4'>

            <Form.Group className="mb-3">
                <Form.Label>Ingresar Correo</Form.Label>
                <Form.Control
                    onChange={(e) => {
                        handleOnChange(e);
                    }}
                    type="email"
                    placeholder="Example@Correo"
                    value={correo}
                    name='correo'
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Ingresar Contraseña</Form.Label>
                <Form.Control
                    onChange={(e) => {
                        handleOnChange(e);
                    }}
                    type="password"
                    placeholder="Contraseña"
                    value={pw}
                    name='pw'/>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={pw === '' && correo === '' ? true : false}>
                Ingresar
            </Button>
        </Form>
    );

}

export default Formulario