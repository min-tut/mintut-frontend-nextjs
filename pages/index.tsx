import Head from "next/head";
import Link from "next/link";
import Header from "components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Mintuts - Short video tutorials</title>
        <meta name="description" content="A place to watch short tutorials" />
        <link rel="icon" href="/mintut-logo.svg" />
      </Head>

      <main id="main" className="min-h-screen">
        <Header />
        <div
          id="modal-overlay"
          className="text-center h-96 flex justify-center items-center"
        >
          <h1 className="text-5xl  font-thin font-MerryWeather">
            Welcome to{" "}
            <span className="font-bold text-6xl text-indigo-400 font-montserrat">
              <Link href={"/"}>Mintuts!</Link>
            </span>
          </h1>
        </div>
      </main>
    </div>
  );
}
