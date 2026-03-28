import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase8Levels } from "../../config/javascriptPhase8Levels";

const JavaScriptLevel6Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase8Levels[6]}
      course="javascript"
      phase={8}
      levelNumber={6}
    />
  );
};

export default JavaScriptLevel6Page;
