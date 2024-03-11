function ArrayUtils() {
  const remove = (array, row) => {

    console.log('Removing item', row);
    console.log('array', array);

    let newArray = array.splice(row, 1);

    console.log('newArray', array);

    return newArray;
  };

  return {
    remove: remove,
  };
}
export default ArrayUtils;
