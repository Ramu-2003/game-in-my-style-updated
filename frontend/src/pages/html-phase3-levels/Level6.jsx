import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase3Levels } from "../../config/htmlPhase3Levels";

const HTMLLevel6Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase3Levels[6]}
      course="html"
      phase={3}
      levelNumber={6}
    />
  );
};

export default HTMLLevel6Page;
