import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase8Levels } from "../../config/cssPhase8Levels";

const CSSLevel10Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase8Levels[10]}
      course="css"
      phase={8}
      levelNumber={10}
    />
  );
};

export default CSSLevel10Page;
