import Cards from "../components/Cards";

export default function Jobs() {
  
  const jobs = [
    {
      name: "Amazon",
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      posted: "5 days ago",
      role: "Senior UI/UX Designer",
      jobType: "Part Time",
      level: "Senior Level",
      salary: "₹7000/hr",
      location: "Mumbai, India"
    },
    {
      name: "Google",
      logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
      posted: "2 days ago",
      role: "Frontend Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "₹7000/hr",
      location: "Bangalore, India"
    },
    {
      name: "NETFLIX",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
      posted: "2 days ago",
      role: "Frontend Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "₹7000/hr",
      location: "Bangalore, India"
    },
    {
      name: "DC",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzuPuGHSGnJNsasO4PVim3bUrnADumJyimYp-Rl0kYnzmXLT3OFKFWC4BskHPc8NYKT8&usqp=CAU",
      posted: "2 days ago",
      role: "Frontend Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "₹7000/hr",
      location: "Bangalore, India"
    },
    {
      name: "MARVEL",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxG2IsYhF8NfIoN1JAaq-U8uRO2YT5Xw-tvA&s",
      posted: "2 days ago",
      role: "Frontend Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "₹7000/hr",
      location: "Bangalore, India"
    },
    {
      name: "TESLA",
      logo: "https://pngimg.com/d/tesla_logo_PNG12.png",
      posted: "2 days ago",
      role: "Frontend Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "₹7000/hr",
      location: "Bangalore, India"
    },
    {
      name: "SONY",
      logo: "https://static.vecteezy.com/system/resources/previews/020/975/554/non_2x/sony-logo-sony-icon-transparent-free-png.png",
      posted: "2 days ago",
      role: "Frontend Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "₹2000/hr",
      location: "Bangalore, India"
    },
    {
      name: "SAMSUNG",
      logo: "https://i.pinimg.com/736x/f3/1e/04/f31e042d016da67ec981a44005f40fd1.jpg",
      posted: "2 days ago",
      role: "Frontend Developer",
      jobType: "Full Time",
      level: "Mid Level",
      salary: "₹9000/hr",
      location: "Bangalore, India"
    }
  ];

  return (
    <main className="max-w-7xl mx-auto px-8 py-10">
      <h2 className="text-3xl font-bold text-teal-700 mb-6">Available Jobs</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {jobs.map((job, i) => (
          <Cards key={i} {...job} />
        ))}
      </div>
    </main>
  );
}
