"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  return (
    <>
      <div className="flex justify-center mb-6">
        <h2 className="mb-10 text-center lg:mb-20 article-subtitle article-title lg:w-1/2">
          Meet Our Client
        </h2>
      </div>
      <Swiper
        className="w-11/12 px-10 py-2 mx-auto margin-bottom"
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiper.animating = true;
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={() => console.log("slide change")}
      >
        {[1, 2, 3, 12, 23, 1, 41, 51, , 1, 32, 12, 23, 1, 41, 51, , 1, 32].map(
          (_, index) => (
            <SwiperSlide className="shadow-xl " key={index}>
              <div className="flex flex-col items-center px-16 py-10 space-y-2 card">
                <div className="self-start transform -translate-x-5 translate-y-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33"
                    height="25"
                    viewBox="0 0 33 25"
                    fill="none"
                  >
                    <path
                      d="M15.4012 2.49202L13.2829 0.734375C5.30826 5.25404 1.57014 10.4014 0.573304 16.1765C-0.17432 20.9473 1.69474 24.7137 6.4297 24.7137C9.79401 24.7137 13.0337 22.4539 13.7813 18.6875C14.4044 14.2934 11.9123 11.6569 8.79718 11.0292C10.0432 6.76059 15.2766 2.49202 15.4012 2.49202ZM26.1172 10.7781C27.4878 6.63505 32.472 2.49202 32.5966 2.49202L30.4783 0.734375C22.5036 5.25404 18.7655 10.4014 17.7687 16.1765C17.0211 20.9473 18.8901 24.7137 23.6251 24.7137C26.9894 24.7137 30.2291 22.4539 30.8521 18.6875C31.5997 14.2934 29.2323 11.4058 26.1172 10.7781Z"
                      fill="url(#paint0_radial_17_29370)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_radial_17_29370"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(9.60889 4.84511) rotate(60.9542) scale(22.7269 27.3036)"
                      >
                        <stop stop-color="#FFB21E" />
                        <stop offset="1" stop-color="#FF4D00" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                <p className="text-sm text-center">
                  I was skeptical at first, but Gameotivity has exceeded all of
                  my expectations. The platform is easy to use and the rewards
                  system is fantastic. Ive never had so much fun playing games
                  and earning rewards at the same time. Thank you, Gameotivity!
                </p>
                <div className="flex justify-center gap-1 ">
                  {[1, 2, 3, 4, 5].map((_, index) => {
                    return (
                      <AiFillStar key={index} className="fill-[#F1C644]" />
                    );
                  })}
                </div>
                <div>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="/assets/img/slider/user.png"
                      className="p-2 border-2 border-orange-500 rounded-full w-14 h-14 "
                      alt=""
                    />
                    <h3>John Smith</h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </>
  );
};

export default TestimonialSlider;
