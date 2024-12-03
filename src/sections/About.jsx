import { SiTailwindcss } from "react-icons/si"; 
import { TbBrandThreejs } from "react-icons/tb"; 
import { DiReact } from "react-icons/di"; 
import { CgFigma } from "react-icons/cg"; 
import { AiFillHtml5 } from "react-icons/ai"; 
import { SiAdobeaftereffects } from "react-icons/si"; 
import { BsUnity, BsFiletypeJsx } from "react-icons/bs"; 
import { SiAseprite } from "react-icons/si"; 
import { DiIllustrator, DiPhotoshop } from "react-icons/di"; 
import { motion } from "framer-motion";
import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [-10, 10], // Up-and-down effect
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
});

// Technologies Component
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl"></h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-cyan-1000 p-4">
          <SiAseprite className="text-5xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPhotoshop className="text-5xl text-blue-400"/>
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiIllustrator className="text-5xl text-orange-400"/>
        </motion.div>
        <motion.div variants={iconVariants(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <BsFiletypeJsx className="text-5xl text-blue-400"/>
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <BsUnity className="text-5xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(3.2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiAdobeaftereffects className="text-5xl text-purple-400"/>
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiFillHtml5 className="text-5xl text-orange-400"/>
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <CgFigma className="text-5xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandThreejs className="text-5xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiReact className="text-5xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-5xl text-cyan-400"/>
        </motion.div>
      </div>
    </div>
  );
};



// About Component
const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('stjhingtio@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/sunbertustjhingtio/', '_blank'); // Correct Instagram URL
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/School.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I'm Sunbertus Tjhing Tio</p>
              <p className="grid-subtext">
                I'm an Undergraduate From Bina Nusantara University Indonesia As an undergraduate 
                studying front-end development and 3D web design, I'm eager to learn and grow my skills in creating engaging online experiences. I'm passionate about blending creativity and technology to design visually appealing and interactive digital environments.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div>
              <p className="grid-headtext">Front End Developer</p>
              <p className="grid-subtext">
                My expertise in a variety of languages, this are the tools that's been helping me develop efficient Website.
              </p>
              <Technologies /> {/* Call the Technologies component */}
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Indonesia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m From Indonesia,Jakarta</p>
              <p className="grid-subtext">click here to contact me for more information.</p>
              <Button 
                name="Click here" 
                onClick={handleInstagramClick} 
                containerClass="w-full mt-10" 
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Designing Web</p>
              <p className="grid-subtext">
              "I'm passionate about designing websites that blend creativity with functionality. I enjoy crafting visually appealing and user-friendly interfaces, ensuring that each design not only looks great but also delivers an intuitive user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">stjhingtio@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
