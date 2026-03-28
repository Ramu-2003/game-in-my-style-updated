import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase8Levels } from "../../config/cssPhase8Levels";

const CSSLevel3Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase8Levels[3]}
      course="css"
      phase={8}
      levelNumber={3}
    />
  );
};

export default CSSLevel3Page;
