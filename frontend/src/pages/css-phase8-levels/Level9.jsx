import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase8Levels } from "../../config/cssPhase8Levels";

const CSSLevel9Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase8Levels[9]}
      course="css"
      phase={8}
      levelNumber={9}
    />
  );
};

export default CSSLevel9Page;
