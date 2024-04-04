export function isNullOrUndefined(obj: any): boolean {
    return (obj === null || obj === undefined);

}

export function isUndefined(obj: any): boolean {
    return (obj === undefined);
}

// returns date in format 2024-04-04
export function dateConverter(date: Date): string {
    return date.getFullYear() + '-' +  ((date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)) 
        + '-' + (date.getDate() > 9 ? date.getDate() : '0' + date.getDate());
}

export function isNullOrEmpty(obj: any): boolean {
    return (obj === null || obj === undefined || obj.trim() === "");
}