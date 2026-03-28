import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase6Levels } from "../../config/javascriptPhase6Levels";

const JavaScriptLevel5Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase6Levels[5]}
      course="javascript"
      phase={6}
      levelNumber={5}
    />
  );
};

export default JavaScriptLevel5Page;
