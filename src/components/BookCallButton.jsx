import { CalendarDays } from "lucide-react";
import Button from "./Button";
import { C } from "../theme";

export const BOOKING_URL = "https://calendly.com/calveloenterprises/15min";

export default function BookCallButton({
  tone = "outlineInk",
  size = "md",
  label = "Book a 15-minute call",
  style = {},
}) {
  return (
    <Button
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      tone={tone}
      size={size}
      icon={CalendarDays}
      style={{
        ...(tone === "outlineInk" ? { border: `1px solid ${C.tealDeep}`, color: C.tealDeep } : {}),
        ...style,
      }}
      onClick={(event) => event.stopPropagation()}
    >
      {label}
    </Button>
  );
}
