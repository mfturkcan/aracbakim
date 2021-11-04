import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

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

        return httpClient(url).then(({ headers, json }) => ({
            data: json.map(field => {
                switch (resource) {
                    case "kullanicilar":
                        return { id: field["KullaniciAdi"], ...field }
                        break;
                    case "iller":
                        return { id: field["IlKodu"], ...field }
                        break;
                    case "ilceler":
                        return { id: field["IlceKodu"], ...field }
                        break;
                }
            }),
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));;
    },

    getOne: (resource, params) => {

        console.log(params);
        return httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => {
            switch (resource) {
                case "kullanicilar":
                    return { data: { ...json, id: json["KullaniciAdi"] }, }
                    break;
                case "iller":
                    return { data: { ...json, id: json["IlKodu"] }, }
                    break;
                case "ilceler":
                    return { data: { ...json, id: json["IlceKodu"] }, }
                    break;
            }
        });
    },

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({
            data: json.map(field => {
                switch (resource) {
                    case "kullanicilar":
                        return { id: field["KullaniciAdi"], ...field }
                        break;
                    case "iller":
                        return { id: field["IlKodu"], ...field }
                        break;
                    case "ilceler":
                        return { id: field["IlceKodu"], ...field }
                        break;
                }
            }),
        }));
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

        return httpClient(url).then(({ headers, json }) => ({
            data: json.map(field => {
                switch (resource) {
                    case "kullanicilar":
                        return { id: field["KullaniciAdi"], ...field }
                        break;
                    case "iller":
                        return { id: field["IlKodu"], ...field }
                        break;
                    case "ilceler":
                        return { id: field["IlceKodu"], ...field }
                        break;
                }
            }),
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            switch (resource) {
                case "kullanicilar":
                    return { data: { ...json, id: json["KullaniciAdi"] }, }
                    break;
                case "iller":
                    return { data: { ...json, id: json["IlKodu"] }, }
                    break;
                case "ilceler":
                    return { data: { ...json, id: json["IlceKodu"] }, }
                    break;
            }
        }),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: json.map(field => {
                switch (resource) {
                    case "kullanicilar":
                        return { id: field["KullaniciAdi"], ...field }
                        break;
                    case "iller":
                        return { id: field["IlKodu"], ...field }
                        break;
                    case "ilceler":
                        return { id: field["IlceKodu"], ...field }
                        break;
                }
            }),
        }));
    },

    create: (resource, params) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            switch (resource) {
                case "kullanicilar":
                    return { data: { ...json, id: json["KullaniciAdi"] }, }
                    break;
                case "iller":
                    return { data: { ...json, id: json["IlKodu"] }, }
                    break;
                case "ilceler":
                    return { data: { ...json, id: json["IlceKodu"] }, }
                    break;
            }
        }),

    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => {
            switch (resource) {
                case "kullanicilar":
                    return { data: { ...json, id: json["KullaniciAdi"] }, }
                    break;
                case "iller":
                    return { data: { ...json, id: json["IlKodu"] }, }
                    break;
                case "ilceler":
                    return { data: { ...json, id: json["IlceKodu"] }, }
                    break;
            }
        }),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ ids: params.ids }),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({
            data: json.map(field => {
                switch (resource) {
                    case "kullanicilar":
                        return { id: field["KullaniciAdi"], ...field }
                        break;
                    case "iller":
                        return { id: field["IlKodu"], ...field }
                        break;
                    case "ilceler":
                        return { id: field["IlceKodu"], ...field }
                        break;
                }
            }),
        }));
    },
}


export default DataProvider;