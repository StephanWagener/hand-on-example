
import React from "react";
import styled from "styled-components";
import avatarDefaultImg from "./images/avatar.png";

/* Avatar
 *
 * Displaying the users profile picture
 */
const Avatar = (props) => {
  const { avatarImg } = props;

  return <StyledAvatar src={avatarImg} />;
};

export const StyledAvatar = styled.img`
  width: 48px;
  height: 48px;
`;

Avatar.defaultProps = {
  avatarImg: avatarDefaultImg,
};

export default Avatar;
