
const XLSX = require('xlsx');

try {
    const workbook = XLSX.readFile('FIELD _ KOLOM LAPOR PAK RT(2).xlsx');

    const kesehatanSheet = workbook.Sheets['KESEHATAN'];
    const pendidikanSheet = workbook.Sheets['PENDIDIKAN'];

    if (!kesehatanSheet) {
        console.error('KESEHATAN sheet not found.');
        // Check available sheets
        console.log('Available sheets:', workbook.SheetNames);

        // Maybe try to read the first sheet if specific name fails
        // const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
        // ...
    } else {
        // Read first row as headers
        const headers = [];
        const range = XLSX.utils.decode_range(kesehatanSheet['!ref']);
        for (let C = range.s.c; C <= range.e.c; ++C) {
            const cell = kesehatanSheet[XLSX.utils.encode_cell({ c: C, r: 0 })];
            if (cell && cell.v) headers.push(cell.v);
        }
        console.log('KESEHATAN Headers:', JSON.stringify(headers, null, 2));
    }

    if (!pendidikanSheet) {
        console.error('PENDIDIKAN sheet not found.');
        // Check available sheets if not found
        if (!kesehatanSheet) console.log('Available sheets:', workbook.SheetNames);
    } else {
        // Read first row as headers
        const headers = [];
        const range = XLSX.utils.decode_range(pendidikanSheet['!ref']);
        for (let C = range.s.c; C <= range.e.c; ++C) {
            const cell = pendidikanSheet[XLSX.utils.encode_cell({ c: C, r: 0 })];
            if (cell && cell.v) headers.push(cell.v);
        }
        console.log('PENDIDIKAN Headers:', JSON.stringify(headers, null, 2));
    }

} catch (e) {
    console.error("Error reading file:", e);
}
