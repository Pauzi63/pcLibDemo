import React from "react";

// const Fallback = ({ componentStack, error }) => (
//   <section className="fallback">
//     <header className="fallback__header">
//       <h3 className="fallback__title">Oops! An error occured!</h3>
//     </header>
//     <div className="fallback__body">
//       <p>
//         <strong>Error:</strong> {error.toString()}
//       </p>
//       <p>
//         <strong>Stacktrace:</strong> {componentStack}
//       </p>
//     </div>
//   </section>
// );

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default Fallback;
