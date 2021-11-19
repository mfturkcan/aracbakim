export function getMany(json, resource) {
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
            case "problemmudahale":
                return { id: field["MudahaleID"], ...field }
                break;
            case "problemcikti":
                return { id: field["CiktiID"], ...field }
                break;
            case "ilavemudahaledetay":
                return { id: field["AktiviteID"], ...field }
                break;
            case "ilaveciktidetay":
                return { id: field["BelirtecID"], ...field }
                break;
            case "personelproblem":
                return { id: field["KullaniciAdi"], ...field }
                break;
            case "problemciktidegerlendirme":
                return { id: field["BelirtecID"], ...field }
                break;
        }
    });
}

export function getOne(json, resource) {
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
        case "problemmudahale":
            return { data: { ...json, id: json["MudahaleID"] }, }
            break;
        case "problemcikti":
            return { data: { ...json, id: json["CiktiID"] }, }
            break;
        case "ilavemudahaledetay":
            return { data: { ...json, id: json["AktiviteID"] }, }
            break;
        case "ilaveciktidetay":
            return { data: { ...json, id: json["BelirtecID"] }, }
            break;
        case "personelproblem":
            return { data: { ...json, id: json["KullaniciAdi"] }, }
            break;
        case "problemciktidegerlendirme":
            return { data: { ...json, id: json["BelirtecID"] }, }
            break;
    }
}
