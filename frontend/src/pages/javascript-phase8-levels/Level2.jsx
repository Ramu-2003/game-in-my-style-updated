import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase8Levels } from "../../config/javascriptPhase8Levels";

const JavaScriptLevel2Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase8Levels[2]}
      course="javascript"
      phase={8}
      levelNumber={2}
    />
  );
};

export default JavaScriptLevel2Page;
