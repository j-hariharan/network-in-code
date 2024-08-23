import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
// import { Hero, About, Explore } from '../sections';
import { EventCountDown } from '../components/EventCountDown';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <EventCountDown />
    </div>

    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <Explore />
      <WhatsNew />
    </div>
    {/* <World /> */}
    <div className="relative">
      {/* <Insights /> */}
      <div className="gradient-04 z-0" />
      {/* <Feedback /> */}
    </div>
    <Footer />
  </div>
);

export default Page;
