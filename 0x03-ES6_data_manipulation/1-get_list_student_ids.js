export default function getListStudentIds(arg) {
  if (Array.isArray(arg) === true) {
    /** create a new map from the arg which is a list
         * the map will be a map containing the ids
         * since it must be set as key values, i am just setting the id as value for names
         */
    const returnedArray = [];
    const individualsMap = new Map(
      arg.map((object) => [object.firstName, object.id]),
    );
    for (const id of individualsMap.values()) {
      returnedArray.push(id);
    }
    return returnedArray;
  }
  return [];
}
