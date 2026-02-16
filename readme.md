# Talent-IQ

**Talent-IQ** is a cutting-edge, AI-powered interview preparation platform designed to help candidates master their technical and behavioral interviews. By leveraging advanced AI models and real-time voice interaction, Talent-IQ simulates realistic interview scenarios, providing immediate feedback and actionable insights.

## 🚀 Key Features

*   **AI Mock Interviews**: Conduct realistic voice-based interviews with an AI interviewer powered by **Vapi** and **Gemini**.
*   **Real-time Interaction**: Experience low-latency conversational AI that adapts to your responses.
*   **Dynamic Questioning**: The AI generates context-aware questions based on your role, experience level, and focused topics.
*   **Integrated Code Editor**: Solve technical problems in real-time using a Monaco-based code editor within the interview interface.
*   **Live Video & Audio**: Seamless audio/video communication powerd by **Stream**.
*   **Comprehensive Feedback**: Receive detailed performance analysis and suggestions for improvement after every session.
*   **Secure Authentication**: robust user management via **Clerk**.
*   **Interview History**: Track your progress and review past interview performance.

## 🛠 Tech Stack

### Backend
*   **Runtime**: [Node.js](https://nodejs.org/)
*   **Framework**: [Express.js](https://expressjs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose)
*   **Authentication**: [Clerk](https://clerk.com/)
*   **Real-time Communication**: [Stream](https://getstream.io/) (Chat & Video)
*   **Voice AI**: [Vapi](https://vapi.ai/)
*   **Generative AI**: [Google Gemini](https://deepmind.google/technologies/gemini/)
*   **Background Jobs**: [Inngest](https://www.inngest.com/)

### Frontend
*   **Framework**: [React](https://react.dev/) (Vite)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **State Management**: React Query (TanStack Query)
*   **Code Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
*   **Icons**: Lucide React
*   **UI Components**: Radix UI / Shadcn-like components

## 📂 Project Structure

```
Talent-IQ/
├── backend/                # Node.js/Express Server
│   ├── src/
│   │   ├── controllers/    # Request handlers (Interview, Chat, Session, Webhook)
│   │   ├── models/         # MongoDB Schemas
│   │   ├── routes/         # API Routes
│   │   ├── services/       # Business logic (if separated)
│   │   └── server.js       # Entry point
│   └── .env                # Backend environment variables
├── frontend/               # React Client
│   ├── src/
│   │   ├── api/            # API client setup
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application views (Dashboard, Interview, etc.)
│   │   └── main.jsx        # Entry point
│   └── .env                # Frontend environment variables
└── README.md
```

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
*   A MongoDB database (Local or Atlas)
*   Accounts/API Keys for:
    *   Clerk
    *   Stream
    *   Vapi
    *   Google Gemini (AI Studio)

## 🔧 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/yourusername/Talent-IQ.git
    cd Talent-IQ
    ```

2.  **Install Dependencies**
    You need to install dependencies for both the backend and frontend.

    ```bash
    # Install Backend Dependencies
    cd backend
    npm install

    # Install Frontend Dependencies
    cd ../frontend
    npm install
    ```

## 🔐 Environment Configuration

You must configure the environment variables for the application to function correctly.

### Backend (`backend/.env`)
Create a `.env` file in the `backend` directory:

```env
PORT=3001
DB_URI=your_mongodb_connection_string
NODE_ENV=development
CLIENT_URL=http://localhost:5173

# Authentication (Clerk)
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Stream (Chat & Video)
STREAM_API_KEY=your_stream_key
STREAM_API_SECRET=your_stream_secret

# Vapi (Voice AI)
VAPI_API_KEY=your_vapi_key
VAPI_ASSISTANT_ID=your_vapi_assistant_id
VAPI_BASE_URL=https://api.vapi.ai

# AI Model
GEMINI_API_KEY=your_gemini_key

# Background Jobs
INNGEST_EVENT_KEY=your_inngest_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
```

### Frontend (`frontend/.env`)
Create a `.env` file in the `frontend` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3001/api

# Identical to Backend Stream Key (Public)
VITE_STREAM_API_KEY=your_stream_key

# Vapi Public Key
VITE_VAPI_API_KEY=your_vapi_public_key
VITE_VAPI_ASSISTANT_ID=your_vapi_assistant_id
```

## 🚀 Running the Application

1.  **Start the Backend Server**
    ```bash
    cd backend
    npm run dev
    ```
    The server will run on `http://localhost:3001`.

2.  **Start the Frontend Client**
    ```bash
    cd frontend
    npm run dev
    ```
    The application will act accessible at `http://localhost:5173`.

## 💡 Usage Guide

1.  **Sign Up/Login**: Create an account using Clerk authentication.
2.  **Dashboard**: Navigate to the dashboard to see your interview stats and start a new session.
3.  **Configure Interview**: Select your role (e.g., "React Developer"), experience level, and specific topics to focus on.
4.  **Start Interview**: Enter the interview room. Allow microphone/camera permissions. The AI interviewer will introduce itself and begin questioning.
5.  **Code Editor**: If a coding question is asked, use the integrated editor on the right panel to write and run your code.
6.  **End Session**: Once completed, the session is saved, and you can review feedback/transcripts (feature dependent on implementation).

## 📡 API Overview

The backend exposes several key endpoints:

*   **`POST /api/interviews`**: Create a new interview session.
*   **`GET /api/interviews/:id`**: Retrieve interview details.
*   **`POST /api/sessions/create-room`**: Initialize a Stream video room.
*   **`POST /api/sessions/token`**: Generate a token for Stream client.
*   **`POST /api/webhook/vapi`**: Handle Vapi server-to-server events (transcripts, function calls).

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

---

Built with ❤️ by [Md Kaif](https://github.com/WhySeriousKaif)