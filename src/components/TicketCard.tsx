import type { Ticket } from "../lib/types/tickets.types";
import DateFormatter from "../utils/DateFormatter";
import PriceFormatter from "../utils/PriceFormatter";
import TicketBody from "./TicketBody";

export default function TicketCard({
  ticket,
  fontSize = "text-sm",
}: {
  ticket: Ticket;
  fontSize?: string;
}) {
  return (
    <div className="w-full grid grid-cols-2 gap-4 border border-gray-400 bg-[#151922]  font-semibold p-3 max-h-80 text-sm shadow-md shadow-sky-300/20 rounded-2xl text-[#8B93A7]">
      <div className="w-full flex flex-col gap-2 border-b-2 border-red-400 pb-2 col-span-2">
        <div className="w-full flex justify-between items-center align-middle text-xs">
          <h1 className="text-xl font-bold col-span-2 ">Ticket Id</h1>
          <span className="text-end overflow-clip text-ellipsis whitespace-nowrap max-w-1/2 lg:max-w-full">
            {ticket?.idReference ? ticket?.idReference : ticket?.id}
          </span>
        </div>
      </div>
      {/* Titles */}
      <div className={`col-span-2 w-full flex flex-col gap-3  ${fontSize}`}>
        <div className="flex flex-col gap-2 border-b border-gray-400/50 pb-1">
          <div className="w-full flex flex-col gap-2 ">
            <h1 className="text-sm font-bold col-span-2">Plate Number</h1>
            <span className="overflow-clip text-ellipsis whitespace-nowrap text-2xl font-bold text-white">
              {ticket?.plateNumber ? ticket?.plateNumber : "-"}
            </span>
          </div>

          <TicketBody
            label="Check In"
            value={ticket?.checkInAt ? DateFormatter(ticket?.checkInAt) : "-"}
          />
        </div>

        <div className="flex justify-between items-center align-middle">
          <TicketBody
            label="Check Out"
            value={ticket?.checkOutAt ? DateFormatter(ticket?.checkOutAt) : "-"}
          />
          <TicketBody
            label="Price"
            value={ticket?.price ? PriceFormatter(ticket?.price) : "0"}
            customStyle={"self-end text-end"}
            textColor={ticket?.price ? "text-red-400 font-bold" : "text-white"}
          />
        </div>
      </div>
    </div>
  );
}
