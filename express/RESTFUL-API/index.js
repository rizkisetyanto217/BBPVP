const express = require("express");
const app = express();
const productRoutes = require("./routes/products");

app.use(express.json()); // Middleware parsing JSON
app.use("/products", productRoutes); // Prefix endpoint

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server RESTful berjalan di http://localhost:${PORT}`);
});
