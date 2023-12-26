import { Button, ListGroupItem } from "react-bootstrap";

const ItemTarea = ({nombreTarea}) => {
  return (
    <ListGroupItem className="d-flex justify-content-between align-items-center">
      {nombreTarea}
      <Button variant="danger">Eliminar</Button>
    </ListGroupItem>
  );
};

export default ItemTarea;