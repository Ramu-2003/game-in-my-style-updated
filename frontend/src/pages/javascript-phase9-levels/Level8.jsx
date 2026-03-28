import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase9Levels } from "../../config/javascriptPhase9Levels";

const JavaScriptLevel8Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase9Levels[8]}
      course="javascript"
      phase={9}
      levelNumber={8}
    />
  );
};

export default JavaScriptLevel8Page;
