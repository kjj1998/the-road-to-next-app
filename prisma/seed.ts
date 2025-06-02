import { PrismaClient, TicketStatus } from "../src/generated/prisma/client";

const prisma = new PrismaClient();

const tickets = [
  {
    title: "Ticket 1",
    content: "This is the first ticket from the database.",
    status: "CLOSED",
    deadline: "2024-12-31",
    bounty: 100,
  },
  {
    title: "Ticket 2",
    content: "This is the second ticket from the database.",
    status: "OPEN",
    deadline: "2024-12-31",
    bounty: 200,
  },
  {
    title: "Ticket 3",
    content: "This is the third ticket from the database.",
    status: "IN_PROGRESS",
    deadline: "2024-12-31",
    bounty: 300,
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log("DB Seed: Started ....");

  await prisma.ticket.deleteMany();

  const promises = tickets.map((ticket) =>
    prisma.ticket.create({
      data: { ...ticket, status: ticket.status as TicketStatus },
    })
  );

  await Promise.all(promises);

  const t1 = performance.now();
  console.log(`DB Seed: Finished (${t1 - t0} ms)`);
};

seed();
