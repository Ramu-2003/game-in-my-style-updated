import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase4Levels } from "../../config/htmlPhase4Levels";

const HTMLLevel4Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase4Levels[4]}
      course="html"
      phase={4}
      levelNumber={4}
    />
  );
};

export default HTMLLevel4Page;
