import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 50vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimeLine = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 155px;
  position: relative;
  &:before {
    content: '';
    width: 3px;
    height: 100%;
    background-color: #4298c3;
    position: absolute;
    left: 150px;
    top: 0;
    z-index: 1;
  }
`;
export const Small = styled.small`
color: #A09EA9;
font-size: 14px;
`;

export const Technologies = styled.p`
  margin-top: 15px;
  color: #A09EA9;
  word-wrap: break-all;

`;

export const SubHeading = styled.h3`
  font-size: 25px;
  margin-bottom: 15px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.5;
  word-wrap: wrap;

`;

export const Item = styled.div`
  color: #000;
  padding: 50px 35px;
  box-sizing: border-box;
  position: relative;
  &:before {
    position: absolute;
    font-size: 16px;
  }
  &:after {
    content: '';
    width: 20px;
    height: 20px;
    border: 4px solid #4298c3;
    position: absolute;
    left: -13px;
    top: 50px;
    border-radius: 100%;
    background-color: #252827;
    z-index: 2;
  }
`;
