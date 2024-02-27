import styled from "styled-components";

export const StyledLogo = styled.a`
    display: flex;
    height: 44px;
    align-items: center;
    text-decoration: none;

    &:hover,
    active {
        text-decoration: none;
    }
`;

export const Text = styled.span`
    display: flex;
    margin-left: 24px;
    font-weight: 700;
    font-size: 28px;
    line-height: 44px;
    color: ${(props)=> props.theme.fontColorBlack};
`;

