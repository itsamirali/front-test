import styles from "./Header.module.css";
import cx from "classnames";

const RightMenu = () => {
  return (
    <div className={cx(styles.rightMenu, "d-flex", "align-items-center", "justify-content-between", "ms-auto")}>
        <span className={cx(styles.rightIconMenu, styles.rightIconMenuNotif, "d-flex", "align-items-center", "justify-content-center")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            fill="#5c6268"
            class="bi bi-bell"
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
        </span>
        <span className={cx(styles.rightIconMenu, "d-flex", "align-items-center", "justify-content-center")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            fill="#5c6268"
            class="bi bi-app-indicator"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          </svg>
        </span>
        <span className={cx(styles.rightIconMenu, "d-flex", "align-items-center", "justify-content-center")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            fill="#5c6268"
            class="bi bi-x-diamond"
            viewBox="0 0 16 16"
          >
            <path d="M7.987 16a1.526 1.526 0 0 1-1.07-.448L.45 9.082a1.531 1.531 0 0 1 0-2.165L6.917.45a1.531 1.531 0 0 1 2.166 0l6.469 6.468A1.526 1.526 0 0 1 16 8.013a1.526 1.526 0 0 1-.448 1.07l-6.47 6.469A1.526 1.526 0 0 1 7.988 16zM7.639 1.17 4.766 4.044 8 7.278l3.234-3.234L8.361 1.17a.51.51 0 0 0-.722 0zM8.722 8l3.234 3.234 2.873-2.873c.2-.2.2-.523 0-.722l-2.873-2.873L8.722 8zM8 8.722l-3.234 3.234 2.873 2.873c.2.2.523.2.722 0l2.873-2.873L8 8.722zM7.278 8 4.044 4.766 1.17 7.639a.511.511 0 0 0 0 .722l2.874 2.873L7.278 8z" />
          </svg>
        </span>
        <span className={cx(styles.rightIconMenu,  "d-flex", "align-items-center", "justify-content-center")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            fill="#5c6268"
            class="bi bi-moon"
            viewBox="0 0 16 16"
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
          </svg>
        </span>
        <span className={cx(styles.useAvatar, "d-flex", "align-items-center", "justify-content-center")}>
          <img
            src="https://htmlstream.com/preview/front-dashboard-v2.0/assets/img/160x160/img6.jpg"
            alt="avatar"
          />
        </span>
      </div>
  )
}

export default RightMenu