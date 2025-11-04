import { BiRightArrowCircle } from "react-icons/bi";
import TicketCard from "./components/TicketCard";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import type { Ticket } from "./lib/types/tickets.types";
import { CheckInApi, GetActiveTickets } from "./lib/api/tickets.api";
import { errorAlert, successAlert } from "./utils/AlertHelper";
import InputSection from "./components/InputSection";
import TicketList from "./components/TicketList";
import Header from "./components/Header";

export default function CheckIn() {
  const [inputValue, setInputValue] = useState<string>("");
  const [tickets, setTickets] = useState<Ticket[]>([]);

  async function doCheckIn() {
    if (!inputValue.match("^[A-Z]{1,2}\\d{1,4}[A-Z]{0,3}$")) {
      await errorAlert("Invalid Plate Number");
      return;
    }

    const response = await CheckInApi({
      plateNumber: inputValue.toUpperCase(),
    });

    if (!response.errors) {
      getActiveTickets();
      await successAlert("Ticket Has Been Created");
    } else {
      await errorAlert(response.errors);
    }
  }

  async function getActiveTickets() {
    const response = await GetActiveTickets();

    setTickets(response.data);
  }

  useEffect(() => {
    getActiveTickets();
  }, []);

  return (
    <div className="w-full min-h-screen h-full grid grid-cols-1 lg:grid-cols-3">
      {/* Left Section */}
      <div className="w-full h-full p-8 col-span-2 bg-[#0F1115]  flex flex-col gap-4 order-2 lg:order-1">
        <Header
          title="Active Tickets"
          information={
            tickets?.length > 0 ? `${tickets?.length} vehicles in parking` : ""
          }
          customStyle="hidden! lg:flex!"
        />
        <TicketList tickets={tickets} />
      </div>

      {/* Right Section */}
      <div className="w-full p-8 border bg-[#151922]  border-gray-400 order-1 lg:order=2">
        <Header title="History Tickets" customStyle="flex lg:hidden!" />
        <div className="sticky top-4 flex flex-col gap-12">
          <h1 className="text-3xl font-bold text-center text-[#C8D0E0]">
            Check In
          </h1>
          {/* Input Section */}
          <InputSection
            handleSubmit={() => {
              doCheckIn();
              setInputValue("");
            }}
            handleChange={(event) => {
              setInputValue(event.target.value?.trim().toUpperCase());
            }}
            value={inputValue}
            labelText="Plate Number"
            btnText="Check In"
          />
          {/* Ticket Section */}
          <div className="flex flex-col gap-4 h-full">
            <TicketCard fontSize="text-xl" ticket={tickets && tickets[0]} />
          </div>
          <Link
            to={"/check-out"}
            className="text-2xl flex gap-2 justify-center items-center align-middle cursor-pointer text-[#C8D0E0]"
          >
            <p>Go To Check Out Page</p>
            <BiRightArrowCircle />
          </Link>
        </div>
      </div>
    </div>
  );
}
