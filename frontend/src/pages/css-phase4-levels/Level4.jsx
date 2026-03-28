import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase4Levels } from "../../config/cssPhase4Levels";

const CSSLevel4Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase4Levels[4]}
      course="css"
      phase={4}
      levelNumber={4}
    />
  );
};

export default CSSLevel4Page;
