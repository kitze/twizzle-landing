import { JavascriptStylesDebugger } from 'styles-debugger';
import { devAndProd } from 'utils/dev-prod';

//always disable in prod, and toggle with a boolean in dev
const debug = JavascriptStylesDebugger({
  debugMode: devAndProd(false, true),
  borderSize: 3
});

export default debug;
