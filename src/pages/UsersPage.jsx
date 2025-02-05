import Navigation from "../components/Navigation"
import Aside from "../components/Aside"
import List from "../components/Table";
import Header from "../components/Header";
import Filters from "../components/Filters";
import { useState, useEffect } from "react";
const UsersPage = () => {

const [query, setQuery] = useState('');
const [users, setUsers] = useState([]);
const [filteredUsers, setFilteredUsers] = useState([]);
const [select, setSelect] = useState('');

const handleInput = (value) => {
  setQuery(value);
};

const handleSelect = (value) => {
  setSelect(value);
};

const role = [  "trenér",
  "zákazník",
  "admin"]


useEffect(() => {
    
  const fetchData = async() =>{
      const response = await fetch('/data/users.json');
      const j_response = await response.json();
      setUsers(j_response.users);
    }

    fetchData();
  }, []);


  useEffect(() => {
    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [query, users]);

  useEffect(() => {
    if (select) { // Ověření, že je něco vybráno
      const filteredUsers = users.filter((u) => u.role === select);
      setFilteredUsers(filteredUsers);
    } else {
      setFilteredUsers(users); // Pokud není nic vybráno, zobrazit všechny
    }
  }, [select, users]);
  


  return (
    <>
    <div className="page flex">
    <Navigation/>
    <div className="page-container flex">
    <Aside/>
    <div className="content flex">
    <Header title={'Uživatelé'} type={'Komunita'}/>
    <Filters data={role} handeInput={handleInput} handeSelect={handleSelect}/>
    <List data={filteredUsers} type={'users'}/>
    </div>
    </div>
    </div>
    </>
  )
}

export default UsersPage