import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase1Levels } from "../../config/javascriptPhase1Levels";

const JavaScriptLevel1Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase1Levels[1]}
      course="javascript"
      phase={1}
      levelNumber={1}
    />
  );
};

export default JavaScriptLevel1Page;
