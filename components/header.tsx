

const Header = ({session}: {session: userProfile}) => {
  return (
    <header className="flex lg:items-end items-start justify-between lg:flex-row flex-col gap-5 sm:mb-10 mb-5;">
      <div>
        <h2 className="text-2xl font-semibold text-dark-400">
        {session?.data.firstName}
        </h2>
        <p className="text-base text-slate-500">
          Monitor all of your users and books here
        </p>
      </div>

      {/*<p>Search</p>*/}
    </header>
  );
};
export default Header;