import styled, { css } from 'styled-components';

interface AvatarStyledProps {
  $avatarUrl?: string;
  $isAuthor?: boolean;
  $circleSize: number;
  $nameSize: number;
}

export const AvatarStyled = styled.div<AvatarStyledProps>`
  ${({ theme, $avatarUrl, $isAuthor, $nameSize, $circleSize }) => css`
    display: grid;
    place-items: center;
    height: ${$circleSize}rem;
    width: ${$circleSize}rem;
    min-height: ${$circleSize}rem;
    min-width: ${$circleSize}rem;
    border-radius: 50%;

    ${$avatarUrl
      ? css`
          background-image: url(${$avatarUrl});
          /* border: 2px solid ${theme.colors.text.title}; */
          background-size: cover;
          backdrop-position: center;
        `
      : css`
          background-color: ${$isAuthor
          ? theme.colors.bg.details
          : theme.colors.bg.button};
        `}

    span {
      font-size: ${$nameSize}rem;
      font-weight: bold;
      color: ${theme.colors.text.title} !important;
      text-transform: uppercase;
    }
  `}
`;
