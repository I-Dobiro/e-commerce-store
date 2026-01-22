import express from 'express';
import { ENV } from './config/env';
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors';


const app = express();

app.use(cors({ origin: ENV.CLIENT_URL })); // Adjust the origin as needed
app.use(clerkMiddleware()); // auth object will be available on req.auth
app.use(express.json()); // parses incoming requests with JSON payloads
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


app.listen(ENV.PORT, () => console.log("Server is running on port:",ENV.PORT));