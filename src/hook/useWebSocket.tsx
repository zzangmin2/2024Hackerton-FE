import { useEffect, useRef, useState } from "react";
import { wsMessage } from "../typings/db";

const useWebSocket = (url: string) => {
  const [messages, setMessages] = useState<wsMessage[]>([]);
  const webSocket = useRef<WebSocket | null>(null);

  useEffect(() => {
    webSocket.current = new WebSocket(url);

    webSocket.current.onopen = () => {
      console.log("WebSocket connected");
    };

    webSocket.current.onmessage = (event) => {
      const newMessage: wsMessage = JSON.parse(event.data);
      console.log("Received message:", newMessage); // 수신된 메시지를 로그로 출력
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    webSocket.current.onclose = () => {
      console.log("WebSocket disconnected");
    };

    webSocket.current.onerror = (error) => {
      console.log("WebSocket error:", error);
    };

    return () => {
      webSocket.current?.close();
    };
  }, [url]);

  const sendMessage = (message: wsMessage) => {
    if (webSocket.current && webSocket.current.readyState === WebSocket.OPEN) {
      webSocket.current.send(JSON.stringify(message));
    } else {
      console.error(
        "WebSocket is not open. ReadyState:",
        webSocket.current?.readyState
      );
    }
  };

  return { messages, sendMessage };
};

export default useWebSocket;
