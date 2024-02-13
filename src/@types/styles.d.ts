import "styled-components";

import { defaultTheme } from "@/styles/theme/default";

declare module "styled-components" {
  type Theme = typeof defaultTheme;
  export interface DefaultTheme extends Theme {}
}
