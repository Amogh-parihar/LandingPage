import { useState, useRef, useEffect } from "react";

export default function FeeddbackFloating() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <div className="relative inline-block" ref={popupRef}>
      {/* Feedback Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="text-orange-600 hover:text-white bg-white hover:bg-orange-600 px-4 py-3 shadow-xl rounded-full font-semibold transition"
      >
        Give Feedback
      </button>

      {/* Floating Popup */}
      {open && (
        <div className="absolute left-38 bottom-0  w-full">
          <div className="relative backdrop-blur-xl bg-white dark:bg-gray-800/80 border border-white/30 dark:border-gray-700/50 rounded-2xl shadow-2xl p-4 w-89 text-gray-800 dark:text-gray-100">
            {/* Arrow */}
            <div className="absolute left-[-6px]  bottom-4 w-3 h-3 rotate-45 bg-white/100 dark:bg-gray-800/80 border-l border-b border-white/30 dark:border-gray-700/50"></div>

            <h3 className="text-lg font-semibold mb-2 text-center">
              Share Your Feedback
            </h3>

            {submitted ? (
              <p className="text-green-600 dark:text-green-400 text-center">
                ✅ Thank you for your feedback!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                {/*<input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/40 placeholder-gray-500 dark:placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/40 placeholder-gray-500 dark:placeholder-gray-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm"
                />*/}
                <div className="flex">
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Write your feedback..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/40 placeholder-gray-500 dark:placeholder-gray-300 focus:ring-1 focus:ring-blue-500 outline-none resize-none text-sm"
                  ></textarea>
                  <button
                    type="submit"
                    className=" bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-md text-sm font-medium transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
