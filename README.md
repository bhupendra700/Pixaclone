# 🖼️ Pixaclone — A Pixabay Clone Using React, Firebase & Pixabay API

[🌐 Live Demo](https://pixaclonefree.netlify.app/) | 🔁 Backend hosted on Render

Pixaclone is a **royalty-free image and video search platform** inspired by Pixabay. It allows users to **search, view, filter, download, upload profile images**, and manage their accounts in a beautiful, responsive, and performant interface.


---

## ✨ Features

### 🌐 Frontend (React + Pixabay API + TanStack Query)
- 🔎 **Search Pixabay API** directly from frontend (no backend proxy)
- ⚡ **React Query (TanStack Query)**:
  - Super-fast cache-based fetching
  - No redundant loaders
  - No repeated API hits
- ♾️ **Infinite Scroll** for smooth content loading
- 📥 **Download Support** for **images/videos** using `Blob URLs`
- 🧭 **React Router DOM** for page navigation
- 🧠 **Dynamic Page Titles** change based on search or section (e.g., Home - Images, Home - Illustrations)
- 🧱 **Masonry Layout** for beautiful image arrangement
- 🎯 **Filter Functionality** just like Pixabay (image type, category, orientation, etc.)
- 📱 **Fully Responsive** design for all devices
- 🎨 **SCSS Styling** for better UI structuring
- 📤 **Sharing Popup** with:
  - WhatsApp, Facebook, X (Twitter), LinkedIn, Pinterest, Reddit, Copy Link

### 🔐 Firebase Authentication
- 🔑 **Login / Signup**
- 🖼️ **Update Profile Name & Image**
- ❌ **Delete Account**
- 🔁 **Forgot Password Flow**
- 🛡️ Only authenticated users can **upload or delete** their **profile image**

### 🖥️ Backend (Render Hosted)
- Simple Express backend
- Allows **profile image upload & delete**
- Lightweight and secure

---

## 🛠️ Tech Stack

| Tech             | Purpose                                |
|------------------|----------------------------------------|
| React            | Frontend Framework                     |
| Firebase Auth    | Authentication & Account Management    |
| Pixabay API      | Fetching free stock images/videos      |
| React Query      | Data fetching with caching             |
| React Router DOM | Routing                                |
| SCSS             | Styling                                |
| Express.js       | Backend for uploads                    |
| Node js          | Backend for uploads                     |
| Netlify          | Frontend Hosting                       |
| Render           | Backend Hosting                        |

---

## 📁 Folder Structure (Frontend)

PIXACLONE/
├── pixabay_backend/               # Backend (Express.js for profile upload/delete)
│   ├── node_modules/
│   ├── uploads/                   # Uploaded profile images
│   ├── .env
│   ├── .gitignore
│   ├── app.js                     # Express app entry
│   ├── package.json
│   └── package-lock.json

├── pixabay_react/                # Frontend (React App)
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── Component/            # Reusable React components
│   │   ├── CSS/                  # Plain CSS files
│   │   ├── Font/                 # Custom fonts
│   │   ├── Images/               # Local images/assets
│   │   ├── SCSS/                 # SCSS files
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js

└── README.md                     # Project overview



🚀 Getting Started (Local Setup)
1. Clone this repo
bash
Copy
Edit
git clone https://github.com/bhupendra700/Pixaclone.git
cd pixaclone
2. Install dependencies for both frontend and backend
bash
Copy
Edit
# For backend
cd pixabay_backend
npm install

# For frontend
cd ../pixabay_react
npm install
3. Create .env files
🗂️ pixabay_react/.env (Frontend)
env
Copy
Edit
VITE_PIXABAY_API_KEY=your_pixabay_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_BACKEND_URL=http://localhost:5000  # or your deployed backend URL
🗂️ pixabay_backend/.env (Backend)
env
Copy
Edit
PORT=5000
UPLOAD_FOLDER=uploads
4. Start the backend server
bash
Copy
Edit
cd pixabay_backend
node app.js
Or if you're using nodemon, use:

bash
Copy
Edit
nodemon app.js
5. Start the frontend development server
bash
Copy
Edit
cd ../pixabay_react
npm run dev
Now open http://localhost:5173 in your browser to view the app.


| **Feature**           | **Description**                                                            |
| --------------------- | -------------------------------------------------------------------------- |
| 🔍 **Search**         | Search high quality royalty-free images/videos from Pixabay                |
| 📂 **Filters**        | Filter by image type, orientation, category (like Pixabay)                 |
| 👀 **View**           | View detailed media in responsive layout                                   |
| ⬇️ **Download**       | Download images/videos in high quality using Blob URLs                     |
| 📤 **Profile Upload** | Upload/update profile image (for logged-in users)                          |
| ❌ **Delete Image**   | Delete profile image via backend                                           |
| 🔑 **Auth Flow**      | Login, Signup, Forgot Password, Account Deletion (Firebase Authentication) |
| 🔗 **Social Sharing** | Share content via WhatsApp, Facebook, LinkedIn, Twitter, Pinterest, Reddit |



🙋‍♂️ Author
Developed with 💻 and ☕ by Bhupendra Yadav

Note: This project is for learning/demo purposes and not affiliated with Pixabay.