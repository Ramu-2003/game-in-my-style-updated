import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase8Levels } from "../../config/javascriptPhase8Levels";

const JavaScriptLevel4Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase8Levels[4]}
      course="javascript"
      phase={8}
      levelNumber={4}
    />
  );
};

export default JavaScriptLevel4Page;
