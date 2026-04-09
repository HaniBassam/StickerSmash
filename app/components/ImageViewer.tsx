import {
  ImageSourcePropType,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Image } from "expo-image";

type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
  const { width, height } = useWindowDimensions();
  const imageWidth = Math.min(320, width * 0.78);
  const imageHeight = Math.min(440, height * 0.48);

  return (
    <Image
      source={imageSource}
      style={[styles.image, { width: imageWidth, height: imageHeight }]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 18,
  },
});
