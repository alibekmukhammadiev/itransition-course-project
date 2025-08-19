import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
