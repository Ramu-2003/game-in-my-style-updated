import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase1Levels } from "../../config/cssPhase1Levels";

const CSSLevel3Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase1Levels[3]}
      course="css"
      phase={1}
      levelNumber={3}
    />
  );
};

export default CSSLevel3Page;
