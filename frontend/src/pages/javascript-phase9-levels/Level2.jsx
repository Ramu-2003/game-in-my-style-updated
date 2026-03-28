import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase9Levels } from "../../config/javascriptPhase9Levels";

const JavaScriptLevel2Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase9Levels[2]}
      course="javascript"
      phase={9}
      levelNumber={2}
    />
  );
};

export default JavaScriptLevel2Page;
