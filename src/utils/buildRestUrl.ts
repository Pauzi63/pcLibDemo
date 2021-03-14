// USAGE:

// import { buildRestUrl } from 'nkr_urlbuilder';

// let url = '/someapi/users/{id}/details';
// let urlParams = {id: 123};
// let queryParams = {name: 'abc', age: 20 };

// const response = await fetch(buildRestUrl(url, urlParams, queryParams));

export function buildRestUrl(
  restUrl: string,
  urlParams: any,
  queryParams: any
) {
  let url = restUrl;
  let query = '';
  url = restUrl.replace(/{([^{}]*)}/g, (subString, index) => {
    var current = urlParams[index];
    return /string|number/.test(typeof current) ? current : subString;
  });
  if (Object.keys(queryParams).length) {
    url = `${url}?`;
    for (let key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        query = `${query}${key}=${queryParams[key]}&`;
      }
    }
    query = query.slice(0, -1);
  }
  return `${url}${query}`;
}
