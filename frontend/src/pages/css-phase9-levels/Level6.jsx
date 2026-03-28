import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase9Levels } from "../../config/cssPhase9Levels";

const CSSLevel6Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase9Levels[6]}
      course="css"
      phase={9}
      levelNumber={6}
    />
  );
};

export default CSSLevel6Page;
