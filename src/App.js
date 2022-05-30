import { DailyContainer } from "./components/DailyContainer";
import { Main } from "./components/Main";
import Styles from "./styles/App.module.css";

function App() {
  return (
    <div className={Styles.main_container}>
      <Main />
      <DailyContainer />
    </div>
  );
}

export default App;

{
  /* <span class="rTNyH RZQOk">Photo by <a href="https://unsplash.com/@alanrobertjones?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Alan Jones</a> on <a href="https://unsplash.com/s/photos/sky?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
  </span> */
}
