import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase10Levels } from "../../config/cssPhase10Levels";

const CSSLevel10Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase10Levels[10]}
      course="css"
      phase={10}
      levelNumber={10}
    />
  );
};

export default CSSLevel10Page;
