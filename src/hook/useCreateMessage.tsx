import { useCallback } from "react";
import dayjs from "dayjs";
import { ChatRoomItemType } from "../typings/db";

const useCreateMessage = (
  roomInfo: ChatRoomItemType | null,
  userName: string | null
) => {
  return useCallback(
    (message: string, type: string) => ({
      type: type,
      roomId: roomInfo?.roomId || "",
      sender: userName || "",
      message,
      time: dayjs().format("YYYY년 MM월 DD일 HH:mm"),
    }),
    [roomInfo?.roomId, userName]
  );
};

export default useCreateMessage;
