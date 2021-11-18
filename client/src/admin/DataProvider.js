import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import {getOne, getMany} from './dataProviderHandles';

const apiUrl = 'http://localhost:5000';
const httpClient = fetchUtils.fetchJson;

const DataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => {
            if (json.errno) {
                throw new Error(json.sqlMessage);
            } return {
                data: getMany(json, resource),
                total: parseInt(headers.get('content-range').split('/').pop(), 10),
            }
        });
    },

    getOne: (resource, params) => {

        return httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
            if (json.errno) {
                throw new Error(json.sqlMessage);
            }
            return getOne(json, resource);
        });
    },

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => {
            if (json.errno) {
                throw new Error(json.sqlMessage);
            } return {
                data: getMany(json, resource),
            }
        });
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => {
            if (json.errno) {
                throw new Error(json.sqlMessage);
            } return {
                data: getMany(json, resource),
                total: parseInt(headers.get('content-range').split('/').pop(), 10),
            }
        });
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            if (json.errno) {
                throw new Error(json.sqlMessage);
            }
            return getOne(json, resource);
        }),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            if (json.errno) {
                throw new Error(json.sqlMessage);
            } return {
                data: getMany(json, resource),
            }
        });
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            if (json.errno) {
                throw new Error(json.sqlMessage);
            }
            return getOne(json, resource);
        }),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => {
            if (json.errno) {
                throw new Error(json.sqlMessage);
            }
            return getOne(json, resource);
        }),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            if (json.errno) {
                throw new Error(json.sqlMessage);
            } return {
                data: getMany(json, resource),
            }
        });
    },
}


export default DataProvider;