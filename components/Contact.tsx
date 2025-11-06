import Link from "next/link";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook, FaLinkedin, FaSquareWhatsapp } from "react-icons/fa6";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section id="contact-me" className="px-4 py-8 lg:max-w-6xl lg:mx-auto">
      <h1 className="font-righteous text-center text-2xl leading-normal tracking-normal mb-8 md:mb-12 lg:mb-14 md:text-3xl lg:text-4xl">Contact Me</h1>
      <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16">
        <article className="flex-1">
          <h3 className="font-righteous text-xl leading-normal tracking-normal mb-4 md:text-2xl md:mb-6">Let's Get In Touch!</h3>
          <p className="text-sm leading-normal tracking-normal mb-4">
            If you're interested in learning more about me, collaborating on a project, or simply curious
            and want to say hello, please don't hesitate to send me a message.
            I enjoy receiving messages from people on the internet!
          </p>
          <div className="w-full h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent mb-4" />
          <p className="font-righteous leading-normal tracking-normal mb-2 md:text-lg">Follow Me</p>
          <div className="flex flex-wrap items-center gap-2">
            <Link href="https://www.facebook.com/polashahmad01" target="_blank" className="transition-all">
              <FaSquareFacebook className="transition-all hover:text-[#20bf55] h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="https://twitter.com/polashahmad01" target="_blank" className="transition-all">
              <FaTwitterSquare className="transition-all hover:text-[#20bf55] h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/polashahmad01" target="_blank" className="transition-all">
              <FaLinkedin className="transition-all hover:text-[#20bf55] h-5 w-5 md:h-6 md:w-6" />
            </Link>
            <Link href="https://wa.me/+8801795186140" target="_blank" className="transition-all">
              <FaSquareWhatsapp className="transition-all hover:text-[#20bf55] h-5 w-5 md:h-6 md:w-6" />
            </Link>
          </div>
        </article>
        <ContactForm />
      </div>
    </section>
  );
}
