import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase7Levels } from "../../config/javascriptPhase7Levels";

const JavaScriptLevel4Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase7Levels[4]}
      course="javascript"
      phase={7}
      levelNumber={4}
    />
  );
};

export default JavaScriptLevel4Page;
