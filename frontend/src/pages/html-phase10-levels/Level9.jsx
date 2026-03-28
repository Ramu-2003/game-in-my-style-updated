import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase10Levels } from "../../config/htmlPhase10Levels";

const HTMLLevel9Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase10Levels[9]}
      course="html"
      phase={10}
      levelNumber={9}
    />
  );
};

export default HTMLLevel9Page;
