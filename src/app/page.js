import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import devBI from "../../public/AvatarMaker.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";

export default function Home() {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">developedbyburchin</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-darkCherry to-lightCherry text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-lightCherry font-medium md:text-6xl">
            Burchin Ismail
          </h2>
          <h3 className="text-2xl py-2 md:text-3xl">Web Developer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
            As a web developer with a passion for innovation and attention to
            detail, I specialize in building custom websites tailored to meet
            your unique needs. With proficiency in HTML, CSS, JavaScript, and
            responsive design, I create web experiences that are both beautiful
            and user-friendly. Let's collaborate to bring your vision to life!
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillGithub />
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
        <div className="relative mt-20 mx-auto overflow-hidden bg-gradient-to-b from-lightCherry rounded-full w-80 h-80 md:h-96 md:w-96">
          <Image src={devBI} fill style={"cover"} />
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            As a front-end developer, I bring designs to life with responsive
            and interactive user interfaces. With expertise in{" "}
            <span className="text-midCherry">
              HTML, CSS, JavaScript, React and Tailwind
            </span>
            , I build exceptional websites that deliver seamless user
            experiences.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            Whether you're looking to build a new website or optimize an
            existing one, I have the skills and expertise to help you achieve
            your goals. Let's work together to bring your website to the next
            level!
          </p>
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={design} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-midCherry">Design tools I use</h4>
            <p className="text-gray-800 py1">Photshop</p>
            <p className="text-gray-800 py1">Illustrator</p>
            <p className="text-gray-800 py1">Figma</p>
            <p className="text-gray-800 py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={code} width={100} height={100} className="mx-auto" />
            <h3 className="text-lg font-medium pt-8 pb-2">
              Code your dream project
            </h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let's make it a
              reality.
            </p>
            <h4 className="py-4 text-midCherry">Coding tools I use</h4>
            <p className="text-gray-800 py1">Visual Studio</p>
            <p className="text-gray-800 py1">Visual Studio Code</p>
            <p className="text-gray-800 py1">Eclipse</p>
            <p className="text-gray-800 py-1">GitLab</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image
              src={consulting}
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-midCherry">Consulting tools I use</h4>
            <p className="text-gray-800 py1">Jira</p>
            <p className="text-gray-800 py1">Azure</p>
            <p className="text-gray-800 py1">Skype</p>
            <p className="text-gray-800 py-1">Microsoft Teams</p>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            As a front-end developer, I bring designs to life with responsive
            and interactive user interfaces. With expertise in{" "}
            <span className="text-midCherry">
              HTML, CSS, JavaScript, React and Tailwind
            </span>
            , I build exceptional websites that deliver seamless user
            experiences.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800">
            Whether you're looking to build a new website or optimize an
            existing one, I have the skills and expertise to help you achieve
            your goals. Let's work together to bring your website to the next
            level!
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1">
            <Image
              src={web1}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              responsive
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web2}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              responsive
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web3}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              responsive
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web4}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              responsive
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web5}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              responsive
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image
              src={web6}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              responsive
            />
          </div>
        </div>
      </section>
    </main>
  );
}
