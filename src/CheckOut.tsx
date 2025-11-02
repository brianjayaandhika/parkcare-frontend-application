import { BiRightArrowCircle } from "react-icons/bi";
import TicketCard from "./components/TicketCard";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { Ticket } from "./lib/types/tickets.types";
import {
  CheckOutApi,
  GetHistoryTickets,
  GetTicketDetail,
} from "./lib/api/tickets.api";
import { errorAlert, successAlert } from "./utils/AlertHelper";
import InputSection from "./components/InputSection";
import TicketList from "./components/TicketList";
import Header from "./components/Header";

export default function CheckOut() {
  const [inputValue, setInputValue] = useState<string>("");
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);

  async function getTicketDetail() {
    if (!inputValue.match("^[A-Z]{1,2}\\d{1,4}[A-Z]{0,3}$")) {
      await errorAlert("Invalid Plate Number");
      return;
    }

    const response = await GetTicketDetail(inputValue?.trim()?.toUpperCase());

    if (!response.errors) {
      setCurrentTicket(response.data);
    } else {
      await errorAlert(response.errors);
    }
  }

  async function submitTicket() {
    if (!currentTicket) {
      await errorAlert("No Ticket Selected");
    } else {
      const response = await CheckOutApi({
        plateNumber: currentTicket.plateNumber!,
      });

      if (!response.errors) {
        setCurrentTicket(response.data);
        getHistoryTickets();
        await successAlert("Ticket Has Been Submitted");
      } else {
        await errorAlert(response.errors);
      }
    }
  }

  async function getHistoryTickets() {
    const response = await GetHistoryTickets();

    setTickets(response.data);
  }

  useEffect(() => {
    getHistoryTickets();
  }, []);

  return (
    <div className="w-full min-h-screen h-full grid grid-cols-1 lg:grid-cols-3">
      {/* Left Section */}
      <div className="w-full h-full p-8 col-span-2 bg-[#0F1115]  flex flex-col gap-4 order-2 lg:order-1">
        <Header title="History Tickets" customStyle="hidden! lg:flex!" />
        <TicketList tickets={tickets} />
      </div>

      {/* Right Section */}
      <div className="w-full p-8 border bg-[#151922]  border-gray-400 order-1 lg:order=2">
        <Header title="History Tickets" customStyle="flex lg:hidden!" />
        <div className="sticky top-4 flex flex-col gap-12">
          <h1 className="text-3xl font-bold text-center text-[#C8D0E0]">
            Check Out
          </h1>
          {/* Input Section */}
          <InputSection
            handleSubmit={() => {
              getTicketDetail();
              setInputValue("");
            }}
            handleChange={(event) => {
              setInputValue(event.target.value?.trim().toUpperCase());
            }}
            value={inputValue}
            labelText="Plate Number"
            btnText="Check Out"
          />
          {/* Ticket Section */}
          <div className="flex flex-col gap-4 h-full">
            <TicketCard fontSize="text-xl" ticket={currentTicket!} />
            <button
              disabled={!currentTicket}
              onClick={(e) => {
                e.preventDefault();
                submitTicket();
              }}
              type="button"
              className="w-full border border-gray-400 outline-none border-none rounded-2xl self-end mt-1 py-2 bg-red-500 text-white font-bold cursor-pointer disabled:bg-gray-400 disabled:cursor-default hover:-translate-y-px hover:bg-red-500/80 duration-100 transition-all ease-in-out"
            >
              Submit
            </button>
          </div>
          <Link
            to={"/check-in"}
            className="text-2xl flex gap-2 justify-center items-center align-middle cursor-pointer text-[#C8D0E0]"
          >
            <p>Go To Check In Page</p>
            <BiRightArrowCircle />
          </Link>
        </div>
      </div>
    </div>
  );
}
