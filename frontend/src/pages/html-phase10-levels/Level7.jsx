import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase10Levels } from "../../config/htmlPhase10Levels";

const HTMLLevel7Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase10Levels[7]}
      course="html"
      phase={10}
      levelNumber={7}
    />
  );
};

export default HTMLLevel7Page;
