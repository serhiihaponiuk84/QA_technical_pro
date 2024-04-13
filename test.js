const company = {
    name: 'Велика Компанія',
    type:'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subSubCompany',
                    uses: 'Рішення для продажу квитків',
                    sells: 'Рішення для продажу квитків',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subSubCompany',
                            uses: 'Рішення для продажу квитків',
                            sells: 'Рішення для продажу квитків',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany',
            uses: 'ПО для продажу квитків',
            sells: 'Рішення для продажу квитків'
        }
    ]
};

function findValueByKey(company, companyName) {

    function collectDetails(company) {
        let Info = "";
        for (const key in company) {
            if ((key !== 'clients') && (key !== 'partners')) {
                Info += key + ": " + company[key] + "\n";
            }
            if (key === 'clients') {
                for (const client of company.clients) {
                    Info += "\n";
                    for (const key in client) {
                        if (key !== 'partners') {
                            Info += key + ": " + client[key] + "\n";
                        }
                    }
                }
            }
            if (key === 'partners') {
                for (const partner of company.partners) {
                    Info += "\n";
                    for (const key in partner) {
                        if (key !== 'partners') {
                            Info += key + ": " + partner[key] + "\n";
                        }
                    }
                }
            }

        }

    return Info;
    }

    function navigateCompanyStructure(company) {
        if (company.name === companyName) {
            return collectDetails(company);
        }

        let result = null;
        for (const property of ['clients', 'partners']) {
            if (company[property]) {
                for (const SubCompany of company[property]) {
                    result = navigateCompanyStructure(SubCompany);
                    if (result) return result;
                }
            }
        }
        return result;
    }

    return navigateCompanyStructure(company) || "Company not found.";

}

console.log(findValueByKey(company, 'Клієнт 1.2.3'));