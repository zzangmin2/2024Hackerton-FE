import styled from "styled-components";

// 전체 페이지 컨테이너
export const Container = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  display: flex;
  gap: 20px; // 카드 사이의 공백을 20px로 설정
  box-sizing: border-box;
`;

// 왼쪽 카드
export const LeftCard = styled.div`
  /* width: 372; */
  /* height: 840px; */
  /* top: 52px; */
  /* left: 277px; */
  width: 20rem;
  height: 40rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

// 오른쪽 카드
export const RightCard = styled.div`
  /* width: 964px; */
  /* height: 840px; */
  width: 40rem;
  height: 40rem;
  /* top: 52px; */
  /* left: 679px; */
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

// 프로필
export const ProfileContainer = styled.div`
  margin-left: 15px;
  color: black;
  width: 100%;
`;

// 타이틀 스타일: YB CHAT 텍스트 스타일
export const Title = styled.h2`
  color: #00a6dd;
  width: 99px;
  height: 35px;
  font-weight: 700;
  font-size: 24px;
  line-height: 34.75px;
  margin: 0 0 20px 0; // 상단과 하단 여백 설정
  white-space: nowrap; // 줄바꿈을 하지 않도록 설정
`;

// 서브타이틀 스타일: MY PROFILE 및 CURRENT CHAT ROOM LIST 텍스트 스타일
export const Subtitle = styled.h3`
  color: #bababa;
  width: 67px;
  height: 17px;
  font-weight: 400;
  font-size: 12px;
  line-height: 17.38px;
  margin: 0 0 10px 0; // 상단과 하단 여백 설정
  white-space: nowrap; // 줄바꿈을 하지 않도록 설정
`;

// 프로필 정보: 사용자 프로필 이미지와 이름을 포함하는 영역
export const Profile = styled.div`
  display: flex;
  flex-direction: row; // 가로 방향으로 정렬
  align-items: center; // 세로축 중앙 정렬
  margin-bottom: 40px; // 아래쪽 여백 설정

  img {
    width: 80px; // 이미지 너비
    height: 80px; // 이미지 높이
    border-radius: 50%; // 원형 이미지
    margin-right: 20px; // 오른쪽 여백 설정
  }

  p {
    font-size: 22px; // 글자 크기 설정
    font-weight: 700; // 글자 굵기 설정
    margin: 0; // 여백 제거
  }
`;

// 채팅방 목록: 현재 참여 중인 채팅방 목록을 포함하는 영역
export const ChatRoomList = styled.div`
  width: 100%; // 너비 100%
  /* margin-bottom: 380px; // 아래쪽 여백 설정 */
`;

// 채팅방 항목: 각 채팅방을 나타내는 개별 항목
export const ChatRoomItem = styled.div`
  display: flex; // Flexbox 레이아웃 사용
  align-items: center; // 세로축 중앙 정렬
  margin-bottom: 20px; // 아래쪽 여백 설정
  color: #354843;
  cursor: pointer;
  box-sizing: border-box;

  img {
    width: 52px; // 이미지 너비
    height: 52px; // 이미지 높이
    border-radius: 50%; // 원형 이미지
    margin-right: 10px; // 오른쪽 여백 설정
  }

  p.chatRoomItemTitle {
    font-weight: 700; // 글자 굵기 설정
    font-size: 15px; // 글자 크기 설정
    white-space: nowrap; // 줄바꿈을 하지 않도록 설정
    margin: 0px;
  }
`;

// 채팅방 항목 텍스트: 줄바꿈이 필요한 경우의 텍스트 스타일
export const ChatRoomItemText = styled.p`
  text-align: left;
  font-size: 12px; // 글자 크기 설정
  color: #666; // 글자 색상 설정
  margin: 5px 0 0 0; // 위쪽 여백 설정
`;

// 버튼 롸뻐: 버튼 감싸는 영역
export const ButtonWrapper = styled.div`
  width: 18rem;
  position: absolute; // 변경된 부분
  bottom: 20px; // 하단에 20px 띄우기
`;

// 채팅 컨테이너: 오른쪽의 채팅 내용을 포함하는 영역
// export const ChatContainer = styled.div`
//   width: 100%;
//   display: flex; // Flexbox 레이아웃 사용
//   align-items: center; // 세로축 중앙 정렬
//   justify-content: center; // 가로축 중앙 정렬
// `;
