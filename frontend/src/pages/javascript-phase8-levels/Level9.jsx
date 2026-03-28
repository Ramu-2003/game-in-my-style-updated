import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase8Levels } from "../../config/javascriptPhase8Levels";

const JavaScriptLevel9Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase8Levels[9]}
      course="javascript"
      phase={8}
      levelNumber={9}
    />
  );
};

export default JavaScriptLevel9Page;
