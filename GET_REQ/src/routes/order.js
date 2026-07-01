import { Router } from "express";

const route = Router();

route.get("/", (req, res) => {
  return res.end("All Order");
});

route.get("/add", (req, res) => {
  return res.end("Add Order");
});

route.get("/update", (req, res) => {
  return res.end("Update Order");
});

export { route as orderRoute };
