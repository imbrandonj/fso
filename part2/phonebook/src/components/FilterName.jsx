export default function FilterName({ filter, setFilter }) {
  const handleFilter = event => {
    setFilter(event.target.value);
  };

  return (
    <div>
      filter name: <input value={filter} onChange={handleFilter} />
    </div>
  );
}
