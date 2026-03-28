import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase7Levels } from "../../config/cssPhase7Levels";

const CSSLevel3Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase7Levels[3]}
      course="css"
      phase={7}
      levelNumber={3}
    />
  );
};

export default CSSLevel3Page;
