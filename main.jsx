import { HelmetProvider } from "react-helmet-async";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
// importando o Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// assets
import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import people from "./assets/people.png";
import car from "./assets/car.png";
import medalha from "./assets/medalha.png";
import dinheiro from "./assets/dinheiro.png";
import concorrencia from "./assets/concorrencia.png";
import medico from "./assets/medico.jpg";
import maps from "./assets/maps.png";
import favicon from "./assets/logo.png";

// configurando o router
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

//components
import SearchResults from "./components/SearchResults.jsx";

// routes
import Home from "./routes/Home/Home.jsx";
import Products from "./routes/Products/Products.jsx";
import Contact from "./routes/Contact/Contact.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";

import Sabonetes from "./routes/Sabonetes/Sabonetes.jsx";
import MeiasDeCompressaoDetails from "./routes/SabonetesDetails/SabonetesDetails.jsx";
import ShampoosCondicionadores from "./routes/ShampoosCondicionadores/ShampoosCondicionadores.jsx";
import ShampoosCondicionadoresDetails from "./routes/ShampoosCondicionadoresDetails/ShampoosCondicionadoresDetails.jsx";
import Desodorantes from "./routes/Desodorantes/Desodorantes.jsx";
import DesodorantesDetails from "./routes/DesodorantesDetails/DesodorantesDetails.jsx";
import Perfumes from "./routes/Perfumes/Perfumes.jsx";
import PerfumesDetails from "./routes/PerfumesDetails/PerfumesDetails.jsx";
import BodySplash from "./routes/BodySplash/BodySplash.jsx";
import BodySplashDetails from "./routes/BodySplashDetails/BodySplashDetails.jsx";
import ProtetoresSolar from "./routes/ProtetoresSolar/ProtetoresSolar.jsx";
import ProtetoresSolarDetails from "./routes/ProtetoresSolarDetails/ProtetoresSolarDetails.jsx";
import Hidratantes from "./routes/Hidratantes/Hidratantes.jsx";
import HidratantesDetails from "./routes/HidratantesDetails/HidratantesDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Home
            banner1={banner1}
            banner2={banner2}
            people={people}
            car={car}
            medalha={medalha}
            dinheiro={dinheiro}
            concorrencia={concorrencia}
            medico={medico}
            maps={maps}
            favicon={favicon}
          />
        ),
      },
      { path: "*", element: <ErrorPage favicon={favicon} /> },
      {
        path: "/produtos",
        element: <Products banner2={banner2} favicon={favicon} />,
      },
      {
        path: "/busca",
        element: <SearchResults favicon={favicon} />,
      },
      {
        path: "/contato",
        element: <Contact favicon={favicon} />,
      },
      {
        path: "/produtos/sabonetes",
        element: <Sabonetes banner2={banner2} favicon={favicon} />,
      },
      {
        path: "/produtos/shampoos",
        element: <ShampoosCondicionadores banner2={banner2} favicon={favicon} />,
      },
      {
        path: "/produtos/desodorantes",
        element: <Desodorantes banner2={banner2} favicon={favicon} />,
      },
      {
        path: "/produtos/perfumes",
        element: <Perfumes banner2={banner2} favicon={favicon} />,
      },
      {
        path: "/produtos/bodysplashs",
        element: <BodySplash banner2={banner2} favicon={favicon} />,
      },
      {
        path: "/produtos/protetoresolar",
        element: <ProtetoresSolar banner2={banner2} favicon={favicon} />,
      },
      {
        path: "/produtos/hidratantes",
        element: <Hidratantes banner2={banner2} favicon={favicon} />,
      },
      {
        path: "/produtos/sabonetes/:id",
        element: <MeiasDeCompressaoDetails favicon={favicon} />,
      },
      {
        path: "/produtos/shampoos/:id",
        element: <ShampoosCondicionadoresDetails favicon={favicon} />,
      },
      {
        path: "/produtos/desodorantes/:id",
        element: <DesodorantesDetails favicon={favicon} />,
      },
      {
        path: "/produtos/perfumes/:id",
        element: <PerfumesDetails favicon={favicon} />,
      },
      {
        path: "/produtos/bodysplashs/:id",
        element: <BodySplashDetails favicon={favicon} />,
      },
      {
        path: "/produtos/protetoresolar/:id",
        element: <ProtetoresSolarDetails favicon={favicon} />,
      },
      {
        path: "/produtos/hidratantes/:id",
        element: <HidratantesDetails favicon={favicon} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
