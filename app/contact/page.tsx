export default function Contact() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
        <p className="mt-4 text-lg text-gray-300">Click below to send me an email.</p>
        
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=rob.mccourty@gmail.com&su=Let's Work Together&body=Hi Rob, I’d like to discuss a sound engineering project with you."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Send an Email
        </a>
      </div>
    );
  }