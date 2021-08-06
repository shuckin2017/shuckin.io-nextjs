import Photo from "../../assets/img/item-1.png";
import { UilDownloadAlt } from "@iconscout/react-unicons";
import Image from "next/image";

export default function About() {
  return (
    <section className="section about" id="about">
      <h2 className="section__title font-medium">About Me</h2>
      <span className="section__subtitle">My inproduction</span>
      <div className="container about__container grid">
        <Image className="about__img " src={Photo} alt="Your Name" />
        <div className="about__data">
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            odio eos accusantium dolore rem in nihil a dicta enim est.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">08+</span>
              <span className="about__info-name">
                Years
                <br /> experince
              </span>
            </div>
            <div>
              <span className="about__info-title">20+</span>
              <span className="about__info-name">
                Completed
                <br /> project
              </span>
            </div>
            <div>
              <span className="about__info-title">05+</span>
              <span className="about__info-name">
                Companies
                <br /> worked
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <button
              href="/"
              className="flex items-center content-center px-8 py-3 rounded-full border bg-blue-700 text-white font-medium text-md lg:text:lx hover:bg-blue-600 active:translate-y-1 transition-all "
            >
              Download CV <UilDownloadAlt className="ml-3 w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
