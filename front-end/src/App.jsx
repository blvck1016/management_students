import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddEleve from "./Pages/Eleve/AddEleve";
import EditEleve from "./Pages/Eleve/EditEleve";
import Enseignant from "./Pages/Enseignant/Enseignant";
import AddEnseignant from "./Pages/Enseignant/AddEnseignant";
import EditEnseignant from "./Pages/Enseignant/EditEnseignant";
import Matiere from "./Pages/Matiere/Matiere";
import AddMatiere from "./Pages/Matiere/AddMatiere";
import EditMatiere from "./Pages/Matiere/EditMatiere";

import AdminInterface from "./Pages/admin/AdminInterface";

import Classe from "./Pages/Classe/Classe";
import AdminList from "./Pages/admin/AdminList";
import Eleve from "./Pages/Eleve/Eleve";
import ProfilAdmin from "./Pages/admin/profilAdmin";

import Login from "./Pages/Login/Login"
import AdminIndex from "./Pages/admin/AdminIndex";

import Home from "./Pages/home/Home";

import EnseignantInerface  from "./Interfaces/enseignantInerface/EnseignantInerface"

import GetEleves from "./Interfaces/enseignantInerface/GetEleve"

import EnseignantIndex from "./Interfaces/enseignantInerface/EnseignantIndex"

import Absences from "./Interfaces/enseignantInerface/Absences";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminInterface />}>
          {/* classes */}
          <Route index element={<AdminIndex />} />
          <Route path="/admin/classes" element={<Classe />} />

          {/* matieres */}
          <Route path="/admin/matiere" element={<Matiere />} />
          <Route path="/admin/addmatiere" element={<AddMatiere />} />
          <Route path="/admin/EditMatiere/:id" element={<EditMatiere />} />

          {/* enseingants */}
          <Route path="/admin/enseignant" element={<Enseignant />} />
          <Route path="/admin/addensei" element={<AddEnseignant />} />
          <Route path="/admin/EditEnsi/:id" element={<EditEnseignant />} />

          {/* eleves */}
          <Route path="/admin/eleves" element={<Eleve />} />
          <Route path="/admin/addEl" element={<AddEleve />} />
          <Route path="/admin/EditEl/:id" element={<EditEleve />} />

          {/* profile */}
          <Route path="/admin/profile" element={<ProfilAdmin />} />
          {/* All admins */}
          <Route path="/admin/all" element={<AdminList />} />
        </Route>

        {/* teacher Interface */}

        <Route path="/enseignant" element={<EnseignantInerface />}>
          <Route index element={<EnseignantIndex />} />
          <Route
            path="/enseignant/modules/:id/students"
            element={<GetEleves />}
          />
          <Route path="/enseignant/mark-absences" element={<Absences />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
