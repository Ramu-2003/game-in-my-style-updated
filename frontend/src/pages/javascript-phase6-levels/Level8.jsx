import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase6Levels } from "../../config/javascriptPhase6Levels";

const JavaScriptLevel8Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase6Levels[8]}
      course="javascript"
      phase={6}
      levelNumber={8}
    />
  );
};

export default JavaScriptLevel8Page;
