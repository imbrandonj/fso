export default function SearchCountry({ search, setSearch }) {
  const handleSearch = event => {
    setSearch(event.target.value);
  };

  return (
    <div>
      find countries: <input value={search} onChange={handleSearch} />
    </div>
  );
}
