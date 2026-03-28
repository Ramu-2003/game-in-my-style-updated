import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase9Levels } from "../../config/javascriptPhase9Levels";

const JavaScriptLevel7Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase9Levels[7]}
      course="javascript"
      phase={9}
      levelNumber={7}
    />
  );
};

export default JavaScriptLevel7Page;
