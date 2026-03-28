import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase4Levels } from "../../config/javascriptPhase4Levels";

const JavaScriptLevel7Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase4Levels[7]}
      course="javascript"
      phase={4}
      levelNumber={7}
    />
  );
};

export default JavaScriptLevel7Page;
