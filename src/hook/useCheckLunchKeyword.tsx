import { useCallback } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { ChatRoomItemType, wsMessage } from "../typings/db";

const useCheckLunchKeyword = (
  roomInfo: ChatRoomItemType | null,
  userName: string | null,
  sendMessage: (message: wsMessage) => void
) => {
  return useCallback(
    async (inputValue: string) => {
      if (inputValue === "/학식") {
        try {
          const response = await axios.get(
            `http://localhost:8080/crawler/lunch`
          );

          if (roomInfo && userName) {
            const newMessage = {
              type: "TALK",
              roomId: roomInfo.roomId,
              sender: userName,
              message: `오늘은 ${response.data.day} 입니다. \n\n 오늘의 학식은 \n  ${response.data.menu}입니다.`,
              time: dayjs().format("YYYY년 MM월 DD일 HH:mm"),
            };

            sendMessage(newMessage);
          }
          return response.data;
        } catch (error) {
          console.error(error);
        }
      }
    },
    [roomInfo, userName, sendMessage]
  );
};

export default useCheckLunchKeyword;
