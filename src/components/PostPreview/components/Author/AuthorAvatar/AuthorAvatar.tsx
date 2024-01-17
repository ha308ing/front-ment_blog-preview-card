import styled from "styled-components";

const AuthorAvatar = styled.img`
  clip-path: circle();
  height: 2.5em;

  @media (width >=1440px) {
    height: 2em;
  }
`;

export default AuthorAvatar;
