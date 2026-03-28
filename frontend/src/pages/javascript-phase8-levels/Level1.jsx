import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase8Levels } from "../../config/javascriptPhase8Levels";

const JavaScriptLevel1Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase8Levels[1]}
      course="javascript"
      phase={8}
      levelNumber={1}
    />
  );
};

export default JavaScriptLevel1Page;
