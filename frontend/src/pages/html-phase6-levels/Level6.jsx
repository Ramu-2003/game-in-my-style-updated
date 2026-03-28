import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase6Levels } from "../../config/htmlPhase6Levels";

const HTMLLevel6Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase6Levels[6]}
      course="html"
      phase={6}
      levelNumber={6}
    />
  );
};

export default HTMLLevel6Page;
