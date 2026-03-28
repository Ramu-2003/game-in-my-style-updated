import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase8Levels } from "../../config/htmlPhase8Levels";

const HTMLLevel1Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase8Levels[1]}
      course="html"
      phase={8}
      levelNumber={1}
    />
  );
};

export default HTMLLevel1Page;
