import React, { useState } from "react";

function SearchBar() {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
        setSearch(e.target.value)
    };

    return (
        <div className='searchBox'>
            <input type="text"
                   placeholder='포켓몬 이름으로 검색하세요'
                   className='searchInput'
            />
            <button
                onClick={onChange}
                id='search-Btn'
                className='search-Img'>검색버튼
            </button>
        </div>
    );
}


export default SearchBar;
