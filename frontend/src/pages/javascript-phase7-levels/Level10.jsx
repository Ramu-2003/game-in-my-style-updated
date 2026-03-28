import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase7Levels } from "../../config/javascriptPhase7Levels";

const JavaScriptLevel10Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase7Levels[10]}
      course="javascript"
      phase={7}
      levelNumber={10}
    />
  );
};

export default JavaScriptLevel10Page;
