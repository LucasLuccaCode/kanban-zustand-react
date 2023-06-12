import styled, { css } from 'styled-components';

interface AvatarStyledProps {
  $avatarUrl?: string;
  $isAuthor?: boolean;
  $sizeRem: string;
}

export const AvatarStyled = styled.div<AvatarStyledProps>`
  ${({ theme, $avatarUrl, $isAuthor, $sizeRem }) => css`
    display: grid;
    place-items: center;
    height: ${$sizeRem};
    width: ${$sizeRem};
    min-height: ${$sizeRem};
    min-width: ${$sizeRem};
    border-radius: 50%;

    ${$avatarUrl
      ? css`
          background-image: url(${$avatarUrl});
          border: 3px solid ${theme.colors.text.title};
          background-size: cover;
          backdrop-position: center;
        `
      : css`
          background-color: ${$isAuthor
          ? theme.colors.bg.details
          : theme.colors.bg.button};
        `}

    span {
      font-size: 0.7rem;
      font-weight: bold;
      color: ${theme.colors.text.title};
      text-transform: uppercase;
    }
  `}
`;
