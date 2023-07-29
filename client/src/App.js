import React, { useState, useEffect } from "react";
import { UserList } from "./components/userList/UserList";
import { RegistrationForm } from "./components/registrationForm/RegistrationForm";

function App() {
  return (
    <div>
      App
      <RegistrationForm />
      <UserList />
    </div>
  );
}

export default App;
