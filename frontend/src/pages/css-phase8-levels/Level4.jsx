import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase8Levels } from "../../config/cssPhase8Levels";

const CSSLevel4Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase8Levels[4]}
      course="css"
      phase={8}
      levelNumber={4}
    />
  );
};

export default CSSLevel4Page;
