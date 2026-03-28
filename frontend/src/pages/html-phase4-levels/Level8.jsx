import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase4Levels } from "../../config/htmlPhase4Levels";

const HTMLLevel8Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase4Levels[8]}
      course="html"
      phase={4}
      levelNumber={8}
    />
  );
};

export default HTMLLevel8Page;
