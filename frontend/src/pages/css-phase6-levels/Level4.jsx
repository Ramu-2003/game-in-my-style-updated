import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase6Levels } from "../../config/cssPhase6Levels";

const CSSLevel4Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase6Levels[4]}
      course="css"
      phase={6}
      levelNumber={4}
    />
  );
};

export default CSSLevel4Page;
