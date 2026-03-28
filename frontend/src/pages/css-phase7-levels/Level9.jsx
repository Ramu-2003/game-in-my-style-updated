import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase7Levels } from "../../config/cssPhase7Levels";

const CSSLevel9Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase7Levels[9]}
      course="css"
      phase={7}
      levelNumber={9}
    />
  );
};

export default CSSLevel9Page;
