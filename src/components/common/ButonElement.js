import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
  white-space: nowrap;
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  padding: ${({ bg }) => (bg ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  cursor: pointer;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;
