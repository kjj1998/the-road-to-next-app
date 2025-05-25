"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";
import { ticketsPath } from "@/paths";

export const updateTicket = async (id: string, formDate: FormData) => {
  const data = {
    title: formDate.get("title"),
    content: formDate.get("content"),
  };

  await prisma.ticket.update({
    where: {
      id,
    },
    data: {
      title: data.title as string,
      content: data.content as string,
    },
  });

  revalidatePath(ticketsPath());
  redirect(ticketsPath());
};
