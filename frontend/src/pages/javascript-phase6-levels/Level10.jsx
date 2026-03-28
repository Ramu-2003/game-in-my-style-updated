import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase6Levels } from "../../config/javascriptPhase6Levels";

const JavaScriptLevel10Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase6Levels[10]}
      course="javascript"
      phase={6}
      levelNumber={10}
    />
  );
};

export default JavaScriptLevel10Page;
