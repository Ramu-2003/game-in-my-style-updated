import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase7Levels } from "../../config/htmlPhase7Levels";

const HTMLLevel4Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase7Levels[4]}
      course="html"
      phase={7}
      levelNumber={4}
    />
  );
};

export default HTMLLevel4Page;
