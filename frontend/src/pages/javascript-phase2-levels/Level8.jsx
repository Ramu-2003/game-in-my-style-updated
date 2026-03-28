import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase2Levels } from "../../config/javascriptPhase2Levels";

const JavaScriptLevel8Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase2Levels[8]}
      course="javascript"
      phase={2}
      levelNumber={8}
    />
  );
};

export default JavaScriptLevel8Page;
