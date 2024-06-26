import Link from "next/link";
import Image from "next/image";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";

export default function Footer() {
  return (
    <footer className="border-t p-8 text-center text-gray-700 dark:text-astronaut-50 mt-16">
      <div className="md:grid grid-cols-3 items-center">
        <div className="flex justify-center items-center gap-8 md:gap-24 ">
          <Link href="https://github.com/Jhan24b" aria-label="Link to github">
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/in/anthony-torres-13591b1b5/" aria-label="Link to linkedin">
            <Linkedin />
          </Link>
        </div>
        <div className="flex flex-col gap-2">
        <div className="font-semibold">Developed by Anthony J. Torres</div>
        <p>&copy; 2024 All rights reserved</p>
        </div>
        
        <div className="flex justify-center items-center gap-8 md:gap-24 ">
          <Link href="https://github.com/Jhan24b" aria-label="Link to instagram">
            <Instagram />
          </Link>
          <Link href="https://www.linkedin.com/in/anthony-torres-13591b1b5/" aria-label="Link to facebook">
            <Facebook />
          </Link>
        </div>
      </div>
      
    </footer>
  );
}
