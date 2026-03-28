import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase4Levels } from "../../config/javascriptPhase4Levels";

const JavaScriptLevel4Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase4Levels[4]}
      course="javascript"
      phase={4}
      levelNumber={4}
    />
  );
};

export default JavaScriptLevel4Page;
