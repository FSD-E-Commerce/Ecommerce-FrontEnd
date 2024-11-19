import AccessoriesSection from "./AccessoriesComponent";
import HelmetsAndAccessories from "./HelmetAndAccessories";
import HeroSection from "./HeroSectionComponent";
import NavBarcomp from "../ReusableComponents/NavBarComponent2";
import FooterComp from "../ReusableComponents/FooterComponent";
import ReusableCard from "../ReusableComponents/CardComponent";

const Home = () => {
  return (
    <>
      <NavBarcomp />
      <main className="relative top-20">
        <section>
          <HeroSection/>
        </section>
        <section>
          <HelmetsAndAccessories />
        </section>
        <section>
          <ReusableCard />
        </section>
        <section>
          <AccessoriesSection />
        </section>
      </main>
      <footer>
        <FooterComp />
      </footer>
    </>
  );
};

export default Home;
