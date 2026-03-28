import JSLevelTemplate from "../../components/levels/JSLevelTemplate";
import { javascriptPhase7Levels } from "../../config/javascriptPhase7Levels";

const JavaScriptLevel5Page = () => {
  return (
    <JSLevelTemplate 
      challenge={javascriptPhase7Levels[5]}
      course="javascript"
      phase={7}
      levelNumber={5}
    />
  );
};

export default JavaScriptLevel5Page;
