import { Router } from "express";
import { products } from "../../data.js";

const router = Router();

/*
1. Search via name Done
2, Filter by Categories - Done
3. Filter by availibilty - Done
4. Filter by price range - Done
*/

router.get("/products", (req, res) => {
  const { page, limit, name, category, availability, price } = req.query;

  if (page <= 0) page = 1;
  if (limit <= 0) limit = 5;

  let copArr = [...products];

  if (name) copArr = copArr.filter((d) => d.name.toLowerCase().includes(name));

  if (category) copArr = copArr.filter((d) => d.category.includes(category));

  if (availability) {
    copArr =
      availability === "true"
        ? copArr.filter((d) => d.isAvailable)
        : copArr.filter((d) => !d.isAvailable);
  }

  if (price) {
    const splitPrice = price.split("-");
    const start = splitPrice[0];
    const end = splitPrice[1];

    copArr = copArr.filter((d) => d.price >= start && d.price <= end);
  }

  const start = (page - 1) * limit;
  const data = copArr.splice(start, limit * page);

  const hasNext = page * limit < products.length;
  const hasPrev = products.length && page * limit - limit > 0;

  const paginationData = {
    total: products.length,
    page,
    limit,
    hasNext,
    hasPrev,
  };

  res
    .status(200)
    .json({ data: { products: data, pagination: paginationData } });
});

export { router as authRoutes };
