<!-- markdownlint-disable MD033 MD041 -->

<p align="start">
  🌐<a href="README.ru.md" target="_blank">Русский</a>
</p>

<p align="center">
  <h1 align="center">📒 Project Planner</h1>
</p>
<p align="end">
  <span><i>A Planner for Weekly Tasks and Productivity Tracking</i></span>
</p>

<!-- markdownlint-enable MD033 MD041 -->

Welcome to **Project Planner**, a demo project exploring the integration of **Next.js** with server-side rendering and **Nest.js** for the backend.  
This service is a task tracker offering two main views: a task list and a Kanban board, focusing on tasks for the upcoming week.  

Key features include:  
- Drag-and-drop functionality for tasks.  
- A Pomodoro timer for productivity.  
- A dashboard displaying task progress.  
- User profile settings.  
- A dedicated page for planning daily tasks.  

The frontend is built with **Next.js**, styled using **Tailwind CSS**, and manages server interactions and state with **TanStack Query**. The project also implements **JWT-based authentication**.  
The backend is powered by **Nest.js**, using **Prisma** for database management and **PostgreSQL** as the database solution.  

<!-- markdownlint-disable MD033 MD041 -->

<h3></h3>  
<p align="center">
  <img src="assets/icons/nestjs.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/nextjs.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/prisma.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/reactquery.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/typescript.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/postgresql.svg" width="50"/>&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/icons/tailwindcss.svg" width="50"/>
</p>

<h2>🛠️ Features</h2>

<h3 align="start">Three Task Views:</h3>
<ul>
  <li><strong>Task List:</strong> A clean, simple list of all tasks.</li>
  <li><strong>Kanban Board:</strong> Visual task management with drag-and-drop functionality.</li>
  <li><strong>Daily Planner:</strong> Focused view for organizing tasks for the day.</li>
</ul>

<p align="center">
  <img src="assets/tasks-kanban.png" alt="Kanban tasks" width="250"/>
  <img src="assets/tasks.png" alt="Task list" width="250"/>
  <img src="assets/time-blocking.png" alt="Daily planner" width="250"/>
</p>

<h3 align="start">User Authentication</h3>
<ul>
  <li>Secure JWT-based authentication mechanism.</li>
  <li>Form validation for email and password fields using **React Hook Form**.</li>
</ul>

<p align="center">
  <img src="assets/auth-window.png" alt="Authentication window" width="300"/>
  <img src="assets/auth-window-validation.png" alt="Form validation" width="300"/>
</p>

<h3 align="start">Additional Features</h3>
<ul>
  <li><strong>Dashboard:</strong> Provides detailed statistics on task completion.</li>
  <li><strong>User Profile Settings:</strong> Allows customization of personal details.</li>
</ul>

<p align="center">
  <img src="assets/dashboard.png" alt="Dashboard" width="400"/>
  <img src="assets/settings.png" alt="Profile settings" width="400"/>
</p>

<h2>📂 Installation and Setup</h2>

<!-- markdownlint-enable MD033 MD041 -->

### Prerequisites  
- Node.js  
- PostgreSQL  

### Installation  

1. Clone the repository:  
   ```bash
   git clone https://github.com/vladchashush/project-planner.git
   ```

2. Install dependencies:  
   ```bash
   cd server
   npm install
   cd ../frontend
   npm install
   ```

3. Configure environment variables:  
   - Fill in the `.env` file in the root directories of both the frontend and backend projects.

4. Generate Prisma schemas for the backend:  
   ```bash
   cd backend
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. Start both frontend and backend projects:  
   ```bash
   cd frontend
   npm run start
   ```  
   ```bash
   cd backend
   npm run start:dev
   ```

---

Feel free to explore and modify the project to suit your needs! 🚀  

