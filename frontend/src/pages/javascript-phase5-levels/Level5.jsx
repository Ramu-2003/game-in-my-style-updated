import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase5Levels } from "../../config/javascriptPhase5Levels";

const JavaScriptLevel5Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase5Levels[5]}
      course="javascript"
      phase={5}
      levelNumber={5}
    />
  );
};

export default JavaScriptLevel5Page;
