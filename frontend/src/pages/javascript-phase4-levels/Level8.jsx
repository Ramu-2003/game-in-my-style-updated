import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase4Levels } from "../../config/javascriptPhase4Levels";

const JavaScriptLevel8Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase4Levels[8]}
      course="javascript"
      phase={4}
      levelNumber={8}
    />
  );
};

export default JavaScriptLevel8Page;
