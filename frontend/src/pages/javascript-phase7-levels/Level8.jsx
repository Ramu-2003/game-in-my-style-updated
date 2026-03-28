import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase7Levels } from "../../config/javascriptPhase7Levels";

const JavaScriptLevel8Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase7Levels[8]}
      course="javascript"
      phase={7}
      levelNumber={8}
    />
  );
};

export default JavaScriptLevel8Page;
