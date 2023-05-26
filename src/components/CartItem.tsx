import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";

import { formatCurrency } from "../utilities/formatCurrency";
import CloseIcon from "@mui/icons-material/Close";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <>
      <Card
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: "10px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: "10px" }}>
          <CardMedia
            component="img"
            sx={{ width: "125px", height: "75px" }}
            image={item.imgUrl}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                sx={{ display: "flex", alignItems: "flex-end" }}
              >
                {item.name}
                {quantity > 1 && (
                  <Typography
                    color="text.secondary"
                    sx={{ m: "2px", ml: "4px", fontSize: ".70rem" }}
                  >
                    x{quantity}
                  </Typography>
                )}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {formatCurrency(item.price)}
              </Typography>
            </CardContent>
          </Box>
        </Box>
        <Box
          sx={{
            mr: "10px",
            ml:"20px",
            display: "flex",
            flexDirection: "raw",
            alignItems: "center",
          }}
        >
          <Typography sx={{ ml: "4px", fontSize: "1.2rem" }}>
            {formatCurrency(item.price * quantity)}
          </Typography>
          <IconButton
          sx={{
            m:"5px"
          }}
            color="error"
            aria-label="Remove"
            
          >
            <CloseIcon sx={{
              borderColor: "text.secondary",
              border: 0.5,
              borderRadius: "5px",
            }} onClick={() => removeFromCart(item.id)}/>
          </IconButton>
        </Box>
      </Card>
    </>
  );
}
