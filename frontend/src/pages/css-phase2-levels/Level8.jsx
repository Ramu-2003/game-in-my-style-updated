import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase2Levels } from "../../config/cssPhase2Levels";

const CSSLevel8Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase2Levels[8]}
      course="css"
      phase={2}
      levelNumber={8}
    />
  );
};

export default CSSLevel8Page;
