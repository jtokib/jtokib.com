'use client';

export function PrintActions() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="print-actions no-print">
      <button 
        onClick={handlePrint}
        className="print-button"
        type="button"
      >
        Print / Save as PDF
      </button>
      <p className="print-hint">
        Use your browser's print function to save as PDF or print this resume
      </p>
    </div>
  );
}