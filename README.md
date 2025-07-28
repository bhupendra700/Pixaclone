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
| Netlify          | Frontend Hosting                       |
| Render           | Backend Hosting                        |

---

## 📁 Folder Structure (Frontend)

pixaclone/
├── public/
├── src/
│ ├── components/ # Reusable components (Navbar, ImageCard etc.)
│ ├── pages/ # Pages (Home, Login, Signup etc.)
│ ├── hooks/ # Custom React hooks
│ ├── services/ # API and Firebase service functions
│ ├── styles/ # SCSS modules
│ ├── App.jsx # Routes and layout
│ └── main.jsx # Entry point
├── .env # Environment variables
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started (Local Setup)

### 1. Clone this repo

```bash
git clone https://github.com/your-username/pixaclone.git
cd pixaclone
2. Install dependencies
bash
Copy
Edit
npm install
3. Create a .env file
env
Copy
Edit
VITE_PIXABAY_API_KEY=your_pixabay_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
...other firebase env variables
4. Start the frontend
bash
Copy
Edit
npm run dev
📸 User Capabilities
Feature	Description
🔍 Search	Search high quality royalty-free images/videos from Pixabay
📂 Filters	Filter by image type, orientation, category (like Pixabay)
👀 View	View detailed media in responsive layout
⬇️ Download	Download images/videos in high quality using Blob URLs
📤 Profile Upload	Upload/update profile image (for logged-in users)
❌ Delete Profile Image	Delete profile image via backend
🔑 Auth Flow	Login, Signup, Forgot Password, Account Deletion
🔗 Social Sharing	Share content via WhatsApp, Facebook, LinkedIn, Twitter, Pinterest, Reddit


🙋‍♂️ Author
Developed with 💻 and ☕ by Bhupendra Yadav

Note: This project is for learning/demo purposes and not affiliated with Pixabay.