function MainPage() {
  return (
    <div className="container py-4">
      {/* Search bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Dashboard</h2>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search inventories..."
            aria-label="Search"
          />
          <button className="btn btn-outline-primary" type="submit">
            Search
          </button>
        </form>
      </div>

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
                  <th>By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>📱 Phones</td>
                  <td>Alice</td>
                </tr>
                <tr>
                  <td>📂 HR Records</td>
                  <td>Bob</td>
                </tr>
                <tr>
                  <td>📚 Books Lib</td>
                  <td>John</td>
                </tr>
                <tr>
                  <td>💻 Laptops</td>
                  <td>Mary</td>
                </tr>
                <tr>
                  <td>🎧 Headphones</td>
                  <td>Chris</td>
                </tr>
                {/* Scrollable extras */}
                <tr>
                  <td>🏠 Furniture</td>
                  <td>David</td>
                </tr>
                <tr>
                  <td>🖨 Printers</td>
                  <td>Sara</td>
                </tr>
                <tr>
                  <td>📦 Storage</td>
                  <td>Olivia</td>
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
            Top 5 Popular Inventories
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
        </div>
      </div>
    </div>
  );
}

export default MainPage;
