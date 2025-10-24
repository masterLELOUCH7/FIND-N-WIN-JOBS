import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-[85vh] grid md:grid-cols-2 items-center px-10 lg:px-20 gap-10">
      
      {/* LEFT SIDE TEXT */}
      <div>
        <h1 className="text-5xl font-bold text-teal-700 leading-tight mb-4">
          Find Your Dream <br /> Job Without Any Scams
        </h1>

        <p className="text-gray-700 text-lg max-w-md mb-6">
          Explore verified and trusted job listings from leading companies worldwide.
        </p>

        <Link
          to="/jobs"
          className="bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-teal-700 transition"
        >
          Browse Jobs
        </Link>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="flex justify-center">
        <img
          src="https://m.gettywallpapers.com/wp-content/uploads/2023/12/Illustration-Computer-Backgrounds.jpg"
          alt="Working Illustration"
          className="max-w-full rounded-xl shadow-lg"
        />
      </div>
      

    </div>
  );
}
