import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase8Levels } from "../../config/javascriptPhase8Levels";

const JavaScriptLevel5Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase8Levels[5]}
      course="javascript"
      phase={8}
      levelNumber={5}
    />
  );
};

export default JavaScriptLevel5Page;
