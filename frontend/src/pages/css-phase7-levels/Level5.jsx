import CSSLevelTemplate from "../../components/levels/CSSLevelTemplate";
import { cssPhase7Levels } from "../../config/cssPhase7Levels";

const CSSLevel5Page = () => {
  return (
    <CSSLevelTemplate 
      challenge={cssPhase7Levels[5]}
      course="css"
      phase={7}
      levelNumber={5}
    />
  );
};

export default CSSLevel5Page;
