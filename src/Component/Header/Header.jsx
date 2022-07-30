import styles from "./Header.module.css";
import cx from "classnames";
import SearchInput from "./SearchInput";
import RightMenu from "./RightMenu";

const Header = () => {
  return (
    <div
      className={cx(
        "container-fluid",
        "p-3",
        styles.headerContainer,
        "d-flex",
        "align-items-center",
        "justify-content-start",
        "px-2",
        "me-5"
      )}
    >
      <img
        className="ms-1"
        src="https://htmlstream.com/preview/front-dashboard-v2.0/assets/svg/logos/logo-white.svg"
        alt="logo"
      />
      <SearchInput />
      <RightMenu />
    </div>
  );
};

export default Header;
