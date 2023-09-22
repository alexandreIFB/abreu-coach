import { Image } from 'react-native';
import styled from 'styled-components/native';

type AvatarImageProps = {
  url: string,
  size?: number
}

export const CustomAvatarImage = styled.Image<{size: number}>`
  width: ${({size}) => `${size}px`};
  height: ${({size}) => `${size}px`};
  border-radius: 16px;
`;

export function AvataImage({url,size}: AvatarImageProps){
  const resolvedSource = Image.resolveAssetSource({ uri: url });

  return (
    <CustomAvatarImage
      source={resolvedSource}
      size={size || 32}
    />
  );
}
