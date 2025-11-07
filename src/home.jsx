// src/components/Home.jsx

import { Link } from "react-router-dom";
import Threads from "./Threads";
import { motion } from "framer-motion";
//import { Carousel, Typography, Button } from "@material-tailwind/react";
import Carousel from "./Carousel";
import { FaArrowRight, FaGoogle, FaMicrosoft, FaAmazon } from "react-icons/fa";
import { RiNetflixFill } from "react-icons/ri";
import { FaMeta } from "react-icons/fa6";
import Footer from "./Footer";
import Navbar from "./Navbar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const whyToChooseCard = [
  {
    label: "AI-Generated Practice Questions",
    icon: "🤖",
    features: [
      "Always have fresh questions to solve.",
      "AI generates new problems automatically.",
      "Choose your Topic and difficulty level.",
      "Get personalized questions every time.",
    ],
  },
  {
    label: "Smart Repetition System",
    icon: "🔄",
    features: [
      "Practice more on topics you find difficult.",
      "Strengthen your understanding with repeated practice.",
      "Improve your learning steadly over time.",
    ],
  },
  {
    label: "Daily & Weekly Contests",
    icon: "🏆",
    features: [
      "Composts with learners from across the world.",
      "Challenge yourself to climb the leaderboard.",
      "Aim for the top and track your progress.",
    ],
  },
  {
    label: "Companies",
    icon: "📊",
    features: [
      "Track your daily learning progress.",
      "Compare your performance with other learners.",
      "Stay motivated and keep Improving every day.",
    ],
  },
];
const whyToChooseDownCard = [
  {
    title: "AI-Powered Learning",
    subtitle: "Smart Adaptive System",
    icon: "🤖",
    features: ["Personalized difficulty", "Smart hints", "Progress analytics"],
  },
  {
    title: "Real-Time Collaboration",
    subtitle: "Code Together",
    icon: "🤝",
    features: ["Pair programming", "Live chat", "Code reviews"],
  },
  {
    title: "Industry Integration",
    subtitle: "Career Ready",
    icon: "🚀",
    features: ["Company partnerships", "Job referrals", "Interview prep"],
  },
];

const companies = [
  <FaAmazon />,
  <FaMicrosoft />,
  <FaGoogle />,
  <RiNetflixFill />,
  <FaMeta />,
];

let featuresColorAndText = [
  { color: "green-500", text: "Live coding sessions" },
  { color: "blue-500", text: "24/7 AI assistance" },
  { color: "purple-500", text: "Career guidance" },
];

function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="grid h-screen place-items-center bg-gray-50 text-black dark:bg-black dark:text-white overflow-hidden">
        {/* Background Threads */}
        <div className="[grid-area:1/1/2/2] w-full h-full">
          <Threads
            color={[0, 0.917, 1]}
            amplitude={0.6}
            distance={0.2}
            enableMouseInteraction={true}
          />
        </div>

        {/* Animated Content */}
        <motion.div
          className="[grid-area:1/1/2/2] flex flex-col items-center justify-center text-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="font-heading text-5xl md:text-7xl font-bold mb-5 
            text-blue-600 dark:text-[#00eaff] 
            [text-shadow:0_0_15px_rgba(0,0,0,0.2)] dark:[text-shadow:0_0_30px_rgba(0,234,255,0.9)]"
            variants={itemVariants}
          >
            Welcome To UptoSkills !
          </motion.h1>

          <motion.p
            className="font-sans max-w-2xl text-lg md:text-xl 
            text-gray-700 dark:text-slate-300 
            mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Elevate your coding skills with hands-on challenges in DSA, SQL, and
            Top Interview Questions.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              to="/Topics"
              className="font-sans no-underline px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-wider 
              inline-flex items-center gap-3 cursor-pointer transition-all duration-300
              bg-blue-200 text-blue-900 border-2 border-blue-400 shadow-[0_0_15px_rgba(0,0,0,0.1)]
              hover:scale-110 hover:shadow-[0_0_25px_rgba(0,0,0,0.2)] hover:bg-blue-300
              dark:bg-[rgba(0,234,255,0.3)] dark:text-white dark:border-[#00eaff] dark:shadow-[0_0_25px_rgba(0,234,255,0.5)]
              dark:hover:shadow-[0_0_40px_rgba(0,234,255,0.8)] dark:hover:bg-[rgba(0,234,255,0.4)]"
            >
              Get Started
              <FaArrowRight />
            </Link>
            <Link
              to={"/contest"}
              className="font-sans no-underline m-4 px-8 py-4 rounded-xl text-lg font-bold uppercase tracking-wider 
              inline-flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-110
              text-blue-900 hover:text-white bg-white hover:bg-blue-500 border-2 border-blue-400 hover:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)]"
            >
              Join a Contests
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* New Home Card Section */}
      <div className="w-full min-h-screen bg-gray-50 dark:bg-black text-black dark:text-white px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Stats Dashboard */}
          <div className="mb-16">
            <div
              className="p-6 md:p-8 rounded-2xl backdrop-blur-md transition-all duration-500 
                      bg-white/80 border border-blue-200/50 shadow-lg
                      dark:bg-gray-900/80 dark:border-cyan-400/20 dark:shadow-cyan-400/10"
            >
              <h2
                className="text-2xl md:text-3xl font-bold text-center mb-8 
                       bg-gradient-to-r from-blue-600 to-purple-600 
                       dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent"
              >
                Why Choose UptoSkills?
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
                {whyToChooseCard.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-3 md:p-2 rounded-xl w-full transition-all duration-300 
                         hover:scale-105 cursor-pointer bg-blue-50 hover:bg-blue-100 
                         border border-blue-100 dark:bg-white/5 dark:hover:bg-white/10 
                         dark:border-cyan-400/10"
                  >
                    <div className="flex space-x-1 p-2 items-center">
                      <div className="text-4xl  bg-blue-300 p-1 ">
                        {stat.icon}
                      </div>
                      <div className="text-xs md:text-sm items-center text-center font-bold text-blue-800 dark:text-cyan-400 mb-1">
                        {stat.label}
                      </div>
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-600 dark:text-gray-300">
                      <ul className="space-y-2 list-disc list-inside text-left ml-1">
                        {stat.features.map((items, ii) => (
                          <li
                            key={ii}
                            className="marker:text-blue-500 items-center  text-gray-700 dark:text-gray-300"
                          >
                            {items}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="m-auto w-full bg-white">
            <Carousel />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
