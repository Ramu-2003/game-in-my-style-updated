import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase8Levels } from "../../config/javascriptPhase8Levels";

const JavaScriptLevel10Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase8Levels[10]}
      course="javascript"
      phase={8}
      levelNumber={10}
    />
  );
};

export default JavaScriptLevel10Page;
