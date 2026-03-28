import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase8Levels } from "../../config/htmlPhase8Levels";

const HTMLLevel6Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase8Levels[6]}
      course="html"
      phase={8}
      levelNumber={6}
    />
  );
};

export default HTMLLevel6Page;
