import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase3Levels } from "../../config/cssPhase3Levels";

const CSSLevel3Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase3Levels[3]}
      course="css"
      phase={3}
      levelNumber={3}
    />
  );
};

export default CSSLevel3Page;
