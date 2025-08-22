import Header from "./Header";
import Footer from "./Footer";
import Searchbar from "./Searchbar";

export default function Layout({ children, showSearch }) {
  return (
    <div className="d-flex flex-column vh-100">
      <Header />
      {showSearch && <Searchbar />}
      {children}
      <Footer />
    </div>
  );
}
