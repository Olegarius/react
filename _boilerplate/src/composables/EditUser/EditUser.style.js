import styled from 'styled-components';

export const FormText = styled.div`
    font-family: Helvetica;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: left;
    color: #666666;
`;

export const UserName = styled(FormText)`
    padding-bottom: 20px;
`;

export const UserGender = styled.div`
    height: 250px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;

    > button {
        width: 100px;
    }
`;
