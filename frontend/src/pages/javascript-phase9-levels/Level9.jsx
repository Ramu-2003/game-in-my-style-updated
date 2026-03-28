import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase9Levels } from "../../config/javascriptPhase9Levels";

const JavaScriptLevel9Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase9Levels[9]}
      course="javascript"
      phase={9}
      levelNumber={9}
    />
  );
};

export default JavaScriptLevel9Page;
