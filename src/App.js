import { Route, Routes } from "react-router-dom";
import DetailPage from "./routes/detail/detail.page";
import HomePage from "./routes/home/home.page";
import Navigation from "./routes/navigation/navigation.page";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path={"detail"} element={<DetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
