import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  return res.end("Full Menu");
});

route.get("/add", (req, res) => {
  return res.end("Add Dish");
});

route.get("/update", (req, res) => {
  return res.end("Update Dish");
});

route.get("/delete", (req, res) => {
  return res.end("Delete Dish");
});

export { route as menuRoute };
