import styled from 'styled-components';
import * as Scroll from 'react-scroll';

let LinkScroll = Scroll.Link;

export const ScrollButton = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#01BF71' : 'black')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? 'black' : 'white')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: ${({ primary }) => (primary ? '#fff' : '#01BF71')};
    transition: all 0.2s ease-in-out;
  }
`;
