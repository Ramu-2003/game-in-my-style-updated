import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase3Levels } from "../../config/javascriptPhase3Levels";

const JavaScriptLevel6Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase3Levels[6]}
      course="javascript"
      phase={3}
      levelNumber={6}
    />
  );
};

export default JavaScriptLevel6Page;
