import SearchHeader from "@/components/SearchHeader";
import Footer from "@/components/Footer";
import "./../globals.css";

export default function SearchLayout({ children }) {
  return (
    <div className="">
      <SearchHeader />
      {children}
      {/*Footer*/}
      <Footer />
    </div>
  );
}
