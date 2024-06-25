import { useCallback } from "react";
import axios from "axios";
import { ChatRoomItemType, wsMessage } from "../typings/db";
import useCreateMessage from "./useCreateMessage";

const useCheckWordRelayGame = (
  roomInfo: ChatRoomItemType | null,
  userName: string | null,
  sendMessage: (message: wsMessage) => void,
  wordRelayGameState: boolean,
  setWordRelayGameState: (state: boolean) => void
) => {
  const createMessage = useCreateMessage(roomInfo, userName);

  return useCallback(
    async (inputValue: string) => {
      console.log("현재 끝말잇기 상태" + wordRelayGameState);
      if (inputValue.includes("/끝말잇기 !") || wordRelayGameState) {
        let word: string;

        if (inputValue.includes("/끝말잇기 !")) {
          word = inputValue.split("!")[1].trim();

          if (roomInfo && userName) {
            const newMessage = createMessage(
              `끝말잇기 시작!! \n 첫 번째 단어 : ${word}`,
              "TALK"
            );

            sendMessage(newMessage);
          }

          setWordRelayGameState(true);
        } else {
          word = inputValue;
        }

        try {
          const response = await axios.get(
            `http://localhost:8080/word/game?word=${word}`
          );

          console.log(response.data.success);
          if (response.data.success) {
            setWordRelayGameState(true);
          } else {
            if (roomInfo && userName) {
              const newMessage = createMessage(
                `오잉! 이상한 단어 입력. 끝말잇기 패배`,
                "TALK"
              );

              sendMessage(newMessage);
            }

            setWordRelayGameState(false);
          }

          return response.data;
        } catch (error) {
          console.error(error);
        }
      }
    },
    [
      roomInfo,
      userName,
      sendMessage,
      createMessage,
      wordRelayGameState,
      setWordRelayGameState,
    ]
  );
};

export default useCheckWordRelayGame;
