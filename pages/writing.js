import Navigation from "../components/Navigation";
import Link from "next/link";
import { useState, useEffect } from "react";

const Writing = () => {
  return (
    <div className="bg-white px-4 dark:bg-gray-800 text-gray-900 dark:text-white min-h-screen w-full">
      <div className="fixed">
        <Navigation />
      </div>
      <main className="flex-1 flex flex-col items-center justify-start items-start">
        <div className="max-w-2xl mx-auto w-full pt-8">
          <h1 className="text-xl font-bold mb-6 text-center">Writing</h1>
          <p>
            Mainly write reflections (every half a year) and technical pieces
            when I have the time.
          </p>
          <div>
            <h2 className="text-xl font-semibold my-4">Reflections</h2>
            <ul className="list-disc pl-5">
              <li>
                <Link
                  href="https://danielching.substack.com/p/from-sojourner-to-soldier"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  From Sojourner to Soldier (Jan - June 2023)
                </Link>
                : Details my experiences in BMT and New York
              </li>
            </ul>
            <ul className="list-disc pl-5 mt-2 md:mt-6">
              <li>
                <Link
                  href="https://danielching.substack.com/p/2022-wrapped"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  2022 Wrapped: Lessons learnt from high school in Singapore
                </Link>
              </li>
            </ul>{" "}
            <ul className="list-disc pl-5 mt-2 md:mt-6">
              <li>
                <Link
                  href="https://danielching.notion.site/On-faith-as-a-JC-student-425147eec72748d280659972b7429219?pvs=4"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  On faith as a JC student
                </Link>
              </li>
            </ul>{" "}
            <ul className="list-disc pl-5 mt-2 md:mt-6">
              <li>
                <Link
                  href="https://danielching.substack.com"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  More reflections on Substack
                </Link>
              </li>
            </ul>
            <h2 className="text-xl font-semibold mt-4">Other pieces</h2>
            <ul className="list-disc pl-5 mt-2 md:mt-6">
              <li>
                <Link
                  href="https://medium.com/@danielching/surviving-jc-finding-purpose-having-perspective-being-grounded-d48eb9ef54a0"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  Surviving JC: finding purpose, being grounded
                </Link>
              </li>
            </ul>
            <ul className="list-disc pl-5 mt-2 md:mt-6">
              <li>
                <Link
                  href="https://medium.com/educere/the-power-of-range-6bcadb3980fb"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  The Power of Range
                </Link>
              </li>
            </ul>
            <ul className="list-disc pl-5 mt-2 md:mt-6">
              <li>
                <Link
                  href="https://medium.com/studentsxstudents/a-teenagers-foray-into-the-world-of-artificial-intelligence-868e5145ab92"
                  target="_blank"
                  className="hover:text-blue-600"
                >
                  A Teenager's Foray into the World of AI
                </Link>
              </li>
            </ul>
            <ul className="list-disc pl-5 mt-2 md:mt-6">
              <li>
                <Link
                  href="https://medium.com/@danielching"
                  className="hover:text-blue-600"
                >
                  More pieces on Medium
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Writing;
