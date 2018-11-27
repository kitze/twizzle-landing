import styled from "styled-components";
import {getThemeColor} from "styles/mixins";

export const ToggleCount = styled.div(
  {
    marginTop: 15,
    userSelect: 'none'
  },
  getThemeColor('text')
);
