import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase6Levels } from "../../config/javascriptPhase6Levels";

const JavaScriptLevel1Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase6Levels[1]}
      course="javascript"
      phase={6}
      levelNumber={1}
    />
  );
};

export default JavaScriptLevel1Page;
