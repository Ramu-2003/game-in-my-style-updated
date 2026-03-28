import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase7Levels } from "../../config/cssPhase7Levels";

const CSSLevel7Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase7Levels[7]}
      course="css"
      phase={7}
      levelNumber={7}
    />
  );
};

export default CSSLevel7Page;
