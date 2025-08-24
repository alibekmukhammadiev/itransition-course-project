import { useState } from "react";
import { useTranslation } from "react-i18next";

function InventoryPage() {
  const [activeTab, setActiveTab] = useState("items");
  const { t } = useTranslation();

  // Example mock data
  const items = [
    { id: 1, name: "Dell XPS 13", likes: 12 },
    { id: 2, name: "MacBook Pro", likes: 20 },
  ];

  const comments = [
    { id: 1, user: "Alice", text: "Love this inventory!", date: "2025-08-20" },
    {
      id: 2,
      user: "Bob",
      text: "Can we add more laptops?",
      date: "2025-08-20",
    },
    {
      id: 3,
      user: "Charlie",
      text: "I think we need chargers too.",
      date: "2025-08-20",
    },
    { id: 4, user: "Diana", text: "Great collection!", date: "2025-08-20" },
    {
      id: 5,
      user: "Eve",
      text: "When will new models come?",
      date: "2025-08-20",
    },
    {
      id: 6,
      user: "Frank",
      text: "Consider adding Lenovo.",
      date: "2025-08-20",
    },
    {
      id: 7,
      user: "Grace",
      text: "What about budget laptops?",
      date: "2025-08-20",
    },
    { id: 8, user: "Henry", text: "Awesome list!", date: "2025-08-20" },
  ];

  return (
    <div className="container mt-4">
      <div className="p-3 border rounded">
        <h2>Office Laptops</h2>
        <p>Collection of laptops used in the office.</p>

        {/* Bootstrap Tabs */}
        <ul className="nav nav-underline">
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "items" ? "active" : ""}`}
              onClick={() => setActiveTab("items")}
            >
              {t("inventoryPage.items")}
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${
                activeTab === "discussion" ? "active" : ""
              }`}
              onClick={() => setActiveTab("discussion")}
            >
              {t("inventoryPage.discussion")}
            </button>
          </li>
        </ul>

        <div className="tab-content mt-3">
          {/* Items Tab */}
          {activeTab === "items" && (
            <div className="border rounded">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between align-items-center p-2 border-bottom"
                >
                  <span>{item.name}</span>
                  <button className="btn btn-sm btn-outline-danger">
                    ❤️ {item.likes}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Discussion Tab */}
          {activeTab === "discussion" && (
            <>
              <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                {comments.map((c, idx) => (
                  <div
                    key={c.id}
                    className={`p-2 border-bottom ${
                      idx < 5 ? "" : "bg-body-tertiary"
                    }`}
                  >
                    <strong>
                      <a href={`/profile/${c.user}`}>{c.user}</a>
                    </strong>{" "}
                    <span className="text-muted small">{c.date}</span>
                    <p className="mb-0">{c.text}</p>
                  </div>
                ))}
              </div>
              <form className="mt-3 d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("inventoryPage.placeholder")}
                />
                <button type="submit" className="btn btn-primary ms-2">
                  {t("inventoryPage.post")}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default InventoryPage;
