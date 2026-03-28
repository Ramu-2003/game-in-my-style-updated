import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase5Levels } from "../../config/javascriptPhase5Levels";

const JavaScriptLevel8Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase5Levels[8]}
      course="javascript"
      phase={5}
      levelNumber={8}
    />
  );
};

export default JavaScriptLevel8Page;
