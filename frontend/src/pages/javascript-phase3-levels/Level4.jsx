import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase3Levels } from "../../config/javascriptPhase3Levels";

const JavaScriptLevel4Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase3Levels[4]}
      course="javascript"
      phase={3}
      levelNumber={4}
    />
  );
};

export default JavaScriptLevel4Page;
