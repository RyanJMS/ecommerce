import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running Shoes",
    price: "$40",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQppRsMF_kMTm6CuvbAU_dbbqI4Fkwc_TmDU8LjO3PUE8eI4gESBL07kfdFCm5l9lMgdO8-TAnrjJmJjMb2MlfLG0vwf-TL9N3eDnTbESgiU8BiJkXx1_OnTg&usqp=CAE",
  },
  {
    id: 2,
    name: "Macbook>",
    description: "Apple Macbook",
    price: "$500",
    image:
      "https://www.thesource.ca/medias/20201112120946-108092084-A.jpg-mediaConversion-640-x-480-mediaConversion-400-x-300-0?context=bWFzdGVyfGltYWdlc3w0MjQzOHxpbWFnZS9qcGVnfGltYWdlcy9oYjAvaDJlLzkzMTkwMTgxMDI4MTQuanBnfDNlZjAxNDZlODA3NDlmNTVhYTdjNDAzMTU5ZGI2OWMwNzQyYTRhYjg3YTQ4MjFjYWZlM2Y5OTAzMjNmNmU4Mzg",
  },
];

const Products = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
