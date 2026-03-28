import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase8Levels } from "../../config/javascriptPhase8Levels";

const JavaScriptLevel8Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase8Levels[8]}
      course="javascript"
      phase={8}
      levelNumber={8}
    />
  );
};

export default JavaScriptLevel8Page;
