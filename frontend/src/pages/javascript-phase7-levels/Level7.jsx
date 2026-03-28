import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase7Levels } from "../../config/javascriptPhase7Levels";

const JavaScriptLevel7Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase7Levels[7]}
      course="javascript"
      phase={7}
      levelNumber={7}
    />
  );
};

export default JavaScriptLevel7Page;
