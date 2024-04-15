import React, { useState } from 'react'
import Navbar from './layouts/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/Login'
import AdminLogin from './pages/auth/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import VolunteerRegisterForm from './pages/volunteer/VolunteerRegisterForm'
import AdminVolunteers from './pages/admin/AdminVolunteers'
import AdminNeedyPersons from './pages/admin/AdminNeedyPersons'
import NeedyRegisterationForm from './pages/needy/NeedyRegisterationForm'
import DonateFood from './pages/public/DonateFood'
import AdminDonatedFoods from './pages/admin/AdminDonatedFoods'
import VolunteerLogin from './pages/auth/VolunteerLogin'
import VolunteerDashboard from './pages/volunteer/VolunteerDashboard'
import VolunteerAssignedNeedyPersons from './pages/volunteer/VolunteerAssignedNeedyPersons'
import Don from './pages/public/Don'
import Footer from './layouts/Footer'
import Volunteerpage from './pages/public/volunteerpage'
import Community from './pages/public/Community'
import NeedyPersonDashboard from './pages/needy/NeedyPersonDashboard'
import Inventory from './pages/public/Inventory'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* public routes */}
        <Route exact path="/donate-food" element={<DonateFood />} />
        <Route exact path="/don" element={<Don />} />
        <Route exact path="/volunteerpage" element={<Volunteerpage />} />
        <Route exact path="/chatpage" element={<Community />} />
        <Route exact path="/inventory" element={<Inventory />} />

        {/* auth routes */}
        <Route exact path="/auth/register" element={<Signup />} />
        <Route exact path="/auth/login" element={<Login />} />
        <Route exact path="/auth/admin-login" element={<AdminLogin />} />
        <Route
          exact
          path="/auth/volunteer-login"
          element={<VolunteerLogin />}
        />
        {/* admin routes */}
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/admin/volunteers" element={<AdminVolunteers />} />
        <Route
          exact
          path="/admin/needy-persons"
          element={<AdminNeedyPersons />}
        />
        <Route
          exact
          path="/admin/donated-foods"
          element={<AdminDonatedFoods />}
        />
        {/* volunteer routes */}
        <Route
          exact
          path="/volunteer/dashboard"
          element={<VolunteerDashboard />}
        />
        <Route
          exact
          path="/volunteer/apply"
          element={<VolunteerRegisterForm />}
        />
        <Route
          exact
          path="/volunteer/assigned-needy-persons"
          element={<VolunteerAssignedNeedyPersons />}
        />
        {/* needy person routes */}
        <Route exact path="/needy/apply" element={<NeedyRegisterationForm />} />
        <Route
          exact
          path="/needyPerson/dashboard"
          element={<NeedyPersonDashboard />}
        />
      </Routes>
      <Footer/>
    </>
  );
}

export default App
