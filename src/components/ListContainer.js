import CategoryContainer from "./CategoryContainer";

const ListContainer = (props) => {
  // Grouping Technique resource: https://gist.github.com/JamieMason/0566f8412af9fe6a1d470aa1e089a752
  const groupBy = (key) => (array) =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});

  const groupByCategory = groupBy("category");
  const groupedItems = groupByCategory(props.listArray);

  return Object.keys(groupedItems).map((obj, i) => {
    return (
      <CategoryContainer
        key={`category${i}`}
        category={obj}
        itemGroupArray={groupedItems[obj]}
      />
    );
  });
};

export default ListContainer;
