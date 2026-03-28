import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase2Levels } from "../../config/cssPhase2Levels";

const CSSLevel9Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase2Levels[9]}
      course="css"
      phase={2}
      levelNumber={9}
    />
  );
};

export default CSSLevel9Page;
