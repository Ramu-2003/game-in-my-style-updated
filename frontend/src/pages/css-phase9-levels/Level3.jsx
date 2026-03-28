import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase9Levels } from "../../config/cssPhase9Levels";

const CSSLevel3Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase9Levels[3]}
      course="css"
      phase={9}
      levelNumber={3}
    />
  );
};

export default CSSLevel3Page;
