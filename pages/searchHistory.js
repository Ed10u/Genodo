import Navbar from "@/components/NavbarSolid";
import History from "@/components/searchHistory";
import Footer from "@/components/Footer";
import Preloader from "@/components/preloader";
import Display from '@/components/fullLoginDisplay';

export default function about() {
  return (
    <>
        <Preloader />
        <Display/>
        <Navbar />
        <History />
        <Footer />
    </>
  )
}
