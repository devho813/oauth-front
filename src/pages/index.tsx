import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import { useCallback } from 'react';

export default function Home() {
  const responseGoogle = useCallback((response) => {
    console.log(response);
  }, []);

  return (
    <HomeContainer>
      <h1>OAuth 2.0 로그인</h1>
      <ul>
        <li>
          <GoogleLogin
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </li>
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
