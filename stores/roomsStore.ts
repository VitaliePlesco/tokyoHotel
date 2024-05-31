import { db } from "@/lib/db";
import { create } from "zustand";
import { Booking } from "@prisma/client";
import { format, subDays } from "date-fns";

type Room = {
  roomNumber: number;
  roomStatus: string;
  hotelId: string;
  roomTypeId: number;
}

type RoomsState = {
  rooms: Room[];
  isLoading: boolean;
  error: Error | null;
}

type RoomsActions = {
  fetchVacantRooms: (hotelId: string, startDate: Date, endDate: Date) => Promise<void>;
}



export const useRoomsStore = create<RoomsState & RoomsActions>((set) => ({
  rooms: [],
  isLoading: false,
  error: null,
  fetchVacantRooms: async (hotel, startDate, endDate) => {
    try {
      const queryParams = new URLSearchParams({ hotel: hotel, checkin: format(startDate, "y-MM-dd"), checkout: format(endDate, "y-MM-dd") })

      set({ isLoading: true, error: null });
      const result = await fetch("/api/getRooms/?" + queryParams, {
        method: "GET",

      }).then((response) => response.json());

      set({ rooms: result, isLoading: false })

    } catch (error) {
      set({ error: new Error, isLoading: false })

    }
  },
}))