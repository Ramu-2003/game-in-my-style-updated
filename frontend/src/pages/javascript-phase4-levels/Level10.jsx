import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase4Levels } from "../../config/javascriptPhase4Levels";

const JavaScriptLevel10Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase4Levels[10]}
      course="javascript"
      phase={4}
      levelNumber={10}
    />
  );
};

export default JavaScriptLevel10Page;
