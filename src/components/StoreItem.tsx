import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { formatCurrency } from "../utilities/formatCurrency";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { RemoveShoppingCart } from "@mui/icons-material";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 150, width: 300 }} image={imgUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {formatCurrency(price)}
        </Typography>
      </CardContent>
      {quantity === 0 ? (
        <CardActions>
          <Button
            variant="contained"
            size="small"
            startIcon={<AddShoppingCartIcon />}
            fullWidth
            onClick={() => increaseCartQuantity(id)}
            sx={{ py:1, mb: 2 }}
          >
            Add to cart
          </Button>
        </CardActions>
      ) : (
        <>
          <Stack direction="row" spacing={1} sx={{ m: 2 }}>
            <Button variant="outlined" onClick={() => increaseCartQuantity(id)}>
              <AddIcon color="primary" fontSize="small" />
            </Button>
            <Item sx={{ px: 4 }}>{quantity}</Item>

            <Button
              variant="outlined"
              color="error"
              onClick={() => decreaseCartQuantity(id)}
            >
              <RemoveIcon color="error" fontSize="small" />
            </Button>
          </Stack>

          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              size="small"
              startIcon={<RemoveShoppingCart />}
              color="error"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </CardActions>
        </>
      )}
    </Card>
  );
}
