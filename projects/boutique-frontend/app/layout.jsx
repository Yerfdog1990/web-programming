import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Boutique Mix & Match",
    description: "Jozi-style outfit builder for your boutique",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <Navbar />
        {children}
        </body>
        </html>
    );
}