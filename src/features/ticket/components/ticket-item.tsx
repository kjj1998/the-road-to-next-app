import Link from "next/link";

import { Card, CardContent, CardFooter,CardHeader, CardTitle } from "@/components/ui/card";
import { TICKET_ICONS } from "@/features/constants";
import { Ticket } from "@/features/types";
import { ticketPath } from "@/paths";

type TicketItemProps = {
  ticket: Ticket;
}

const TicketItem = ({ ticket }: TicketItemProps) => {

  return (
    <Card key={ticket.id} className="w-full max-w-[420px]">
      <CardHeader>
        <CardTitle className="flex gap-x-2">
          <span className="flex items-center">{TICKET_ICONS[ticket.status]}</span>
          <span className="truncate text-2xl font-semibold">{ticket.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <span className="line-clamp-3 whitespace-break-spaces">
          {ticket.content}
        </span>
      </CardContent>
      <CardFooter>
        <Link href={ticketPath(ticket.id)} className="text-sm underline">
          View
        </Link>
      </CardFooter>
    </Card>
  );
};

export { TicketItem};