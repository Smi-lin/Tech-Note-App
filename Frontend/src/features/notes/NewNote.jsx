import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/UsersApiSlice";
import NewNoteForm from "./NewNoteForm";

const NewNote = () => {
  const users = useSelector(selectAllUsers);
  // return users ? <NewNoteForm users={users}/> : <p>Loading.....</p>;

  // if(!users?.length) return <p>Not Currently available</p>
  const content = <NewNoteForm users= {users}/>

  return content;
};


export default NewNote;