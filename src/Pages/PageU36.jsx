import React from 'react'

import UserProfileEditForm_46 from '../components/UserProfileEditForm_46'
import { useNavigate } from 'react-router-dom';
import Component4 from '../Components-dha/Component4';

export default function PageU36() {
  const navigate = useNavigate();
  return (
    <div>
      <Component4 title={"Edit Profile"} theme='black' onBack={() => navigate(-1)}/>
      <UserProfileEditForm_46/>
    </div>
  )
}
