"use client";

import React from 'react';
import CountUp from 'react-countup';

const stats = [
  {
    num: 2,
    text: "Years of Experience",
  },
  {
    num: 33,
    text: "Projects Completed",
  },
  {
    num: 12,
    text: "Knowledge Technologies",
  },
  {
    num: 185,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            const words = item.text.split(' ');
            const lastWord = words.pop();
            const firstPart = words.join(' ');

            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl xl:text-6xl font-extrabold"
                />

                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {firstPart} <span className="text-accent">{lastWord}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
