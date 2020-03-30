import styled from 'styled-components';

export const LogoIcon = styled.img`
  object-fit: contain;
  width: 50%;
  height: 72px;
  margin-left: 10px;
  margin-top: 0;
`;

export const TitleContainer = styled.div`
  position: relative;
  height: 20px;  
  margin: 12px 16px 20px 16px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserNameContainer = styled.div`
  /* height: 26px; */
  margin-left: 16px;
  /* margin-right: 92px;
  margin-top: 104px; */
  span{
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.15px;
    color: rgba(0, 0, 0, 0.87);
  }  
`;
