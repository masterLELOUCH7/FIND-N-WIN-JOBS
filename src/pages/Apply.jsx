import { useParams } from "react-router-dom";

export default function Apply() {
  const { companyName } = useParams();

  return (
    <div className="min-h-[80vh] flex justify-center items-center bg-gray-100 p-6">
      <form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5">
        
        <h2 className="text-2xl font-bold text-teal-700">
          Apply for {companyName}
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-teal-600"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-teal-600"
          required
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-teal-600"
          required
        />

        <textarea
          rows="4"
          placeholder="Why should we hire you?"
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-teal-600"
          required
        ></textarea>

        <input
          type="file"
          className="w-full border p-3 rounded-lg"
          required
        />

        <button className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition">
          Submit Application
        </button>

      </form>
    </div>
  );
}
