import express from "express";
import sequelize from "./databaseconnection/database-connection.js";
import cors from "cors";
import productRouter from "./routes/productroute.js"
import categoryRouter from "./routes/categoryroutes.js"
import userRouter from "./routes/userroutes.js";
import dotenv from 'dotenv';
dotenv.config();
const app = express();





app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*", // Replace with your frontend's URL
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);


app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/uploads", express.static('uploads'))

sequelize.sync({ force: false });

app.use('/users', userRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);

// sequelize.sync({ force: false });


app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
