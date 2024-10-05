export default function Search({ setSearchTerm }) {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <input 
                type="text" 
                className="searchbar" 
                id="searching" 
                placeholder="Search by product name..." 
                style={{ marginTop: 50, marginLeft: 345, width: '62%', height: 40 }} 
                onChange={handleSearchChange}
            />
        </>
    );
}
