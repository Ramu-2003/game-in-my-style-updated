import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase4Levels } from "../../config/javascriptPhase4Levels";

const JavaScriptLevel1Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase4Levels[1]}
      course="javascript"
      phase={4}
      levelNumber={1}
    />
  );
};

export default JavaScriptLevel1Page;
