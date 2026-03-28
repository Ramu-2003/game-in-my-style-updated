import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase9Levels } from "../../config/javascriptPhase9Levels";

const JavaScriptLevel10Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase9Levels[10]}
      course="javascript"
      phase={9}
      levelNumber={10}
    />
  );
};

export default JavaScriptLevel10Page;
