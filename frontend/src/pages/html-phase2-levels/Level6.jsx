import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase2Levels } from "../../config/htmlPhase2Levels";

const HTMLLevel6Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase2Levels[6]}
      course="html"
      phase={2}
      levelNumber={6}
    />
  );
};

export default HTMLLevel6Page;
