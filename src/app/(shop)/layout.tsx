import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type MainLayoutProps = {
    children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <React.Fragment>
            <Navbar />
            <main className="main-container">
                {children}
            </main>
            <Footer />
        </React.Fragment>
    )
};

export default MainLayout;
