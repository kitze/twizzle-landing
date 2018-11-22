import emotion from "react-emotion";
import {getThemeColor} from "styles/mixins";

export const ToggleCount = emotion.div(
  {
    marginTop: 15,
    userSelect: 'none'
  },
  getThemeColor('text')
);
