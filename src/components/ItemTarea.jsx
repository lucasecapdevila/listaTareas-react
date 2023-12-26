import { Button, ListGroupItem } from "react-bootstrap";

const ItemTarea = ({nombreTarea, borrarTarea}) => {
  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      {nombreTarea}
      <Button variant="danger" onClick={() => {borrarTarea(nombreTarea)}}>Eliminar</Button>
    </ListGroupItem>
  );
};

export default ItemTarea;