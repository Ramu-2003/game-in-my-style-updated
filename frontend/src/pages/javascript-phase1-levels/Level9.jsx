import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase1Levels } from "../../config/javascriptPhase1Levels";

const JavaScriptLevel9Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase1Levels[9]}
      course="javascript"
      phase={1}
      levelNumber={9}
    />
  );
};

export default JavaScriptLevel9Page;
