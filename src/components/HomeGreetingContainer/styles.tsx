import styled from "styled-components";

// 환영 메시지 컨테이너: 환영 메시지를 포함하는 영역
export const GreetingContainer = styled.div`
  width: 100%; // 너비 100%
  height: 100%; // 높이 100%
  display: flex; // Flexbox 레이아웃 사용
`;

// 환영 메시지 텍스트: 환영 메시지의 텍스트 스타일
export const GreetingText = styled.div`
  text-align: left; // 텍스트 왼쪽 정렬
  margin-left: 50px;
  margin-top: 30px;
  h1 {
    font-size: 2em; // 큰 제목 글자 크기
    color: #333; // 글자 색상
  }

  h2 {
    font-size: 1.5em; // 작은 제목 글자 크기
    color: #333; // 글자 색상
  }

  p {
    font-size: 1em; // 일반 텍스트 글자 크기
    color: #666; // 글자 색상
    margin: 10px 0; // 위아래 여백 설정
  }

  a {
    color: #a8866b; // 링크 색상
    font-weight: bold; // 글자 굵기 설정
    text-decoration: underline;
    cursor: pointer;
  }
`;
