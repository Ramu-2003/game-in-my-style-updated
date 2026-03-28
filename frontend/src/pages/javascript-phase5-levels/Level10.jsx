import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase5Levels } from "../../config/javascriptPhase5Levels";

const JavaScriptLevel10Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase5Levels[10]}
      course="javascript"
      phase={5}
      levelNumber={10}
    />
  );
};

export default JavaScriptLevel10Page;
