import { Grid } from "@mui/material";
import storeItems from "../data/items.json";
import { StoreItem } from "../components/StoreItem";

export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Grid container spacing={2} xs={12}>
        {storeItems.map(item => (
        <Grid item key={item.id}>
         <StoreItem {...item}/>
        </Grid>
        ))}
        
      </Grid>
    </>
  );
}
