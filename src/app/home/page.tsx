import { Header } from "@/src/components/Header/Header";
import { Hero } from "./ui/Hero/Hero";
import { News } from "./ui/News/News";
import { Why } from "./ui/Why/Why";
import { Services } from "./ui/Services/Services";
import { Offers } from "./ui/Offers/Offers";
import { Partners } from "./ui/Partners/Partners";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <News />
        <Why />
        <Services />
        <Offers />
        <Partners />
      </main>
    </>
  );
};
export default Home;
