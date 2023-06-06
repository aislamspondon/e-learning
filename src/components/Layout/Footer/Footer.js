import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-gray-primary h-max pt-5 lg:pt-10 text-black ">
      <div className="container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-content-start">
        <div className="flex flex-col items-start">
          <Link href={"/online-course"}>
            <h3 className="text-xl-1 ">Online Course</h3>
          </Link>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"/online-course#live-online-classes"}>
                Live Online Classes
              </Link>
            </li>
            <li>
              <Link href={"/online-course#self-study"}>Self-study online</Link>
            </li>
            <li>
              <Link href={"/online-course#personal-tutoring"}>
                Personal Online Tutoring
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <Link className="" href={"/skills"}>
            {" "}
            <h3 className="text-xl-1 ">Skills</h3>
          </Link>

          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"/skills/listening"}>Listening</Link>
            </li>
            <li>
              <Link href={"/skills/reading"}>Reading</Link>
            </li>
            <li>
              <Link href={"/skills/speaking"}>Speaking</Link>
            </li>
            <li>
              <Link href={"/skills/writing"}>Writing</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <Link href={"/grammar"}>
            <h3 className="text-xl-1 ">Grammar</h3>
          </Link>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"/grammar#a1-a2-grammar"}>A1-A2 Grammar</Link>
            </li>
            <li>
              <Link href={"/grammar#b1-b2-grammar"}>B1-B2 Grammar</Link>
            </li>
            <li>
              <Link href={"/grammar#english-grammar-reference"}>
                English grammar reference
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <Link href={"/vocabulary"}>
            <h3 className="text-xl-1 ">Vocabulary</h3>
          </Link>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"/vocabulary#a1-a2-vocabulary"}>
                A1-A2 Vocabulary
              </Link>
            </li>
            <li>
              <Link href={"/vocabulary#b1-b2-vocabulary"}>
                B1-B2 Vocabulary
              </Link>
            </li>
            <li>
              <Link href={"/vocabulary#vocabulary-games"}>
                Vocabulary games
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <Link href={"/general-english"}>
            <h3 className="text-xl-1 ">General English</h3>
          </Link>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"/general-english#apps"}>Apps</Link>
            </li>
            <li>
              <Link href={"/general-english#audio-series"}>Audio series</Link>
            </li>
            <li>
              <Link href={"/general-english#audio-zone"}>Audio zone</Link>
            </li>
            <li>
              <Link href={"/general-english#community-events"}>
                Community Events
              </Link>
            </li>
            <li>
              <Link href={"/general-english#learn-english-webinars"}>
                Learn english webinars
              </Link>
            </li>
            <li>
              <Link href={"/general-english#magazine-zone"}>Magazine zone</Link>
            </li>
            <li>
              <Link href={"/general-english#story-zone"}>Story zone</Link>
            </li>
            <li>
              <Link href={"/general-english#video-series"}>Video Series</Link>
            </li>
            <li>
              <Link href={"/general-english#video-zone"}>Video zone</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <Link href={"/english-levels"}>
            <h3 className="text-xl-1 ">English Levels</h3>
          </Link>
          <ul className="p-1 text-xs flex flex-col gap-3 mt-4">
            <li>
              <Link href={"/english-levels#improve"}>
                Improve Your English Level
              </Link>
            </li>
            <li>
              <Link href={"/english-levels#online-test"}>
                Online English level test
              </Link>
            </li>

            <li>
              <Link href={"/english-levels#understand"}>
                Understand your English level
              </Link>
            </li>
          </ul>
          <p className="text-sm font-semibold mt-10">Address</p>
          <p className=" text-xs flex flex-col gap-3 mt-4">
            2972 Westheimer Rd. Santa Ana, Illinois 85486, Thailand
          </p>
        </div>
      </div>
      <p className="text-xs text-[#777777] text-center pt-10">
        © All Copyrights Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
