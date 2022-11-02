import Navigation from "./Navigation";
export default function Header({ currentPage, handlePageChange }) {
  return (
    <header className="d-flex flex-column flex-md-row justify-content-between">
      <div className="col-12 col-sm-3 p-1 m-1">
        <h1 className="text-nowrap">Dan Kelly</h1>
      </div>
      <div className="col-12 col-sm-8 p-1 m-1 d-flex flex-column flex-md-row justify-content-end">
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </header>
  );
}
