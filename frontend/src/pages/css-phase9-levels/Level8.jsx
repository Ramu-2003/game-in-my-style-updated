import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase9Levels } from "../../config/cssPhase9Levels";

const CSSLevel8Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase9Levels[8]}
      course="css"
      phase={9}
      levelNumber={8}
    />
  );
};

export default CSSLevel8Page;
