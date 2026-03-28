import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase10Levels } from "../../config/cssPhase10Levels";

const CSSLevel3Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase10Levels[3]}
      course="css"
      phase={10}
      levelNumber={3}
    />
  );
};

export default CSSLevel3Page;
