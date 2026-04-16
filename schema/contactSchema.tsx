import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nom requis"),
  firstname: z.string().min(2, "Prénom requis"),
  phone: z.string().min(8, "Numéro invalide"),
  email: z.string().email("Email invalide"),
  company: z.string().min(2, "Entreprise requise"),

  service: z
    .array(z.string())
    .min(1, "Choisissez au moins un service"),

  message: z.string().min(10, "Message trop court"),
});

export type ContactFormData = z.infer<typeof contactSchema>;