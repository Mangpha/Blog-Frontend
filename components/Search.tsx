export default function Search() {
  const onSearch = () => {
    alert('Preparing');
  };

  return (
    <>
      <form onSubmit={onSearch} className="border-2 border-gray-300 bg-white h-10 px-5 pr-20 mr-5 rounded-lg text-sm flex items-center">
        <input placeholder="Search" name="search" type="search" className="focus:outline-none" />
      </form>
      <i className="fa-solid fa-magnifying-glass header_text text-2xl hover:cursor-pointer" onClick={onSearch}></i>
    </>
  );
}
