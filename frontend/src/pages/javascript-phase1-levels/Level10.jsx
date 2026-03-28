import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase1Levels } from "../../config/javascriptPhase1Levels";

const JavaScriptLevel10Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase1Levels[10]}
      course="javascript"
      phase={1}
      levelNumber={10}
    />
  );
};

export default JavaScriptLevel10Page;
