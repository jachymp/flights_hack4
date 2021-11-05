import 'bootstrap/dist/css/bootstrap.min.css';


function Pagination({setPagination, pagination, disabled})
{
    return(
        <div className='text-center m-4'>
            <button className="btn btn-primary btn-lg m-4 " onClick={() => setPagination(pagination - 5)} disabled={disabled}>
                {pagination == 5 ?
                'ALL FLIGHTS'
                :
                'PREVIOUS FLIGHTS'
                }
                </button>
            <button className="btn btn-primary btn-lg" onClick={() => setPagination(pagination + 5)}>NEXT FLIGHTS</button>
        </div>
        
    )
}

export default Pagination;