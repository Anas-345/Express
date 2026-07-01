import { Router } from "express";

const route = Router();

route.get("/login", (req, res) => {
  return res.end("Login");
});

route.get("/register", (req, res) => {
  return res.end("Register");
});

route.get("/forgot-password", (req, res) => {
  return res.end("Forgot Password");
});

export { route as authRoute };
