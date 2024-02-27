import Navbar from "@/components/Navbar";
import ContentPage1 from "@/components/HomeContent";
import Footer from "@/components/Footer";
import ContentPage2 from"@/components/HomeContent2";

export default function index() {
  return (
    <>
        <Navbar />
        <ContentPage1 />
        <ContentPage2 />
        <Footer />
    </>
  )
}
