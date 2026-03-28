import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase6Levels } from "../../config/javascriptPhase6Levels";

const JavaScriptLevel6Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase6Levels[6]}
      course="javascript"
      phase={6}
      levelNumber={6}
    />
  );
};

export default JavaScriptLevel6Page;
