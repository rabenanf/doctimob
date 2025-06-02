import { View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";

type SpacerProps = React.PropsWithChildren<{
  width?: number;
  height?: number;
}>;

const Spacer = ({ height, width }: SpacerProps) => {
  return (
    <View
      style={{
        height: verticalScale(height ?? 20),
        width: scale(width ?? 0),
      }}
    />
  );
};

export default Spacer;
