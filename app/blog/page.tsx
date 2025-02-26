export default function Blog() {
  const posts = [
    {
      title: "Mixing for Large Venues",
      date: "Feb 15, 2025",
      summary: "Tips on handling live sound for large audience concerts.",
      link: "/blog/mixing-large-venues",
    },
    {
      title: "Studio Recording Techniques",
      date: "Jan 30, 2025",
      summary: "Best practices for capturing clean, high-quality recordings.",
      link: "/blog/studio-recording",
    },
  ];

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-6"
      style={{
        backgroundImage: "url('/images/coldplay3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content (z-10 ensures it appears above overlay) */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          My Blog
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
          Sharing insights and experiences in sound engineering.
        </p>

        {/* Blog Post List */}
        <div className="mt-8 space-y-6">
          {posts.map((post, index) => (
            <a 
              key={index} 
              href={post.link} 
              className="block bg-gray-800 bg-opacity-80 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition"
            >
              <h2 className="text-xl font-semibold text-white">{post.title}</h2>
              <p className="text-gray-400 text-sm">{post.date}</p>
              <p className="text-gray-300 mt-2">{post.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}