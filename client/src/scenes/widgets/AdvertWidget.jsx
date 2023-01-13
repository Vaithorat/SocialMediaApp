import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
const BASE_URL = `http://localhost:3001`
const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${BASE_URL}/assets/info4.jpeg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>MIKA Cosmetics</Typography>
        <Typography color={medium}>Mika.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Get your skin beauty products at one place{" "}
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
