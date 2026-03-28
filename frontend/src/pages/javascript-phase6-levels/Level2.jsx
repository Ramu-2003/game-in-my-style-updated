import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase6Levels } from "../../config/javascriptPhase6Levels";

const JavaScriptLevel2Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase6Levels[2]}
      course="javascript"
      phase={6}
      levelNumber={2}
    />
  );
};

export default JavaScriptLevel2Page;
