export const mockInteractionApiHelper = (func, t = 500, ...funcParams) =>
  new Promise(resolve => {
    setTimeout(resolve, t);
  }).then(() => func(...funcParams));
