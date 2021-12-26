import Header from "components/Header";
import Link from "next/link";
function PageNotFound() {
  function goBack() {
    return window.history.back();
  }
  return (
    <>
      <Header />
      <div className="text-center flex flex-col w-full h-96 justify-center items-center">
        <h1 className="font-Roboto text-3xl m-4">Page Not Found</h1>
        <div className="flex py-8 w-96 justify-around items-center">
          <button
            onClick={goBack}
            className="bg-teal-600 px-8 py-4 text-lg rounded-sm  text-white font-Roboto"
          >
            Go Back
          </button>
          <Link href="/">Go to Homepage</Link>
        </div>
      </div>
    </>
  );
}
export default PageNotFound;
