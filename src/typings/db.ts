import { MouseEventHandler } from "react";

export interface ChatRoomItemType {
  roomId: string;
  name: string;
  roomUserCnt: number;
  chatUserCnt: string[];
}

export interface ModalContextType {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

export interface ChatRoomListContextType {
  chatRoomList: ChatRoomItemType[];
  setChatRoomList: (list: ChatRoomItemType[]) => void;
}

export interface HomeProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  placeholder: string;
  value: string;
  setValue: (newValue: string) => void;
  buttonText: string;
}

export interface ButtonProps {
  text: string;
  onClick:
    | MouseEventHandler<HTMLButtonElement>
    | ((event: React.FormEvent<HTMLFormElement>) => void);
}
