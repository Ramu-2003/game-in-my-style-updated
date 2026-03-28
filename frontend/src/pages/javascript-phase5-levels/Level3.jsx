import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase5Levels } from "../../config/javascriptPhase5Levels";

const JavaScriptLevel3Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase5Levels[3]}
      course="javascript"
      phase={5}
      levelNumber={3}
    />
  );
};

export default JavaScriptLevel3Page;
