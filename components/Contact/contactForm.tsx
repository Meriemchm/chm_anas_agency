"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactFormData, contactSchema } from "@/schema/contactSchema";
import InputField from "../ui/InputField";
import MultiSelect from "../ui/MultiSelect";
import SuccessState from "../ui/SuccessState";
import { ContactFields, ServicesSelect } from "@/data/ContactData";

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);

      await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Erreur envoi:", error);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <motion.div className="w-full space-y-12">
      {isSubmitted ? (
        <SuccessState
          onReset={() => {
            setIsSubmitted(false);
            reset();
          }}
        />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10"
        >
          {/* NOM / PRENOM / TEL / EMAIL */}
          {ContactFields.slice(0, 4).map((field) => (
            <InputField
              key={field.name}
              name={field.name}
              type={field.type}
              label={field.label}
              register={register}
              error={errors[field.name]}
            />
          ))}

          {/* ROW : COMPANY + SERVICE */}
          <div className="md:col-span-2 grid grid-cols-2 gap-x-10">
            {/* TYPE ENTREPRISE */}
            <InputField
              name="company"
              type="text"
              label="Type d'entreprise"
              register={register}
              error={errors.company}
            />

            {/* MULTI SELECT */}
            <Controller
              name="service"
              control={control}
              defaultValue={[]}
              render={({ field }) => (
                <MultiSelect
                  options={ServicesSelect}
                  value={field.value}
                  onChange={field.onChange}
                  error={errors.service?.message}
                />
              )}
            />
          </div>

          {/* MESSAGE */}
          <div className="md:col-span-2">
            <InputField
              name="message"
              textarea
              label="Message..."
              register={register}
              error={errors.message}
            />
          </div>

          {/* BUTTON */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={isLoading}
              className="
                bg-[#FFF083] text-black
                px-12 py-4
                rounded-full text-sm font-medium
                shadow-sm
                hover:shadow-md
                transition
                disabled:opacity-50
              "
            >
              {isLoading ? "Envoi..." : "Envoyer"}
            </button>
          </div>
        </form>
      )}
    </motion.div>
  );
};
