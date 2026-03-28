import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase2Levels } from "../../config/cssPhase2Levels";

const CSSLevel6Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase2Levels[6]}
      course="css"
      phase={2}
      levelNumber={6}
    />
  );
};

export default CSSLevel6Page;
