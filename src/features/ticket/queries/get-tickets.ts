import { initialTickets } from "@/data";
import { Ticket, TicketStatus } from "@/features/types";

export const getTickets = async (): Promise<Ticket[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const typedTickets: Ticket[] = initialTickets.map((ticket) => ({
    ...ticket,
    status: ticket.status as TicketStatus, // Cast string to TicketStatus
  }));

  return typedTickets;
};
