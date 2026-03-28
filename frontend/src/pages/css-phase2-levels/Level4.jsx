import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase2Levels } from "../../config/cssPhase2Levels";

const CSSLevel4Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase2Levels[4]}
      course="css"
      phase={2}
      levelNumber={4}
    />
  );
};

export default CSSLevel4Page;
