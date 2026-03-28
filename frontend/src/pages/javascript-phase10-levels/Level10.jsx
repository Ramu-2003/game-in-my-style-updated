import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase10Levels } from "../../config/javascriptPhase10Levels";

const JavaScriptLevel10Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase10Levels[10]}
      course="javascript"
      phase={10}
      levelNumber={10}
    />
  );
};

export default JavaScriptLevel10Page;
