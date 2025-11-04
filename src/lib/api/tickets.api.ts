import { errorAlert } from "../../utils/AlertHelper";
import type {
  CheckInRequest,
  CheckInResponse,
  CheckOutRequest,
  CheckOutResponse,
  Ticket,
} from "../types/tickets.types";
import type { WebResponse } from "../types/webResponse.types";

const BASE_URL = import.meta.env.VITE_BASE_URL_HOST;

export async function CheckInApi(
  request: CheckInRequest
): Promise<WebResponse<CheckInResponse>> {
  try {
    const response = await fetch(`${BASE_URL}/api/check-in`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    await errorAlert(`${error}`);
    return {
      errors: error instanceof Error ? error.message : "Network error",
      data: null as never,
    };
  }
}

export async function CheckOutApi(
  request: CheckOutRequest
): Promise<WebResponse<CheckOutResponse>> {
  try {
    const response = await fetch(`${BASE_URL}/api/check-out`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    await errorAlert(`${error}`);
    return {
      errors: error instanceof Error ? error.message : "Network error",
      data: null as never,
    };
  }
}

export async function GetTicketDetail(
  plateNumber: string
): Promise<WebResponse<Ticket>> {
  try {
    const response = await fetch(`${BASE_URL}/api/tickets/${plateNumber}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    await errorAlert(`${error}`);
    return {
      errors: error instanceof Error ? error.message : "Network error",
      data: {} as Ticket,
    };
  }
}

export async function GetActiveTickets(): Promise<WebResponse<Ticket[]>> {
  try {
    const response = await fetch(`${BASE_URL}/api/tickets`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    await errorAlert(`${error}`);
    return {
      errors: error instanceof Error ? error.message : "Network error",
      data: [],
    };
  }
}

export async function GetHistoryTickets(): Promise<WebResponse<Ticket[]>> {
  try {
    const response = await fetch(`${BASE_URL}/api/tickets-history`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    await errorAlert(`${error}`);
    return {
      errors: error instanceof Error ? error.message : "Network error",
      data: [],
    };
  }
}
