import Head from "next/head";
import Link from "next/link";
import avatar from "../assets/img/avatar.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Skills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header name="Максим Щукин" career="Frontend Developer" avatar={avatar} />

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="section__title ">skills</h1>
        <h2 className="section__subtitle">
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
        <p></p>
      </main>

      <Footer />
    </div>
  );
}
