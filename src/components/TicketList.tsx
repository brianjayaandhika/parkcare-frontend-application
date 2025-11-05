import TicketCard from "./TicketCard";
import { Ticket } from "../lib/types/tickets.types";

export default function TicketList({ tickets }: { tickets: Ticket[] }) {
  if (tickets?.length < 1) {
    return (
      <div className="w-full text-xl text-[#C8D0E0]">
        No Vehicles Currently Parked
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tickets?.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}
