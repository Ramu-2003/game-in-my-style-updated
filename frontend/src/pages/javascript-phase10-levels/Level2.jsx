import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase10Levels } from "../../config/javascriptPhase10Levels";

const JavaScriptLevel2Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase10Levels[2]}
      course="javascript"
      phase={10}
      levelNumber={2}
    />
  );
};

export default JavaScriptLevel2Page;
