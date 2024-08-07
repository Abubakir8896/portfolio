import { Link } from "react-router-dom";
import myImage from "../assets/myImage.jpg";
const Home = () => {
  return (
    <section className="home-page min-h-screen bg-[#0F0F0F] flex flex-col lg:flex-row items-center lg:pl-20">
      <div className="home-body flex flex-col order-1 px-4 lg:px-0 lg:-order-2 lg:w-1/2">
        <h2 className="text-white mb-6 text-[24px] font-semibold text-center lg:text-left">
          Hello, my name is
          <br />{" "}
          <span className="font-mono text-[28px]">Abubakir Zikirov</span>
        </h2>
        <h1 className="text-white mb-8 text-[36px] font-bold text-center lg:text-left">
          I am a{" "}
          <span className="font-mono text-[38px] ">FullStack developer</span>
        </h1>
        <p className="text-white mb-8 text-lg font-middle text-center lg:text-left">
          I am a professional web developer. I can create
          BackEnd part of a website. If you interested click the button.
        </p>
        <Link
          to="/about"
          className="inline-block max-w-[180px] mb-5 self-center lg:self-start text-center px-8 py-3 bg-[#DC6B24] rounded-lg text-white"
        >
          More about me
        </Link>{" "}
      </div>
      <div className="home-image w-[450px] h-[450px]  mb-8 lg:mb-0 lg:w-[400px] rounded-full overflow-hidden">pxpx
        <img
          src={myImage}
          alt="My image"
          className="relative -top-5 scale-110 relative-full"
        />
      </div>
    </section>
  );
};

export default Home;
