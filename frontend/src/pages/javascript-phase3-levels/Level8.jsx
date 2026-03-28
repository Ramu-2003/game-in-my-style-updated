import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase3Levels } from "../../config/javascriptPhase3Levels";

const JavaScriptLevel8Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase3Levels[8]}
      course="javascript"
      phase={3}
      levelNumber={8}
    />
  );
};

export default JavaScriptLevel8Page;
