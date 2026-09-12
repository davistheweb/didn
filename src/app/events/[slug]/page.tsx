import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EventPage } from "@/components/events/EventPage";
import { ReachOutSection } from "@/components/landing/ReachOutSection";
import { cached } from "@/lib/server-cache";
import { resolveAssetUrl } from "@/services/api";
import type { Event } from "@/services/api-types";
import { fetchEvent } from "@/services/events";

interface EventDetailsPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: EventDetailsPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const event = await cached(`event:${slug}`, () => fetchEvent(slug));
    if (!event) {
      return { title: "Event not found — Direct Impact Development Network" };
    }

    const image = resolveAssetUrl(event.image);
    return {
      title: `${event.title} — Direct Impact Development Network`,
      description: event.description ?? undefined,
      openGraph: image ? { images: [image] } : undefined,
    };
  } catch {
    return { title: "Event — Direct Impact Development Network" };
  }
}

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const { slug } = await params;

  let event: Event | null = null;
  try {
    event = await cached(`event:${slug}`, () => fetchEvent(slug));
  } catch {
    event = null;
  }

  if (!event) {
    notFound();
  }

  return (
    <>
      <EventPage slug={slug} initialEvent={event} />
      <ReachOutSection />
    </>
  );
}
