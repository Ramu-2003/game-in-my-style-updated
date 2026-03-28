import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase5Levels } from "../../config/javascriptPhase5Levels";

const JavaScriptLevel7Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase5Levels[7]}
      course="javascript"
      phase={5}
      levelNumber={7}
    />
  );
};

export default JavaScriptLevel7Page;
