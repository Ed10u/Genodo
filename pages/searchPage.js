import Navbard from "@/components/NavbarSolid";
import ContentPage1 from "@/components/SearchPage";
import Footer from "@/components/Footer";
import Preloader from "@/components/preloader";
import Display from '@/components/fullLoginDisplay';

export default function index() {
  return (
    <>
        <Preloader />
        <Display/>
        <Navbard />
        <ContentPage1 />
        <Footer />
    </>
  )
}