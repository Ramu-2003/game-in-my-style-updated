import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase10Levels } from "../../config/javascriptPhase10Levels";

const JavaScriptLevel4Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase10Levels[4]}
      course="javascript"
      phase={10}
      levelNumber={4}
    />
  );
};

export default JavaScriptLevel4Page;
