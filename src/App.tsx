import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify'; // Import Toastify components
import SplashScreen from "./pages/SplashScreen";
import UserEntry from "./pages/LandingPage";
import Page from "./pages/Page";

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);


  return (
    <div>
      {loading ? (
        // Show the splash screen while loading
        <SplashScreen finishLoading={() => setLoading(false)} />
      ) : (
        // Once loading is finished, show the app with routing
        <Router>
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<UserEntry />} />
            <Route path="/pages" element= {<Page/>} />
          </Routes>

          {/* Include the ToastContainer so toasts can be rendered */}
          <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        </Router>
      )}
    </div>
  );
};

export default App;
