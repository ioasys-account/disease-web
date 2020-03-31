/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';


export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70px;
  height: auto;  
  box-sizing: border-box;
  background-color: #DA1F26;  
`;

export const HeaderItem = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 12px;
    color: #FFFF; 
    h3{          
      font-size: 18px;
      font-weight: 600;
      line-height: 2.14;
      letter-spacing: 4.38px;
      margin-right: 28px;
    }
`;
