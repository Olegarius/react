import styled from 'styled-components';

export const FormText = styled.div`
    text-align: left;
`;

export const SearchBlock = styled.div`
    height: 250px;
    text-align: center;
`;

export const SearchResults = styled.div`
    height: 190px;
    width: 100%;
    margin-top: -18px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0px;
    }

    > ul {
        border: 1px solid rgba(0, 0, 0, 0.125);
    }
    > ul li {
        margin: 0;
        padding: 3px 11px;
        border: 0;
        cursor: pointer;
    }
    > ul li.list-group-item:first-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    > ul li.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    > ul li:hover {
        background-color: #eeeeee; 
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;

    > button {
        width: 100px;
    }
`;

export const SearchEmail = styled.div`
    font-family: Helvetica;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: #666666;    
`;

export const SearchName = styled(SearchEmail)`
    font-size: 14px;
`;
