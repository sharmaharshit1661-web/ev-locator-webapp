# 🚗⚡ EV Locator App

## Real-Time Electric Vehicle Availability System

### 📌 Overview
The EV Locator App is a smart web/mobile-based application designed to help users find nearby available Electric Vehicles (EVs) in real-time.

Unlike traditional platforms such as Google Maps, which only provide navigation and charging station locations, this system focuses on live EV availability tracking, making EV access faster and more efficient.

### ❗ Problem Statement
With the growing adoption of Electric Vehicles, users face several challenges:
- No real-time EV availability information
- Time-consuming search for nearby EVs
- Inconvenience in urgent travel situations
- Existing apps only show static data

This leads to reduced efficiency and slower EV adoption.

### 💡 Solution
The EV Locator App solves this problem by:
- Providing real-time EV location tracking
- Showing availability status (Available / Booked / Charging)
- Displaying vehicle details (battery, type, distance)
- Offering map-based navigation

### 🎯 Key Features
- **🔴 Real-Time Tracking:** Live EV vehicle location using GPS
- **🟢 Smart EV Search:** Find nearest EV instantly
- **🔵 Availability Status:**
  - 🟢 Available
  - 🔴 Booked
  - 🟡 Charging
- **📍 Map Integration:** Interactive map with EV markers
- **🔎 Filters:** Vehicle type (Car, Bike, Scooter), Battery level, Distance
- **🧭 Navigation:** Route to selected EV
- **🔔 Notifications (Optional):** Alerts for nearby available EVs

### 🏗️ System Architecture
The system follows a modular architecture:
- **Frontend Layer:** User interface, Map visualization
- **Backend Layer:** API handling, Business logic
- **Database Layer:** Stores EV data (location, status, battery)
- **Real-Time Layer:** Updates EV availability dynamically

### 🔄 Workflow
1. User opens the application
2. GPS detects user location
3. Request sent to backend
4. Backend fetches EV data
5. Nearby EVs displayed on map

### 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript, React.js, Tailwind CSS
- **Backend:** Node.js / Express.js, Firebase (optional)
- **Database:** MongoDB / Firebase Realtime Database
- **APIs:** Google Maps API / OpenStreetMap, GPS Location Services

### 🎨 UI/UX Features
- Clean and modern design
- Fully responsive (mobile + desktop)
- Map-centered interface
- Smooth animations
- Dark/Light mode support

### 📂 Project Structure
```text
ev-locator-webapp/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, icons, etc.
│   ├── components/  # Reusable UI components (Navbar, Map, Panels, Toast)
│   ├── hooks/       # Custom React hooks (useGeolocation)
│   ├── pages/       # Application routes (Home, MapDashboard, About, Contact)
│   ├── services/    # Mock data & simulation logic
│   ├── App.jsx      # Main application router
│   ├── index.css    # Global Tailwind styles
│   └── main.jsx     # React entry point
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

### 🔮 Future Scope
- ✅ EV booking system
- 💳 Payment integration
- 🤖 AI-based EV recommendations
- 🌐 Multi-city support
- 🔋 Battery prediction system
- 📡 IoT integration for real-time vehicle data
- ⭐ User rating & feedback system

### 🌱 Benefits
- Saves time and effort
- Improves EV accessibility
- Encourages eco-friendly transportation
- Supports smart mobility systems

### ⚠️ Limitations
- Requires internet connection
- Depends on real-time data accuracy
- Limited EV availability in some areas

### 📄 License
This project is licensed under the MIT License.

### 👨‍💻 Authors and contact details
- Harshit Sharma
- Email: sharmaharshit1661@gmail.com
- Phone no.: +91-7042294029


### 🙌 Acknowledgements
- Google Maps API
- Open-source community

### 📢 Final Note
The EV Locator App is a step toward building a smarter and more sustainable future by improving accessibility to Electric Vehicles and promoting green transportation 🌍⚡
