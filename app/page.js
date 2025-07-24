import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100 min-h-screen flex items-center justify-center">
      <section className="w-full max-w-7xl px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-purple-800">
            The Best URL Shortener in the Market
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl px-2 md:px-0">
            We are the most straightforward URL shortener in the world. Most shorteners track you or require login.
            We understand your privacy, so we've built a clean, fast, and secure URL shortener — no login needed.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white font-semibold py-3 px-6 rounded-xl shadow-lg">
                Try Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
          <Image
            src="/vector.jpg"
            alt="Vector graphic of URL shortening"
            fill
            className="object-contain mix-blend-darken"
            priority
          />
        </div>
      </section>
    </main>
  );
}
