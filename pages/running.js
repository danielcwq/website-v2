import Navigation from "../components/Navigation";
import Link from "next/link";

const Writing = () => {
  return (
    <div className="bg-white px-4 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="fixed">
        <Navigation />
      </div>
      <main className="flex-1 flex flex-col items-center justify-start items-start">
        <div className="max-w-2xl mx-auto w-full pt-8">
          <h1 className="text-xl font-bold mb-6 text-center">Running</h1>
          <p>
            I coach on a voluntary basis—anywhere from the 1500m up to the 10km
            distance. Of course, I'm not officially (IAAF) recognized, this is
            more of a side hobby. In high school, I used to run competitively
            for Raffles Institution (800m/ cross country).
          </p>
          <p className="mt-5">
            I read up on sports science research papers in my free time, so feel
            free to contact me if you want to bounce ideas. I have a working
            list of ideas that I'm thinking about here. You can find my Strava
            here.
          </p>
          <div>
            <h2 className="text-xl font-semibold my-4">
              Some things I've created
            </h2>
            <ul className="list-disc pl-5">
              <li>
                <Link
                  href="https://danielching.substack.com/p/from-sojourner-to-soldier"
                  className="hover:text-blue-600"
                >
                  2.4km Training Guide (top google search result)
                </Link>
                : A comprehensive, detailed guide on acing the 2.4km run test,
                targetted towards beginners.
              </li>
            </ul>
            <ul className="list-disc pl-5 mt-2 md:mt-6">
              <li>
                <Link
                  href="https://danielching.substack.com/p/2022-wrapped"
                  className="hover:text-blue-600"
                >
                  Preventing Overtraining: Achieving Sustainable Growth
                </Link>
              </li>
            </ul>{" "}
            <ul className="list-disc pl-5 mt-2 md:mt-6">
              <li>
                <Link
                  href="https://danielching.substack.com/p/2022-wrapped"
                  className="hover:text-blue-600"
                >
                  An all-in-one running calculator for zonal training using
                  paces.
                </Link>
              </li>
            </ul>{" "}
            <ul className="list-disc pl-5 mt-2 md:mt-6">
              <li>
                <Link
                  href="https://danielching.substack.com"
                  className="hover:text-blue-600"
                >
                  Running Made Simple
                </Link>
              </li>
            </ul>
            <h2 className="text-lg font-semibold mt-4">
              The following people do the best job at explaining physiological
              concepts on Twitter-
            </h2>
            <ul className="list-disc pl-5 mt-2 md:mt-4">
              <li>Dr Scott Carlin</li>
            </ul>
            <ul className="list-disc pl-5 mt-2 md:mt-4">
              <li>Brady Holmer</li>
            </ul>
            <ul className="list-disc pl-5 mt-2 md:mt-4">
              <li>Daniel Rowland</li>
            </ul>
            <ul className="list-disc pl-5 mt-2 md:mt-4">
              <li>Stephen Seiler</li>
            </ul>
            <ul className="list-disc pl-5 mt-2 md:mt-4">
              <li>Alan Couzens</li>
            </ul>
            <ul className="list-disc pl-5 mt-2 md:mt-4">
              <li>Marco Altini</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Writing;
