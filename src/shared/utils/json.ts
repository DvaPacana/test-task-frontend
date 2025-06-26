import { JSON_METHOD } from '../enums';

export const strigifyAndParse = <T>(data: T, method: JSON_METHOD) => {
  switch (method) {
    case JSON_METHOD.PARSE:
      return JSON.parse(data as string);
    case JSON_METHOD.STRINGIFY:
      return JSON.stringify(data);
  }
};
