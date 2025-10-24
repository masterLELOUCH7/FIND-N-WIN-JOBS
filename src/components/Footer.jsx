import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-cyan-600 ">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/masterLelouch7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/vikramdas7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={24} />
          </a>
        </div>

        {/* Text */}
        <p className="text-sm">
          © {new Date().getFullYear()} Created by{" "}
          <span className="font-semibold text-teal-400">
            masterLelouch7
          </span>
        </p>

      </div>
    </footer>
  );
}
