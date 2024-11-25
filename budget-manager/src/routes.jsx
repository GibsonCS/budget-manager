import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import App from "./App";

const AppRouter = () => {
    return (
        // <Router basename='/budget-manager'>
        //     <Routes>
        //         <Route element={<Layout />}>
        //             <Route path="/" element={<App />} />
        //         </Route>
        //     </Routes>
        // </Router>
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<App />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRouter