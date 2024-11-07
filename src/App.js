// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page.jsx';
import Login from './Components/Login/Login.jsx';
import Sign_Up from './Components/Sign_Up/Sign_Up.jsx';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.jsx'
import Notification from "./Components/Notification/Notification.jsx";
import ReviewForm from "./Components/ReviewForm/ReviewForm.jsx";
import ProfileCard from "./Components/Profile/ProfileCard.jsx";
import ReportsLayout from "./Components/ReportsLayout/ReportsLayout.jsx";
import AppointmentForm from "./Components/AppointmentForm/AppointmentForm.jsx";

// Function component for the main App
function App() {

    // Render the main App component
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing_Page />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/SignUp' element={<Sign_Up />} />
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                    <Route path="/reviews" element={<ReviewForm />} />
                    <Route path="/profileCard" element={<ProfileCard />} />
                    <Route path="/reportsLayout" element={<ReportsLayout />} />
                    <Route path="/search/doctors" element={<AppointmentForm />} />

                </Routes>
                <Notification />
            </BrowserRouter>
        </div>
    );
}

// Export the App component as the default export
export default App;