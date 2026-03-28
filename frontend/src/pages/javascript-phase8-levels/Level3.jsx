import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase8Levels } from "../../config/javascriptPhase8Levels";

const JavaScriptLevel3Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase8Levels[3]}
      course="javascript"
      phase={8}
      levelNumber={3}
    />
  );
};

export default JavaScriptLevel3Page;
