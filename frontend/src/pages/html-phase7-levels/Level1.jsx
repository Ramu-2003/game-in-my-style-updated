import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase7Levels } from "../../config/htmlPhase7Levels";

const HTMLLevel1Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase7Levels[1]}
      course="html"
      phase={7}
      levelNumber={1}
    />
  );
};

export default HTMLLevel1Page;
