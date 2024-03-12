import Navbar from "@/components/NavbarSolid";
import AboutContent from "@/components/aboutContent";
import Footer from "@/components/Footer";
import Display from '@/components/fullLoginDisplay';
import Preloader from "@/components/preloader";

export default function about() {
  return (
    <>
        <Preloader />
        <Navbar />
        <Display/>
        <AboutContent />
        <Footer />
    </>
  )
}
