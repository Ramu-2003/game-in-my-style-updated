import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase10Levels } from "../../config/cssPhase10Levels";

const CSSLevel9Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase10Levels[9]}
      course="css"
      phase={10}
      levelNumber={9}
    />
  );
};

export default CSSLevel9Page;
