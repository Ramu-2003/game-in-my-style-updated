import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase8Levels } from "../../config/htmlPhase8Levels";

const HTMLLevel8Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase8Levels[8]}
      course="html"
      phase={8}
      levelNumber={8}
    />
  );
};

export default HTMLLevel8Page;
