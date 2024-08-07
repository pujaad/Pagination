
import React from "react";

const PaginationTable=({currentPage,totalPage,onPageChange})=>{
    const isFirstPage=currentPage==1;
    const isLastPage=currentPage==totalPage;
    return(
<>
    
 <button disabled={isFirstPage} onClick={()=>onPageChange(currentPage-1)}>Previous</button>
 <button>{currentPage}</button>
 <button disabled={isLastPage} onClick={()=>onPageChange(currentPage+1)}>Next</button>
 </>
    )
}
export default PaginationTable;