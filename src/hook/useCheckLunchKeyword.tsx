import { useCallback } from "react";
import axios from "axios";
import { ChatRoomItemType, wsMessage } from "../typings/db";
import useCreateMessage from "./useCreateMessage";

const useCheckLunchKeyword = (
  roomInfo: ChatRoomItemType | null,
  userName: string | null,
  sendMessage: (message: wsMessage) => void
) => {
  const createMessage = useCreateMessage(roomInfo, userName);

  return useCallback(
    async (inputValue: string) => {
      if (inputValue === "/학식") {
        try {
          const response = await axios.get(
            `http://localhost:8080/crawler/lunch`
          );

          if (roomInfo && userName) {
            const newMessage = createMessage(
              `오늘은 ${response.data.day} 입니다. \n\n 오늘의 학식은 \n  ${response.data.menu}입니다.`,
              "TALK"
            );

            sendMessage(newMessage);
          }
          return response.data;
        } catch (error) {
          console.error(error);
        }
      }
    },
    [roomInfo, userName, createMessage, sendMessage]
  );
};

export default useCheckLunchKeyword;
