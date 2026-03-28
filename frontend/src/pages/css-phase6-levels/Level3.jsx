import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase6Levels } from "../../config/cssPhase6Levels";

const CSSLevel3Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase6Levels[3]}
      course="css"
      phase={6}
      levelNumber={3}
    />
  );
};

export default CSSLevel3Page;
