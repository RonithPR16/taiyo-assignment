import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashboardLayout from './layouts/DashboardLayout';
import ContactsManager from './view/ContactsManager/ContactsManager';
import ChartsAndMaps from './view/ChartsAndMaps/ChartsAndMaps';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();
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
    path: "analytics",
    element: (
      <QueryClientProvider client={queryClient}>
       <DashboardLayout>
        <ChartsAndMaps/>
        </DashboardLayout>
        </QueryClientProvider>
    )
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);
