import Checkbox from "./Checkbox";
import PageOption from "./PageOption";

const NavOptions = ({
  categories,
  selectedCategories,
  setSelectedCategories,
  itemsPage,
  setItemsPage,
}) => {
  const handleCheckbox = (value) => {
    setSelectedCategories((filters) => {
      if (filters.includes(value)) {
        return filters.filter((filter) => filter !== value);
      } else {
        return [...filters, value];
      }
    });
  };

  return (
    <div className="nav-options">
      <div className="items-per-page">
        <PageOption
          value={4}
          key="4"
          itemsPage={itemsPage}
          setItemsPage={setItemsPage}
        />
        <PageOption
          value={8}
          key="8"
          itemsPage={itemsPage}
          setItemsPage={setItemsPage}
        />
        <PageOption
          value={12}
          key="12"
          itemsPage={itemsPage}
          setItemsPage={setItemsPage}
        />
      </div>
      <div className="filters">
        {categories.map((category) => {
          return (
            <Checkbox
              key={category}
              category={category}
              selectedCategories={selectedCategories}
              handleCheckbox={handleCheckbox}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NavOptions;
