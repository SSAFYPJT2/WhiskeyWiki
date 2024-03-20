import { useEffect, useState, useRef } from "react";
import axios from "axios";
import * as StompJs from "@stomp/stompjs";

import Message from "./component/Message";

import style from "./css/MessageList.module.css";

import sendIcon from "./images/sendMessage.png";

const MessageList = () => {
  const [messageList, setMessageList] = useState([
    {
      id: 0, // message Id
      isMyMessage: false, // 내꺼 남의꺼
      content: "ㅎㅇ",
      time: "오전 10:03",
    },
    {
      id: 1,
      isMyMessage: false,
      content: "잭다니엘 내놔",
      time: "오전 10:03",
    },
    {
      id: 2,
      isMyMessage: true,
      content: "헤에",
      time: "오전 10:04",
    },
    {
      id: 3,
      isMyMessage: false,
      content: "잭다니엘 내놔",
      time: "오전 10:05",
    },
    {
      id: 4,
      isMyMessage: true,
      content: "헤에에에에",
      time: "오전 10:05",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const client = useRef({});

  const roomId = 0; // 테스트
  const pairId = 0; // 테스트

  useEffect(() => {
    // 채팅방 메세지 리스트 불러오기
    // axios
    //   .get(`http://localhost:8000/trade/room`, pairId, {
    //     headers: {
    //       accessToken: "토큰",
    //     },
    //   })
    //   .then((res) => {
    //     console.log("채팅방 메세지 리스트 불러오기", res);
    //     const data = res.data.data;
    //     setMessageList(data);
    //   })
    //   .catch((err) => {
    //     console.log("채팅방 메세지 리스트 불러오기 ERR", err);
    //   });

    // 소켓 연결
    connect();

    // 소켓 연결 해제
    return () => disconnect();
  }, []);

  // 소켓 : connect
  const connect = () => {
    client.current = new StompJs.Client({
      brokerURL: "ws://localhost:8080/ws",
      // connectHeaders: {
      //   accessToken: "토큰",
      // },
      debug: (str) => {
        console.log("debug : ", str); // 테스트
      },
      onConnect: (frame) => {
        console.log("소켓 연결 성공");
        subscribe();
      },
      onStompError: (frame) => {
        console.log("소켓 연결 실패");
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });
    client.current.activate();
  };

  // 소켓 : disconnect
  const disconnect = () => {
    client.current.deactivate();
  };

  // 소켓 : subscribe
  const subscribe = () => {
    client.current.subscribe("/sub/chatroom/" + roomId, (data) => {
      const res = JSON.parse(data.body);

      console.log("subscribe res", res); // 테스트

      setMessageList((messageList) => [...messageList, res]);
    });
  };

  // 소켓 : publish
  const publish = (msg) => {
    if (!client.current.connected) return; // 소켓 연결이 안 된 경우

    client.current.publish({
      destination: "/pub/chatroom",
      body: JSON.stringify({
        // type: "",
        roomId: "0",
        sender: "테서터",
        chat: msg,
      }),
    });
  };

  // 메세지 상태
  const messageChangeHandler = (e) => {
    setNewMessage(e.target.value);
  };

  // 매세지 전송
  const messageSendHandler = (e) => {
    e.preventDefault();

    if (newMessage.length === 0) return; // 메세지 길이가 0인 경우

    console.log("메세지 보내기", newMessage); // 테스트
    // setMessageList((messageList) => [
    //   ...messageList,
    //   {
    //     id: 4,
    //     isMyMessage: true,
    //     content: newMessage,
    //     time: "오전 10:05",
    //   },
    // ]);
    publish(newMessage);
    setNewMessage("");
  };

  return (
    <div className={`${style.container}`}>
      {/* 메세지 리스트 */}
      <div className={`${style.messageList}`}>
        {messageList.map((msg) => (
          <Message key={msg.id} {...msg}></Message>
        ))}
      </div>
      {/* 메세지 작성 */}
      <div className={`${style.messageCreate}`}>
        <div className={`${style.newMessage}`}>
          <textarea
            value={newMessage}
            onChange={messageChangeHandler}
            placeholder="메세지 보내기"
            spellCheck="false"
            maxLength="200"
          />
        </div>
        <img onClick={messageSendHandler} src={sendIcon} />
      </div>
    </div>
  );
};

export default MessageList;
