import Swal, { SweetAlertResult } from "sweetalert2";

export const successAlert = async (
  message: string
): Promise<SweetAlertResult<SweetAlertResult>> => {
  return Swal.fire({
    title: "Success",
    text: message || "Success",
    icon: "success",
  });
};

export const errorAlert = async (
  message: string = "Something went wrong... "
): Promise<SweetAlertResult<SweetAlertResult>> => {
  return Swal.fire({
    title: "Oops..",
    text: message,
    icon: "error",
  });
};
