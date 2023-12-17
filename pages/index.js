import Header from '../layouts/header';
import Banner from '../componants/banner';
import Project from '../componants/project';
import Amenities from '../componants/amenities';
import Gallery from '../componants/gallery';
import Plan from '../componants/plan';
import Plannew from '../componants/plan-old';
import Location from '../componants/location';
import Footer from '../layouts/footer';


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Project />
      <Amenities />
      <Gallery />
      <Plan />
      <Location />
      <Footer />
    </>
  );
}
