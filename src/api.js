import catalogData from './data/catalog';
import userCatalogData from './data/user-catalog';

const TIMEOUT = 500;

export const getUserCatalogData = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(userCatalogData), TIMEOUT);
  });
};

export const getCatalogData = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => resolve(catalogData), TIMEOUT);
  });
};
