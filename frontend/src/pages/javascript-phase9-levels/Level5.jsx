import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase9Levels } from "../../config/javascriptPhase9Levels";

const JavaScriptLevel5Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase9Levels[5]}
      course="javascript"
      phase={9}
      levelNumber={5}
    />
  );
};

export default JavaScriptLevel5Page;
