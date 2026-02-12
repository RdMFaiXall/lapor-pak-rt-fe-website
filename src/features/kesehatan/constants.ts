// --- Tipe Data Sesuai CSV "Kesehatan" ---
// Mengacu pada CSV Isu Kesehatan
export type HealthReport = {
    id: string
    nama_warga: string // Diambil dari id_warga (tahap 1 identitas)
    pelapor: string
    // [CSV Row 1] Subjek: isu_kesehatan
    isu_kesehatan: 'Wabah DBD' | 'Stunting' | 'Gizi Buruk' | 'Ibu Hamil Berisiko' | 'Warga Belum BPJS'
    // [CSV Row 2-8] Detail (Dynamic fields based on Issue)
    detail_penyakit: string // Detail spesifik penyakit/kondisi
    usia_penderita: string // Umur saat dilaporkan
    status_bpjs: 'Punya (Aktif)' | 'Punya (Non-Aktif)' | 'Tidak Punya'
    detail_kondisi: string // Keterangan tambahan
    // [CSV Row 9] Tindakan: intervensi_rt
    intervensi_rt: string[]
    bantuan_diperlukan: string[] // Bantuan yang diharapkan
    // [CSV Row 10] Tindakan: status_kesehatan
    status_kesehatan: 'Kritis' | 'Dalam Pemantauan' | 'Stabil'
    tanggal_laporan: string
}

// --- Dummy Data untuk Visualisasi ---
export const mockData: HealthReport[] = [
    {
        id: '1',
        nama_warga: 'Budi Santoso',
        pelapor: 'Pak RT',
        isu_kesehatan: 'Wabah DBD',
        detail_penyakit: 'Demam Berdarah Dengue (DBD)',
        usia_penderita: '34 Tahun',
        status_bpjs: 'Punya (Aktif)',
        detail_kondisi: 'Rawat Inap (RS/Puskesmas). Trombosit turun drastis.', // [CSV Row 2]
        intervensi_rt: ['Lapor Bidan Desa', 'Kerja Bakti (PSN/3M)'], // [CSV Row 9]
        bantuan_diperlukan: ['Fogging', 'Bantuan Pengobatan'],
        status_kesehatan: 'Dalam Pemantauan', // [CSV Row 10]
        tanggal_laporan: '2024-02-10',
    },
    {
        id: '2',
        nama_warga: 'Siti Aminah',
        pelapor: 'Bu RT',
        isu_kesehatan: 'Ibu Hamil Berisiko',
        detail_penyakit: 'Hipertensi Kehamilan (Preeklampsia)',
        usia_penderita: '28 Tahun',
        status_bpjs: 'Punya (Non-Aktif)',
        detail_kondisi: 'Trimester 3 (7-9 Bulan). Tensi 160/100.', // [CSV Row 6 & 7]
        intervensi_rt: ['Lapor Bidan Desa', 'Ajukan Bantuan Makanan'],
        bantuan_diperlukan: ['Pendampingan Posyandu', 'Bantuan Makanan Tambahan'],
        status_kesehatan: 'Kritis',
        tanggal_laporan: '2024-02-11',
    },
    {
        id: '3',
        nama_warga: 'Dikta (Balita)',
        pelapor: 'Kader Posyandu',
        isu_kesehatan: 'Stunting',
        detail_penyakit: 'Gagal Tumbuh',
        usia_penderita: '36 Bulan',
        status_bpjs: 'Tidak Punya',
        detail_kondisi: 'BB: 9kg, TB: 80cm. Di bawah garis merah.', // [CSV Row 4]
        intervensi_rt: ['Ajukan Bantuan Makanan (PMT)'],
        bantuan_diperlukan: ['PMT (Pemberian Makanan Tambahan)', 'Vitamin'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-02-01',
    },
    {
        id: '4',
        nama_warga: 'Joko',
        pelapor: 'Pak RT',
        isu_kesehatan: 'Warga Belum BPJS',
        detail_penyakit: '-',
        usia_penderita: '45 Tahun',
        status_bpjs: 'Tidak Punya',
        detail_kondisi: 'Tidak Mampu Bayar Iuran bulanan.', // [CSV Row 8]
        intervensi_rt: ['Bantu Pengurusan Adminduk/BPJS'],
        bantuan_diperlukan: ['Fasilitasi PBI (Penerima Bantuan Iuran)'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-02-05',
    },
    {
        id: '5',
        nama_warga: 'Rina (Balita)',
        pelapor: 'Bu RT',
        isu_kesehatan: 'Gizi Buruk',
        detail_penyakit: 'Marasmus',
        usia_penderita: '40 Bulan',
        status_bpjs: 'Punya (Aktif)',
        detail_kondisi: 'BB: 8kg, TB: 85cm. Sangat kurus.',
        intervensi_rt: ['Ajukan Bantuan Makanan (PMT)', 'Lapor Bidan Desa'],
        bantuan_diperlukan: ['Rujukan RS', 'Susu Formula Khusus'],
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-02-15',
    },
    {
        id: '6',
        nama_warga: 'Slamet',
        pelapor: 'Pak RT',
        isu_kesehatan: 'Wabah DBD',
        detail_penyakit: 'Demam Dengue',
        usia_penderita: '12 Tahun',
        status_bpjs: 'Punya (Aktif)',
        detail_kondisi: 'Rawat Jalan. Demam tinggi 3 hari.',
        intervensi_rt: ['Kerja Bakti (PSN/3M)'],
        bantuan_diperlukan: ['Fogging'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-02-16',
    },
    {
        id: '7',
        nama_warga: 'Bu Tejo',
        pelapor: 'Kader PKK',
        isu_kesehatan: 'Ibu Hamil Berisiko',
        detail_penyakit: 'Kehamilan Risiko Tinggi (Usia)',
        usia_penderita: '42 Tahun',
        status_bpjs: 'Punya (Aktif)',
        detail_kondisi: 'Usia > 35 Tahun. Hamil anak ke-4.',
        intervensi_rt: ['Lapor Bidan Desa'],
        bantuan_diperlukan: ['Pemantauan Rutin'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-02-18',
    },
    {
        id: '8',
        nama_warga: 'Wawan',
        pelapor: 'Pak RT',
        isu_kesehatan: 'Warga Belum BPJS',
        detail_penyakit: '-',
        usia_penderita: '25 Tahun',
        status_bpjs: 'Tidak Punya',
        detail_kondisi: 'Belum Punya NIK (KTP Hilang).',
        intervensi_rt: ['Bantu Pengurusan Adminduk/BPJS'],
        bantuan_diperlukan: ['Pembuatan KTP', 'Daftar BPJS Mandiri'],
        status_kesehatan: 'Stabil',
        tanggal_laporan: '2024-02-20',
    },
    {
        id: '9',
        nama_warga: 'Mbah Surip',
        pelapor: 'Warga Tetangga',
        isu_kesehatan: 'Warga Belum BPJS',
        detail_penyakit: 'Komplikasi Jantung',
        usia_penderita: '78 Tahun',
        status_bpjs: 'Punya (Non-Aktif)',
        detail_kondisi: 'Sakit Tua, Tidak ada Biaya berobat.',
        intervensi_rt: ['Bantu Pengurusan Adminduk/BPJS', 'Ajukan Bantuan Sosial'],
        bantuan_diperlukan: ['Reaktivasi BPJS PBI', 'Kursi Roda'],
        status_kesehatan: 'Kritis',
        tanggal_laporan: '2024-02-21',
    },
    {
        id: '10',
        nama_warga: 'Nayla (Balita)',
        pelapor: 'Kader Posyandu',
        isu_kesehatan: 'Stunting',
        detail_penyakit: 'Perawakan Pendek',
        usia_penderita: '30 Bulan',
        status_bpjs: 'Punya (Aktif)',
        detail_kondisi: 'BB: 8.5kg, TB: 78cm. Kurang asupan protein.',
        intervensi_rt: ['Ajukan Bantuan Makanan (PMT)'],
        bantuan_diperlukan: ['Telur & Susu', 'Edukasi Orang Tua'],
        status_kesehatan: 'Dalam Pemantauan',
        tanggal_laporan: '2024-02-22',
    }
]
