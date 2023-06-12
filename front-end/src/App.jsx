import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

// admin 
import Enseignant from "./Pages/Enseignant/Enseignant";
import Matiere from "./Pages/Matiere/Matiere";

import AdminInterface from "./Pages/admin/AdminInterface";

import Classe from "./Pages/Classe/Classe";
import AdminList from "./Pages/admin/AdminList";
import Eleve from "./Pages/Eleve/Eleve";
import ProfilAdmin from "./Pages/admin/profilAdmin";
import AdminIndex from "./Pages/admin/AdminIndex";

// home 

import Login from "./Pages/Login/Login"

import Home from "./Pages/home/Home";

// teacher

import EnseignantInerface  from "./Interfaces/enseignantInerface/EnseignantInerface"

import GetEleves from "./Interfaces/enseignantInerface/GetEleve"

import EnseignantIndex from "./Interfaces/enseignantInerface/EnseignantIndex"

import Absences from "./Interfaces/enseignantInerface/Absences";

import EnseiProfile from "./Interfaces/enseignantInerface/EnseiProfile";

// student

import EleveInterface from "./Interfaces/eleveInterface/EleveInterface";

import EleveIndex from "./Interfaces/eleveInterface/EleveIndex";
import EleveAbsence from "./Interfaces/eleveInterface/EleveAbsence";
import Filieres from "./Pages/filiere/filieres";

// chef de filiere
import ChefFiliereInterface from "./Interfaces/chefFiliere/chefFiliereInterface"
import CheffiliereIndex from "./Interfaces/chefFiliere/cheffiliereIndex";

// chef departement

import ChefDeartementInterface from "./Interfaces/chefDepartement/ChefDepartementInterface"
import ChefDepartementIndex from "./Interfaces/chefDepartement/ChefDepartementIndex"

// Update password page

import UpdateChefDepartementPassword from "./Pages/updatepwd/UpdateChefDepartementPassword";
import UpdateChefFilerePassword from "./Pages/updatepwd/UpdateChefFilerePassword";
import UpdateStudentPassword from "./Pages/updatepwd/UpdateStudentPassword";
import UpdateTeacherPassword from "./Pages/updatepwd/updateTeacherPassword";


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

          {/* majors */}
          <Route path="/admin/majors" element={<Filieres />} />

          {/* matieres */}
          <Route path="/admin/matiere" element={<Matiere />} />

          {/* enseingants */}
          <Route path="/admin/enseignant" element={<Enseignant />} />

          {/* eleves */}
          <Route path="/admin/eleves" element={<Eleve />} />

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
          <Route path="/enseignant/profile" element={<EnseiProfile />} />
        </Route>

        {/* student interface */}
        <Route path="/etudiant" element={<EleveInterface />}>
          <Route index element={<EleveIndex />} />
          <Route path="/etudiant/absences" element={<EleveAbsence />} />
        </Route>

        {/* chef de filiere interface */}

        <Route path="/chef-de-filiere" element={<ChefFiliereInterface />}>
          <Route index element={<CheffiliereIndex />} />
          <Route path="/chef-de-filiere/majors" element={<Filieres />} />
          <Route path="/chef-de-filiere/matiere" element={<Matiere />} />
          <Route path="/chef-de-filiere/enseignant" element={<Enseignant />} />
        </Route>

        {/*  chef de departement */}
        <Route
          path="/chef-de-departement"
          element={<ChefDeartementInterface />}
        >
          <Route index element={<ChefDepartementIndex />} />
          <Route path="/chef-de-departement/majors" element={<Filieres />} />
          <Route path="/chef-de-departement/matiere" element={<Matiere />} />
          <Route
            path="/chef-de-departement/enseignant"
            element={<Enseignant />}
          />
        </Route>
        {/* Update password routes */}
        <Route
          path="/etudiant-update-password"
          element={<UpdateStudentPassword />}
        />
        <Route
          path="/enseignant-update-password"
          element={<UpdateTeacherPassword />}
        />
        <Route
          path="/chef-departement-update-password"
          element={<UpdateChefDepartementPassword />}
        />
        <Route
          path="/chef-filiere-update-password"
          element={<UpdateChefFilerePassword />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
