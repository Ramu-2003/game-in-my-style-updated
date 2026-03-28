import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase9Levels } from "../../config/cssPhase9Levels";

const CSSLevel9Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase9Levels[9]}
      course="css"
      phase={9}
      levelNumber={9}
    />
  );
};

export default CSSLevel9Page;
