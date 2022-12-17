import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const PortfolioDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) =>
        data.find((dataSet) => {
          if (dataSet._id === id) {
            setData(dataSet.data);
            return dataSet.data;
          }
        })
      );
  }, [id]);

  return (
    <div className="bg-slate-800 text-center py-8 min-h-screen">
      <Swiper
        // install Swiper modules
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          100: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mt-12 bg-slate-800"
      >
        {data?.map((info, index) => (
          <div>
            <SwiperSlide key={index}>
              <p className="mb-1  text-lg md:text-xl  text-slate-200 font-serif">
                #slide {index+1} : {info.details}
              </p>
              <div className="hero-content h-[450px] md:h-[400px] bg-slate-800  rounded-2xl flex-col text-center bg-gradient-to-r from-cyan-500 to-blue-500 p-2">
                <PhotoProvider>
                  <PhotoView src={info.img}>
                    <img
                      src={info.img}
                      className="rounded-2xl h-full w-full object-cover"
                      alt=""
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioDetails;
