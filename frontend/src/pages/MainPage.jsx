import { useTranslation } from "react-i18next";
function MainPage() {
  const { t } = useTranslation();
  return (
    <div className="container py-4">
      {/* Latest and Top inventories*/}
      <div className="d-flex flex-wrap gap-3">
        {/* Latest Inventories */}
        <div className="border rounded p-0 flex-fill">
          <div className="bg-light border-bottom h5 px-2 py-2 fw-bold">
            {t("mainPage.latestInventories")}
          </div>
          <div style={{ maxHeight: "250px", overflowY: "auto" }}>
            <table className="table table-striped mb-0">
              <thead className="table-light">
                <tr>
                  <th>{t("mainPage.table.name")}</th>
                  <th>{t("mainPage.table.author")}</th>
                  <th>{t("mainPage.table.description")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>📱 Phones</td>
                  <td>Alice</td>
                  <td>Iphones for employees</td>
                </tr>
                <tr>
                  <td>📂 HR Records</td>
                  <td>Bob</td>
                  <td>List of records for employees</td>
                </tr>
                <tr>
                  <td>📚 Books Lib</td>
                  <td>John</td>
                  <td>Mdist books</td>
                </tr>
                <tr>
                  <td>💻 Laptops</td>
                  <td>Mary</td>
                  <td>Outdated laptops of Dell</td>
                </tr>
                <tr>
                  <td>🎧 Headphones</td>
                  <td>Chris</td>
                  <td>Wiresless headphones</td>
                </tr>
                {/* Scrollable extras */}
                <tr>
                  <td>🏠 Furniture</td>
                  <td>David</td>
                  <td>Old school Furnitures</td>
                </tr>
                <tr>
                  <td>🖨 Printers</td>
                  <td>Sara</td>
                  <td>List of Broken Printers</td>
                </tr>
                <tr>
                  <td>📦 Storage</td>
                  <td>Olivia</td>
                  <td>Free to get a pen</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Top 5 Popular Inventories */}
        <div
          className="border rounded p-0 flex-fill"
          style={{ minWidth: "300px", maxWidth: "500px" }}
        >
          <div className="bg-light border-bottom h5 px-2 py-2 fw-bold">
            {t("mainPage.leadingInventories")}
          </div>
          <table className="table table-striped mb-0">
            <thead className="table-light">
              <tr>
                <th>{t("mainPage.table.name")}</th>
                <th>{t("mainPage.table.items")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Office Supplies</td>
                <td>120</td>
              </tr>
              <tr>
                <td>Phones</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Employees</td>
                <td>60</td>
              </tr>
              <tr>
                <td>Books</td>
                <td>45</td>
              </tr>
              <tr>
                <td>Laptops</td>
                <td>38</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Tag Cloud */}
      <div className="border rounded mt-3">
        <div className="bg-light border-bottom px-3 py-2 fw-bold">
          {t("mainPage.tagCloud")}
        </div>
        <div className="p-3 d-flex flex-wrap gap-2">
          <button className="btn btn-outline-primary btn-sm">
            {t("mainPage.tags.books")}
          </button>
          <button className="btn btn-outline-success btn-sm">
            {t("mainPage.tags.electronics")}
          </button>
          <button className="btn btn-outline-warning btn-sm">
            {t("mainPage.tags.hr")}
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            {t("mainPage.tags.office")}
          </button>
          <button className="btn btn-outline-info btn-sm">
            {t("mainPage.tags.people")}
          </button>
          <button className="btn btn-outline-dark btn-sm">
            {t("mainPage.tags.music")}
          </button>

          {/* More granular */}
          <button className="btn btn-outline-success btn-sm">
            {t("mainPage.tags.laptop")}
          </button>
          <button className="btn btn-outline-success btn-sm">
            {t("mainPage.tags.headphones")}
          </button>
          <button className="btn btn-outline-secondary btn-sm">
            {t("mainPage.tags.chair")}
          </button>
          <button className="btn btn-outline-warning btn-sm">
            {t("mainPage.tags.documents")}
          </button>
          <button className="btn btn-outline-info btn-sm">
            {t("mainPage.tags.employee")}
          </button>
          <button className="btn btn-outline-danger btn-sm">
            {t("mainPage.tags.outOfStock")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
