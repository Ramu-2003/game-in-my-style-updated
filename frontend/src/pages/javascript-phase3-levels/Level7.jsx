import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase3Levels } from "../../config/javascriptPhase3Levels";

const JavaScriptLevel7Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase3Levels[7]}
      course="javascript"
      phase={3}
      levelNumber={7}
    />
  );
};

export default JavaScriptLevel7Page;
