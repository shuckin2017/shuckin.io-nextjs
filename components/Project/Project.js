import { UilMessage } from "@iconscout/react-unicons";
import Image from "next/image";
import ProjectImg from "../../assets/img/project.png";

export default function Project() {
  return (
    <section className="section project" id="project">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project</h2>
            <p className="project__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </p>
            <a
              href="/"
              className="button-b button-b-flex button-white flex items-center justify-center px-8 py-3 rounded-full border bg-white text-blue-700  font-medium text-md lg:text hover:bg-blue-600 active:translate-y-1 transition-all "
            >
              Contact me
              <UilMessage className="button-b__icon project__icon button__icon" />
            </a>
          </div>
          <Image
            src={ProjectImg}
            alt=""
            className="project__img w-50 h-50"
            width={232}
            height={232}
          />
        </div>
      </div>
    </section>
  );
}
