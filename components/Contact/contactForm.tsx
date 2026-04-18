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
import UIButton from "../ui/UIButton";

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
    <motion.div
      className="w-full space-y-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >

      {/* 🔥 BIG TITLE */}
      <div className=" md:hidden text-left space-y-3">
        <motion.h2
          className="text-6xl font-bold tracking-tight text-Black"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

      </div>

      {/* FORM / SUCCESS */}
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

          {/* COMPANY + SERVICE */}
          <div className="md:col-span-2 grid grid-cols-2 gap-x-10">
            <InputField
              name="company"
              type="text"
              label="Type d'entreprise"
              register={register}
              error={errors.company}
            />

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
            <UIButton type="submit" isLoading={isLoading}>
              Envoyer
            </UIButton>
          </div>
        </form>
      )}
    </motion.div>
  );
};