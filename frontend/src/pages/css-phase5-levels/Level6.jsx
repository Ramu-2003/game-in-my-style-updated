import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase5Levels } from "../../config/cssPhase5Levels";

const CSSLevel6Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase5Levels[6]}
      course="css"
      phase={5}
      levelNumber={6}
    />
  );
};

export default CSSLevel6Page;
