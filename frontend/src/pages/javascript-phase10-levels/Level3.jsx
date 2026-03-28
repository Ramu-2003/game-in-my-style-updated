import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase10Levels } from "../../config/javascriptPhase10Levels";

const JavaScriptLevel3Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase10Levels[3]}
      course="javascript"
      phase={10}
      levelNumber={3}
    />
  );
};

export default JavaScriptLevel3Page;
