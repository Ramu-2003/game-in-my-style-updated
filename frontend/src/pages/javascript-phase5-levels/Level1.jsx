import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase5Levels } from "../../config/javascriptPhase5Levels";

const JavaScriptLevel1Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase5Levels[1]}
      course="javascript"
      phase={5}
      levelNumber={1}
    />
  );
};

export default JavaScriptLevel1Page;
