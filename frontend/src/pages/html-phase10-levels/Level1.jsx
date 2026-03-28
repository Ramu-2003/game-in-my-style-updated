import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase10Levels } from "../../config/htmlPhase10Levels";

const HTMLLevel1Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase10Levels[1]}
      course="html"
      phase={10}
      levelNumber={1}
    />
  );
};

export default HTMLLevel1Page;
