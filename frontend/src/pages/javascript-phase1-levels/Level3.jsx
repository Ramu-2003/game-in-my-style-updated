import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase1Levels } from "../../config/javascriptPhase1Levels";

const JavaScriptLevel3Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase1Levels[3]}
      course="javascript"
      phase={1}
      levelNumber={3}
    />
  );
};

export default JavaScriptLevel3Page;
