import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase1Levels } from "../../config/javascriptPhase1Levels";

const JavaScriptLevel7Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase1Levels[7]}
      course="javascript"
      phase={1}
      levelNumber={7}
    />
  );
};

export default JavaScriptLevel7Page;
