import express from 'express';
import { ENV } from './config/env';
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';
import commentRoutes from './routes/commentRoutes';
import path from 'path';


const app = express();

app.use(cors({ origin: ENV.CLIENT_URL, credentials: true })); // allows requests from the React frontend and includes cookies for auth
app.use(express.json());
app.use(clerkMiddleware()); // auth object will be available on req.auth
app.use(express.urlencoded({ extended: true })); // parses data from HTML forms

app.get("/api/health", (req, res) => {
  res.json({
    message: "Welcome to The E-Commerce-Store - Powered by PostgreSQL, Drizzle ORM & Clerk Auth",
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

if(ENV.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}


app.listen(ENV.PORT, () => console.log("Server is running on port:", ENV.PORT));