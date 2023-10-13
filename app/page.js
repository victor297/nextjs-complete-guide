import Image from "next/image";
import styles from "./page.module.css";
import { getFeaturedEvents } from "@/dummy-data";
import Eventlist from "@/components/events/event-list";

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <Eventlist items={featuredEvents} />
    </div>
  );
}
