function Pagination({setPagination, pagination, disabled})
{
    return(
        <div>
            <button onClick={() => setPagination(pagination - 5)} disabled={disabled}>
                {pagination == 5 ?
                'ALL FLIGHTS'
                :
                'PREVIOUS FLIGHTS'
                }
                </button>
            <button onClick={() => setPagination(pagination + 5)}>NEXT FLIGHTS</button>
        </div>
        
    )
}

export default Pagination;