import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase3Levels } from "../../config/htmlPhase3Levels";

const HTMLLevel4Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase3Levels[4]}
      course="html"
      phase={3}
      levelNumber={4}
    />
  );
};

export default HTMLLevel4Page;
