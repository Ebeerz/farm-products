import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 1280px;
    display: flex;
    padding-top: 0;
    padding-bottom: 0;
    height: ${(props) => props.theme.footerHeight};
    background-color: ${(props) => props.theme.colorWhite};
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: auto;
    padding-left: 90px;
    padding-right: 90px;
    box-sizing: border-box;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
`