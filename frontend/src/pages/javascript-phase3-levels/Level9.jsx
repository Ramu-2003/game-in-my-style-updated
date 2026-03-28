import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase3Levels } from "../../config/javascriptPhase3Levels";

const JavaScriptLevel9Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase3Levels[9]}
      course="javascript"
      phase={3}
      levelNumber={9}
    />
  );
};

export default JavaScriptLevel9Page;
