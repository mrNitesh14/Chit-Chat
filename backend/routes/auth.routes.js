import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import { sign } from "jsonwebtoken";

const router = express.Router();

router.get('/api/auth/signup', (req , res) => {
    res.send('signup',signup);
});

router.get('/api/auth/login', (req , res) => {
    res.send('login',login);
});

router.get('/api/auth/logout', (req , res) => {
    res.send('logout',logout);
});


export default router;