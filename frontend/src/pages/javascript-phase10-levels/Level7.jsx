import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase10Levels } from "../../config/javascriptPhase10Levels";

const JavaScriptLevel7Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase10Levels[7]}
      course="javascript"
      phase={10}
      levelNumber={7}
    />
  );
};

export default JavaScriptLevel7Page;
