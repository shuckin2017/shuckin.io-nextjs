import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { UilEye, UilGithubAlt } from "@iconscout/react-unicons";

import Photo from "../../assets/img/photo-1.png";
import Photo2 from "../../assets/img/photo-2.png";
import Photo3 from "../../assets/img/photo-3.png";
import Image from "next/image";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function Portfolio() {
  return (
    <section className="section portfolio" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most resent work</span>
      <div className="container portfolio__container">
        <div>
          <Swiper
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="portfolio__content grid">
                <Image src={Photo2} alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title font-medium"> Modern Website</h3>
                  <p className="portfolio__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <div className="portfolio__buttons">
                    <button
                      href="/"
                      className="button-b button-b-flex button-small portfolio__button flex items-center content-center px-6 py-2 rounded-full border bg-blue-700 text-white font-medium text-md hover:bg-blue-600 active:translate-y-1 transition-all "
                    >
                      Demo
                      <UilEye className="button__icon button-b__icon ml-2" />
                    </button>
                    <button
                      href="/"
                      className="button-b button-b-flex button-small portfolio__button flex items-center content-center px-6 py-2 rounded-full border bg-blue-700 text-white font-medium text-md hover:bg-blue-600 active:translate-y-1 transition-all "
                    >
                      Github
                      <UilGithubAlt className="button__icon button-b__icon ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__content grid">
                <Image src={Photo3} alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title"> Modern Website</h3>
                  <p className="portfolio__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="portfolio__buttons">
                    <a
                      href="/"
                      className="button-b button-b-flex button-small portfolio__button"
                    >
                      Demo
                      <UilEye className="button__icon button-b__icon" />
                    </a>
                    <a
                      href="/"
                      className="button-b button-b-flex button-small portfolio__button"
                    >
                      Github
                      <UilGithubAlt className="button__icon button-b__icon" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__content grid">
                <Image src={Photo} alt="" className="portfolio__img" />

                <div className="portfolio__data">
                  <h3 className="portfolio__title"> Modern Website</h3>
                  <p className="portfolio__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <div className="portfolio__buttons">
                    <a
                      href="/"
                      className="button-b button-b-flex button-small portfolio__button"
                    >
                      Demo
                      <UilEye className="button__icon button-b__icon" />
                    </a>
                    <a
                      href="/"
                      className="button-b button-b-flex button-small portfolio__button"
                    >
                      Github
                      <UilGithubAlt className="button__icon button-b__icon" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
