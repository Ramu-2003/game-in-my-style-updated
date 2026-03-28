import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase6Levels } from "../../config/htmlPhase6Levels";

const HTMLLevel8Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase6Levels[8]}
      course="html"
      phase={6}
      levelNumber={8}
    />
  );
};

export default HTMLLevel8Page;
