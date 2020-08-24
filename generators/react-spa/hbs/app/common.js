export const MOUNT_NODE = document.getElementById('app');

export const polyfillIntl = () => {
  if (!window.Intl) {
    return new Promise(resolve => {
      resolve(import('intl'));
    })
      .then(() =>
        Promise.all([
          import('intl/locale-data/jsonp/en.js'),
          import('intl/locale-data/jsonp/es.js')
        ])
      )
      .catch(err => {
        throw err;
      });
  }
  return Promise.resolve();
};
