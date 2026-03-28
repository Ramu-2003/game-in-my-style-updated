import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase1Levels } from "../../config/javascriptPhase1Levels";

const JavaScriptLevel5Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase1Levels[5]}
      course="javascript"
      phase={1}
      levelNumber={5}
    />
  );
};

export default JavaScriptLevel5Page;
