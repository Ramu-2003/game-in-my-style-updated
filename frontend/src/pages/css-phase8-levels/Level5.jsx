import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase8Levels } from "../../config/cssPhase8Levels";

const CSSLevel5Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase8Levels[5]}
      course="css"
      phase={8}
      levelNumber={5}
    />
  );
};

export default CSSLevel5Page;
