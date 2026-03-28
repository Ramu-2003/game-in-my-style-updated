import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase6Levels } from "../../config/cssPhase6Levels";

const CSSLevel6Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase6Levels[6]}
      course="css"
      phase={6}
      levelNumber={6}
    />
  );
};

export default CSSLevel6Page;
