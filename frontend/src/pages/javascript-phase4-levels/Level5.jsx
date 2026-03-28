import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase4Levels } from "../../config/javascriptPhase4Levels";

const JavaScriptLevel5Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase4Levels[5]}
      course="javascript"
      phase={4}
      levelNumber={5}
    />
  );
};

export default JavaScriptLevel5Page;
