import { Hero } from "../components/Hero";
import { Statement } from "../components/Statement";
import { Stats } from "../components/Stats";
import { RecentPosts } from "../components/RecentPosts"
import { Testimonials } from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Statement />
      <Stats />
      <RecentPosts />
      <Testimonials/>
    </>
  );
  };
  
  export default Home;