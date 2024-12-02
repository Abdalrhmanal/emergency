import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/layout/navbar";
import AvailableAreas from "@/components/available-areas";
import HotServices from "@/components/services";
import Footer from "@/components/layout/footer";
import AreasListWithServices from "@/components/available-areas/areas-list-with-services";
import About from "@/components/about";

export default function Home() {
  return (
    <div className="bodypage">
      <Navbar />
      <main>
        <HotServices />
        <AreasListWithServices />
        <About />
      </main>
      <Footer />
    </div>
  );
}
