import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase6Levels } from "../../config/javascriptPhase6Levels";

const JavaScriptLevel3Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase6Levels[3]}
      course="javascript"
      phase={6}
      levelNumber={3}
    />
  );
};

export default JavaScriptLevel3Page;
