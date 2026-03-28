import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase3Levels } from "../../config/javascriptPhase3Levels";

const JavaScriptLevel1Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase3Levels[1]}
      course="javascript"
      phase={3}
      levelNumber={1}
    />
  );
};

export default JavaScriptLevel1Page;
