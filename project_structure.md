# Project Structure

Based on the provided images, here is the structure of the project:

## Frontend (client/)

```
client/
|-- public/
|-- src/
|   |-- components/
|   |   |-- Navbar.js
|   |   |-- EventCard.js
|   |   |-- QRDisplay.js
|   |   |-- QRScanner.js
|   |   |-- ProtectedRoute.js
|   |-- pages/
|   |   |-- LandingPage.js
|   |   |-- Login.js
|   |   |-- Signup.js
|   |   |-- Home.js
|   |   |-- Calendar.js
|   |   |-- MyEvents.js
|   |   |-- HostEvent.js
|   |   |-- CreateEvent.js
|   |   |-- EventDetails.js
|   |   |-- Profile.js
|   |   |-- AdminLogin.js
|   |   |-- AdminDashboard.js
|   |   |-- EventAnalytics.js
|   |-- services/
|   |   |-- api.js
|   |-- context/
|   |   |-- AuthContext.js
|   |-- utils/
|   |   |-- generateQR.js
|-- package.json
```

## Backend (server/)

```
server/
|-- config/
|   |-- db.js
|-- models/
|   |-- User.js
|   |-- Event.js
|   |-- Registration.js
|   |-- Attendance.js
|-- routes/
|   |-- authRoutes.js
|   |-- eventRoutes.js
|   |-- registrationRoutes.js
|   |-- adminRoutes.js
|-- controllers/
|   |-- authController.js
|   |-- eventController.js
|   |-- registrationController.js
|   |-- analyticsController.js
|-- middleware/
|   |-- authMiddleware.js
|   |-- roleMiddleware.js
|-- services/
|   |-- qrService.js
|   |-- emailService.js
|-- server.js
|-- package.json
```
