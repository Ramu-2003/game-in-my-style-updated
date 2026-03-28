import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase7Levels } from "../../config/cssPhase7Levels";

const CSSLevel6Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase7Levels[6]}
      course="css"
      phase={7}
      levelNumber={6}
    />
  );
};

export default CSSLevel6Page;
