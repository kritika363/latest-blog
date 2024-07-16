import Banner from "./banner/page";
import Idea from "./section1/page"
import Choose from "./choose/page";
import Bestmarketing from "./best/page";
import Blogs from "./blogs/page";
import Testimonial from "./testimonial/page";
export default function Home() {
  return (
    <main>
      <Banner/>
      <Idea/>
      <Choose/>
      <Bestmarketing/>
      <Blogs/>
      <Testimonial/>
    </main>
  );
}
