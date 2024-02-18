import { ReactNode } from "react";

export enum EnumText {
  ADDRESS = "123 STREET NAME, CITY, ENGLAND",
  PHONE = "(123) 456-7890",
  EMAIL = "MAIL@EXAMPLE.COM",
  WORKING_DAYS_HOURS = "MON - SUN / 9:00AM - 8:00PM",
  SECTION_PREVIEW_TEXT = "SUMMER SALE GET 30% OFF ON ALL DRESS.",
}

export interface SomeInterface {
  type: string;
}

export interface BtnProps {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
  children?: ReactNode;
  active?: boolean;
}
