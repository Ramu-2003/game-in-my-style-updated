import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase8Levels } from "../../config/cssPhase8Levels";

const CSSLevel7Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase8Levels[7]}
      course="css"
      phase={8}
      levelNumber={7}
    />
  );
};

export default CSSLevel7Page;
