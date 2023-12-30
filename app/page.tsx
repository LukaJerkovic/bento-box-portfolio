'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Linkedin, Github, Car } from 'lucide-react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();

  const animateSections = async () => {
    await controlsLeft.start({
      opacity: [0, 1],
      x: [150, 0],
      transition: { duration: 0.7 },
    });

    await controlsRight.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7 },
    });
  };

  useEffect(() => {
    animateSections();
  }, []);

  const projects = [
    {
      Image: '/Gericht.png',
      url: 'https://lukajerkovic.github.io/restaurantwebsite/',
    },
    { Image: '/gpt-3.png', url: 'https://lukajerkovic.github.io/gpt3_luka/' },
    {
      Image: '/Hoobank.png',
      url: 'https://lukajerkovic.github.io/bank_modern_app/',
    },
    {
      Image: '/metaversus.png',
      url: 'https://metaversus-4xprlpag8-lukajerkovic.vercel.app/',
    },
  ];

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
          className="sm:w-1/2 lg:w-full bg-white m-2 rounded-3xl p-4 lg:p-8 border-4 border-[#AD343E]"
          animate={controlsLeft}
        >
          <div className="lg:w-full sm:w-1/2 bg-white flex flex-col items-start p-4">
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
          <div className="bg-white flex-grow m-2 rounded-3xl p-4 lg:p-8 border-4 border-[#AD343E] flex flex-col items-center justify-center">
            <h2 className="text-2xl lg:text-3xl text-center lg:mb-12">
              Explore my projects and don&apos;t hesitate to get in touch if
              you&apos;re interested in collaborating.
            </h2>
          </div>
          <div className="bg-white flex-grow m-2 rounded-3xl p-4 lg:p-8 border-4 border-[#AD343E] flex flex-col items-center justify-center">
            <p className="text-lg lg:text-2xl leading-relaxed">
              find me on social media:
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

      <section
        id="projects"
        className="flex flex-col justify-center items-center relative"
      >
        <h1 className="text-white mb-4 text-2xl lg:text-5xl font-semibold">
          Some of my projects :
        </h1>
        <Carousel
          opts={{
            align: 'center',
          }}
          className="w-full max-w-screen-2xl"
        >
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card className="h-64 md:h-96 rounded-3xl border-4 border-[#AD343E] overflow-hidden">
                    <CardContent className="h-full relative">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full w-full"
                      >
                        <Image
                          src={project.Image}
                          alt={`Project ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-3xl"
                        />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section
        id="#contact"
        className="flex flex-col sm:flex-row flex-grow p-8 m-0 mt-0 items-center justify-center"
      >
        <div className="sm:w-1/2 lg:w-full bg-white m-2 rounded-3xl p-4 lg:p-8 border-4 border-[#AD343E] flex flex-col items-center">
          <div className="text-#0C1B33 text-center">
            <h1 className="mt-8 text-2xl lg:text-5xl font-semibold">
              Let&lsquo;s Connect!
            </h1>
            <p className="mt-4 text-[] text-lg lg:text-xl leading-relaxed">
              I&apos;m open to new opportunities, collaborations, and exciting
              projects! Whether you have an idea in mind, want to discuss
              potential collaborations, or just want to say hello, feel free to
              drop me a message. I&apos;d love to hear from you!
            </p>
            <a
              href="mailto:lujerkovic@gmail.com"
              className="w-full flex justify-center"
            >
              <Button className="w-64 lg:h-16 rounded-3xl m-4 p-4 text-lg lg:hover:scale-125 bg-[#AD343E] lg:hover:bg-[#AD343E]">
                Send a Message
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
