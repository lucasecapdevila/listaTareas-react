import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  //  Hooks
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  //  Funciones
  const handleSubmit = (e) => {
    e.preventDefault();

    //  No puedo hacer tareas.push(asd), así que uso una alternativa:
    setTareas([...tareas, tarea])

    //  Limpio el formulario
    setTarea('')
  }


  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Ingresa tus tareas:</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
            onChange={(e)=> setTarea(e.target.value)}  //  con e.target.value accedo al valor del input
            value={tarea}
          />
          <Button className="mx-2" variant="success" type="submit">Enviar</Button>
        </Form.Group>
        
        <ListaTareas tareas={tareas} />
      </Form>
    </section>
  );
};

export default FormTareas;
