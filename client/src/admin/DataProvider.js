import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://localhost:5000';
const httpClient = fetchUtils.fetchJson;

function getMany(json, resource) {
    return json.map((field) => {
        switch (resource) {
            case "kullanicilar":
                return { id: field["KullaniciAdi"], ...field }
                break;
            case "personel":
                return { id: field["KullaniciAdi"], ...field }
                break;
            case "birimler":
                return { id: field["BirimKodu"], ...field }
                break;
            case "iller":
                return { id: field["IlKodu"], ...field }
                break;
            case "ilceler":
                return { id: field["IlceKodu"], ...field }
                break;
            case "problem":
                return { id: field["ProblemTipiID"], ...field }
                break;
            case "aktiviteler":
                return { id: field["AktiviteID"], ...field }
                break;
            case "belirtecler":
                return { id: field["BelirtecID"], ...field }
                break;
            case "mudahale":
                return { id: field["MudahaleID"], ...field }
                break;
            case "cikti":
                return { id: field["CiktiID"], ...field }
                break;
            case "ciktidetay":
                return { id: field["CiktiID"], ...field }
                break;
            case "mudahaledetay":
                return { id: field["AktiviteID"], ...field }
                break;
            case "problembirim":
                return { id: field["ProblemID"], ...field }
                break;
            case "siniflar":
                return { id: field["SinifID"], ...field }
                break;
            case "alanlar":
                return { id: field["AlanID"], ...field }
                break;
        }
    });
}

function getOne(json, resource) {
    switch (resource) {
        case "kullanicilar":
            return { data: { ...json, id: json["KullaniciAdi"] }, }
            break;
        case "personel":
            return { data: { ...json, id: json["KullaniciAdi"] }, }
            break;
        case "birimler":
            return { data: { ...json, id: json["BirimKodu"] }, }
            break;
        case "iller":
            return { data: { ...json, id: json["IlKodu"] }, }
            break;
        case "ilceler":
            return { data: { ...json, id: json["IlceKodu"] }, }
            break;
        case "problem":
            return { data: { ...json, id: json["ProblemTipiID"] }, }
            break;
        case "aktiviteler":
            return { data: { ...json, id: json["AktiviteID"] }, }
            break;
        case "belirtecler":
            return { data: { ...json, id: json["BelirtecID"] }, }
            break;
        case "mudahale":
            return { data: { ...json, id: json["MudahaleID"] }, }
            break;
        case "cikti":
            return { data: { ...json, id: json["CiktiID"] }, }
            break;
        case "ciktidetay":
            return { data: { ...json, id: json["CiktiID"] }, }
            break;
        case "mudahaledetay":
            return { data: { ...json, id: json["AktiviteID"] }, }
            break;
        case "problembirim":
            return { data: { ...json, id: json["ProblemID"] }, }
            break;
        case "siniflar":
            return { data: { ...json, id: json["SinifID"] }, }
            break;
        case "alanlar":
            return { data: { ...json, id: json["AlanID"] }, }
            break;
    }
}

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