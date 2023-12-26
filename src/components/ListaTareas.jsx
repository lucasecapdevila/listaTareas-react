import { ListGroup } from "react-bootstrap"
import ItemTarea from "./ItemTarea";

const ListaTareas = ({tareas}) => {
  return (
    <ListGroup>
      {
        tareas.map(() => <ItemTarea/>)
      }
      
    </ListGroup>
  );
};

export default ListaTareas;