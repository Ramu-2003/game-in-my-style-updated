import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase5Levels } from "../../config/htmlPhase5Levels";

const HTMLLevel8Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase5Levels[8]}
      course="html"
      phase={5}
      levelNumber={8}
    />
  );
};

export default HTMLLevel8Page;
