import { Navbar } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage/Homepage";
import MoviePage from "./pages/Movies/MoviePage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// 홈페이지 주소값 /
// 영화 전체 보여주는 페이지 (서치) 주소값 /movies
// 영화 디테일 페이지 주소값 /movies/:id
function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Homepage />}></Route>
                <Route path="movies">
                    <Route index element={<MoviePage />}></Route>
                    <Route path=":id" element={<MovieDetailPage />}></Route>
                </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
    );
}

export default App;
