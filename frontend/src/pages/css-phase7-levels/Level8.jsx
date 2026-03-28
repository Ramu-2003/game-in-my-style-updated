import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase7Levels } from "../../config/cssPhase7Levels";

const CSSLevel8Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase7Levels[8]}
      course="css"
      phase={7}
      levelNumber={8}
    />
  );
};

export default CSSLevel8Page;
