import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase4Levels } from "../../config/cssPhase4Levels";

const CSSLevel6Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase4Levels[6]}
      course="css"
      phase={4}
      levelNumber={6}
    />
  );
};

export default CSSLevel6Page;
