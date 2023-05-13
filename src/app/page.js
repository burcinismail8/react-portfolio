import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import Image from "next/image";
import devBI from "../../public/AvatarMaker.png";
export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">developed by burchin</h1>
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
          <h2 className="text-5xl py-2 text-lightCherry font-medium">
            Burchin Ismail
          </h2>
          <h3 className="text-2xl py-2">Web Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
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
        <div className="relative mt-20 mx-auto overflow-hidden bg-gradient-to-b from-lightCherry rounded-full w-80 h-80">
          <Image src={devBI} fill style={"cover"} />
        </div>
      </section>
    </main>
  );
}
