import {
  UilMobileAndroid,
  UilEnvelope,
  UilMapMarker,
  UilMessage,
} from "@iconscout/react-unicons";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2 className="section__title font-medium">Contact</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="container contact__container grid">
        <div>
          <div className="contact__info">
            <UilMobileAndroid className="contact__icon" />
            <div>
              <h3 className="contact__title">Call me</h3>
              <span className="contact__sub">+7 (999) 999-99-99</span>
            </div>
          </div>
          <div className="contact__info">
            <UilEnvelope className="contact__icon" />
            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__sub">shuckin@mail.ru</span>
            </div>
          </div>
          <div className="contact__info">
            <UilMapMarker className="contact__icon" />
            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__sub">Russia - Moscow</span>
            </div>
          </div>
        </div>
        <form action="#" className="contact__form w">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="#" className="contact__label">
                Имя
              </label>
              <input type="text" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="#" className="contact__label">
                Email
              </label>
              <input type="email" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="#" className="contact__label">
                Телефон
              </label>
              <input type="telephone" className="contact__input" />
            </div>
            <div className="contact__content">
              <label htmlFor="#" className="contact__label">
                Сообщение
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="7"
                className="contact__input"
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                href="/"
                className="flex items-center content-center px-8 py-3 rounded-full border bg-blue-700 text-white font-medium text-md lg:text:lx  hover:bg-blue-600 active:translate-y-1 transition-all "
              >
                Отправить <UilMessage className="ml-3 w-6 h-6" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
