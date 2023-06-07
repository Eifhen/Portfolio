





interface ISortArray<T> {
    sortDesc: (data: Array<any>)=> Array<T>;
    sortAsc: (data: Array<any>)=> Array<T>;
}

export default function Sort<T>() : ISortArray<T> {
    return {
        sortAsc: (data: Array<T>)=> SortAscent<T>(data), 
        sortDesc: (data: Array<T>)=> SortDesc<T>(data)
    }
}

// ordena el array en orden Acendiente
function SortAscent<T>(data: Array<any>) : Array<T> {
    return data.sort(function(a, b) {
        if (b.id < a.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
    });
}

// ordena el array en orden descendiente
function SortDesc<T>(data: Array<any>) : Array<T> {
    return data.sort(function(a, b) {
        if (b.id > a.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
    });
}