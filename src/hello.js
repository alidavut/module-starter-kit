export const hello = () => new Promise(resolve => {
  setTimeout(() => resolve('hello template'), 1000);
});
