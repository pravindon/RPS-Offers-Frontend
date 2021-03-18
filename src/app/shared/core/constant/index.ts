import { environment } from '../../../../environments/environment';

export const API_URL = 'http://localhost:4000/v1';

export const ApiUrl = {
  baseUrl: environment.baseURL,
  StudentsUrl: urlCreator('/students'),
  orgUrl: urlCreator('/organization')
};

function urlCreator(actionName: string): string {
  return `${environment.baseURL}${actionName}`;
}
