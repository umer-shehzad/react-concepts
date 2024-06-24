import './App.css';

import Action from './components/actionInForm/Action';
import LazyLoadImage from './components/lazyLoadImageComp/Index';
import WithoutUseTransition from './components/withoutUseTransition';
import UseTransition from './components/useTransition';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResetPasswordForm from './components/reset-password/ResetPasswordForm';

function App() {

  return (
    <>
      {/* <Action /> */}
      {/* <LazyLoadImage /> */}
      {/* <WithoutUseTransition /> */}
      {/* <UseTransition /> */}

      {/* <ResetPasswordForm /> */}
      <Router>
        <Routes>
        <Route path="/" element={<div>Home Page</div>} />
          <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
          {/* Add other routes here */}
        </Routes>
      </Router>
    </>
  )
}

export default App
