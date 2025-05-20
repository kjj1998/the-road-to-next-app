import { initialTickets } from "@/data";
import { Ticket, TicketStatus } from "@/features/types";

export const getTicket = async (ticketId: string): Promise<Ticket | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const maybeTicket = initialTickets.find((ticket) => ticket.id === ticketId);

  return new Promise((resolve) => {
    if (maybeTicket) {
      resolve({
        ...maybeTicket,
        status: maybeTicket.status as TicketStatus,
      });
    } else {
      resolve(null);
    }
  });
};
