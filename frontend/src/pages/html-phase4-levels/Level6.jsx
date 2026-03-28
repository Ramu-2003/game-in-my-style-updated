import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase4Levels } from "../../config/htmlPhase4Levels";

const HTMLLevel6Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase4Levels[6]}
      course="html"
      phase={4}
      levelNumber={6}
    />
  );
};

export default HTMLLevel6Page;
