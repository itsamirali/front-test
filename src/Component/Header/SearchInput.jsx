import styles from "./Header.module.css";
import cx from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const SearchInput = () => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div
      style={{ backgroundColor: isFocus ? "#fff" : "rgba(255,255,255,.1)" }}
      className={cx(
        styles.inputContainer,
        "d-flex",
        "align-items-center",
        "justify-content-center",
        "ms-5",
        "position-relative"
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        fill="#c5c8cc"
        className="ms-3 bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg>
      <input
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholder="search in front"
        className={cx(styles.searchInput, "flex-fill", "h-100", "ps-3")}
      />
      {isFocus && (
        <CloseIcon
          className="me-1"
          style={{ color: "#c5c8cc", fontSize: "18px" }}
        />
      )}
      {isFocus && (
        <div
          className={cx(
            styles.searchResultContainer,
            "d-flex",
            "flex-column",
            "align-items-center",
            "justify-content-center"
          )}
        >
          <div
            className={cx(
              styles.otherResultsContainer,
              "flex-fill",
              "d-flex",
              "w-100",
              "flex-column"
            )}
          >
            <div
              style={{ borderBottom: "1px solid #c5c8cc17" }}
              className="d-flex flex-column align-items-start justify-content-start p-4"
            >
              <span
                style={{
                  color: "#c5c8cc",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
                className="mb-2"
              >
                RECENT SEARCH
              </span>
              <div
                style={{ gap: "10px" }}
                className="d-flex w-100 align-items-center justify-content-start"
              >
                <div
                  className={cx(
                    styles.recentSearchTags,
                    "d-flex",
                    "align-items-center",
                    "justify-content-between",
                    "p-2"
                  )}
                >
                  <span>Glup</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="#c5c8cc"
                    className="ms-3 bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
                <div
                  className={cx(
                    styles.recentSearchTags,
                    "d-flex",
                    "align-items-center",
                    "justify-content-between",
                    "p-2"
                  )}
                >
                  <span>Notification Panel</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="#c5c8cc"
                    className="ms-3 bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
              </div>
            </div>
            <div
              style={{ borderBottom: "1px solid #c5c8cc17" }}
              className="d-flex flex-column align-items-start justify-content-start py-4 px-2"
            >
              <span
                style={{
                  color: "#c5c8cc",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
                className="mb-2 ms-3"
              >
                TUTORIALS
              </span>
              <div
                style={{ gap: "10px" }}
                className="d-flex w-100 align-items-center justify-content-center flex-column"
              >
                <div
                  className={cx(
                    styles.tutorialsTagsContainer,
                    "d-flex",
                    "align-items-center",
                    "justify-content-start",
                    "p-2",
                    "w-100",
                    "px-3"
                  )}
                >
                  <span
                    className={cx(
                      styles.tutorialsTagsContainerIcon,
                      "d-flex",
                      "align-items-center",
                      "justify-content-center",
                      "me-2"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-sliders"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"
                      />
                    </svg>
                  </span>
                  <span>How To Set Up Glup?</span>
                </div>
                <div
                  className={cx(
                    styles.tutorialsTagsContainer,
                    "d-flex",
                    "align-items-center",
                    "justify-content-start",
                    "p-2",
                    "w-100",
                    "px-3"
                  )}
                >
                  <span
                    className={cx(
                      styles.tutorialsTagsContainerIcon,
                      "d-flex",
                      "align-items-center",
                      "justify-content-center",
                      "me-2"
                    )}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-paint-bucket"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.192 2.78c-.458-.677-.927-1.248-1.35-1.643a2.972 2.972 0 0 0-.71-.515c-.217-.104-.56-.205-.882-.02-.367.213-.427.63-.43.896-.003.304.064.664.173 1.044.196.687.556 1.528 1.035 2.402L.752 8.22c-.277.277-.269.656-.218.918.055.283.187.593.36.903.348.627.92 1.361 1.626 2.068.707.707 1.441 1.278 2.068 1.626.31.173.62.305.903.36.262.05.64.059.918-.218l5.615-5.615c.118.257.092.512.05.939-.03.292-.068.665-.073 1.176v.123h.003a1 1 0 0 0 1.993 0H14v-.057a1.01 1.01 0 0 0-.004-.117c-.055-1.25-.7-2.738-1.86-3.494a4.322 4.322 0 0 0-.211-.434c-.349-.626-.92-1.36-1.627-2.067-.707-.707-1.441-1.279-2.068-1.627-.31-.172-.62-.304-.903-.36-.262-.05-.64-.058-.918.219l-.217.216zM4.16 1.867c.381.356.844.922 1.311 1.632l-.704.705c-.382-.727-.66-1.402-.813-1.938a3.283 3.283 0 0 1-.131-.673c.091.061.204.15.337.274zm.394 3.965c.54.852 1.107 1.567 1.607 2.033a.5.5 0 1 0 .682-.732c-.453-.422-1.017-1.136-1.564-2.027l1.088-1.088c.054.12.115.243.183.365.349.627.92 1.361 1.627 2.068.706.707 1.44 1.278 2.068 1.626.122.068.244.13.365.183l-4.861 4.862a.571.571 0 0 1-.068-.01c-.137-.027-.342-.104-.608-.252-.524-.292-1.186-.8-1.846-1.46-.66-.66-1.168-1.32-1.46-1.846-.147-.265-.225-.47-.251-.607a.573.573 0 0 1-.01-.068l3.048-3.047zm2.87-1.935a2.44 2.44 0 0 1-.241-.561c.135.033.324.11.562.241.524.292 1.186.8 1.846 1.46.45.45.83.901 1.118 1.31a3.497 3.497 0 0 0-1.066.091 11.27 11.27 0 0 1-.76-.694c-.66-.66-1.167-1.322-1.458-1.847z" />
                    </svg>
                  </span>
                  <span>How To change Theme Color?</span>
                </div>
              </div>
            </div>
            <div
              style={{ borderBottom: "1px solid #c5c8cc17" }}
              className="d-flex flex-column align-items-start justify-content-start py-4 px-2"
            >
              <span
                style={{
                  color: "#c5c8cc",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
                className="mb-2 ms-3"
              >
                Members
              </span>
              <div
                style={{ gap: "10px" }}
                className="d-flex w-100 align-items-center justify-content-center flex-column"
              >
                <div
                  className={cx(
                    styles.tutorialsTagsContainer,
                    "d-flex",
                    "align-items-center",
                    "justify-content-start",
                    "p-2",
                    "w-100",
                    "px-3"
                  )}
                >
                  <div
                    className={cx(
                      styles.avatarFrame,
                      "me-2",
                      "d-flex",
                      "align-items-center",
                      "jsutify-content-center"
                    )}
                  >
                    <img
                      src="https://htmlstream.com/preview/front-dashboard-v2.0/assets/img/160x160/img10.jpg"
                      alt="avatar"
                    />
                  </div>
                  <span>Amanda Harvey </span>
                </div>
                <div
                  className={cx(
                    styles.tutorialsTagsContainer,
                    "d-flex",
                    "align-items-center",
                    "justify-content-start",
                    "p-2",
                    "w-100",
                    "px-3"
                  )}
                >
                  <div
                    className={cx(
                      styles.avatarFrame,
                      "me-2",
                      "d-flex",
                      "align-items-center",
                      "jsutify-content-center"
                    )}
                  >
                    <img
                      src="https://htmlstream.com/preview/front-dashboard-v2.0/assets/img/160x160/img3.jpg"
                      alt="avatar"
                    />
                  </div>
                  <span>David Harrison</span>
                </div>
                <div
                  className={cx(
                    styles.tutorialsTagsContainer,
                    "d-flex",
                    "align-items-center",
                    "justify-content-start",
                    "p-2",
                    "w-100",
                    "px-3"
                  )}
                >
                  <div className={cx(styles.avatarFrame, "me-2", "d-flex")}>
                    <span style={{ color: "#09a5be" }} className="m-auto">
                      A
                    </span>
                  </div>
                  <span>Anne Richard</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx(
              styles.seeAllResultsContainer,
              "d-flex",
              "align-items-center",
              "justify-content-center",
              "mt-auto",
              "p-3",
              "w-100"
            )}
          >
            <span className="text-white m-0 me-2">See all results</span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
