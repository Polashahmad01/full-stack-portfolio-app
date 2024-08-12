"use client";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Righteous } from "next/font/google";
import { FaTelegramPlane } from "react-icons/fa";

const righteous = Righteous({ subsets: ["latin"], weight: ["400"] });

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("https://formspree.io/f/mwpebrpn", data);
      setFormStatus(response?.data);
      reset();
    } catch (error) {
      setFormStatus(error?.message);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#171717] rounded-2xl backdrop-blur px-8 py-8 lg:px-10 lg:py-14"
    >
      <h4 className={`${righteous.className} text-3xl lg:text-5xl mb-10 opacity-85`}>Let&#39;s Talk!</h4>
      <div className="grid grid-rows-1 gap-10">
        <div className="w-full">
          <input
            type="text"
            placeholder="Enter your name"
            className="py-[12px] bg-transparent border-y-0 border-t-0 border-b-[1px] border-solid border-[#454547] w-full opacity-50 transition-all outline-none focus:border-[#20bf55] focus:opacity-80"
            {...register("name", { required: true })}
          />
          {errors.name && <span className="block mt-2 font-light opacity-70 text-red-600">{errors.name.message || "Name is required"}</span>}
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="py-[12px] bg-transparent border-y-0 border-t-0 border-b-[1px] border-solid border-[#454547] w-full opacity-50 transition-all outline-none focus:border-[#20bf55] focus:opacity-80"
            {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
          />
          {errors.email && <span className="block mt-2 font-light opacity-70 text-red-600">{errors.email.message || "Invalid email format"}</span>}
        </div>
        <div className="w-full">
          <textarea
            rows={1}
            placeholder="Enter your message"
            className="py-[12px] bg-transparent border-y-0 border-t-0 border-b-[1px] border-solid border-[#454547] w-full opacity-50 resize-none transition-all outline-none focus:border-[#20bf55] focus:opacity-80"
            {...register("message", { required: true })}
          >
          </textarea>
          {errors.message && <span className="block mt-2 font-light opacity-70 text-red-600">{errors.message.message || "Message is required"}</span>}
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="px-4 py-[14px] w-full flex items-center justify-center gap-2 bg-[#171717] rounded-xl border border-solid border-[#20bf55] font-semibold text-[#20bf55] transition-all hover:bg-[#20bf55] hover:text-black"
          >
            <FaTelegramPlane size="20px" />
            <span>Send Message</span>
          </button>
          {formStatus?.ok && <p className="mt-4 text-center text-green-600 font-light opacity-80">Your submission has been successfully received.</p>}
        </div>
      </div>
    </form>
  );
}
