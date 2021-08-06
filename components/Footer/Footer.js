export default function Footer() {
    return (
        <footer className="footer flex items-center justify-center w-full py-2 px-3 bg-blue-700">
            <div className="footer__bg  w-full text-white">
                <div className="flex-col lg:flex-row footer__container container flex lg:justify-between mx-auto mb-5">
                    <div className="mb-4 lg:mb-0">
                        <h1 className="footer__title  lg:text-2xl -mb-1 font-medium text-xl">Максим Щукин</h1>
                        <span className="footer__subtitle  text-md font-normal content-between">
                            Frontend developer
                        </span>
                    </div>
                    <ul className="footer__links flex lg:text-2xl flex-col lg:flex-row text-md">
                        <li>
                            <a href="#home" className="footer__link hover:text-gray-300">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#project" className="footer__link hover:text-gray-300">
                                Project
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link hover:text-gray-300">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="footer__link hover:text-gray-300">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link hover:text-gray-300">
                                Contactme
                            </a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        <ul className="footer__socials-list">
                          
                        </ul>
                    </div>
                </div>

                <p className="footer__copy container mx-auto flex justify-center lg:text-md text-gray-300 text-sm">
                    &#169; <a href="/">Shuckin.io</a> / All rights reserved.
                </p>
            </div>
        </footer>
    )
}
