import express from 'express';
import { ENV } from './config/env';
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import commentRoutes from './routes/commentRoutes';


const app = express();

app.use(cors({ origin: ENV.CLIENT_URL, credentials: true })); // allows requests from the React frontend and includes cookies for auth
app.use(clerkMiddleware()); // auth object will be available on req.auth
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parses data from HTML forms

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Productify API - Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

app.use("/api/users", userRoutes); // user routes
app.use("/api/products", productRoutes); // product routes
app.use("/api/comments", commentRoutes); // comment routes



app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));