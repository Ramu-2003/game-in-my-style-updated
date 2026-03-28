import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase3Levels } from "../../config/cssPhase3Levels";

const CSSLevel6Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase3Levels[6]}
      course="css"
      phase={3}
      levelNumber={6}
    />
  );
};

export default CSSLevel6Page;
