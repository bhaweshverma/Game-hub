import { Button, List, ListItem } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addItem, clearCart } from "../utils/CartSlice";

interface CartItemsListReduxProps {
  items: string[];
}

const CartItemsListRedux = ({ items }: CartItemsListReduxProps) => {
  //const items: string[] = ["A", "B", "C", "D"];

  const dispatch = useDispatch();

  const handleAddItem = (item: string) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <List>
      <Button bgColor="red" onClick={handleClearCart}>
        Clear Cart
      </Button>
      {items.map((val, index) => (
        <ListItem key={index}>
          <Button onClick={() => handleAddItem(val)}>Add {val}</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default CartItemsListRedux;
