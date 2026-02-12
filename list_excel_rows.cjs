
const XLSX = require('xlsx');

try {
    const file = 'FIELD _ KOLOM LAPOR PAK RT.xlsx';
    const workbook = XLSX.readFile(file);
    const sheet = workbook.Sheets['Sheet1'];

    if (sheet) {
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        data.slice(0, 200).forEach((row, index) => {
            console.log(`Row ${index}:`, row[0]);
        });
    }
} catch (e) {
    console.error(e);
}
