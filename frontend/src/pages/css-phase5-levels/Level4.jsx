import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase5Levels } from "../../config/cssPhase5Levels";

const CSSLevel4Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase5Levels[4]}
      course="css"
      phase={5}
      levelNumber={4}
    />
  );
};

export default CSSLevel4Page;
