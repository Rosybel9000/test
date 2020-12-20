/**
 * @property {key} string
 */

export default (key: string) => {
  return (a: any, b: any) => {
    if (a[key] < b[key]) return 1;
    else if (a[key] > b[key]) return -1;
    return 0;
  };
};
