import cx from "classnames";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div
      className={cx(
        styles.menuContainer,
        "container-fluid",
        "w-100",
        "d-flex",
        "align-items-center",
        "justify-content-start"
      )}
    >
      <div className={cx(styles.menuItem, "d-flex", "align-items-center", "justify-content-center", "cursorPointer")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#c5c8cc"
          class="bi bi-house"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
          />
          <path
            fill-rule="evenodd"
            d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
          />
        </svg>
        <span className="text-white mx-2">Dashboard</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#c5c8cc"
          class="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <div className={cx(styles.menuItem, "d-flex", "align-items-center", "justify-content-center", "cursorPointer")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#c5c8cc"
          class="bi bi-files-alt"
          viewBox="0 0 16 16"
        >
          <path d="M11 0H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2-2zm2 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1V3zM2 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2z" />
        </svg>
        <span className="text-white mx-2">Pages</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#c5c8cc"
          class="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <div className={cx(styles.menuItem, "d-flex", "align-items-center", "justify-content-center", "cursorPointer")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#c5c8cc"
          width="14"
          class="bi bi-app-indicator"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
          <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        </svg>
        <span className="text-white mx-2">Apps</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#c5c8cc"
          class="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <div className={cx(styles.menuItem, "d-flex", "align-items-center", "justify-content-center", "cursorPointer")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          fill="#c5c8cc"
          height="16"
          class="bi bi-grid-1x2"
          viewBox="0 0 16 16"
        >
          <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
        </svg>
        <span className="text-white mx-2">Layouts</span>
      </div>
      <div className={cx(styles.menuItem, "d-flex", "align-items-center", "justify-content-center", "cursorPointer")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          fill="#c5c8cc"
          height="16"
          class="bi bi-book"
          viewBox="0 0 16 16"
        >
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
        </svg>
        <span className="text-white mx-2">Docs</span>
      </div>
    </div>
  );
};

export default Menu;
