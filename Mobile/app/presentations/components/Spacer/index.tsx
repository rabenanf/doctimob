import { View } from "react-native";

type SpacerProps = React.PropsWithChildren<{
  width?: number;
  height?: number;
}>;

const Spacer = ({ height, width }: SpacerProps) => {
  return (
    <View
      style={{
        height: height ?? 20,
        width: width ?? 0,
      }}
    />
  );
};

export default Spacer;
