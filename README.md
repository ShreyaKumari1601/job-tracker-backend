💼 Job / Internship Application Tracking System

A full-stack MERN application that helps users track and manage their job and internship applications efficiently.
Users can add, update, delete, and monitor application statuses in one centralized dashboard.

 Features-

🔐 User Authentication (Register / Login)

➕ Add new job/internship applications

✏️ Update application details

❌ Delete applications

📊 Track application status (Applied, Interview, Rejected, Offer, etc.)

🔎 Filter and search applications

📅 Track application dates

📈 Dashboard overview of total applications

🛠️ Tech Stack
Frontend

React.js

Axios

React Router DOM

Tailwind CSS / CSS (based on what you used)

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

bcrypt.js

📁 Project Structure
job-tracker/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/your-username/job-tracker.git
cd job-tracker
2️⃣ Backend Setup
cd backend
npm install

Create a .env file inside backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend server:

npm run dev
