import { ListGroupItem } from "react-bootstrap";

const ItemTarea = ({nombreTarea}) => {
  return (
    <ListGroupItem>{nombreTarea}</ListGroupItem>
  );
};

export default ItemTarea;