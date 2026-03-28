import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase4Levels } from "../../config/cssPhase4Levels";

const CSSLevel8Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase4Levels[8]}
      course="css"
      phase={4}
      levelNumber={8}
    />
  );
};

export default CSSLevel8Page;
