import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase9Levels } from "../../config/htmlPhase9Levels";

const HTMLLevel8Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase9Levels[8]}
      course="html"
      phase={9}
      levelNumber={8}
    />
  );
};

export default HTMLLevel8Page;
