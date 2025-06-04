import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";

export const TICKET_ICONS = {
  OPEN: <LucideFileText />,
  IN_PROGRESS: <LucidePencil />,
  CLOSED: <LucideCircleCheck />,
};

export const TICKET_STATUS_LABELS = {
  OPEN: "Open",
  CLOSED: "Closed",
  IN_PROGRESS: "In Progress",
};
