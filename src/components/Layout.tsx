import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  editorial?: boolean;
}

const Layout = ({ children, editorial }: LayoutProps) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className={`flex-1 ${editorial ? "" : "pt-20 md:pt-24"}`}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
