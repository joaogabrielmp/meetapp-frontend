import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
`;

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  margin: 5px 0 0;
  height: 44px;
  background: #4dbaf9;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#4DBAF9')};
  }

  svg {
    margin-right: 10px;
  }
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  margin: 5px 0 0;
  height: 44px;
  background: #d44059;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.08, '#D44059')};
  }

  svg {
    margin-right: 10px;
  }
`;

export const Meetup = styled.div``;
