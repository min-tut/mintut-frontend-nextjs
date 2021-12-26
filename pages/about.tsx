import Header from "components/Header";
import Link from "next/link";

function about() {
  return (
    <div>
      <main className="min-h-screen">
        <Header />
        <div className="text-center h-96 flex justify-center items-center">
          <h1 className="text-5xl  font-thin font-MerryWeather">About Page</h1>
        </div>
      </main>
    </div>
  );
}

export default about;
