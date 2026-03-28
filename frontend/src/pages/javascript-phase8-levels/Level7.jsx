import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase8Levels } from "../../config/javascriptPhase8Levels";

const JavaScriptLevel7Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase8Levels[7]}
      course="javascript"
      phase={8}
      levelNumber={7}
    />
  );
};

export default JavaScriptLevel7Page;
