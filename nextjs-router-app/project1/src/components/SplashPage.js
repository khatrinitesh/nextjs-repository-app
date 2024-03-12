"use client";
const SplashPage = () => {
  return (
    <div className="fixed z-[9] bg-[red] inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out opacity-100">
      <div className="text-white animate-ping text-4xl">Loading...</div>
    </div>
  );
};

export default SplashPage;
