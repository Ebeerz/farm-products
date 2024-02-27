import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    padding-left: 90px;
    padding-right: 90px;
    width: 1280px;
    margin: 0 auto;
    position: relative;
    height: ${(props) => props.theme.headerHeight};
    padding-top: 0;
    padding-bottom: 0;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colorWhite};
    align-items: center;
    z-index: 5;
    box-sizing: border-box;
`