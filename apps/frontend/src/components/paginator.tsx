import { useState } from 'react';
type Props = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  page: number;
};

export const Paginator = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  page,
}: Props) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(page);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleNext = () => handlePageChange(currentPage + 1);
  const handlePrev = () => handlePageChange(currentPage - 1);
  const handleFirst = () => handlePageChange(1);
  const handleLast = () => handlePageChange(totalPages);

  return (
    <section className="text-center">
      <br />
      <div
        style={{
          display: 'inline-flex',
          gap: '10px',
          alignItems: 'center',
          margin: '0 auto',
        }}
      >
        <button onClick={handleFirst} disabled={currentPage === 1}>
          First
        </button>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
        </span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
        <button onClick={handleLast} disabled={currentPage === totalPages}>
          Last
        </button>
        <input
          type="number"
          value={currentPage}
          onChange={(e) => handlePageChange(Number(e.target.value))}
          style={{ width: '60px', display: 'none' }}
        />
      </div>
      <br />
      <br />
    </section>
  );
};
