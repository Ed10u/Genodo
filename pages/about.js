import Navbar from "@/components/NavbarSolid";
import AboutContent from "@/components/aboutContent";
import Footer from "@/components/Footer";
import Display from '@/components/fullLoginDisplay';

export default function about() {
  return (
    <>
        <Navbar />
        <Display/>
        <AboutContent />
        <Footer />
    </>
  )
}
