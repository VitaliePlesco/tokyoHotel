import { db } from "@/lib/db";
import { create } from "zustand";
import { persist } from 'zustand/middleware'
import { Room } from "./roomsStore";

import { Booking } from "@prisma/client";
import { fetchAvailableRooms } from "@/lib/data";
import { addDays, format, subDays } from "date-fns";
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";


export type CartState = {
  id: string;
  hotelName: string;
  bookingDate: Date | string;
  startDate: Date | string;
  endDate: Date | string;
  userId: string;
  room: [Room] | [];

}


export type CartActions = {
  setHotel: (hotel: string) => void;
  setTimeStamp: () => void;
  setStartDate: (startDate: string) => void;
  setEndDate: (endDate: string) => void;
  setUser: () => void;
  addToCart: (roomNumber: [Room]) => void;
  removeFromCart: () => void;

}

export const initialCartState: CartState = {
  id: "",
  hotelName: "",
  bookingDate: "",
  startDate: "",
  endDate: "",
  userId: "",
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
  setStartDate: (startDate) => set(() => ({ startDate: startDate })),
  setEndDate: (endDate) => set(() => ({ endDate: endDate })),
  setUser: () => console.log("set user id")

}),
  { name: "cartStore" }
))


