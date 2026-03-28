import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase7Levels } from "../../config/htmlPhase7Levels";

const HTMLLevel6Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase7Levels[6]}
      course="html"
      phase={7}
      levelNumber={6}
    />
  );
};

export default HTMLLevel6Page;
