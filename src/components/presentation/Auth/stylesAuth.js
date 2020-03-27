import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 3px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  width: 100%;
  height: 100vh;
`;

export const ImgLogo = styled.img`
  object-fit: contain;
  width: 150px;
  height: 150px;
`;

export const SubmitRow = styled.div``;
