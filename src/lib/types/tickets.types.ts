export type Ticket = {
  id: string;
  plateNumber: string;
  checkInAt: Date;
  checkOutAt: Date | null;
  price: number | null;
  idReference?: string;
};

export type CheckInRequest = {
  plateNumber: string;
};

export type CheckInResponse = {
  id: string;
  plateNumber: string;
  checkInAt: Date;
};

export type CheckOutRequest = {
  plateNumber: string;
};

export type CheckOutResponse = {
  id: string;
  plateNumber: string;
  checkInAt: Date;
  checkOutAt: Date;
  price: number;
};
