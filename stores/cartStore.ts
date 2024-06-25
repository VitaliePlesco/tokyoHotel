import { create } from "zustand";
import { persist } from 'zustand/middleware'
import { Room } from "./roomsStore";
import { differenceInCalendarDays } from "date-fns";


export type DateRange = {
  startDate: string | null,
  endDate: string | null
};


export type CartState = {
  id: string;
  hotelName: string;
  bookingDate: Date | string;
  dateRange: DateRange;
  userId: string;
  numberOfNights: number;
  totalStay: number;
  room: [Room] | [];

}


export type CartActions = {
  setHotel: (hotel: string) => void;
  setTimeStamp: () => void;
  setStartDate: (startDate: string | null) => void;
  setEndDate: (endDate: string | null) => void;
  setUser: () => void;
  addToCart: (roomNumber: [Room]) => void;
  removeFromCart: () => void;
  setNumberOfNights: (numberOfNights: number) => void;
}

export const initialCartState: CartState = {
  id: "",
  hotelName: "",
  bookingDate: "",
  dateRange: {
    startDate: null,
    endDate: null
  },
  userId: "",
  numberOfNights: 0,
  totalStay: 0,
  room: [],

}

export const useCartStore = create<CartState & CartActions>()(persist(set => ({
  ...initialCartState,
  setHotel: (hotel) => set(() => ({ hotelName: hotel })),
  addToCart: (room: [Room]) => {
    set(() => ({ room: room }))
  },
  removeFromCart: () => {
    set(() => ({ room: [] }))
  },
  setTimeStamp: () => console.log("set time stamp"),
  setStartDate: (startDate: string | null) => {
    set((state) => ({ dateRange: { ...state.dateRange, startDate: startDate } }));
  },
  setEndDate: (endDate: string | null) => {
    set((state) => ({ dateRange: { ...state.dateRange, endDate: endDate } }));
  },
  setUser: () => console.log("set user id"),
  setNumberOfNights: (numberOfNights) => {

    set({ numberOfNights: numberOfNights });

  },

}),
  { name: "cartStore" }
))


