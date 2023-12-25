import Link from "next/link";
import Image from "next/image";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // Effect to apply the dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Save to localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Effect to check for saved preference in localStorage
  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);
  return (
    <div>
      <div className="mx-auto px-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <div className="flex ">
          <div className="flex flex-col md:flex-row min-h-screen">
            <div className="fixed z-10">
              <Navigation />
            </div>
          </div>
          <main className="flex-1 flex flex-col items-center justify-start items-start">
            <div className="max-w-2xl mx-auto w-full pt-8">
              <div className="flex flex-col items-center justify-center">
                <div className="w-48 h-48 rounded-full relative">
                  <Image
                    src="/mugshotfinalmin.png"
                    layout="fill"
                    className="z-0"
                    objectFit="cover"
                  ></Image>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-6 text-center">
                Daniel Ching
              </h1>
              <div>
                <h2 className="text-lg font mb-4 text-center text-justify">
                  High school graduate from Raffles Institution (Singapore).
                  Tech enthusiast, specializing in applied ML and sports
                  science. Interested in AI, edtech and optimizing physiological
                  performance, or the intersection of these.
                </h2>
                <h2 className="text-xl font-semibold mb-4">
                  Where I'm at currently
                </h2>
                <p className="text-base mb-4 text-center text-justify">
                  Serving my time in National Service (🇸🇬) in the Navy. More
                  about my journey in{" "}
                  <Link href="/writing" className="hover:text-blue-600">
                    {" "}
                    my reflections.
                  </Link>{" "}
                  Or, watch a video series about what I went through{" "}
                  <Link
                    href="https://www.youtube.com/playlist?list=PLbOSqJKglMt2AJ-69deeKbyERniShol-9"
                    className="hover:text-blue-600"
                  >
                    {" "}
                    here (BMT)
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://www.youtube.com/watch?v=nptHm4vi-0Y&ab_channel=RepublicofSingaporeNavy"
                    className="hover:text-blue-600"
                  >
                    here (Navy OCS, Midshipmen School).
                  </Link>
                </p>
                <h2 className="text-xl font-semibold mb-4">
                  Some things I've built/done
                </h2>

                <ul className="list-disc pl-5">
                  <li>
                    <Link
                      href="https://ippttraining-danielcwq.vercel.app/"
                      className="hover:text-blue-600"
                    >
                      Running Made Simple (beta)
                    </Link>
                    : A webapp that calculates training zones and split times
                    for the 2.4km run. Built with Mok Ying Ren, Singapore's
                    (ex-)top triathlete & marathoner.
                  </li>
                </ul>
                <ul className="list-disc pl-5 mt-2 md:mt-6">
                  <li>
                    Managing UX and Product in Langchain Applications: a talk at
                    GoogleHQ, in conjunction with DataScienceSG.{" "}
                    <Link
                      href="https://docs.google.com/presentation/d/12lZrQ2gG6qEieqyHEI7lOzn1BRzkk8L0fM6etlkwb5w/edit?usp=sharing"
                      className="hover:text-blue-600"
                    >
                      (Slide deck)
                    </Link>
                  </li>
                </ul>
                <ul className="list-disc pl-5 mt-2 md:mt-6">
                  <li>
                    <Link
                      href="https://huggingface.co/spaces/danielcwq/chat-your-data-trial"
                      className="hover:text-blue-600"
                    >
                      Chat-Your-H2-Econs:
                    </Link>{" "}
                    A chatbot (own OpenAI key required) to chat with
                    comprehensive notes on the GCE A-Level H2 Economics Syllabus
                  </li>
                </ul>
                <ul className="list-disc pl-5 mt-2 md:mt-6">
                  <li>
                    ML x Health Projects using FastAI (articles):
                    <Link
                      href="https://towardsdatascience.com/under-the-hood-how-do-neural-networks-really-work-7b48b171dc8c"
                      className="hover:text-blue-600"
                    >
                      {" "}
                      Under the hood: understanding neural networks
                    </Link>
                    ,
                    <Link
                      href="https://danielching.medium.com/multi-category-classification-of-various-chest-conditions-from-chest-x-rays-1d6428522997"
                      className="hover:text-blue-600"
                    >
                      {" "}
                      Multi-categorical classification of chest conditions
                    </Link>
                    ,
                    <Link
                      href="https://towardsdatascience.com/predicting-medical-specialities-from-transcripts-a-complete-walkthrough-using-ulmfit-b8a075777723"
                      className="hover:text-blue-600"
                    >
                      {" "}
                      Medical Transcription Classifier (using ULMFiT)
                    </Link>
                  </li>
                </ul>
                <ul className="list-disc pl-5 mt-2 md:mt-6">
                  <li>
                    <Link
                      href="https://drive.google.com/drive/folders/15ly0fkBH7BY6u9ELdeBSzmKbyIhlTk0B"
                      className="hover:text-blue-600"
                    >
                      FastAI for high school students:
                    </Link>{" "}
                    A 7-lesson course incorporating real-world examples of what
                    ambitious teenagers could do with focus :).
                  </li>
                </ul>
                <ul className="list-disc pl-5 mt-2 md:mt-6">
                  <li>
                    <Link
                      href="https://dancwq2.wixsite.com/rise-project"
                      className="hover:text-blue-600"
                    >
                      RISE For The World:
                    </Link>{" "}
                    My project for the inaugural RISE Challenge (organised by
                    Schmidt Futures).
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
