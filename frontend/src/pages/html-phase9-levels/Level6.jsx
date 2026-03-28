import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase9Levels } from "../../config/htmlPhase9Levels";

const HTMLLevel6Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase9Levels[6]}
      course="html"
      phase={9}
      levelNumber={6}
    />
  );
};

export default HTMLLevel6Page;
