import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase1Levels } from "../../config/htmlPhase1Levels";

const HTMLLevel6Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase1Levels[6]}
      course="html"
      phase={1}
      levelNumber={6}
    />
  );
};

export default HTMLLevel6Page;
