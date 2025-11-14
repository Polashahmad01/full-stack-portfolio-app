"use client";

import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaTelegramPlane } from "react-icons/fa";
import { contactSchema, ContactSchema } from "@/lib/contact";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });

  const onSubmit = async (formData: ContactSchema) => {
    setLoading(true);
    try {
      const response = await axios.post("https://formspree.io/f/meojkpwr", formData);
      if (response.status !== 200) {
        throw new Error("Failed to send message");
      }
      const data = response.data;
      toast.success("Message sent successfully");
      reset();
    } catch (error) {
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-1 bg-[#171717] rounded-2xl backdrop-blur px-4 py-6 md:px-6 md:py-8"
      >
        <h3 className="font-righteous text-2xl leading-normal tracking-normal mb-4 md:text-3xl md:mb-6">Let's Talk!</h3>
        <div className="grid grid-rows-1 gap-5">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className="w-full py-2 bg-transparent border-y-0 border-t-0 border-b border-solid border-[#454547] opacity-50 transition-all outline-none focus:border-[#20bf55] focus:opacity-80"
            />
            {errors.name && <p className="text-sm text-red-400 mt-0.5">{errors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="w-full py-2 bg-transparent border-y-0 border-t-0 border-b border-solid border-[#454547] opacity-50 transition-all outline-none focus:border-[#20bf55] focus:opacity-80"
            />
            {errors.email && <p className="text-sm text-red-400 mt-0.5">{errors.email.message}</p>}
          </div>
          <div>
            <textarea
              rows={2}
              placeholder="Enter your message"
              {...register("message")}
              className="w-full bg-transparent py-3 border-y-0 border-t-0 border-b border-solid border-[#454547] opacity-50 resize-none transition-all outline-none focus:border-[#20bf55] focus:opacity-80"
            ></textarea>
            {errors.message && <p className="text-sm text-red-400 mt-0.5">{errors.message.message}</p>}
          </div>
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer flex items-center justify-center gap-2 bg-[#171717] px-2 py-1.5 md:py-2 lg:py-2.5 rounded-xl border border-solid border-[#20bf55] font-semibold text-[#20bf55] transition-all hover:bg-[#20bf55] hover:text-black"
            >
              <FaTelegramPlane className="transition-all h-5 w-5" />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </div>
        </div>
      </form>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  );
}
