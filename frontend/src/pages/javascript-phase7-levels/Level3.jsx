import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase7Levels } from "../../config/javascriptPhase7Levels";

const JavaScriptLevel3Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase7Levels[3]}
      course="javascript"
      phase={7}
      levelNumber={3}
    />
  );
};

export default JavaScriptLevel3Page;
