import Head from "next/head";
import avatar from "../assets/img/avatar.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/About";
import Qualification from "../components/Qualification";
import Portfolio from "../components/Portfolio/Portfolio";
import Project from "../components/Project/Project";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Максим Щукин" career="Frontend Developer" avatar={avatar} />

      <main className="flex flex-col w-full flex-1 lg:px-10">
        <About />
        <Qualification/>
        <Portfolio/>
        <Project/>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
