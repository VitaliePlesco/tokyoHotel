import { create } from "zustand";
import { RoomType } from "@prisma/client";

export type Room = {
  roomNumber: number;
  roomStatus: string;
  hotelId: string;
  roomTypeId: number;
}

type RoomsState = {
  twinRooms: Room[];
  doubleRooms: Room[];
  roomType: RoomType[];
}

type RoomsActions = {
  setRoomsAndRoomType: (rooms: Room[], roomType: RoomType[]) => void;
}

export const useRoomsStore = create<RoomsState & RoomsActions>()((set) => ({
  twinRooms: [],
  doubleRooms: [],
  roomType: [],
  setRoomsAndRoomType: (rooms: Room[], roomType: RoomType[]) => {
    set({ twinRooms: rooms.filter((room) => room.roomTypeId === 1) });
    set({ doubleRooms: rooms.filter((room) => room.roomTypeId === 2) });
    set({ roomType });
  }
}));

