import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase1Levels } from "../../config/javascriptPhase1Levels";

const JavaScriptLevel2Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase1Levels[2]}
      course="javascript"
      phase={1}
      levelNumber={2}
    />
  );
};

export default JavaScriptLevel2Page;
