import Head from "next/head";
import avatar from "../assets/img/avatar.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Контакты</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Максим Щукин" career="Frontend Developer" avatar={avatar} />

      <main className="flex flex-col w-full flex-1 px-20">
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
