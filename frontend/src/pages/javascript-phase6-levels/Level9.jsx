import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase6Levels } from "../../config/javascriptPhase6Levels";

const JavaScriptLevel9Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase6Levels[9]}
      course="javascript"
      phase={6}
      levelNumber={9}
    />
  );
};

export default JavaScriptLevel9Page;
