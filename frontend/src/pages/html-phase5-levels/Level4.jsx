import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase5Levels } from "../../config/htmlPhase5Levels";

const HTMLLevel4Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase5Levels[4]}
      course="html"
      phase={5}
      levelNumber={4}
    />
  );
};

export default HTMLLevel4Page;
