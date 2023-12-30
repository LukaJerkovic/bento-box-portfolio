'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Linkedin, Github } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  const animateSections = async () => {
    await controlsLeft.start({
      opacity: [0, 1],
      x: [150, 0],
      transition: { duration: 1 },
    });

    await controlsRight.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    });
  };

  useEffect(() => {
    animateSections();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-[#0C1B33]">
      <motion.nav>
        <Navbar />
      </motion.nav>
      <section
        id="home"
        className="flex flex-col sm:flex-row flex-grow p-8 m-0 mt-0"
      >
        <motion.div
          className="sm:w-1/2 lg:w-full bg-[#F5FBEF] m-2 rounded-3xl p-4 lg:p-8 border-4 border-[#AD343E]"
          animate={controlsLeft}
        >
          <div className="lg:w-full sm:w-1/2 bg-[#F5FBEF] flex flex-col items-start p-4">
            <Image
              src="/profile.jpeg"
              width={200}
              height={200}
              className="rounded-full mb-2"
              alt="profile"
            />
            <h1 className="mt-8 text-2xl lg:text-5xl font-semibold">
              Developer passionate about building user-friendly websites.
            </h1>
            <p className="mt-4 text-xl lg:text-3xl leading-relaxed">
              Focused on continuous learning and skill improvement in web
              development. Passionate about engaging in collaborative projects
              and seeking mentorship opportunities to broaden knowledge and
              expertise in the ever-evolving landscape of web development.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-full sm:w-1/2 flex flex-col"
          initial={{ opacity: 0, x: 100 }}
          animate={controlsRight}
        >
          <div className="bg-[#F5FBEF] flex-grow m-2 rounded-3xl p-4 lg:p-8 border-4 border-[#AD343E] flex flex-col items-center justify-center">
            <h2 className="text-2xl lg:text-3xl text-center lg:mb-12">
              Explore my projects and don&apos;t hesitate to get in touch if
              you&apos;re interested in collaborating.
            </h2>
            <Button className="w-64 lg:h-16 rounded-3xl m-4 p-4 text-lg lg:hover:scale-125 bg-[#AD343E] lg:hover:bg-[#AD343E]">
              Send a Message
            </Button>
          </div>
          <div className="bg-[#F5FBEF] flex-grow m-2 rounded-3xl p-4 lg:p-8 border-4 border-[#AD343E] flex flex-col items-center justify-center">
            <p className="text-lg lg:text-2xl leading-relaxed">
              or find me on social media:
            </p>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://www.linkedin.com/in/lujerkovic/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-8 h-8 lg:w-12 lg:h-12" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/LukaJerkovic"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-8 h-8 lg:w-12 lg:h-12" />
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
