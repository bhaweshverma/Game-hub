import { Text } from "@chakra-ui/react";

interface CartInfoReduxProps {
  cartSize: number;
}

const CartInfoRedux = ({ cartSize }: CartInfoReduxProps) => {
  return <Text>Cart items - {cartSize}</Text>;
};

export default CartInfoRedux;
