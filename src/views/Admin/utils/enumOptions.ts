const formatLabel = (value: string): string => {
    return value
        .toLowerCase()
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

export const enumToOptions = <T extends string>(enumObj: { [key: string]: T }): { value: T, label: string }[] => {
    return Object.values(enumObj).map(value => ({
        value,
        label: formatLabel(value),
    }));
};