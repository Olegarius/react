import styled, { css } from 'styled-components';

const disableButton = ({ auth }) =>
	css`
    opacity: ${ auth ? 1 : 0.5 };
  `;

export const Reload = styled.div`
  font-weight: bold;
  display: inline-block;
  padding: 10px;
  border: 1px solid black;
  ${ disableButton };
`;
