import { current } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";

function Pagination({ itemsCount, data, setFilteredGameList }) {
    const [currentPage, setCurrentPage] = useState(1)
    const recordPerPage = itemsCount;
    const lastIndex = currentPage * recordPerPage;
    const firstIndex = lastIndex - recordPerPage;
    const records = data.slice(firstIndex, lastIndex)
    const npage = Math.ceil(data.length / recordPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)

    useEffect(() => {
        setFilteredGameList(records)
    }, [data, currentPage])

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const changeCPage = (id) => {
       setCurrentPage(id)
    }

    return (
        <ul className="pagination">
            <li className="page-item">
                <a href="#" className="page-item__link" onClick={prePage}>Prev</a>
            </li>
            {
                numbers.map((n, i) => (
                    <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                        <a href="#" className="page-item"
                            onClick={() => changeCPage(n)}
                        >{n}</a>
                    </li>   
                ))
            }
            <li className="page-item">
                <a href="#" 
                className="page-item__link" 
                onClick={nextPage}
                >Next</a>
            </li>
        </ul>
    )

}

export default Pagination;