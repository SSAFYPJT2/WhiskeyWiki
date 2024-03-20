import style from "./WhiskeyDetail.module.css";
import img from "../../assets/whiskey/Ballantines.png";
import IconContainer from'./components/IconContainer'
function WhiskeyDetail() {
  return (
    <div className={style.outerContainer}>
      <div className={style.innerContainer}>
        <div className={style.infoArea}>
          <img src={img} alt="" />
          <div className={style.textArea}>
            {/* <p style={{ fontSize: '40px' }}>Absolut</p> */}
            <h1>Absolut</h1>
            <h2>앱솔루트</h2>
            <IconContainer/>
            <p>앱솔루트는 정말 맛있는 술입니다. 게다가 정말 맛있는 술입니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default WhiskeyDetail;