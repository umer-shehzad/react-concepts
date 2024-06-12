import './App.css';

import Action from './components/actionInForm/Action';
import LazyLoadImage from './components/lazyLoadImageComp/Index';
import WithoutUseTransition from './components/withoutUseTransition';
import UseTransition from './components/useTransition';

function App() {

  return (
    <>
      {/* <Action /> */}
      {/* <LazyLoadImage /> */}
      {/* <WithoutUseTransition /> */}
      <UseTransition />
    </>
  )
}

export default App
