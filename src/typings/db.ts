import { MouseEventHandler } from "react";

/**
 * 채팅 타입
 */
export interface ChatRoomItemType {
  roomId: string;
  name: string;
  roomUserCnt: number;
  chatUserCnt?: string[];
}

/**
 * 모달 Context 타입
 */
export interface ModalContextType {
  modal: boolean;
  setModal: (modal: boolean) => void;
}

/**
 * 채팅 리스트 Context 타입
 */
export interface ChatRoomListContextType {
  chatRoomList: ChatRoomItemType[];
  setChatRoomList: (list: ChatRoomItemType[]) => void;
}

/**
 * 채팅 상세 Context 타입
 */
export interface ChatRoomDetailContextType {
  chatRoomDetail: ChatRoomItemType;
  setChatRoomDetail: (item: ChatRoomItemType) => void;
}

/**
 * Home props
 */
export interface HomeProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  placeholder: string;
  value: string;
  setValue: (newValue: string) => void;
  buttonText: string;
}

/**
 * Button Props
 */
export interface ButtonProps {
  text: string;
  onClick:
    | MouseEventHandler<HTMLButtonElement>
    | ((event: React.FormEvent<HTMLFormElement>) => void);
}
