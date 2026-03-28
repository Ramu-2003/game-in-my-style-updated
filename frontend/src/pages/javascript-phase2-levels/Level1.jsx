import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase2Levels } from "../../config/javascriptPhase2Levels";

const JavaScriptLevel1Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase2Levels[1]}
      course="javascript"
      phase={2}
      levelNumber={1}
    />
  );
};

export default JavaScriptLevel1Page;
