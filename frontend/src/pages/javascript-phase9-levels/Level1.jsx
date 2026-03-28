import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase9Levels } from "../../config/javascriptPhase9Levels";

const JavaScriptLevel1Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase9Levels[1]}
      course="javascript"
      phase={9}
      levelNumber={1}
    />
  );
};

export default JavaScriptLevel1Page;
