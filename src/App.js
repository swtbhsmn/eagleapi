import './App.css';
import { lazy, Suspense } from "react";
import { Provider } from 'react-redux';
import ConfigureStore from './redux/configStore';
import {BrowserRouter} from 'react-router-dom';
const store = ConfigureStore();
const MainApp = lazy(() => import('./components/main_app'));
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<div className="loading">Loading...</div>}>
            <MainApp />
          </Suspense>
        </BrowserRouter>
        
      </Provider>
    </div>
  );
}

export default App;
