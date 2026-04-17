import { ReactNode } from "react";

export type AboutCardType = "bio" | "vision" | "philosophy" | "quote";

export type AboutCardTheme =
  | "dark"
  | "yellow"
  | "dark_philosophy"
  | "light";

export interface CardProps {
  id: number; // ✅ AJOUT OBLIGATOIRE
  type: AboutCardType;
  tag: string;

  content?: ReactNode;

  // IMPORTANT: on autorise ReactNode pour title + description + quote
  title?: any;
  description?: any;
  quote?: any;

  imageUrl?: string;
  theme: AboutCardTheme;
  gridSpan?: string;
}