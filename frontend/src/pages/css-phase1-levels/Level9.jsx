import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase1Levels } from "../../config/cssPhase1Levels";

const CSSLevel9Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase1Levels[9]}
      course="css"
      phase={1}
      levelNumber={9}
    />
  );
};

export default CSSLevel9Page;
