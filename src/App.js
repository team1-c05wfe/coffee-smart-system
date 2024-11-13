import { Route, Routes } from "react-router-dom";
import Staff from "./components/pages/server/staff/Staff";
import ContextDataTable from "./components/context/ContextDataTable";
import TableManagement from "./components/TableManagement/TableManagement";
import FeedbackContext from "../src/components/context/FeedbackContext";
import FeedbackTable from "../src/components/FeedBack/FeedbackTable";
import { Home } from "./components/partial/Home";
import { Header } from "./components/pages/server/admin/Header";
import { CreatePost } from "./components/posts/server/admin/CreatePost";
import { ListPost } from "./components/posts/client/ListPost";
import { PostManagement } from "./components/posts/server/admin/PostManagement";
import { EditPost } from "./components/posts/server/admin/EditPost";
import DashBoard from "./components/posts/server/admin/DashBoard";
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/client/Home';
import { Login } from './components/user/Login';
import { Profile } from './components/user/Profile';
import { ChangePassword } from './components/user/Changepassword';
import  Update  from './components/user/Update';

// import TableManagement from "./TableManagement";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="header" element={<Header />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="listpost" element={<ListPost />} />
          <Route path="postmanagement" element={<PostManagement />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="dash" element={<DashBoard />} />
        </Route>
        <Route path="staff" element={<Staff />}/>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="admin" element={<Admin />}>
          <Route
            path="sale"
            element={
              <ContextDataTable>
                <TableManagement />
              </ContextDataTable>
            }
          />
          <Route
            path="feedback"
            element={
              <FeedbackContext>
                <FeedbackTable />
              </FeedbackContext>
            }
          />
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="changepassword" element={<ChangePassword/>} />
        <Route path="update" element={<Update/>} />
      </Routes>
    </>
  );
}

export default App;
