import React, { useState } from "react";
import { Header } from "./Components/Header";
import { HotPostsSection } from "./Components/HotPostsSection";
import HorizontalDescription from "./Components/HorizontalDescription";
import VerticalDescription from "./Components/VerticalDescription";
import image2 from "./assets/image2.jpg";
import image3 from "./assets/image3.jpg";
import image4 from "./assets/image4.jpg";
import image5 from "./assets/image5.jpg";
import image6 from "./assets/image6.jpg";
import image7 from "./assets/image7.jpg";
import image8 from "./assets/image8.jpg";
import quotation from "./assets/quotation-mark.svg";
import Footer from "./Components/Footer";
function App() {
  const radio3 = "https://www.youtube.com/embed/8x69enaJoak";
  const radio2 = "https://www.youtube.com/embed/7lvXbfNBIQg";
  const radio1 = "https://www.youtube.com/embed/MfuOoTCvBWI";

  const [videoChecked, setVideoChecked] = useState(radio1);

  return (
    <div className="m-0 w-full">
      <Header />
      <HotPostsSection />
      <HorizontalDescription />
      <section className=" min-w-full flex justify-between pl-20 items-start">
        <div className="flex flex-col md:flex-row order-last md:order-first items-center space-x-24 py-9">
          <div className="bg-gray-400 ">
            <img className="object-cover w-96 h-96  " src={image2} alt="img" />
          </div>
          <div className="order-first md:order-last pb-6 md:pb-0">
          <VerticalDescription
            title={"An Amazing Journey Through The Mountains."}
            description={
              "This tour will take you through the amazing and breath taking sightseeing of the Middle Atlas mountains which includes Ifran or the Switzerland of Morocco like many describes it, Imouzegh, Azrou, the Aoua lake."
            }
            width={"w-52"}
          />
          </div>
        </div>
        <div className="font-body hidden md:block md:font-normal text-5xl text-gray-700 mt-28 items-center transform md:rotate-90">
          <h2>What do you think </h2>
          <h2 className="flex items-center">
            Of Travelling?
            <pre className="bg-gray-900 w-28 h-0.5 ml-7"></pre>
          </h2>
        </div>
      </section>

      <section className=" min-w-full flex-col flex md:flex-row pl-36 items-center md:items-start space-x-16">
        <div className=" pt-28">
          <VerticalDescription
            title={"Tips for Traveling in Winter Season."}
            description={
              "First and foremost, only pack one heavy jacket to stay warm out in the elements. Make sure it’s a jacket you love and that’ll be warm enough (since you’ll be wearing it your whole trip) and can match all the clothes you plan to wear."
            }
            link={"/"}
            width={"w-80"}
          />
        </div>
        <div className="flex items-center space-x-9">
          <img className="object-cover pt-11 md:pt-28 w-72 h-gl" src={image4} alt="img" />
        <div className="relative w-60 h-96 ">
          <img
            src={image3}
            alt="img"
            className="relative w-full z-20 h-full object-cover"
          />
          <div className="absolute z-10 w-full h-full -bottom-10 -right-10 bg-gray-100"></div>
        </div>

        </div>
      </section>
      <section className="relative h-60 min-w-full flex items-center justify-center section__adventure">
        <h1 className="font-body font-extrabold text-4xl">
          Adventure & Action In Travel
        </h1>
      </section>
      <section className="flex flex-col md:flex-row min-w-full justify-between mt-16">
        <div className="pl-24">
          <div className="relative md:w-xl md:h-xl w-96 h-96 mb-20">
            <img
              src={image6}
              alt="img"
              className="relative w-full z-20 h-full object-cover"
            />
            <div className="absolute z-10 md:w-xl md:h-xl w-96 h-96 -top-14 -left-24 bg-gray-100"></div>
          </div>
          <VerticalDescription
            title={"The travel mystery revealed."}
            description={
              "First and foremost, only pack one heavy jacket to stay warm out in the elements. Make sure it’s a jacket you love and that’ll be warm enough"
            }
            link={"/"}
            width={"w-80"}
          />
        </div>
        <div className="pt-10 flex flex-col">
          <VerticalDescription
            title={"Easy ways to make travel faster."}
            description={
              "First and foremost, only pack one heavy jacket to stay warm out in the elements. Make sure it’s a jacket you love and that’ll be warm enough (since you’ll be wearing it your whole trip) and can match all the clothes you plan to wear."
            }
            link={"/"}
            width={"w-80"}
          />
          <div className="relative w-96 md:w-xxl h-gl mt-40 md:order-last order-first">
            <div className="relative w-full h-full bg-gray-100"></div>
            <img
              src={image5}
              alt="img"
              className="absolute object-cover w-96 md:w-xxl h-gl -top-14 -left-24 "
            />
          </div>
        </div>
      </section>
      {/* video section */}
      <section className="relative pt-36 vedio__section">
        <div className="flex md:flex-row flex-col">
          <div className="relative z-20 w-full md:w-2/3">
            <iframe
              className=" relative z-20"
              width="100%"
              height="455px"
              src={videoChecked}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="video"
            ></iframe>
            <div style={{zIndex:-1}} className="absolute -bottom-64 md:-right-40 -right-4 md:w-xl w-96 h-96 bg-gray-200"></div>
          </div>
          <div className="flex md:flex-col z-20 flex-row space-x-7 md:space-x-0 md:space-y-9">
            <div className="flex md:flex-row flex-col items-center md:space-x-14">
              <div
                className="md:w-20 md:h-0.5 w-0.5 h-14 bg-gray-900"
              ></div>
              <span className="font-medium font-Poppins text-sm">Video 01</span>
              <input
                type="radio"
                name="vedio"
                checked={videoChecked === radio1}
                onChange={(e) => setVideoChecked(e.target.value)}
                id="vedio1"
                value={radio1}
              />
            </div>
            <div className="flex md:flex-row flex-col items-center md:space-x-14">
              <div
                className="md:w-20 md:h-0.5 w-0.5 h-14 bg-gray-900"
              ></div>
              <span className="font-medium font-Poppins text-sm">Video 02</span>
              <input
                type="radio"
                name="vedio"
                checked={videoChecked === radio2}
                onChange={(e) => setVideoChecked(e.target.value)}
                id="vedio2"
                value={radio2}
              />
            </div>
            <div className="flex md:flex-row flex-col items-center md:space-x-14">
              <div
                className="md:w-20 md:h-0.5 w-0.5 h-14 bg-gray-900"
              ></div>
              <span className="font-medium font-Poppins text-sm">Video 03</span>
              <input
                type="radio"
                name="vedio"
                checked={videoChecked === radio3}
                onChange={(e) => setVideoChecked(e.target.value)}
                id="vedio3"
                value={radio3}
              />
            </div>
          </div>
        </div>
        <div className="relative z-20">
          <p className="relative z-20 font-cookie md:text-2xl text-sm w-xl p-16">
            Nature last minute globe Turkey hospitality gateway Barcelona miles
            transit rural. Explore Tripit train chartering globe insurance
            airmiles
            <span
              style={{ zIndex: "-1" }}
              className="absolute z-0 -top-6 left-14 font-Poppins text-sem text-gray-400 transform rotate-195"
            >
              "
            </span>
          </p>
        </div>
      </section>
      <section className="relative flex justify-center items-center h-80 section__mark">
        <div className="flex-col justify-center items-center space-y-3">
          <img className="w-8 ml-64" src={quotation} alt="mark" />
          <p className="font-body font-normal text-5xl">
            “We're a bold bunch of riders explorers &{" "}
          </p>
          <p className="font-body font-normal text-5xl ml-6">
            hard-core thrill seekers that bring it.”
          </p>
        </div>
      </section>
      <section className="relative flex justify-center space-x-14 pb-40 pt-7">
        <div className="ml-20">
          <div className="relative w-72 h-gl mb-20">
            <img
              src={image8}
              alt="img"
              className="relative w-full z-20 h-full object-cover"
            />
            <div className="absolute z-10 w-72 h-gl -bottom-14 -left-14 bg-gray-100"></div>
          </div>
          <VerticalDescription
            title={"Guide to drive in hill stations."}
            description={
              "First and foremost, only pack one heavy jacket to stay warm out in the elements. Make sure it’s a jacket you love and that’ll be warm enough (since you’ll be wearing it your whole trip) and can match all the clothes you plan to wear."
            }
            link={"/"}
            width={"w-80"}
          />
        </div>
        <div className="relative z-20 pt-40 font-Poppins mark">
          <img
            src={image7}
            alt="img"
            className="w-xl h-xl bg-gray-400 object-cover"
          />
        </div>
      </section>
      {/* Footer */}
        <Footer/>
    </div>
  );
}

export default App;
