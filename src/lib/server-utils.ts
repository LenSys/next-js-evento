// mark as server-only component
// -> throws an error when used on client-side
import "server-only";

import prisma from "./db";
import { notFound } from "next/navigation";
import { DB_RESULTS_PER_PAGE } from "./constants";
import { unstable_cache } from "next/cache";
import { capitalize } from "./utils";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
  // );

  // const events: EventoEvent[] = await response.json();

  if (page < 1) {
    return notFound();
  }

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: DB_RESULTS_PER_PAGE,
    skip: (page - 1) * DB_RESULTS_PER_PAGE,
  });

  const totalCount = await prisma.eventoEvent.count({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
  });

  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  // const response = await fetch(
  //   `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  // );

  // const event: EventoEvent = await response.json();

  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }

  return event;
});
