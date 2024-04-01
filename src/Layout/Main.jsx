import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "../Page/Shared/NavigationBar/NavigationBar";
import Footer from "../Page/Shared/Footer/Footer";
import FeeEstimator from "../Page/FeeEstimator/FeeEstimator";

 

const Main = () => {
    const location = useLocation();
    const helpCenterPath = location.pathname.includes("help-centre") || location.pathname.includes("fee-estimator") || location.pathname.includes("driver-privacy-policy");
    // const noHeaderFooter = location.pathname.includes("fee-estimator");
    return (
        <div>
            {/* <FeeEstimator></FeeEstimator> */}
            {helpCenterPath || <NavigationBar></NavigationBar>}
            {/* {helpCenterPath || <FeeEstimator></FeeEstimator>} */}
            <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            </div>

            {helpCenterPath || <Footer></Footer>}
            
            
        </div>
    );
};

export default Main;