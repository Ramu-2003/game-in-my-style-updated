import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase5Levels } from "../../config/javascriptPhase5Levels";

const JavaScriptLevel2Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase5Levels[2]}
      course="javascript"
      phase={5}
      levelNumber={2}
    />
  );
};

export default JavaScriptLevel2Page;
