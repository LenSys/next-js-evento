import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import LoadingIndicator from "./loading-indicator";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default function EventsPage({ params, searchParams }: EventsPageProps) {
  const city = params.city;
  // const page = searchParams.page || 1;

  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }
  const page = parsedPage.data ?? 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>

      {/* if the city or key changes, the key also changes which triggers a new suspense event and the loading indicator is displayed again! */}
      <Suspense key={city + page} fallback={<LoadingIndicator />}>
        <EventsList city={city} page={page} />
      </Suspense>
    </main>
  );
}
