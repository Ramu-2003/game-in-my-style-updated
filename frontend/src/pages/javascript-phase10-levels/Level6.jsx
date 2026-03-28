import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase10Levels } from "../../config/javascriptPhase10Levels";

const JavaScriptLevel6Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase10Levels[6]}
      course="javascript"
      phase={10}
      levelNumber={6}
    />
  );
};

export default JavaScriptLevel6Page;
