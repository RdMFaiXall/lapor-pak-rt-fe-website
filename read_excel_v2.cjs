
const XLSX = require('xlsx');

try {
    const file = 'FIELD _ KOLOM LAPOR PAK RT.xlsx';
    const workbook = XLSX.readFile(file);
    const sheet = workbook.Sheets['Sheet1'];

    if (sheet) {
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Find row indices for 'EKONOMI'
        let ekonomiStartIndex = -1;
        let ekonomiEndIndex = -1;

        data.forEach((row, index) => {
            const rowStr = JSON.stringify(row).toLowerCase();
            if (rowStr.includes('ekonomi')) {
                console.log(`Found EKONOMI at row ${index}:`, row);
                if (ekonomiStartIndex === -1) ekonomiStartIndex = index;
            }
        });

        // If specific start found, slice from there. Otherwise fallback to broad slice.
        const start = ekonomiStartIndex !== -1 ? ekonomiStartIndex : 50;
        const end = start + 50; // Read 50 rows from start

        console.log(`--- EXTRACTING ROWS ${start} to ${end} ---`);
        const result = data.slice(start, end);
        console.log(JSON.stringify(result, null, 2));
    }
} catch (e) {
    console.error(e);
}
