# 🧵 TexFlow CRM

A full-stack CRM platform built for textile businesses to centralize customer, product, inventory, and order management through RESTful APIs, with JWT-based authentication, role-based access control, sales analytics, and PDF invoice generation.

🌐 **Live Demo:** https://texflow-crm-frontend.onrender.com

🔗 **Backend API:** https://texflow-crm.onrender.com

---

## ✨ Features

### 🔐 Authentication & Authorization

* User Registration and Login
* JWT-based authentication
* Secure password hashing using bcryptjs
* Role-Based Access Control (RBAC)
* Supports Admin and Sales Executive roles
* Protected routes and role-specific access

### 👥 Customer Management

* Add new customers
* Update customer information
* Delete customers
* Search customers
* Persistent customer data using MongoDB

### 📦 Product Management

* Add products
* Update product information
* Delete products
* Track product stock
* Persistent product data using MongoDB

### 🛒 Order Management

* Create orders
* Edit orders
* Delete orders
* Manage order details
* Automatic inventory updates based on orders

### 📊 Dashboard

* Total Customers
* Total Products
* Total Orders
* Revenue
* Inventory Value
* Pending Orders
* Low Stock Products

### 📈 Sales Analytics

* Monthly revenue visualization
* Top-selling product analysis
* Business performance statistics
* Interactive charts using Recharts

### 🧾 Invoice Generation

* Dynamic PDF invoice generation
* Customer and order details
* Product and pricing information
* GST calculation
* PDF download
* Invoice printing

---

# 🏗️ Application Architecture

TexFlow CRM follows a client-server architecture where the React frontend communicates with a Node.js/Express backend through RESTful APIs.

```text
┌──────────────────────────────┐
│        React Frontend        │
│                              │
│ React Router                 │
│ Axios                        │
│ Recharts                     │
│ jsPDF                        │
└──────────────┬───────────────┘
               │
               │ HTTP / REST APIs
               ▼
┌──────────────────────────────┐
│      Node.js + Express       │
│                              │
│ Routes                       │
│ Controllers                  │
│ Middleware                   │
│ JWT Authentication           │
│ Role-Based Authorization     │
│ Business Logic               │
└──────────────┬───────────────┘
               │
               │ Mongoose
               ▼
┌──────────────────────────────┐
│        MongoDB Atlas         │
│                              │
│ Users                        │
│ Customers                    │
│ Products                     │
│ Orders                       │
│ Inventory                    │
└──────────────────────────────┘
```

---

# 🔄 Business Workflow

The main business workflow connects customers, orders, products, inventory, invoices, and analytics.

```text
Customer
   │
   ▼
Create Order
   │
   ├──────────────► Products
   │
   ├──────────────► Inventory Update
   │
   └──────────────► Invoice
                         │
                         ▼
                    PDF Invoice

Orders + Products + Inventory
              │
              ▼
       Sales Analytics
              │
              ▼
          Dashboard
```

This allows business operations to be managed through a single centralized application instead of maintaining disconnected records and workflows.

---

# 🔧 Core Functionality

## RESTful API Architecture

The backend exposes RESTful APIs for communication between the frontend and backend.

Example endpoints:

```text
GET    /api/customers
POST   /api/customers
PUT    /api/customers/:id
DELETE /api/customers/:id

GET    /api/products
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id

GET    /api/orders
POST   /api/orders
PUT    /api/orders/:id
DELETE /api/orders/:id
```

The APIs implement CRUD operations for the core business entities and use MongoDB for persistent data storage.

---

# 🔐 Authentication & Role-Based Access Control

TexFlow CRM uses JWT-based authentication to identify authenticated users and Role-Based Access Control to restrict role-specific operations.

### Authentication Flow

```text
User
 │
 │ Email + Password
 ▼
Login API
 │
 ▼
Backend
 │
 ├── Find User
 │
 ├── Verify Password using bcryptjs
 │
 └── Generate JWT
 │
 ▼
Frontend
 │
 └── Sends JWT with protected API requests
 │
 ▼
Backend JWT Middleware
 │
 └── Verify Token
```

### Role-Based Access

The application supports two roles:

* **Admin**
* **Sales Executive**

Role-based access is used to control access to application pages and operations.

For example:

```text
                 Admin       Sales Executive
Dashboard          ✓                ✓
Customers          ✓                ✓
Products           ✓                ✓
Orders             ✓                ✓
Inventory          ✓              Restricted
Admin Operations    ✓                ✗
```

The frontend uses the authenticated user's role to control page and action visibility, while the backend independently validates authorization for protected API operations.

---

# 📊 Analytics Dashboard

The dashboard provides a visual overview of the business using data retrieved from the backend.

Key metrics include:

* Total customers
* Total products
* Total orders
* Revenue
* Inventory value
* Pending orders
* Low-stock products

Sales reports include:

* Monthly revenue
* Top-selling products
* Business statistics

Interactive charts are implemented using **Recharts**.

```text
MongoDB
   │
   ▼
Backend API
   │
   ▼
React Frontend
   │
   ▼
Recharts
   │
   ▼
Interactive Dashboard
```

---

# 🧾 PDF Invoice Generation

TexFlow CRM uses **jsPDF** to dynamically generate PDF invoices from order and customer data.

The invoice can contain:

* Customer information
* Order information
* Product details
* Quantity
* Pricing
* GST calculation
* Total amount

The generated invoice can be downloaded or printed directly from the application.

```text
Order Data
    │
    ▼
Invoice Generation Logic
    │
    ▼
jsPDF
    │
    ▼
PDF Invoice
    │
    ├── Download
    └── Print
```

---

# 🛡️ Security

The application implements several security mechanisms:

* Password hashing using bcryptjs
* JWT-based authentication
* Protected API routes
* Role-based authorization
* Environment variables for sensitive configuration
* Backend-side authorization for protected operations

Sensitive values such as the MongoDB connection string and JWT secret are stored using environment variables rather than being hardcoded in the source code.

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router
* Axios
* Recharts
* jsPDF
* CSS

## Backend

* Node.js
* Express.js
* JWT
* bcryptjs

## Database

* MongoDB
* MongoDB Atlas
* Mongoose

## Deployment

* Render Static Site — Frontend
* Render Web Service — Backend
* MongoDB Atlas — Database

---

# 📁 Project Structure

```text
TexFlow-CRM
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── layouts
│   │   └── styles
│   │
│   └── public
│
└── README.md
```

### Backend Structure

```text
backend
│
├── controllers
│   ├── authController
│   ├── customerController
│   ├── productController
│   └── orderController
│
├── middleware
│   ├── authentication
│   └── authorization
│
├── models
│   ├── User
│   ├── Customer
│   ├── Product
│   └── Order
│
├── routes
│   ├── authRoutes
│   ├── customerRoutes
│   ├── productRoutes
│   └── orderRoutes
│
├── config
│
└── server.js
```

---

# 🌐 Deployment

The application is deployed using **Render** and **MongoDB Atlas**.

```text
                    Internet
                       │
              ┌────────┴────────┐
              ▼                 ▼
     Render Static Site    Render Web Service
        React Frontend       Node + Express
              │                 │
              │                 │
              └───────┬─────────┘
                      │
                      ▼
                MongoDB Atlas
```

### Deployment Components

**Frontend**

React application deployed as a Render Static Site.

**Backend**

Node.js and Express REST API deployed as a Render Web Service.

**Database**

MongoDB database hosted on MongoDB Atlas.

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Slayer04git/TexFlow-CRM.git
```

## 2. Navigate to the Project

```bash
cd TexFlow-CRM
```

## 3. Install Backend Dependencies

```bash
cd backend
npm install
```

## 4. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the `backend` directory:

```env
PORT=8000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

Replace the placeholder values with your own configuration.

Do not commit the `.env` file to GitHub.

---

# ▶️ Running the Application

## Start Backend

From the `backend` directory:

```bash
npm run dev
```

The backend will start on the configured port.

## Start Frontend

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
npm run dev
```

The React development server will start locally.

---

# 📡 API Communication

The frontend communicates with the backend using HTTP requests through Axios.

Example:

```text
React Component
      │
      ▼
     Axios
      │
      ▼
REST API Endpoint
      │
      ▼
Express Route
      │
      ▼
Controller
      │
      ▼
Mongoose
      │
      ▼
MongoDB
      │
      ▼
JSON Response
      │
      ▼
React UI
```

---

# 🎯 Project Goals

TexFlow CRM was developed to demonstrate the implementation of a real-world full-stack business application involving:

* RESTful API design
* CRUD operations
* Database modeling
* Authentication
* Authorization
* Role-based workflows
* Business logic
* Data visualization
* PDF generation
* Cloud deployment

The project focuses on connecting multiple business operations into a single workflow rather than treating customers, products, orders, and inventory as isolated modules.

---

# 🔮 Future Improvements

* Email Notifications
* Customer Payment Tracking
* Purchase Management
* Supplier Management
* Advanced Analytics
* Export Reports to Excel
* Barcode Support
* Customer Portal
* Order and Payment Notifications
* Audit Logs

---

# 👨‍💻 Authors

**Parth Randar**

**Karambir**

---

⭐ If you like this project, don't forget to give it a star!
