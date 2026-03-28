import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase7Levels } from "../../config/javascriptPhase7Levels";

const JavaScriptLevel9Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase7Levels[9]}
      course="javascript"
      phase={7}
      levelNumber={9}
    />
  );
};

export default JavaScriptLevel9Page;
