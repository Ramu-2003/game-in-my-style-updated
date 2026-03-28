import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase10Levels } from "../../config/htmlPhase10Levels";

const HTMLLevel4Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase10Levels[4]}
      course="html"
      phase={10}
      levelNumber={4}
    />
  );
};

export default HTMLLevel4Page;
