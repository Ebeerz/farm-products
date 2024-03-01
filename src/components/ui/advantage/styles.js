import styled from "styled-components";
import { P } from '../../styled';

export const StyledAdvantage = styled.div`
    display: grid;
    box-sizing: border-box;
    grid-template-areas:
      "img type"
      "img name"
      "description description";
    grid-template-columns: 56px 1fr;
    grid-template-rows: 25px 27px 1fr;
    column-gap: 20px;
    width: 540px;
    min-height: 197px;
    margin: 0;
    padding: 20px;
    background-color: ${(props) => props.$bgColor};
`

export const AdvantageImg = styled.img`
    grid-area: img;
`

export const AdvantageType = styled.span`
    grid-area: type;
    display: inline-block;
    width: fit-content;
    box-sizing: content-box;
    padding: 0px 10px 0px 10px;
    color: ${(props) => props.theme.colorWhite};
    font-size: 14px;
    background-color: ${(props) => props.$bgColor};
`
export const AdvantageName = styled.span`
    grid-area: name;
    font-weight: 700;
`

export const AdvantageDescription = styled(P)`
    grid-area: description;
    padding: 20px 0px 0px 0px;
    margin: 0px;
`
