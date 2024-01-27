import Link from "next/link";
import Image from "next/image";
import Github from "../icons/Github";
import Linkedin from "../icons/Linkedin";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";

export default function Footer() {
  return (
    <footer className="border-t p-8 text-center text-gray-500 mt-16">
      <div className="md:grid grid-cols-3 items-center">
        <div className="flex justify-center items-center gap-8 md:gap-24 ">
          <Link href="https://github.com/Jhan24b">
            <Github />
          </Link>
          <Link href="https://www.linkedin.com/in/anthony-torres-13591b1b5/">
            <Linkedin />
          </Link>
        </div>
        <div className="font-semibold">Developed by Anthony J. Torres</div>
        <div className="flex justify-center items-center gap-8 md:gap-24 ">
          <Link href="https://github.com/Jhan24b">
            <Instagram />
          </Link>
          <Link href="https://www.linkedin.com/in/anthony-torres-13591b1b5/">
            <Facebook />
          </Link>
        </div>
      </div>
      &copy; 2024 All rights reserved
    </footer>
  );
}
