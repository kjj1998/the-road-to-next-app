import { notFound } from "next/navigation";

import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";

import { TicketStatus } from "../../../generated/prisma/client";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem
        ticket={{ ...ticket, status: ticket.status as TicketStatus }}
        isDetail={true}
      />
    </div>
  );
};

export default TicketPage;
