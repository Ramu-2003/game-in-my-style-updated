import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase7Levels } from "../../config/cssPhase7Levels";

const CSSLevel1Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase7Levels[1]}
      course="css"
      phase={7}
      levelNumber={1}
    />
  );
};

export default CSSLevel1Page;
