import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase7Levels } from "../../config/htmlPhase7Levels";

const HTMLLevel8Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase7Levels[8]}
      course="html"
      phase={7}
      levelNumber={8}
    />
  );
};

export default HTMLLevel8Page;
