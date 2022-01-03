const Checkbox = ({ category, selectedCategories, handleCheckbox }) => {
  const checked = selectedCategories.includes(category);

  const checkboxStyle = checked
    ? "filter-checkbox checked"
    : "filter-checkbox unchecked";

  return (
    <div className={checkboxStyle}>
      <label>
        {category}
        <input
          hidden
          type="checkbox"
          value={category}
          onClick={(e) => handleCheckbox(e.target.value)}
        />
      </label>
    </div>
  );
};

export default Checkbox;
