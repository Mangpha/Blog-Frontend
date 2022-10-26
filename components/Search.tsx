export default function Search() {
  return (
    <>
      <form className="border-2 border-gray-300 bg-white h-10 px-5 pr-20 mr-5 rounded-lg text-sm flex items-center">
        <input placeholder="Search" name="query" type="search" className="focus:outline-none" />
      </form>
      <div className="fa-solid fa-magnifying-glass header_text text-2xl hover:cursor-pointer"></div>
    </>
  );
}
