import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase3Levels } from "../../config/javascriptPhase3Levels";

const JavaScriptLevel5Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase3Levels[5]}
      course="javascript"
      phase={3}
      levelNumber={5}
    />
  );
};

export default JavaScriptLevel5Page;
