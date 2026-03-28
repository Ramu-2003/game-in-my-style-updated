import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase7Levels } from "../../config/javascriptPhase7Levels";

const JavaScriptLevel6Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase7Levels[6]}
      course="javascript"
      phase={7}
      levelNumber={6}
    />
  );
};

export default JavaScriptLevel6Page;
