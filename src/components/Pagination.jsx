function createArrayOfSize(n) {
    return new Array(n).fill(0);
  }
  
  function Pagination({totalPages,handlePageChange,currentPage}) {
    let pages = createArrayOfSize(totalPages).map((a, i) => {
      return <button key={i} data-testid="page-btn" onClick={()=>handlePageChange(i+1)} disabled={currentPage==i+1} >{i+1}</button>;
    });
    return <div style={{display:"flex",justifyContent:"center"}}>{pages}</div>;
  }
  
  export default Pagination;
  