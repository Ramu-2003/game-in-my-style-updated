import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase2Levels } from "../../config/javascriptPhase2Levels";

const JavaScriptLevel9Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase2Levels[9]}
      course="javascript"
      phase={2}
      levelNumber={9}
    />
  );
};

export default JavaScriptLevel9Page;
