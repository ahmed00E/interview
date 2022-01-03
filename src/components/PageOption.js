const PageOption = ({ value, itemsPage, setItemsPage }) => {
  const checked = value === itemsPage;

  const checkboxStyle = checked
    ? "page-checkbox checked"
    : "page-checkbox unchecked";

  return (
    <div className={checkboxStyle}>
      <label>
        {value}
        <input
          hidden
          type="checkbox"
          value={value}
          onClick={(e) => setItemsPage(e.target.value)}
        />
      </label>
    </div>
  );
};

export default PageOption;
