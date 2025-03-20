"use client";
import React, { useState } from "react";
import MainTitle from "@/components/ui/mainTitle/MainTitle";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SuccessModal from "@/components/ui/succesModal/SuccessModal";
import emailjs from "@emailjs/browser";
export default function GetInTouch() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  //err
  const [errors, setErrors] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [reset, setReset] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when the user starts typing
  };

  const validate = () => {
    const newErrors: typeof errors = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!form.first_name.trim()) {
      newErrors.first_name = "First name is required.";
    }
    if (!form.last_name.trim()) {
      newErrors.last_name = "Last name is required.";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    // Check if there are no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .send(
          "service_rvd5l09",
          "template_kjpf7z6",
          { ...form },
          // (formDataRef as any).current,
          {
            publicKey: "mmvQoWw6QlVzJ7kry",
          }
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
          },
          (error) => {
            console.error("Failed to send email:", error.text);
          }
        );
      setForm({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
      });
      setReset(true);
      setTimeout(() => {
        setReset(false);
      }, 2000);
      // Add form submission logic here
    } else {
      console.log("Validation failed.");
    }
  };

  return (
    <div className="mx-4 w-full md:mx-0 md:w-[512px]">
      <MainTitle />
      <form className="flex flex-col gap-5 mt-12" onSubmit={handleSubmit}>
        <div className="flex gap-8 flex-col lg:flex-row">
          {/* First Name */}
          <div
            className="relative w-full lg:w-[240px]"
            data-aos="fade-right"
            data-aos-delay="350"
            data-aos-offset="0"
          >
            <label
              htmlFor="first_name"
              className="block mb-2 font-medium text-[var(--label-form-color)]"
            >
              Prénom
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={form.first_name}
              onChange={handleChange}
              className="text-[var(--placeholder-text-color)] text-base rounded-lg block w-full p-2.5 border"
              placeholder="Prénom"
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
            )}
          </div>

          {/* Last Name */}
          <div
            className="relative w-full lg:w-[240px]"
            data-aos="fade-left"
            data-aos-delay="350"
            data-aos-offset="0"
          >
            <label
              htmlFor="last_name"
              className="block mb-2 font-medium text-[var(--label-form-color)]"
            >
              Nom de famille
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={form.last_name}
              onChange={handleChange}
              className="text-[var(--placeholder-text-color)] text-base rounded-lg block w-full p-2.5 border"
              placeholder="Nom de famille"
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div
          className="relative"
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-offset="0"
        >
          <label
            htmlFor="email"
            className="block mb-2 font-medium text-[var(--label-form-color)]"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={
              "text-[var(--placeholder-text-color)] text-base rounded-lg block w-full p-2.5 border"
            }
            placeholder="you@company.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div
          className="relative z-10"
          data-aos="fade-up"
          data-aos-delay="550"
          data-aos-offset="0"
        >
          <label
            htmlFor="phone"
            className="block mb-2 font-medium text-[var(--label-form-color)]"
          >
            Numéro de téléphone
          </label>
          <PhoneInput
            country={"us"}
            value={form.phone}
            onChange={(value: string) =>
              handleChange({
                target: { name: "phone", value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            inputProps={{
              name: "phone",
              required: true,
            }}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Message */}
        <div
          className="relative"
          data-aos="fade-up"
          data-aos-delay="650"
          data-aos-offset="0"
        >
          <label
            htmlFor="message"
            className="block mb-2 font-medium text-[var(--label-form-color)]"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            name="message"
            value={form.message}
            onChange={handleChange}
            className="text-[var(--placeholder-text-color)] text-base rounded-lg block w-full p-2.5 border border-[var(--border-inputs-color)]"
            placeholder="Laissez-nous un message..."
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <input
          data-aos="fade-up"
          data-aos-delay="750"
          data-aos-offset="0"
          type="submit"
          value="Envoyez votre demande"
          className="px-4 py-3 mt-3 bg-[var(--main-red)] text-white rounded-3xl font-semibold cursor-pointer"
        />
      </form>
      {reset && <SuccessModal />}
    </div>
  );
}
