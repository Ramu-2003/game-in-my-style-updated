import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase10Levels } from "../../config/javascriptPhase10Levels";

const JavaScriptLevel9Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase10Levels[9]}
      course="javascript"
      phase={10}
      levelNumber={9}
    />
  );
};

export default JavaScriptLevel9Page;
