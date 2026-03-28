import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase7Levels } from "../../config/cssPhase7Levels";

const CSSLevel2Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase7Levels[2]}
      course="css"
      phase={7}
      levelNumber={2}
    />
  );
};

export default CSSLevel2Page;
