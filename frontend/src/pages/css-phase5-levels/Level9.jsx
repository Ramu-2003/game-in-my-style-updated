import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase5Levels } from "../../config/cssPhase5Levels";

const CSSLevel9Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase5Levels[9]}
      course="css"
      phase={5}
      levelNumber={9}
    />
  );
};

export default CSSLevel9Page;
