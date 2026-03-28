import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase3Levels } from "../../config/cssPhase3Levels";

const CSSLevel4Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase3Levels[4]}
      course="css"
      phase={3}
      levelNumber={4}
    />
  );
};

export default CSSLevel4Page;
