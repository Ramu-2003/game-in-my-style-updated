import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase4Levels } from "../../config/javascriptPhase4Levels";

const JavaScriptLevel2Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase4Levels[2]}
      course="javascript"
      phase={4}
      levelNumber={2}
    />
  );
};

export default JavaScriptLevel2Page;
