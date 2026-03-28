import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase5Levels } from "../../config/javascriptPhase5Levels";

const JavaScriptLevel4Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase5Levels[4]}
      course="javascript"
      phase={5}
      levelNumber={4}
    />
  );
};

export default JavaScriptLevel4Page;
