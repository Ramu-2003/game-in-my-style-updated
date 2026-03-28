import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase2Levels } from "../../config/cssPhase2Levels";

const CSSLevel3Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase2Levels[3]}
      course="css"
      phase={2}
      levelNumber={3}
    />
  );
};

export default CSSLevel3Page;
