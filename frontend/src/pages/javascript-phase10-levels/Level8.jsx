import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase10Levels } from "../../config/javascriptPhase10Levels";

const JavaScriptLevel8Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase10Levels[8]}
      course="javascript"
      phase={10}
      levelNumber={8}
    />
  );
};

export default JavaScriptLevel8Page;
