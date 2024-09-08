import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from './layouts/DashboardLayout';
import ContactsManager from './view/ContactsManager/ContactsManager';
import ChartsAndMaps from './view/ChartsAndMaps/ChartsAndMaps';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DashboardLayout>
        <ContactsManager/>
     </DashboardLayout>
    ),
  },
  {
    path: "charts",
    element: (
       <DashboardLayout>
        <ChartsAndMaps/>
       </DashboardLayout>
    )
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router} />
);
