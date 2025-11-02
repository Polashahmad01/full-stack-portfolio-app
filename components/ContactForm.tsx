import { FaTelegramPlane } from "react-icons/fa";

export default function ContactForm() {
  return (
    <form className="flex-1 bg-[#171717] rounded-2xl backdrop-blur p-4 md:p-6">
      <h3 className="font-righteous text-xl leading-normal tracking-normal mb-4 md:text-2xl md:mb-6">Let's Talk!</h3>
      <div className="grid grid-rows-1 gap-5">
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full py-2 bg-transparent border-y-0 border-t-0 border-b border-solid border-[#454547] opacity-50 transition-all outline-none focus:border-[#20bf55] focus:opacity-80"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full py-2 bg-transparent border-y-0 border-t-0 border-b border-solid border-[#454547] opacity-50 transition-all outline-none focus:border-[#20bf55] focus:opacity-80"
          />
        </div>
        <div>
          <textarea
            rows={2}
            placeholder="Enter your message"
            className="w-full bg-transparent py-3 border-y-0 border-t-0 border-b border-solid border-[#454547] opacity-50 resize-none transition-all outline-none focus:border-[#20bf55] focus:opacity-80"
          ></textarea>
        </div>
        <div>
        <button
          type="submit"
          className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#171717] px-2 py-1.5 rounded-xl border border-solid border-[#20bf55] font-semibold text-[#20bf55] transition-all hover:bg-[#20bf55] hover:text-black"
        >
          <FaTelegramPlane className="transition-all h-5 w-5" />
          <span>Send Message</span>
        </button>
        </div>
      </div>
    </form>
  );
}
