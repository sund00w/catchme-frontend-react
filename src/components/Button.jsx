import styled from "@emotion/styled";

export const Button = styled.button`
  background: ${({ color }) => color};
`;

export const Button2 = styled(Button)`
  color: green;
`;
