# 🗨️ Real-Time Chat App

A full-stack real-time chat application with **one-on-one messaging**, **image sharing**, and **live user status tracking**.

## 🚀 Features

- 🔒 **One-on-One Chat** – Real-time messaging between users with instant delivery.
- 🖼️ **Image Sharing** – Seamless image uploads and sharing using Cloudinary.
- 🟢 **Online Status Tracking** – Live tracking of online/offline user presence.
- 🔐 **JWT Authentication** – Secure login and session handling.
- 📦 **Global State Management** – Efficient state handling with Zustand.
- 📱 **Responsive UI** – Clean and adaptable interface for all device sizes.
- 🌐 **Real-Time Communication** – Integrated Socket.IO for instant updates and presence detection.

## 🧰 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Daisy UI
- Zustand

**Backend:**
- Node.js
- Express.js
- MongoDB
- Socket.IO
- JWT
- Cloudinary

## ⚙️ Setup Instructions

1. **Clone the Repository**

2. **Install Dependencies**
   - **Frontend**
     ```bash
     cd frontend
     npm install
     ```
   - **Backend**
     ```bash
     cd backend
     npm install
     ```
3. **Configure Environment Variables**

   Create `.env` files in  `backend` with necessary variables like:
   ```bash
        MONGODB_URI=....
        PORT=...
        JWT_SECRET=...
        NODE_ENV=...
        CLOUDINARY_CLOUD_NAME=...
        CLOUDINARY_API_KEY=...
        CLOUDINARY_API_SECRET=...
   ```

4. **Start the Development Servers**
  - **Frontend**
     ```bash
     npm run dev
     ```
   - **Backend**
     ```bash
     npm start
     ```

## 🔒 Authentication

- User login and signup with hashed passwords.
- JWT tokens are used for securing protected routes.

## 📡 Real-Time Functionality

- Socket.IO powers:
  - Message delivery
  - Live user status

## 📤 Image Uploads

- Cloudinary integration for hosting and serving images efficiently.