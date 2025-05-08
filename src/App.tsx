import { useEffect } from "react";
import AppRouter from "./utils/AppRouter";
import AOS from "aos";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
