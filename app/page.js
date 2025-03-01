import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
// import { Hero, About, Explore } from '../sections';
import { EventCountDown } from '../components/EventCountDown';

const Page = () => (
  <div className="bg-black overflow-hidden">
    <div className="relative w-full h-screen flex flex-col">
      <Navbar />
      <Hero />
      <img src="/hero_background.jpeg" className="absolute object-cover object-center opacity-30 h-full w-full left-0 top-0 z-0" />
    </div>
    <div className="relative">
      <div className="gradient-03 z-0" />
      <About />
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
