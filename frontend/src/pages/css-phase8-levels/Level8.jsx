import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase8Levels } from "../../config/cssPhase8Levels";

const CSSLevel8Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase8Levels[8]}
      course="css"
      phase={8}
      levelNumber={8}
    />
  );
};

export default CSSLevel8Page;
