import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase4Levels } from "../../config/javascriptPhase4Levels";

const JavaScriptLevel6Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase4Levels[6]}
      course="javascript"
      phase={4}
      levelNumber={6}
    />
  );
};

export default JavaScriptLevel6Page;
