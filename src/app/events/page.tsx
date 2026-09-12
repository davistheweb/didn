import type { Metadata } from "next";
import { EventsPage } from "@/components/events/EventsPage";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Events — Direct Impact Development Network",
  description:
    "Conferences, campaigns, training, and webinars from Direct Impact Development Network.",
};

export default function EventsIndexPage() {
  return <EventsPage />;
}
