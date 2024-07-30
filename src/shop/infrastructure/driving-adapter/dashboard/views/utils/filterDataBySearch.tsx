const getValueByPath = (obj: any, path: string) => {
    return path.split('.').reduce((acc, part) => {
        return acc && acc[part] !== undefined ? acc[part] : undefined;
    }, obj);
};

const filterDataBySearch = (dataList: any[], search: string, keysToSearch: string[], setDataFn: React.Dispatch<any>) => {
    const filteredData = dataList.filter((item: any) => {
        const searchMatch = !search || keysToSearch.some((key: string) => {
            const value = getValueByPath(item, key);
            return value && value.toLowerCase().includes(search.toLowerCase());
        });
        return searchMatch;
    });

    setDataFn(filteredData);
};

export default filterDataBySearch;