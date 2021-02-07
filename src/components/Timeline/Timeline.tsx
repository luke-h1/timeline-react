import { FC } from "react";
import {
  Container,
  TimeLine,
  Item,
  SubHeading,
  Description,
  Small,
  Technologies,
} from "./TimelineStyles";

const Timeline: FC = () => {
  return (
    <>
      <Container>
        <TimeLine>
          <Item>
            <Small>date range goes here</Small>
            <SubHeading>Title goes here </SubHeading>
            <Description>responsibilities</Description>
            <Technologies>short description goes here</Technologies>
          </Item>
          <Item>
            <Small>date range goes here</Small>
            <SubHeading>Title goes here </SubHeading>
            <Description>responsibilities</Description>
            <Technologies>short description goes here</Technologies>
          </Item>
        </TimeLine>
      </Container>
    </>
  );
};
export default Timeline;
