import React from 'react';

const Header = () => {
  return (
    <header className="pt-3">
      <div className="flex flex-col justify-start items-center sm:flex-row">
        <a className="flex gap-1 items-center pointer" href="/">
          <span className="material-symbols-outlined text-[35px]">sports_soccer</span>
          <span className="text-xl sm:text-2xl">BetSport</span>
        </a>
        <h1 className="text-xl mx-auto sm:text-2xl">Ставки на спорт</h1>
      </div>
    </header>
  );
};

export default Header;
