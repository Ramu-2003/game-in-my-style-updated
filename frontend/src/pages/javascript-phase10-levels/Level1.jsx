import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase10Levels } from "../../config/javascriptPhase10Levels";

const JavaScriptLevel1Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase10Levels[1]}
      course="javascript"
      phase={10}
      levelNumber={1}
    />
  );
};

export default JavaScriptLevel1Page;
