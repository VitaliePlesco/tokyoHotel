import { create } from "zustand";
import { RoomType } from "@prisma/client";

export type Room = {
  roomNumber: number;
  roomStatus: string;
  hotelId: string;
  roomTypeId: number;
}

type RoomsState = {
  rooms: Room[];
  roomType: RoomType[];
}

type RoomsActions = {
  setRoomsAndRoomType: (rooms: Room[], roomType: RoomType[]) => void;
}

export const useRoomsStore = create<RoomsState & RoomsActions>()((set) => ({
  rooms: [],
  roomType: [],
  setRoomsAndRoomType: (rooms: Room[], roomType: RoomType[]) => {
    set({ rooms });
    set({ roomType });
  }
}));

async function get<T>(url: string): Promise<T> {
  const response = await fetch(`${url}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json() as Promise<T>;
}