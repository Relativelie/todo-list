import styled from '@emotion/styled';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr 1fr;
  grid-template-areas: "count btnGroup removeBtn";
  justify-items: flex-end;
  align-items: center;
  padding: 10px;
  box-shadow: inset 0 -8px 4px 4px rgb(255, 255, 255),
    inset 0 0.5px 2px 0px #7a7a7a;
`;

export const BtnContainer = styled.div<{ isActive?: boolean }>`
  ${(props) => {
    if (props.isActive !== undefined) {
      return 'border: solid 1px #db555560; border-radius: 5px;';
    }
  }}
  padding: 3px 5px;
  cursor: pointer;
`;

export const BtnGroup = styled.div`
  grid-area: btnGroup;
  display: flex;
  gap: 20px;
`;
export const RemoveBtn = styled.div`
  grid-area: removeBtn;
`;

export const CountContainer = styled.div`
  grid-area: count;
  justify-self: flex-start;
`;
