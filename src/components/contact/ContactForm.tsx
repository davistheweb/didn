"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { z } from "zod";
import { nunitoFont, poppinsFont, rubikFont } from "@/lib/font";
import { submitContactForm } from "@/services/contact";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Your message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    setIsSubmitting(true);
    try {
      await submitContactForm(values);
      toast.success("Message sent", {
        description:
          "Thank you for reaching out. The DIDN team will get back to you shortly.",
      });
      reset();
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again in a few minutes.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClassName =
    "w-full rounded-md border px-4 py-3 outline-none transition-colors duration-200 placeholder:text-gray-400 focus:border-custom-blue";
  const labelClassName =
    "text-custom-blue font-semibold tracking-wide text-xs uppercase";
  const errorClassName = "mt-1 text-xs text-[#dc2626]";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      data-aos="fade-up"
      data-aos-delay="100"
      className="flex flex-col gap-6 rounded-md border border-gray-300 bg-white p-6 md:p-10"
    >
      <div className="flex flex-col gap-1">
        <h3
          className={`${nunitoFont.className} text-xl font-bold text-[#0b2f66] md:text-2xl`}
        >
          Send Us a Message
        </h3>
        <p
          className={`${poppinsFont.className} text-sm leading-relaxed text-gray-500`}
        >
          Fill out the form and we'll respond as soon as possible.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className={labelClassName}>
          Full Name
        </label>
        <input
          id="contact-name"
          type="text"
          placeholder="Your name"
          {...register("name")}
          className={`${inputClassName} ${
            errors.name ? "border-[#dc2626]" : "border-gray-300"
          } bg-gray-100/60`}
        />
        {errors.name && (
          <p className={errorClassName} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className={labelClassName}>
            Phone Number
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+234 800 000 0000"
            {...register("phone")}
            className={`${inputClassName} ${
              errors.phone ? "border-[#dc2626]" : "border-gray-300"
            } bg-gray-100/60`}
          />
          {errors.phone && (
            <p className={errorClassName} role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className={labelClassName}>
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            className={`${inputClassName} ${
              errors.email ? "border-[#dc2626]" : "border-gray-300"
            } bg-gray-100/60`}
          />
          {errors.email && (
            <p className={errorClassName} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className={labelClassName}>
          Message
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us how we can help..."
          {...register("message")}
          className={`${inputClassName} ${
            errors.message ? "border-[#dc2626]" : "border-gray-300"
          } resize-none bg-gray-100/60`}
        />
        {errors.message && (
          <p className={errorClassName} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`${rubikFont.className} flex w-fit items-center gap-2 rounded-md bg-custom-blue px-8 py-4 font-medium text-white transition-colors duration-200 hover:bg-[#0a428c] disabled:cursor-not-allowed disabled:opacity-70`}
      >
        {isSubmitting ? (
          <>
            Sending... <Loader2 size={18} className="animate-spin" />
          </>
        ) : (
          <>
            Send Message <Send size={18} />
          </>
        )}
      </button>

      <Toaster position="top-right" richColors closeButton />
    </form>
  );
};
