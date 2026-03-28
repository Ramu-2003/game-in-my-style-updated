import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase2Levels } from "../../config/javascriptPhase2Levels";

const JavaScriptLevel6Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase2Levels[6]}
      course="javascript"
      phase={2}
      levelNumber={6}
    />
  );
};

export default JavaScriptLevel6Page;
