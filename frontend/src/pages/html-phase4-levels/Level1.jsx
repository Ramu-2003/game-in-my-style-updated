import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase4Levels } from "../../config/htmlPhase4Levels";

const HTMLLevel1Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase4Levels[1]}
      course="html"
      phase={4}
      levelNumber={1}
    />
  );
};

export default HTMLLevel1Page;
