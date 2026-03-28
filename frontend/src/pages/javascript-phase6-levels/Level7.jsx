import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase6Levels } from "../../config/javascriptPhase6Levels";

const JavaScriptLevel7Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase6Levels[7]}
      course="javascript"
      phase={6}
      levelNumber={7}
    />
  );
};

export default JavaScriptLevel7Page;
