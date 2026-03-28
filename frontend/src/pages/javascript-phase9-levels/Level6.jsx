import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase9Levels } from "../../config/javascriptPhase9Levels";

const JavaScriptLevel6Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase9Levels[6]}
      course="javascript"
      phase={9}
      levelNumber={6}
    />
  );
};

export default JavaScriptLevel6Page;
