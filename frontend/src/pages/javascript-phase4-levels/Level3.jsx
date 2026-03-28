import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase4Levels } from "../../config/javascriptPhase4Levels";

const JavaScriptLevel3Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase4Levels[3]}
      course="javascript"
      phase={4}
      levelNumber={3}
    />
  );
};

export default JavaScriptLevel3Page;
