import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import CloseIcon from "@mui/icons-material/Close";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div>
      <Drawer anchor="right" open={isOpen} onClose={closeCart}>
        <Box
          sx={{
            width: "auto",
            p: 4,
            role: "presentation",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                mr: "50px",
              }}
            >
              Your Cart
            </Typography>
            <IconButton
              sx={{
                borderColor: "text.secondary",
                ml: "50px",
              }}
            >
              <CloseIcon onClick={() => closeCart()} />
            </IconButton>
          </Box>
          <hr />
          <Stack spacing={2}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                mt: "30px",
              }}
            >
              <Typography variant="h5">
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Drawer>

      {/* <Button onClick={()=> setIsDrawerOpen(true)}>Click me</Button> */}
    </div>
  );
}
