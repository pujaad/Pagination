

import React, { useEffect, useState } from 'react';


import PaginationTable from './components/Pagination';
function App() {
  const [table, setTable] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
   const itemsPerPage=10;
   const totalPage=Math.ceil(table.length/itemsPerPage)
   const onPageChange=(newPage)=>{
    setCurrentPage(newPage);
   }
   const currentTableData=table.slice((currentPage-1) * itemsPerPage,currentPage*itemsPerPage);
  useEffect(() => {
    async function fetchApi() {
      try{
      const response = await fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json");
      const data = await response.json();
      setTable(data);
    }catch(error){
      console.log("failed to fetch data",error)
    }
  }

    fetchApi();
  }, []);

  return (
    <>
    <div>
      <h1>Employee Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     <PaginationTable currentPage={currentPage} totalPage={totalPage} onPageChange={onPageChange}/>
     </>
  );
 
}

export default App;



