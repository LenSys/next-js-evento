import EventCard from "./event-card";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./pagination-controls";
import { DB_RESULTS_PER_PAGE } from "@/lib/constants";

type EventsListProps = {
  city: string;
  page: number;
};

export default async function EventsList({ city, page }: EventsListProps) {
  const { events, totalCount } = await getEvents(city, page);

  const previousPagePath = page > 1 ? `/events/${city}?page=${page - 1}` : "";

  // check if there are any more events to display
  // (if so, set next page path)
  const nextPagePath =
    totalCount > page * DB_RESULTS_PER_PAGE
      ? `/events/${city}?page=${page + 1}`
      : "";

  return (
    <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControls
        previousPagePath={previousPagePath}
        nextPagePath={nextPagePath}
      />
    </section>
  );
}
