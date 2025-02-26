export default function Home() {
  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center text-center p-6"
      style={{
        backgroundImage: "url('/images/concert.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Darker Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl font-extrabold text-white">Welcome to My Sound Engineering Portfolio</h1>
        <p className="mt-4 text-lg text-gray-300 leading-relaxed">
          I specialize in live sound mixing, studio recording, and audio production. 
          Explore my past work and connect with me for collaborations.
        </p>

        {/* Contact Button */}
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rob.mccourty@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-accentBlue hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}