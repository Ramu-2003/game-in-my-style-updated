import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase9Levels } from "../../config/cssPhase9Levels";

const CSSLevel4Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase9Levels[4]}
      course="css"
      phase={9}
      levelNumber={4}
    />
  );
};

export default CSSLevel4Page;
