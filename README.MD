
Full Stack E-Commerce Platform (Postgresql, Express, React, Node)

A modern, full-stack e-commerce application built with the PERN stack, featuring secure authentication, scalable cloud database infrastructure, and a clean, responsive UI.

Live Link

https://e-commerce-store-vw9d.onrender.com/

Source code

https://github.com/I-Dobiro/e-commerce-store/

Overview
This project is a fully functional e-commerce platform where users can browse products, place products for sale, and make comments on products. It demonstrates my ability to build and integrate a full-stack application with authentication, database design, and API architecture.

Tech Stack

Frontend

•	React (Vite)
•	Tailwind CSS
•	Axios

Backend

•	Node.js
•	Express.js
•	Typescript

Database

•	PostgreSQL (hosted on Neon)
•	Drizzle ORM

Authentication

•	Clerk (user authentication & session management)

Features

•	User authentication (sign up, login, protected routes)
•	Product browsing with dynamic data fetching
•	Comment creation with persistent state
•	Persistent database with relational schema
•	Optimized API with RESTful design
•	Responsive design for mobile and desktop

Key Technical Highlights

Scalable Database with Neon + Drizzle

•	Designed relational schema for users, products, and comments
•	Used Drizzle ORM for type-safe queries and migrations
•	Leveraged Neon serverless Postgres for scalability

Authentication with Clerk

•	Implemented secure, production-ready authentication
•	Protected backend routes using Clerk middleware
•	Synced Clerk user data with internal database

REST API Design

•	Built modular Express routes for products, users, and comments
•	Implemented middleware for validation and error handling
•	Structured controllers for maintainability

State Management

•	Managed cart state efficiently on frontend
•	Synced cart with backend for persistence

Project Structure

client/
  ├── components/
  ├── hooks/
  ├── lib/
  └── pages/

server/
  ├── config/
  ├── controllers/
  ├── db/
  └── routes/


Future Improvements

•	Stripe payment integration
•	Manage a shopping cart
•	Order history dashboard
•	Product search & filtering
•	Admin panel for product management
•	Unit and integration testing

What I Learned

•	Designing scalable backend architecture
•	Managing authentication in full-stack apps
•	Structuring a production-ready database schema
•	Integrating third-party services like Clerk and Neon

Acknowledgements

•	Clerk for authentication
•	Neon for serverless Postgres
•	Drizzle ORM for type-safe database access


