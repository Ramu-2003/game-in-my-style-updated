import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase3Levels } from "../../config/cssPhase3Levels";

const CSSLevel8Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase3Levels[8]}
      course="css"
      phase={3}
      levelNumber={8}
    />
  );
};

export default CSSLevel8Page;
