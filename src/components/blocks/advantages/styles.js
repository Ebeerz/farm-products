import styled from "styled-components";
import { Ul } from '../../styled';
import Button from "../../ui/button/button";

export const StyledAdvantages = styled.section`
    box-sizing: border-box;
    padding-top: 100px;
    margin: 0 auto;
    width: fit-content;
`

export const AdvantagesList = styled(Ul)`
    list-style-type: none;
    width: fit-content;
    padding: 0;
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 540px 540px;
    grid-template-rows: 197px 197px;
    column-gap: 20px;
    row-gap: 20px;
`

export const AdvantagesButton = styled(Button)`
    margin: 64px auto 100px auto;
`
