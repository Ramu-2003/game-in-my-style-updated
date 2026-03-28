import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase1Levels } from "../../config/javascriptPhase1Levels";

const JavaScriptLevel8Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase1Levels[8]}
      course="javascript"
      phase={1}
      levelNumber={8}
    />
  );
};

export default JavaScriptLevel8Page;
