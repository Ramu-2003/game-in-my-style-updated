import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase4Levels } from "../../config/javascriptPhase4Levels";

const JavaScriptLevel9Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase4Levels[9]}
      course="javascript"
      phase={4}
      levelNumber={9}
    />
  );
};

export default JavaScriptLevel9Page;
