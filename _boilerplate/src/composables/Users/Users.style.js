import styled from 'styled-components';

export const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RegisterBox = styled.div`
  display: block;
  text-align: right;
`;

export const RegisterText = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: right;
  color: #666666;
`;

export const RegisterSwiper = styled.div`
  display: inline-block;
`;

export const FilterBox = styled.div``;

export const FormText = styled.div`
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: left;
  color: #666666;
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const FileUpload = styled.div`
  width: 120px;
  position: relative;
  cursor: pointer;

  > :first-child {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    opacity: 0;
    margin: 0;
    cursor: pointer;
  }
`;

export const ShowMore = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 23px;
    cursor: pointer;

`;
