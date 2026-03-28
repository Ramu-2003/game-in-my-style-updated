import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase5Levels } from "../../config/javascriptPhase5Levels";

const JavaScriptLevel9Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase5Levels[9]}
      course="javascript"
      phase={5}
      levelNumber={9}
    />
  );
};

export default JavaScriptLevel9Page;
