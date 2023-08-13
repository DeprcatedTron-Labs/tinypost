import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import your components
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import ImageSelector from "./components/ImageSelector";
import CaptionInput from "./components/CaptionInput";
import ScheduledPosts from "./components/ScheduledPosts";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Common Navbar Component */}
        <Navbar />

        <div className="app-content">
          <Routes>
            {/* Route for Authentication */}
            <Route path="/auth" element={<Auth />} />

            {/* Route for Image Selection */}
            <Route path="/select-images" element={<ImageSelector />} />

            {/* Route for Caption and Time Input */}
            <Route path="/add-caption" element={<CaptionInput />} />

            {/* Route for Viewing Scheduled Posts */}
            <Route path="/scheduled-posts" element={<ScheduledPosts />} />

            {/* Default Route or Home */}
            <Route path="/" element={<div>Welcome to TinyPost!</div>} />

            {/* You can add more components or content for the landing page here */}
          </Routes>
        </div>

        {/* Common Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
