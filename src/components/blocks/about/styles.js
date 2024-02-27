import styled from "styled-components";
import {P, Section, Img} from '../../styled';
export const StyledAbout = styled(Section)`
    display: flex;
    position: relative;
    padding-left: 90px;
    padding-top: 159px;
    padding-bottom: 159px;
    padding-right: 603px;
    background-color: #d8ecfe;
    align-items: center;
    z-index: 1;
    box-sizing: border-box;
`;

export const StyledAboutWrapper = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    min-width: 650px;
    z-index: 3;
`;

export const Text = styled(P)`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    margin-top: 20px;
    padding-right: 122px;
    margin-bottom: 40px;
`;

export const StyledAboutImg = styled(Img)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 90px;
    display: block;
    content: "";
    width: 446px;
    height: 446px;
    margin: auto;
`