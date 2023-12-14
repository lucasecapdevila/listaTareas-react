import { Button, Form } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormTareas = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
          {/* <Form.Label>Ingresa tus tareas:</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Ej: tarea 1"
            minLength={3}
            maxLength={50}
          />
          <Button className="mx-2" variant="success" type="submit">Enviar</Button>
        </Form.Group>
        
        <ListaTareas />
      </Form>
    </section>
  );
};

export default FormTareas;
