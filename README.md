 🌤️ Modern Weather App - React.js
A sleek, responsive Weather Application built with React.js that provides real-time weather data with a focus on clean UI/UX and dynamic styling.

🚀 Features
Real-time Data Fetching: Utilizes the OpenWeatherMap API to get live weather updates for any city globally.

Initial Load Logic: Automatically displays weather for a default city (Rewa) on startup using the useEffect hook.

Dynamic Theming: The application background and card style change dynamically based on the current weather condition (e.g., Clear, Clouds, Rain, Haze).

User-Centric Search: Supports city searches via button clicks or the "Enter" key for seamless navigation.

State Persistence: Gracefully handles errors (like invalid city names) while keeping the previously searched data visible.

Comprehensive Stats: Displays Temperature, "Feels Like" temperature, Humidity, Wind Speed, and a "Last Updated" timestamp.

🛠️ Tech Stack
Frontend: React.js (Hooks: useState, useEffect)

Styling: Modern CSS (Flexbox, Glassmorphism, CSS Variables)

Icons: Font Awesome

API: OpenWeatherMap API

📸 Final Look
 <img width="1913" height="929" alt="Screenshot 2026-02-04 112347" src="https://github.com/user-attachments/assets/7ac6c1ec-7f47-4322-94f1-bda6ea61ff50" />


⚙️ Installation & Setup
Clone the repository:

Bash
git clone https://github.com/your-username/weather-app-react.git
Install dependencies:

Bash
npm install
Run the app:

Bash
npm run dev
🧠 What I Learned
As a recent Computer Science graduate, this project helped me strengthen several key concepts:

Asynchronous JavaScript: Managing API calls with async/await and handling various HTTP response codes.

Conditional Rendering: Using React logic to show/hide loading spinners and error messages.

UI/UX Design: Implementing "Glassmorphism" and ensuring a clear visual hierarchy for primary data.
