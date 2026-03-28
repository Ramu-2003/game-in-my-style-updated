import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase1Levels } from "../../config/htmlPhase1Levels";

const HTMLLevel8Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase1Levels[8]}
      course="html"
      phase={1}
      levelNumber={8}
    />
  );
};

export default HTMLLevel8Page;
