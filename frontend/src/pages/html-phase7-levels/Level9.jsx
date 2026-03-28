import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase7Levels } from "../../config/htmlPhase7Levels";

const HTMLLevel9Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase7Levels[9]}
      course="html"
      phase={7}
      levelNumber={9}
    />
  );
};

export default HTMLLevel9Page;
