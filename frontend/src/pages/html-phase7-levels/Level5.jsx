import LevelTemplate from "../../components/levels/LevelTemplate";
import { htmlPhase7Levels } from "../../config/htmlPhase7Levels";

const HTMLLevel5Page = () => {
  return (
    <LevelTemplate 
      challenge={htmlPhase7Levels[5]}
      course="html"
      phase={7}
      levelNumber={5}
    />
  );
};

export default HTMLLevel5Page;
