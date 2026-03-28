import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase3Levels } from "../../config/javascriptPhase3Levels";

const JavaScriptLevel2Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase3Levels[2]}
      course="javascript"
      phase={3}
      levelNumber={2}
    />
  );
};

export default JavaScriptLevel2Page;
