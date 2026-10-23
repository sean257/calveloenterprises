import { CalendarDays } from "lucide-react";
import Button from "./Button";

export const BOOKING_URL = "https://calendly.com/calveloenterprises/15min";

export default function BookCallButton({
  tone = "gold",
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
      style={style}
      onClick={(event) => event.stopPropagation()}
    >
      {label}
    </Button>
  );
}
