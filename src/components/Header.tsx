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

{
  /* <a className="block border-t-4  border-green-400 cursor-pointer hover:bg-green-100">
<h3 className="bg-green-400 w-full px-3">Лига чемпионов 2022/23</h3>
<div className="event-field p-2 sm:p-4">
  <div className="justify-self-center text-red-600 text-xs mb-2 font-medium sm:font-bold sm:text-base sm:mb-0">
    LIVE
  </div>
  <div className="flex items-center gap-3 justify-self-center">
    <div className="flex items-center justify-center gap-2 font-medium">
      Бавария
      <img src={bayern} alt="Бавария" />
    </div>
    <div className="font-extrabold">{' - '}</div>
    <div className="flex items-center justify-center gap-2 font-medium">
      ПСЖ
      <img src={psg} alt="ПСЖ" />
    </div>
  </div>
</div>
</a> */
}
