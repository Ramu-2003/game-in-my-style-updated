import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase2Levels } from "../../config/htmlPhase2Levels";

const HTMLLevel8Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase2Levels[8]}
      course="html"
      phase={2}
      levelNumber={8}
    />
  );
};

export default HTMLLevel8Page;
