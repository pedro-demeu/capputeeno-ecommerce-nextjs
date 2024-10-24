"use client";

function TryAgainButton() {
  return (
    <button
      className="flex items-center gap-2 border  rounded px-6 py-2 bg-slate-600 text-white"
      onClick={() => {
        window.location.reload();
      }}
    >
      <p>Tentar novamente</p>
    </button>
  );
}
export default TryAgainButton;
