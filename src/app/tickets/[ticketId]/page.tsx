import Link from "next/link";

import { Placeholder } from "@/components/placeholder";
import { Button } from "@/components/ui/button";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { TicketStatus } from "@/features/types";
import { ticketsPath } from "@/paths";

type TicketPageProps = {
  params: Promise<{
    ticketId: string
  }>;
}

const TicketPage = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  if (!ticket) {
    return (
      <div className="flex-1 flex">
        <Placeholder
          label="Ticket not found"
          button={
            <Button asChild variant="outline">
              <Link href={ticketsPath()}>Go back to tickets</Link>
            </Button>
          }
        />
        <Placeholder label="Ticket not found"/>
      </div>
      
    );
  }

  return (
    <div className="flex justify-center animate-fade-in-from-top">
      <TicketItem ticket={{ ...ticket, status: ticket.status as TicketStatus }} isDetail={true} />
    </div>
  );
};

export default TicketPage;