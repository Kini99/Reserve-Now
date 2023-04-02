// function createArrayOfSize(n) {
//     return new Array(n).fill(0);
//   }

import { Button } from "@chakra-ui/react";
  
  function Pagination({totalPages,handlePageChange,currentPage}) {
    // let pages = createArrayOfSize(totalPages).map((a, i) => {
    //   return <button key={i} data-testid="page-btn" onClick={()=>handlePageChange(i+1)} disabled={currentPage==i+1} >{i+1}</button>;
    // });
    // return <div style={{display:"flex",justifyContent:"center"}}>{pages}</div>;

    const handlePage1= ()=>{
      currentPage=1;
      window.scrollTo(0, 0);
      handlePageChange(currentPage);
    }

    const handlePage2= ()=>{
      currentPage=2;
      window.scrollTo(0, 0);
      handlePageChange(currentPage);
    }

    return (
      <>
      <div style={{display:"flex",justifyContent:"center"}}>
<Button onClick={handlePage1}>1</Button>
<Button onClick={handlePage2}>2</Button>
</div>
      </>
    )
  }
  
  export default Pagination;
  