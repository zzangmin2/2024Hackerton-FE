import { useEffect, useRef, useState } from "react";
import { wsMessage } from "../typings/db";

const useWebSocket = (url: string, roomId: string | null) => {
  const [messages, setMessages] = useState<wsMessage[]>([]);
  const webSocket = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (roomId === null) return;
    webSocket.current = new WebSocket(url);

    webSocket.current.onopen = () => {
      console.log("WebSocket connected");
    };

    webSocket.current.onmessage = (event) => {
      const data = event.data;
      if (typeof data === "string" && data.startsWith("Session ID:")) {
        const id = data.replace("Session ID: ", "").trim();
        localStorage.setItem("chatBoxSessionId", id);
      } else {
        const newMessage = JSON.parse(data);
        console.log("Received message:", newMessage);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
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
  }, [url, roomId]);

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

  return { messages, sendMessage, setMessages };
};

export default useWebSocket;
