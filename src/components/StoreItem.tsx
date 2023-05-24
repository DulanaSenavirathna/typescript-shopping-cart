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
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
  }));

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const quantity = 0;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={imgUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {formatCurrency(price)}
        </Typography>
      </CardContent>
      <CardActions>
        {quantity === 0 ? (
          <Button
            variant="contained"
            size="small"
            startIcon={<AddShoppingCartIcon />}
          >
            Add to cart
          </Button>
        ) : null }
      
      </CardActions>
      <Stack direction="row" spacing={1} sx={{m:2}}>
        <Item><AddIcon color="primary" fontSize="small"/></Item>
        <Item>{quantity}</Item>
        <Item><RemoveIcon color="error" fontSize="small"/></Item>
      </Stack>
    </Card>
  );
}
