import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase1Levels } from "../../config/cssPhase1Levels";

const CSSLevel4Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase1Levels[4]}
      course="css"
      phase={1}
      levelNumber={4}
    />
  );
};

export default CSSLevel4Page;
