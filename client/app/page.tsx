"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const seats = [
    { taken: false },
    { taken: false },
    { taken: false },
    { taken: false },
    { taken: true },
  ];
  const [taken, setTaken] = useState(false);
  return (
    <main>
      <section>
        <div className="carousel w-full h-full">
          <div id="item1" className="carousel-item w-full relative">
            <Image
              src="/The Little Lost Dragon.png"
              width={1440}
              height={500}
              alt="Carousel-1"
              className="w-full h-full"
              loading="lazy"
            />
            <div className="body-text text-center absolute top-0 bottom-0 right-0 left-0 m-auto flex flex-col justify-center items-center">
              <h3 className="text-xs sm:text-2xl font-montserrat font-semibold mb-3 capitalize text-fourth">
                John Doe
              </h3>
              <h2 className="text-base sm:text-4xl font-montserrat font-medium mb-3 sm:mb-5 md:mb-5 capitalize">
                <span className="text-third font-raleway font-bold">
                  The Little Lost Dragon
                </span>
              </h2>
              <p className="hidden sm:block text-xs sm:text-xl font-montserrat max-w-xl font-semibold mb-3 capitalize text-fourth">
                A small, spirited dragon gets lost far from home. In his quest
                to find his way back, he encounters magical creatures and faces
                unexpected challenges.
              </p>
              <ul className="inline-flex text-xs sm:text-xl font-montserrat max-w-xl font-semibold mb-3 capitalize text-fourth">
                <li className="mx-1 sm:mx-5 hover:text-third">Adventure</li>
                <li className="mx-1 sm:mx-5">|</li>
                <li className="mx-1 sm:mx-5 hover:text-third">Fantasy</li>
                <li className="mx-1 sm:mx-5">|</li>
                <li className="mx-1 sm:mx-5 hover:text-third">Family</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 mt-[-1.8rem] sm:mt-[-2.5rem] flex items-start gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
        </div>
      </section>

      {/* {seats.map(seat => <div className={`w-10 h-10 ${taken ? "bg-red-500" : "bg-green-500"}`} onClick={() => setTaken(!taken)}></div>)} */}
    </main>
  );
}
