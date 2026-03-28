import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase3Levels } from "../../config/javascriptPhase3Levels";

const JavaScriptLevel10Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase3Levels[10]}
      course="javascript"
      phase={3}
      levelNumber={10}
    />
  );
};

export default JavaScriptLevel10Page;
