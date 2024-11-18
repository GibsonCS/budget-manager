import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-col flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout