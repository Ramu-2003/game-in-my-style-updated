import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase10Levels } from "../../config/javascriptPhase10Levels";

const JavaScriptLevel5Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase10Levels[5]}
      course="javascript"
      phase={10}
      levelNumber={5}
    />
  );
};

export default JavaScriptLevel5Page;
