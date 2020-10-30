import express from 'express';
import "reflect-metadata";
import indexRoutes from "./routes/index";
import authRoutes from "./routes/auth";
import usersRoutes from "./routes/users";
import productsRoutes from "./routes/products";
const app = express()

app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

app.listen(9001, () => {
    console.log("Ouvindo a porta 9001 | http://localhost:9001");
})