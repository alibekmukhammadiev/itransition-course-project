function MainPage() {
  return (
    <div className="container py-4">
      {/* Latest and Top inventories*/}
      <div className="d-flex flex-wrap gap-3">
        {/* Latest Inventories */}
        <div className="border rounded p-0 flex-fill">
          <div className="bg-light border-bottom h5 px-2 py-2 fw-bold">
            Latest Inventories
          </div>
          <div style={{ maxHeight: "250px", overflowY: "auto" }}>
            <table className="table table-striped mb-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Author</th>
                  <th>Description</th>
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
            Leading 5 Inventories
          </div>
          <table className="table table-striped mb-0">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Items</th>
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
          Tag Cloud
        </div>
        <div className="p-3 d-flex flex-wrap gap-2">
          <button className="btn btn-outline-primary btn-sm">Books</button>
          <button className="btn btn-outline-success btn-sm">
            Electronics
          </button>
          <button className="btn btn-outline-warning btn-sm">HR</button>
          <button className="btn btn-outline-secondary btn-sm">Office</button>
          <button className="btn btn-outline-info btn-sm">People</button>
          <button className="btn btn-outline-dark btn-sm">Music</button>

          {/* More granular */}
          <button className="btn btn-outline-success btn-sm">Laptop</button>
          <button className="btn btn-outline-success btn-sm">Headphones</button>
          <button className="btn btn-outline-secondary btn-sm">Chair</button>
          <button className="btn btn-outline-warning btn-sm">Documents</button>
          <button className="btn btn-outline-info btn-sm">Employee</button>
          <button className="btn btn-outline-danger btn-sm">
            Out of Stock
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
