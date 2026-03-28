import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase5Levels } from "../../config/htmlPhase5Levels";

const HTMLLevel6Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase5Levels[6]}
      course="html"
      phase={5}
      levelNumber={6}
    />
  );
};

export default HTMLLevel6Page;
