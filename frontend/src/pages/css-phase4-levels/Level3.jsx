import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase4Levels } from "../../config/cssPhase4Levels";

const CSSLevel3Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase4Levels[3]}
      course="css"
      phase={4}
      levelNumber={3}
    />
  );
};

export default CSSLevel3Page;
