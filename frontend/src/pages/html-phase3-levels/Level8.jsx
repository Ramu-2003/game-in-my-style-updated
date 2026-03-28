import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase3Levels } from "../../config/htmlPhase3Levels";

const HTMLLevel8Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase3Levels[8]}
      course="html"
      phase={3}
      levelNumber={8}
    />
  );
};

export default HTMLLevel8Page;
