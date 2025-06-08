export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mx-auto w-[120px] h-[120px] rounded-full bg-blue-600 text-white flex items-center justify-center text-5xl font-bold">
          D
        </div>

        <h1 className="mt-6 text-4xl font-bold">Hi, I am Dulith D.</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Software Engineer | Python & FastAPI Developer | Tech Enthusiast 🚀
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:youremail@example.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full"
          >
            Contact Me
          </a>
          <a
            href="https://github.com/dulithok"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm px-4 py-2 rounded-full"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm px-4 py-2 rounded-full"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <section className="mt-16 text-left max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300">
          I am a backend-focused developer with experience in Python, FastAPI,
          and full-stack systems using React and Next.js. I love building
          scalable systems and automating tasks with modern CI/CD pipelines.
        </p>
      </section>
    </div>
  );
}
