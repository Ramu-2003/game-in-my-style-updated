import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase7Levels } from "../../config/cssPhase7Levels";

const CSSLevel10Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase7Levels[10]}
      course="css"
      phase={7}
      levelNumber={10}
    />
  );
};

export default CSSLevel10Page;
