import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase6Levels } from "../../config/javascriptPhase6Levels";

const JavaScriptLevel4Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase6Levels[4]}
      course="javascript"
      phase={6}
      levelNumber={4}
    />
  );
};

export default JavaScriptLevel4Page;
