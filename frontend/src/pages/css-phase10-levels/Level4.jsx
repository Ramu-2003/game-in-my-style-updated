import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase10Levels } from "../../config/cssPhase10Levels";

const CSSLevel4Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase10Levels[4]}
      course="css"
      phase={10}
      levelNumber={4}
    />
  );
};

export default CSSLevel4Page;
