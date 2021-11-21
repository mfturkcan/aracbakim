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
                return { id: `${field["IlceKodu"]}!${field["IlKodu"]}`, ...field }
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
                return { id:`${field["AlanID"]}-${field["MudahaleID"]}-${field["SinifID"]}` , ...field }
                break;
            case "cikti":
                return { id: `${field["AlanID"]}'${field["CiktiID"]}'${field["SinifID"]}`, ...field }
                break;
            case "ciktidetay":
                return { id: `${field["AlanID"]}_${field["CiktiID"]}_${field["SinifID"]}_${field["BelirtecID"]}_${field["Sira"]}`, ...field }
                break;
            case "mudahaledetay":
                return { id: `${field["AlanID"]},${field["MudahaleID"]},${field["SinifID"]},${field["AktiviteID"]}`, ...field }
                break;
            case "problembirim":
                return { id: `${field["ProblemID"]}&${field["BirimID"]}`, ...field }
                break;
            case "siniflar":
                return { id: field["SinifID"], ...field }
                break;
            case "alanlar":
                return { id: field["AlanID"], ...field }
                break;
            case "problemmudahale":
                return { id: `${field["AlanID"]}+${field["SinifID"]}+${field["MudahaleID"]}+${field["ProblemID"]}`, ...field }
                break;
            case "problemcikti":
                return { id: `${field["AlanID"]}*${field["SinifID"]}*${field["CiktiID"]}*${field["ProblemID"]}`, ...field }
                break;
            case "ilavemudahaledetay":
                return { id: `${field["ProblemID"]}=${field["AlanID"]}=${field["SinifID"]}=${field["MudahaleID"]}=${field["AktiviteID"]}`, ...field }
                break;
            case "ilaveciktidetay":
                return { id: `${field["ProblemID"]}--${field["AlanID"]}--${field["SinifID"]}--${field["MudahaleID"]}--${field["BelirtecID"]}`, ...field }
                break;
            case "personelproblem":
                return { id: `${field["ProblemID"]}&&${field["KullaniciAdi"]}`, ...field }
                break;
            case "problemciktidegerlendirme":
                return { id: `${field["ProblemID"]}&&${field["BelirtecID"]}`, ...field }
                break;
            case "problemdurumdegerlendirme":
                return { id: `${field["ProblemID"]}~${field["YeniProblemID"]}`, ...field }
                break;
            case "calisanproblem":
                return { id: `${field["ProblemID"]}~~${field["KullaniciAdi"]}~~${field["AlanID"]}~~${field["SinifID"]}~~${field["MudahaleID"]}~~${field["AktiviteID"]}`, ...field }
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
            return { data: { ...json, id: `${json["IlceKodu"]}!${json["IlKodu"]}`}, }
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
            return { data: { ...json, id: `${json["AlanID"]}-${json["MudahaleID"]}-${json["SinifID"]}`}, }
            break;
        case "cikti":
            return { data: { ...json, id: `${json["AlanID"]}'${json["CiktiID"]}'${json["SinifID"]}` }, }
            break;
        case "ciktidetay":
            return { data: { ...json, id: `${json["AlanID"]}_${json["CiktiID"]}_${json["SinifID"]}_${json["BelirtecID"]}_${json["Sira"]}` }, }
            break;
        case "mudahaledetay":
            return { data: { ...json, id: `${json["AlanID"]},${json["MudahaleID"]},${json["SinifID"]},${json["AktiviteID"]}` }, }
            break;
        case "problembirim":
            return { data: { ...json, id: `${json["ProblemID"]}&${json["BirimID"]}` }, }
            break;
        case "siniflar":
            return { data: { ...json, id: json["SinifID"] }, }
            break;
        case "alanlar":
            return { data: { ...json, id: json["AlanID"] }, }
            break;
        case "problemmudahale":
            return { data: { ...json, id: `${json["AlanID"]}+${json["SinifID"]}+${json["MudahaleID"]}+${json["ProblemID"]}` }, }
            break;
        case "problemcikti":
            return { data: { ...json, id: `${json["AlanID"]}*${json["SinifID"]}*${json["CiktiID"]}*${json["ProblemID"]}` }, }
            break;
        case "ilavemudahaledetay":
            return { data: { ...json, id: `${json["ProblemID"]}=${json["AlanID"]}=${json["SinifID"]}=${json["MudahaleID"]}=${json["AktiviteID"]}` }, }
            break;
        case "ilaveciktidetay":
            return { data: { ...json, id:  `${json["ProblemID"]}--${json["AlanID"]}--${json["SinifID"]}--${json["MudahaleID"]}--${json["BelirtecID"]}` }, }
            break;
        case "personelproblem":
            return { data: { ...json, id: `${json["ProblemID"]}&&${json["KullaniciAdi"]}` }, }
            break;
        case "problemciktidegerlendirme":
            return { data: { ...json, id: `${json["ProblemID"]}&&${json["BelirtecID"]}`}, }
            break;
        case "problemdurumdegerlendirme":
            return { data: { ...json, id: `${json["ProblemID"]}~${json["YeniProblemID"]}` }, }
            break;
        case "calisanproblem":
            return { data: { ...json, id: `${json["ProblemID"]}~~${json["KullaniciAdi"]}~~${json["AlanID"]}~~${json["SinifID"]}~~${json["MudahaleID"]}~~${json["AktiviteID"]}` }, }
            break;
    }
}
