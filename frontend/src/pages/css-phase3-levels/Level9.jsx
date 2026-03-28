import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase3Levels } from "../../config/cssPhase3Levels";

const CSSLevel9Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase3Levels[9]}
      course="css"
      phase={3}
      levelNumber={9}
    />
  );
};

export default CSSLevel9Page;
