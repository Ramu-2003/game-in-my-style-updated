import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase5Levels } from "../../config/cssPhase5Levels";

const CSSLevel8Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase5Levels[8]}
      course="css"
      phase={5}
      levelNumber={8}
    />
  );
};

export default CSSLevel8Page;
