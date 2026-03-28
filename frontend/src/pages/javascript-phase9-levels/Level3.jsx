import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase9Levels } from "../../config/javascriptPhase9Levels";

const JavaScriptLevel3Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase9Levels[3]}
      course="javascript"
      phase={9}
      levelNumber={3}
    />
  );
};

export default JavaScriptLevel3Page;
