import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase5Levels } from "../../config/javascriptPhase5Levels";

const JavaScriptLevel6Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase5Levels[6]}
      course="javascript"
      phase={5}
      levelNumber={6}
    />
  );
};

export default JavaScriptLevel6Page;
