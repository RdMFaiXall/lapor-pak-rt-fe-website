
const XLSX = require('xlsx');

try {
    const file = 'FIELD _ KOLOM LAPOR PAK RT(2).xlsx';
    const workbook = XLSX.readFile(file);
    const sheet = workbook.Sheets['Sheet1'];

    if (sheet) {
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Previous output showed Pendidikan ended around row 70. 
        // Bencana started around row 105 (Emergency Button / Kentongan Online).
        // So Ekonomi must be between 70 and 105.

        console.log('--- POTENTIAL EKONOMI SECTIONS (Row 70-105) ---');
        const ekonomiData = data.slice(70, 105);
        console.log(JSON.stringify(ekonomiData, null, 2));
    }
} catch (e) {
    console.error(e);
}
