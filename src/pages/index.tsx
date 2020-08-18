import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <h1>OAuth 2.0 로그인</h1>
      <ul>
        <li>구글 로그인 버튼</li>
        <li>애플 로그인 버튼</li>
        <li>네이버 로그인 버튼</li>
        <li>카카오 로그인 버튼</li>
        <li>페이스북 로그인 버튼</li>
        <li>트위터 로그인 버튼</li>
        <li>깃허브 로그인 버튼</li>
      </ul>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin-top: 15px;
  text-align: center;

  h1 {
    color: #f1c40f;
    font-size: 25px;
  }
`;
