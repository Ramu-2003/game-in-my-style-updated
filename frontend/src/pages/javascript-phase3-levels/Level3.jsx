import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase3Levels } from "../../config/javascriptPhase3Levels";

const JavaScriptLevel3Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase3Levels[3]}
      course="javascript"
      phase={3}
      levelNumber={3}
    />
  );
};

export default JavaScriptLevel3Page;
