function ArrOpsi(rows, coloumns){
var arr = [];
	for(var x = 0; x < rows ; x++){
		arr[x] = new Array(coloumns);
	}
	return arr;
}

//set soal
function soal(){
	var soalTPA = [];

	//soal TWK
    soalTPA[0]  = "Perhatikan pernyataan berikut!<br> (1) Menghargai pluralitas<br> (2) Bersifat totaliter<br> (3) Isinya tidak langsung operasional<br> (4) Ditemukan di dalam masyarakat itu sendiri<br> Pernyataan di atas yang merupakan ciri-ciri dari ideologi terbuka adalah ....";
    soalTPA[1]  = "Pancasila sebagai paradigma dalam pembangunan ekonomi adalah sebagai berikut, <i>kecuali</i> ....";
    soalTPA[2]  = "Pancasila adalah lima sila yang menjadi dasar negara Indonesia. Kelima sila dalam Pancasila dilambangkan oleh simbol-simbol yang memiliki makna sesuai sila yang direpresentasikan. Berikut ini urutan simbol sila-sila Pancasila yaitu ….";
    soalTPA[3]  = "Pada tahun 2018, Indonesia berduka dengan adanya bencana yang menimpa Kabupaten Donggala dan Palu. Bantuan demi bantuan diberikan oleh relawan kepada korban bencana, baik itu berupa makanan, minuman, pakaian, dan bantuan lainnya. Tindakan relawan tersebut termasuk pengamalan Pancasila sila ke ….";
    soalTPA[4]  = "Agenda pokok sidang BPUPKI yang berlangsung dari tanggal 10–16 Juli 1945 membahas tentang ....";
    soalTPA[5]  = "Majelis Permusyawaratan Rakyat bersidang sedikitnya ... dalam lima tahun di ibu kota negara.";
    soalTPA[6]  = "Dalam hal terjadi kekosongan wakil presiden, selambat-lambatnya dalam jangka waktu berapa hari Majelis Permusyawaratan Rakyat menyelenggarakan sidang untuk memilih wakil presiden dari dua calon yang diusulkan oleh presiden?";
    soalTPA[7]  = "Pelimpahan wewenang oleh pemerintah pusat kepada pemerintah daerah untuk mengurus urusan daerahnya sendiri berdasarkan asas otonom disebut ....";
    soalTPA[8]  = "Negara memprioritaskan anggaran pendapatan dan belanja negara (APBN) bagi penyelenggaraan pendidikan nasional sekurang-kurangnya ....";
    soalTPA[9]  = "Lembaga negara yang berhak mengangkat hakim agung serta menegakkan kehormatan perilaku hakim adalah ....";
    soalTPA[10] = "Sebelum diamendemen, UUD 1945 pasal 5 ayat 1 menyatakan bahwa presiden memegang kekuasaan membentuk undang-undang dengan persetujuan DPR. Setelah diamendemen yang pertama, 19 Oktober 1999, pasal 5 ayat 1 berbunyi ....";
    soalTPA[11] = "Badan Pemeriksa Keuangan (BPK) memiliki tugas untuk memeriksa pengelolaan dan tanggung jawab tentang keuangan negara. Berdasarkan UU No. 15 Tahun 2006, jumlah anggota dari BPK adalah … orang.";
    soalTPA[12] = "Bumi dan air dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara dan dipergunakan untuk sebesar-besarnya kemakmuran rakyat merupakan bunyi UUD 1945 pasal ....";
    soalTPA[13] = "Naturalisasi termasul istilah yang berkaitan dengan perihal kewarganegaraan, yang memiliki pengertian ….";
    soalTPA[14] = "Indonesia terdiri atas beraneka ragam suku bangsa yang memiliki kebudayaan dan adat istiadat yang bermacammacam. Hal ini menyebabkan ….";
    soalTPA[15] = "Indische Partij merupakan organisasi politik pertama di Hindia-Belanda yang didirikan oleh tokoh Tiga Serangkai, yaitu Douwes Dekker, Cipto Mangunkusumo, dan Ki Hajar Dewantara, pada tanggal …. ";
    soalTPA[16] = "Berikut ini pernyataan yang tidak berhubungan dengan peristiwa Agresi Militer Belanda II adalah ….";
    soalTPA[17] = "UNCI adalah badan PBB yang dibentuk untuk membantu menyelesaikan pertikaian antara Indonesia dan Belanda. UNCI juga ikut dalam perundingan antara kedua negara, salah satu perundingan yang diikuti adalah Konferensi Meja Bundar yang diwakili oleh ….";
    soalTPA[18] = "Pemberontakan Darul Islam/Tentara Islam Indonesia merupakan gerakan separatisme yang terjadi di beberapa wilayah Indonesia. Salah satu wilayah yang ikut dalam gerakan DI/TII adalah Kalimantan Selatan yang dipimpin oleh ….";
    soalTPA[19] = "Sistem yang digunakan pada pemilu tahun 1955 adalah sistem perwakilan proporsional, yaitu setiap daerah pemilihan akan mendapat sejumlah kursi atas dasar jumlah penduduknya. Berdasarkan sistem tersebut jumlah wilayah pemilihan pada pemilu tahun 1955 adalah ….";
    soalTPA[20] = "Bacalah teks berikut!<br> Setelah Pemerintah Provinsi DKI Jakarta menetapkan kenaikan tarif angkutan umum kelas ekonomi, kenaikan tarif taksi dan bus patas AC juga akan segera ditetapkan. Tarif taksi akan naik 20% dan tarif bus patas AC akan naik 25%. Kepala Dinas Perhubungan DKI Jakarta, Nurachman, mengatakan Pemprov DKI, Organda di Jakarta, dan wakil pemilik taksi sudah membahas kenaikan tarif taksi. Saat ini, surat keputusan kenaikan tarif sudah dibahas dan diperkirakan bakal ditetapkan Senin mendatang.<br> Simpulan paragraf tersebut adalah ....";
    soalTPA[21] = "Penulisan kata sandang <i>si</i> dan <i>sang</i> yang tepat adalah ....";
    soalTPA[22] = "Cermati paragraf berikut!<br> (1) Berdasarkan data Sensus Nasional terlihat bahwa sebagian besar penduduk Indonesia lebih banyak menggunakan pengeluarannya untuk makanan. (2) Pada tahun 2002 lebih dari 82% penduduk Indonesia menggunakan lebih dari 61% pengeluarannya untuk makanan. (3) Untuk penduduk miskin, persentase pengeluaran rumah tangga yang digunakan untuk makanan jauh lebih besar. (4) Untuk kelompok penduduk miskin, tidak kurang dari 69%—72% dari total pengeluaran digunakan untuk makanan. (5) Makanan yang dikonsumsi penduduk miskin 90% gizinya tidak seimbang.<br> Kalimat sumbang dalam paragraf tersebut adalah kalimat ….";
    soalTPA[23] = "Kata-kata di bawah ini yang penulisannya sesuai dengan Ejaan Bahasa Indonesia adalah ....";
    soalTPA[24] = "Bacalah paragraf berikut!<br> Untuk … korban akibat cuaca … . Badan SAR Nasional membuat … penyelamatan. Kebijakan ini sudah … diterapkan di negara-negara maju.<br> Kata serapan yang tepat untuk melengkapi paragraf tersebut adalah …. ";
    soalTPA[25] = "Perhatikan paragraf berikut!<br> Sudah setahun ini ayah harus … antara rumah kami dan rumah nenek yang berjarak lebih kurang 50 kilo meter. Hanya ayahlah … anak nenek yang tinggal satu kota dengan nenek. … ayah lainnya tinggal di kota lain, bahkan ada yang tinggal di luar negeri. Selama setahun ini memang nenek memerlukan perhatian lebih karena penyakit tuanya.<br> Kata ulang yang tepat untuk melengkapi paragraf rumpang tersebut adalah ….";
    soalTPA[26] = "Penulisan akronim yang sesuai Ejaan Bahasa Indonesia adalah ....";
    soalTPA[27] = "Penggunaan tanda titik dua yang tidak tepat pada kalimat ....";
    soalTPA[28] = '<b>Bacalah teks berikut dengan teliti untuk menjawab soal nomor 64 dan 65!</b><br><br> Bentuk ganja medis yang seperti permen dan agar-agar bisa menarik perhatian anak-anak jika tak disimpan dengan baik. Hal ini terjadi di New Mexico, Amerika Serikat. Seorang bocah SD berusia 9 tahun membawa permen agar-agar dan dibagikan kepada beberapa teman sekelasnya. Tak berapa lama, ia mengaku merasa pusing dan melihat temantemannya mengalami hal serupa. Rupanya, permen agar-agar yang dimakan bocah-bocah tersebut adalah ganja medis yang bisa dimakan milik keluarganya. Kepala Sekolah Albuquerque School of Excellence, Ebubekir Orsun, mengatakan siswa yang mengonsumsi permen ganja tersebut terlihat bingung namun dalam keadaan sehat. "Kami melihat ia menunjukkan perilaku tak biasa, dan mengaku tidak bisa melihat lalu tiba-tiba tertawa," ujar Orsun, dikutip dari ABC Australia. Pihak sekolah pun memanggil dokter. Dokter memastikan bahwa para siswa dalam kondisi sehat dan baik, meskipun masih sedikit linglung. Pihak sekolah juga memberikan pengumuman di media sosial untuk orang tua agar lebih berhati-hati menyimpan benda-benda yang tanpa sengaja bisa dimakan anak. "Kami mengingatkan para orang tua pentingnya tidak memperlihatkan dan membicarakan soal obat-obatan yang digunakan, untuk menghindari adanya penyalahgunaan," tambahnya. Dr. Barry Ramo mengatakan bahwa ganja yang dikemas dalam bentuk permen dan makanan memiliki dampak yang lebih besar daripada ganja yang diisap. Karena itu, sangat penting untuk menjauhkan produk ini dari anak-anak. "Rasanya enak seperti permen pada umumnya, dan anak-anak bisa kesulitan membedakannya. Ini harus jadi perhatian orang tua karena ganja yang bisa dimakan memiliki dampak yang lebih kuat," ujar<b><i>nya</b></i>.<br>Pernyataan yang tidak sesuai dengan teks tersebut adalah ....';
    soalTPA[29] = '<b>Bacalah teks berikut dengan teliti untuk menjawab soal nomor 64 dan 65!</b><br><br> Bentuk ganja medis yang seperti permen dan agar-agar bisa menarik perhatian anak-anak jika tak disimpan dengan baik. Hal ini terjadi di New Mexico, Amerika Serikat. Seorang bocah SD berusia 9 tahun membawa permen agar-agar dan dibagikan kepada beberapa teman sekelasnya. Tak berapa lama, ia mengaku merasa pusing dan melihat temantemannya mengalami hal serupa. Rupanya, permen agar-agar yang dimakan bocah-bocah tersebut adalah ganja medis yang bisa dimakan milik keluarganya. Kepala Sekolah Albuquerque School of Excellence, Ebubekir Orsun, mengatakan siswa yang mengonsumsi permen ganja tersebut terlihat bingung namun dalam keadaan sehat. "Kami melihat ia menunjukkan perilaku tak biasa, dan mengaku tidak bisa melihat lalu tiba-tiba tertawa," ujar Orsun, dikutip dari ABC Australia. Pihak sekolah pun memanggil dokter. Dokter memastikan bahwa para siswa dalam kondisi sehat dan baik, meskipun masih sedikit linglung. Pihak sekolah juga memberikan pengumuman di media sosial untuk orang tua agar lebih berhati-hati menyimpan benda-benda yang tanpa sengaja bisa dimakan anak. "Kami mengingatkan para orang tua pentingnya tidak memperlihatkan dan membicarakan soal obat-obatan yang digunakan, untuk menghindari adanya penyalahgunaan," tambahnya. Dr. Barry Ramo mengatakan bahwa ganja yang dikemas dalam bentuk permen dan makanan memiliki dampak yang lebih besar daripada ganja yang diisap. Karena itu, sangat penting untuk menjauhkan produk ini dari anak-anak. "Rasanya enak seperti permen pada umumnya, dan anak-anak bisa kesulitan membedakannya. Ini harus jadi perhatian orang tua karena ganja yang bisa dimakan memiliki dampak yang lebih kuat," ujar<b><i>nya</b></i>.<br>Sisipan “-nya” yang bercetak tebal pada teks tersebut merujuk pada ....';
    //TIU
    soalTPA[30] = "Arti dari kata <b>segmen</b> adalah ….";
    soalTPA[31] = "Sinonim dari kata <b>tela</b> adalah ….";
    soalTPA[32] = "Antonim dari kata <b>papa</b> adalah ….";
    soalTPA[33] = "Lawan kata dari <b>mamang</b> adalah ….";
    soalTPA[34] = "SIPIR : PENJARA = ....";
    soalTPA[35] = "TAPLAK : MEJA = ....";
    soalTPA[36] = "Jika diketahui 𝑎 = 1, 𝑏 = 2, dan $c = {a^2 − b^2}/{a+b}$, maka nilai dari 𝑎 + 𝑏 + 𝑐 = ....";//p-1 42
    soalTPA[37] = "Jika $(1,25 × 4)^{a+2}$ = 125 dan $3^{8/b}$ = 81, maka 2𝑎 + 𝑏 = ….";
    soalTPA[38] = "$(543 − 222)^2 + 444(543 − 222) =$ ….";
    soalTPA[39] = "Jika 147𝑎𝑏𝑐 + 142 = 1.234 dan 𝑎 = 11, maka nilai dari 77𝑏𝑐 − 2 adalah …. ";
    soalTPA[40] = "30,5 dekade +100 abad +35,25 catur wulan +9,25 lustrum = … bulan. ";
    soalTPA[41] = "Diketahui $√√^4 {16z^4}= 8$, nilai z yang memenuhi adalah ….";
    soalTPA[42] = "Diketahui $x = 2z + w$ dan $y = wz − z. $ Jika $x, y ∈ ℝ$, maka ….";
    soalTPA[43] = "Jika 𝑎 ≥ 0 dan 𝑏 < 0, maka ….";
    soalTPA[44] = "Jika $c > 0$ dan $d < 0$, dengan $o = (c − d)^2$ dan $p = c^2 − d^2$, maka ….";
    soalTPA[45] = "Jika $j = 84^o$ dan besar sudut suatu segitiga adalah 5𝑘, 9𝑘, dan 𝑘, maka ….";
    soalTPA[46] = "Diketahui 𝑟 adalah luas suatu persegi sedangkan 𝑠 adalah luas suatu lingkaran. Jika panjang jari-jari lingkaran sama dengan panjang sisi persegi, maka …. ";
    soalTPA[47] = "Rana membutuhkan waktu 45 menit untuk menempuh jarak 54 km dengan mengendarai mobil. Berapakah rata-rata jarak tempuh mobil dalam 1,5 jam? ";
    soalTPA[48] = "Beberapa tahun yang lalu Reni berusia empat kali lebih tua daripada usia sepupunya. Pada waktu itu Reni berusia 12 tahun. Apabila sekarang usia Reni dua kali lebih tua dari usia sepupunya, berapakah usia Reni? ";
    soalTPA[49] = "Sebuah proyek ditargetkan harus selesai dalam waktu 18 hari oleh 56 orang pekerja. Jika 8 orang pekerja mengundurkan diri sebelum proyek dimulai, maka dengan pekerja yang tersisa saat ini waktu yang dibutuhkan untuk menyelesaikan proyek tersebut menjadi … hari.";
    soalTPA[50] = "Suatu kelas terdiri dari 32 siswa, $1/2$ dari seluruh siswa menyukai pelajaran kimia, $1/4$ nya menyukai pelajaran kimia dan geografi, dan 12 siswa tidak menyukai keduanya. Berapa siswa yang menyukai pelajaran geografi?";
    soalTPA[51] = "Tarina membeli 4 cake dan 9 roti seharga Rp149.000,00, sedangkan Rani membeli 7 cake dan 3 roti seharga Rp146.000,00. Jika Sani membeli 11 cake dan 12 roti dan mendapat diskon sebesar $27%$, maka uang yang harus dibayarkan Sani adalah ….";
    soalTPA[52] = "G, A, F, B, E, C, ..., D, C, ...."; // p-1 57
    soalTPA[53] = "15, 13, 10, 6, ...."; // p-1 58
    soalTPA[54] = "7, 3, 6, 4, 5, 1, 4, 2, …, ….";
    soalTPA[55] = "B, A, C, D, G, K, ….";
    soalTPA[56] = "Semua abdi negara seharusnya menjadi panutan warga.<br> Pak Parto adalah calon abdi negara.";
    soalTPA[57] = "Sebagian mahasiswa adalah mahasiswa semester 1.<br> Mahasiswa semester 1 tinggal di asrama, kecuali Nana.";
    soalTPA[58] = "Hasil kamera HP Sindi lebih bagus daripada hasil kamera HP Sandi. <br>Semua HP dengan hasil kamera lebih bagus, pasti lebih tahan lama dan harganya lebih mahal.";
    soalTPA[59] = "<b>Perhatikan ilustrasi berikut!</b><br><br>Kayla, Dina, Ranti, Sea, dan Yuna masing-masing mengambil minuman dari dalam kulkas. Pertama, empat anak mengambil minuman rasa anggur. Kemuadian Dina dan Yuna tidak mengambil minuman rasa jeruk seperti yang dilakukan anak lainnya. Dina hanya mengambil satu minuma, yaitu minuman rasa leci. Setelah itu, Dina, Kayla, dan Ranti yang tidak mengambil minuman rasa melon seperti anak lainnya.<br><br>Siapa yang mengambil minuman dengan jumlah dan Rasa yang sama?";
    soalTPA[60] = "<b>Perhatikan ilustrasi berikut!</b><br><br>Suatu penelitian yang terdiri atas lima orang dipilih dari empat mahasiswa kimia yaitu Ansara, Budi, Cindi, dan Dodit, serta empat mahasiswa matematika yaitu Epa, Fina, Galuh, dan Hanif. Paling sedikit tiga mahasiswa kimia harus dipilih. Tetapi dalam pemilihan mengalami kesulitan berikut: Ansara tidak mau bekerja dengan Dodit, Budi tidak mau bekerja dengan Epa, Fina tidak mau bekerja dengan Galuh, dan Dodit tidak mau bekerja dengan Fina<br><br>Jika Budi dipilih, siapa yang juga pasti dipilih?";
    soalTPA[61] = "<img src='../../assets/img/SKD_p-2/62/soal.jpg'/>";
    soalTPA[62] = "<img src='../../assets/img/SKD_p-2/63/soal.jpg'/>";
    soalTPA[63] = "<img src='../../assets/img/SKD_p-2/64/soal.jpg'/>";//p-1 gambar 1
    soalTPA[64] = "<img src='../../assets/img/SKD_p-2/65/soal.jpg'/>";//p-1 gambar 2
    //TKP
    soalTPA[65] = "Untuk soal nomor 66 – 100, pilihlah satu di antara alternatif jawaban yang disediakan yang Anda anggap merupakan jawaban dengan nilai tertinggi serta memperhatikan setiap aspek yang dipertanyakan. <br><br></br>Sebagai bentuk evaluasi terhadap sistem pelayanan, perusahaan tempat Anda bekerja menyebar angket kepuasan kepada konsumen. Salah satu yang ditanyakan dalam angket tersebut adalah pegawai yang paling ramah dalam pelayanan. Setelah menyebar angket tersebut kepada konsumen, Anda terpilih sebagai karyawan yang paling banyak disukai konsumen karena keramahan Anda. Maka Anda menyikapi pujian tersebut dengan cara ....";
    soalTPA[66] = "Anda bekerja di instansi negeri dan bertanggung jawab terhadap salah satu mobil operasional kantor. Saat akan libur Lebaran, Anda diminta oleh kepala instansi untuk membawa mobil kantor tersebut selama liburan karena khawatir jika mobil ditinggal di kantor akan rusak sebab tidak ada orang yang merawatnya. Dengan itu, Anda membawa mobil tersebut untuk mudik ke kampung halaman Anda. Tetapi secara tidak sengaja Anda menabrakkan kendaraan tersebut. Tindakan Anda adalah ….";
    soalTPA[67] = "Di tempat Anda bekerja terdapat lowongan pekerjaan di bagian administrasi. Melihat lowongan tersebut Anda menawarkan kepada teman Anda yang baru saja lulus dari kuliah jurusan administrasi, apalagi dia belum memiliki pekerjaan. Setelah ditawari, teman Anda meminta tolong agar dapat mengisi posisi tersebut dengan koneksi Anda. maka yang akan Anda lakukan ….";
    soalTPA[68] = "Pada Akhir tahun Anda mengambil cuti dari kantor untuk berlibur dan menyegarkan pikiran supaya tidak jenuh dengan suasana kantor. Tujuan liburan Anda adalah di Pulau Gili Iyang, salah satu pulau di wilayah Sumenep, yang memiliki kadar oksigen tertinggi kedua di dunia. Tetapi karena di pulau tersebut tidak ada penginapan sehingga Anda harus menginap di wilayah Sumenep. Karena Anda baru pertama pergi ke Sumenep, Anda bingung dengan transpirtasi dari hotel menuju penyeberangan ke Pulau Gili Iyang, apalagi di sana belum tersedia ojek <i>online</i>. Maka yang akan Anda lakukan ….";
    soalTPA[69] = "Kepala divisi tempat Anda bekerja sedang dirawat di rumah sakit karena baru saja mengalami kecelakaan saat berkendara. Teman-teman seruangan berencana untuk menjenguk dan membawakan bingkisan. Untuk membeli bingkisan tersebut, salah satu teman mengusulkan untuk mengambil dana pembiayaan rapat rutin setiap bulannya, apalagi kepala divisi tidak ada sehingga rapat tidak dilakukan. Pendapat Anda mengenai hal ini ....";
    soalTPA[70] = "Anda membaca berita bahwa kondisi keuangan Indonesia sekarang sedang mengalami penurunan. Hal tersebut berdampak pada harga-harga barang kebutuhan pokok, sementara pendapatan Anda terbatas dan tidak mengalami kenaikan. Cara yang Anda lakukan untuk menanggulangi ketidakstabilan harga kebutuhan pokok dengan penghasilan yang sangat terbatas tersebut adalah ....";
    soalTPA[71] = "Gusti diminta untuk membentuk kelompok kerja dengan tugas yang cukup rahasia. Sebelum bekerja, masing-masing anggota menuliskan pakta integritas untuk tidak memberitahukan kepada siapapun. Masing-masing anggota memiliki tugas yang cukup spesifik namun cara pengerjaannya mempunyai aturan yang sama. Pada waktu tertentu mereka berkumpul untuk memberikan laporan capaian target. Di dalam proses tersebut ada salah satu anggota yang melanggar pakta integritas dengan menceritakan pekerjaannya kepada saudaranya yang kebetulan menelepon dan menanyakan pekerjaan yang sedang dilakukan. Jika Anda menjadi Gusti, tindakan Anda dalam menghadapi anggota yang melanggar pakta integritas adalah ….";
    soalTPA[72] = "Salah satu program pemerintah untuk mencerdaskan kehidupan bangsa adalah dengan memberikan beasiswa pendidikan bagi masyarakat Indonesia yang ingin bersekolah tetapi mengalami beberapa kendala, seperti masalah keuangan. Menurut Anda beasiswa pendidikan tersebut adalah ….";
    soalTPA[73] = "Ranti baru saja bergabung dengan salah satu organisasi di fakultasnya. Suatu hari ketua organisasi tersebut memberikan tugas bagi Ranti untuk membuat proposal kerja sama dengan pihak sponsor agar mau mensponsori salah satu kegiatan organisasi. Penyerahan tugas tersebut dikarenakan ketua menganggap kerja Ranti dalam organisasi termasuk sangat giat meskipun baru saja bergabung. Ranti sendiri mengalami kesulitan karena merupakan pengalaman pertamanya membuat proposal apalagi untuk pihak sponsor. Apa yang sebaiknya dilakukan Ranti? ";
    soalTPA[74] = "Anda melakukan perjalanan dari Bogor menuju Jakarta dengan menggunakan KRL, tetapi kondisi kereta ramai sehingga Anda tidak mendapatkan tempat duduk. Sekitar 30 menit kemudian Anda baru mendapatkan tempat duduk karena penumpang kereta sudah berkurang. Saat berhenti pada stasiun berikutnya ada seorang ibu hamil yang berdiri di dekat Anda karena kondisi kereta yang kembali ramai. Maka yang akan Anda lakukan ….";
    soalTPA[75] = "Anda sering kali mendapat curhatan dari teman-teman Anda yang bekerja di tempat berbeda mengenai mereka yang sering cepat bosan dalam bekerja. Hal tersebut membuat mereka tidak betah dalam pekerjaannya dan beberapa memilih untuk mencari tempat kerja baru. Sementara Anda juga merasa bahwa di beberapa kesempatan pekerjaan Anda menjadi membosankan. Menurut Anda yang membuat pekerjaan menjadi membosankan adalah ….";
    soalTPA[76] = "Anda baru saja dipindahkan dari divisi personalia ke divisi marketing. Selama Anda bekerja di divisi marketing, Anda menilai bahwa sistem marketing yang selama ini digunakan tidak menarik. Beberapa bulan yang lalu pemasukan perusahaan juga mengalami penurunan, Anda merasa hal itu disebabkan sistem marketing tersebut. Maka yang akan Anda lakukan melihat hal tersebut adalah .... ";
    soalTPA[77] = "Anda terbiasa bekerja di lingkungan yang hening. Anda sangat nyaman bekerja di lingkungan seperti itu karena dapat berkonsentrasi dengan penuh untuk menyelesaikan pekerjaan. Suatu waktu atasan memindahkan Anda dengan rekan-rekan kerja seruangan Anda untuk sementara ke beberapa unit kerja lain karena ruangan tempat Anda bekerja akan direnovasi. Tempat unit kerja baru Anda ternyata cenderung ramai dan gaduh. Maka respon Anda adalah …. ";
    soalTPA[78] = "Sebelum lulus dari jenjang SMA, saya telah memiliki keinginan untuk melanjutkan pendidikan ke universitas. Hal itu dikarenakan saya ingin memiliki pengetahuan dan pengalaman yang lebih banyak dengan bersekolah sehingga saat masuk pada dunia kerja akan mudah untuk beradaptasi dengan sistem kerjanya. Untuk itu, saya harus mempersiapkan ….";
    soalTPA[79] = "Tanpa sengaja Anda mengalami kecelakaan kerja ketika sedang melakukan kunjungan di wilayah pembangunan kantor baru perusahaan, sehingga Anda harus dirawat di rumah sakit untuk beberapa hari. Karena kecelakaan yang dialami Anda sehubungan dengan pekerjaan Anda, maka kantor Anda memberikan penanggungan biaya rumah sakit sebesar sepuluh juta rupiah. Biaya rumah sakit tersebut akan diganti sesuai dengan bukti pembayaran dari rumah sakit. Namun biaya rumah sakit selama Anda dirawat akibat kecelakaan tersebut tidak sebesar jumlah biaya penanggungan perusahaan. Oleh karena itu Anda akan ….";
    soalTPA[80] = "Salah seorang rekan kerja yang harusnya bertugas melakukan presentasi kepada klien mendadak pingsan. Hal itu disebabkan karena dia sedang dalam kondisi tidak sehat, tetapi tetap memaksakan diri untuk bekerja. Kemudian Anda ditunjuk oleh atasan untuk menggantikan tugasnya karena Anda rekan satu divisi sehingga dianggap mampu untuk menggantikannya. Padahal keadaan Anda juga sedang mengerjakan tugas lainnya yang memiliki <i>deadline</i> hari itu juga. Maka sikap Anda adaalah ….";
    soalTPA[81] = "Dodit ditugaskan oleh atasannya untuk menyimpan dokumen penting yang akan digunakan dalam rapat direksi tiga hari lagi. Ternyata satu hari sebelum rapat tersebut, Dodit harus izin kerja karena ada sanak saudara di kampung halamannya yang mengalami kecelakaan hingga meninggal dunia. Maka Dodit ingin menyerahkan dokumen tersebut kepada atasan agar siap pada hari rapat, tetapi atasan Anda juga mengambil cuti dan akan masuk pada hari rapat. Sehingga Dodit menyerahkan dokumen tersebut kepada Tora untuk menyimpannya dan diserahkan kepada atasan keesokan harinya sebelum rapat direksi. Ternyata pada saat hari rapat dokumen tersebut tidak dapat diserahkan kepada atasan karena tidak sengaja dihilangkan oleh Tora akibat malam sebelumnya ia dirampok dan dokumen tersebut termasuk yang diambil oleh perampok. Jika Anda menjadi Dodit, bagaimana sikap Anda menghadapi masalah tersebut?";
    soalTPA[82] = "Pada zaman sekarang ini marak akan aksi perampokan menggunakan kekerasan yang sering terjadi pada malam hari. Hal tersebut untuk memudahkan aksi dari perampok jika dilakukan pada malam hari karena lingkungan sudah sepi. Para rampok tersebut lebih mengincar korban yang sedang berkendara sendirian dan akan beraksi setelah berada di lokasi jalan yang sepi. Tak jarang tingkat kekerasan yang dilakukan para rampok tersebut saat beraksi akan berujung pada kematian korban. Karena maraknya kasus tersebut orang tua saya selalu melarang saya untuk pulang larut malam, maka sikap saya ….";
    soalTPA[83] = "Anda dengan tidak sengaja merusak salah satu komputer yang merupakan fasilitas perusahaan. Sebenarnya itu bukan kesalahan Anda sepenuhnya karena sebelumnya Anda telah mendengar kabar bahwa komputer tersebut sering mengalami eror. Dan pada saat yang bersamaan secara kebetulan pimpinan Anda mengetahuinya secara langsung dengan menyaksikan hal tersebut karena beliau berada di depan Anda. Maka sikap Anda?";
    soalTPA[84] = "Bila Anda adalah seorang staf di instansi pemerintah. Ketika kepala bagian di instansi tempat Anda bekerja akan pergi keluar kota karena harus melakukan perjalanan dinas selama beberapa hari dan sifatnya rahasia. Keesokan harinya, datang tamu pejabat penting dari provinsi dan memaksa Anda agar bercerita kemana kepala bagian tersebut pergi. Hal tersebut dikarenakan kepala bagian tidak bisa dihubungi sejak kemarin. Bagaimana sikap Anda untuk menghadapinya?";
    soalTPA[85] = "Caca ingin melanjutkan sekolah di PKN STAN. Supaya dapat diterima di PKN STAN Caca harus dapat lolos disemua tahap seleksi, salah satunya adalah tes pengetahuan yang terdiri dari soal TPA, TBI, dan SKD. Caca sudah menguasai materi TPA dan TBI bahkan dalam <i>tryout</i> yang diikutinya ia selalu mendapatkan nilai di atas ambang batas. Sedangkan untuk SKD nilai yang didapatkan Caca masih di bawah ambang batas, yang dapat membuat Caca rawan untuk gagal diterima di PKN STAN. Maka yang harus dilakukan oleh Caca ….";
    soalTPA[86] = "Anda baru saja menanamkan investasi modal di usaha milik teman Anda. Usaha teman Anda bergerak di bidang kuliner dengan membuka restoran cepat saji. Mempertimbangkan Anda yang telah menanamkan investasi modal, teman Anda memberikan keputusan kepada Anda untuk menentukan wilayah untuk <i>outlet</i> baru. Bagaimana cara Anda untuk menentukan wilayah <i>outlet</i> yang baru?";
    soalTPA[87] = "Yena merupakan seorang pegawai negeri yang bekerja di bidang teknologi pangan. Suatu ketika ia ditugaskan bersama dengan tim yang telah dibentuk sebelumnya untuk mengurangi tingkat gizi buruk di suatu wilayah terpencil. Salah satu tugas yang harus dijalankan untuk mengurangi tingkat gizi buruk adalah dengan meningkatkan kualitas makanan bergizi seimbang di wilayah tersebut. Makanan bergizi seimbang yang diminta di sini adalah makanan beraneka ragam yang dikonsumsi dalam satu hari yang mengandung zat tenaga, zat pembangun, dan zat pengatur sesuai dengan kebutuhan tubuh. Maka yang akan dilakukan oleh Yena bersama dengan tim adalah ….";
    soalTPA[88] = "Perusahaan tempat Anda bekerja baru saja melakukan inovasi pada sistem pelayanan yang dapat dilakukan secara <i>online</i>. Pelanggan dapat bertanya mengenai produk-produk perusahaan maupun dapat mengadukan keluhan melalui via telepon. Sementara Anda ditugaskan sebagai salah satu operator yang bekerja melayani belanggan lewat via telepon tersebut. Sebagai operator tersebut Anda dituntut untuk dapat menyelesaikan masalah pelanggan dalam waktu maksimal lima menit, sebagai antisipasi banyaknya pelanggan yang meminta pelayanan. Maka yang akan Anda lakukan adalah ....";
    soalTPA[89] = "Anda baru saja mendapatkan evaluasi pribadi dari atasan mengenai kinerja Anda yang kurang memuaskan. Hal tersebut disebabkan beberapa proyek kerja yang Anda kerjakan tidak berhasil menarik investor untuk menanamkan modal di perusahaan tempat Anda bekerja. Dan Anda diberikan kesempatan kepada atasan untuk memperbaiki kinerja Anda dengan cara Anda harus berhasil dalam mengerjakan proyek kerja berikutnya, dan jika gagal maka Anda akan mendapatkan surat peringatan bahkan pemecatan. Maka, yang akan Anda lakukan pada proyek kerja berikutnya adalah ....";
    soalTPA[90] = "Saya adalah seorang anggota unit biasa di tempat saya bekerja. Saat ini unit saya dihadapkan pada situasi rumit yang membutuhkan pengambilan keputusan saat itu juga dari pimpinan unit. Padahal pimpinan unit akan tiba di kantor sekitar tiga jam lagi karena harus menghadiri acara di luar kantor terlebih dahulu. Maka sikap saya menghadapi permasalahan tersebut adalah .... ";
    soalTPA[91] = "Selama sebulan terakhir ini, Nia dan Rumi ditugaskan dinas ke luar kota. Selama dinas tersebut mereka akan mendapatkan uang tunjangan dari perusahaan untuk membiayai kebutuhan selama dinas. Tetapi jika uang tunjangan tersebut masih tersisa sampai hari terakhir dinas, maka harus dikembalikan dan melampirkan laporan pengeluaran selama dinas tersebut. Ternyata pada hari terakhir dinas, tunjangan yang diberikan kantor masih tersisa. Nia mempengaruhi Rumi untuk memalsukan dokumen pembayaran sehingga sisa tunjangan bisa menjadi milik pribadi. Jika Anda menjadi Rumi, apa yang akan Anda lakukan?";
    soalTPA[92] = "Luna diminta menyimpan dokumen penilaian kinerja seluruh karyawan di perusahaan tempat ia bekerja oleh manajer personalia karena mendadak manajer tersebut harus pergi dan Luna diberi pesan untuk jangan membuka dokumen itu karena datanya masih bersifat rahasia. Tidak ada seorangpun yang tahu jika Luna diberi kepercayaan tersebut. Dalam dokumen tersebut ternyata memuat data-data tentang pegawai yang akan dipromosikan. Sementara Luna sempat mendengar kabar bahwa dokumen yang dibawanya diperkiraan adalah dokumen mengenai promosi pegawai dan ia menjadi salah satu pegawai yang akan dipromosikan tersebut. Jika Anda menjadi Luna, tindakan yang akan Anda lakukan adalah ….";
    soalTPA[93] = "Midah termasuk siswa teladan dengan selalu mendapatkan nilai terbaik di satu sekolahan serta termasuk siswa yang peduli dengan lingkungan. Sehingga ketika ada pemilihan Duta Wisata di wilayah kabupaten tempat tinggalnya, ia diminta untuk ikut pemilihan tersebut sebagai wakil dari sekolahnya. Namun orang-orang tidak tahu bahwa Midah memiliki kelemahan yaitu kurang percaya diri ketika berhadapan dengan orang banyak hingga dapat membuat gugup. Maka sikap Anda jika menjadi Midah yang menghadapi situasi tersebut adalah ....";
    soalTPA[94] = "Pada bulan Agustus akan ada libur nasional yang jatuh pada hari Selasa. Sudah menjadi kebiasaan umum di instansi tempat Anda bekerja untuk melakukan “bolos massal” pada hari Senin-nya dengan alasan sebagai <i>hari kejepit nasional</i>. Jikapun masuk kerja kondisi di instansi tidak kondusif karena banyak yang izin ataupun membolos untuk tidak masuk kerja. Menghadapi permasalahan seperti itu yang akan Anda lakukan ….";
    soalTPA[95] = "Anda merupakan salah satu anggota tim kerja dari divisi operasional. Sudah satu bulan tim kerja Anda mendapatkan rekan baru, tetapi beberapa rekan satu tim curhat kepada Anda berupa keluhan terhadap rekan baru tersebut akibat cara kerjanya yang lamban sehingga beberapa kali cukup menghambat kinerja tim. Sementara Anda juga sempat merasakan hal sama ketika ditugaskan berdua dengan rekan baru tersebut dalam satu pekerjaan. Tindakan yang sebaiknya Anda lakukan terhadap rekan baru tersebut adalah ….";
    soalTPA[96] = "Anda bekerja di perusahaan yang bergerak di bidang pelayanan jasa, sehingga pelayanan terhadap pelanggan sangat diutamakan. Kepuasan pelanggan menjadi motto perusahaan tempat Anda bekerja. Pada setiap pengarahan sebelum bertugas melayani pelanggan, atasan selalu mengingatkan untuk melayani pelanggan dengan baik supaya pelanggan senang. Maka pada saat Anda memberikan pelayanan kepada pelanggan, pelayanan yang akan Anda berikan ….";
    soalTPA[97] = "Ajit baru saja pulang kerja setelah membantu persiapan atasan dinas luar kota keesokan harinya untuk keperluan rapat dengan investor. Saat Ajit sudah berada dalam perjalanan pulang ke rumah, ternyata ada berkas kantor yang tidak sengaja terbawa oleh Ajit. Padahal berkas tersebut merupakan salah satu berkas yang dibutuhkan oleh atasan untuk dinas besok. Sementara Ajit sudah mengendarai mobilnya hampir sampai di rumah. Jika Anda menjadi Ajit, yang akan Anda lakukan adalah ….";
    soalTPA[98] = "Pandi merupakan aparatur sipil negara yang bekerja di Dinas Bina Marga di daerahnya. Suatu hari Pandi sedang pergi untuk menghadiri undangan hajatan milik saudara tetangganya yang lokasinya masih satu daerah dengannya. Selama perjalanan menuju lokasi hajatan, beberapa kali melewati jalan berlubang yang dapat membahayakan para pengendara jalan. Sikap Pandi sebagai pegawai yang bekerja dalam bidang tersebut adalah ….";
    soalTPA[99] = "Omar sedang berjalan-jalan di taman yang berada dekat dengan kantornya. Ia berjalan-jalan di taman untuk mencari suasana baru sejenak karena dia harus lembur kerja di kantor. Tak lupa sebelum berangkat ke taman tersebut, Omar membeli air minum kemasan botol. Setelah beberapa saat berada di taman, air minum Omah habis dan ia ingin membuang botol kemasan minuman tersebut. Namun ternyata tidak ada tempat sampah di tempat tersebut. Maka yang sebaiknya Omar lakukan adalah ….";
	//pilihan
	var opsi = ArrOpsi(soalTPA.length,6); //deklarasi 2d array untuk pilihan
	// var pilihan = '';
	opsi [0][0] = "A. (1), (2), dan (3)";
    opsi [0][1] = "B. (1), (2), dan (4)";
    opsi [0][2] = "C. (1), (3), dan (4)";
    opsi [0][3] = "D. (2), (3), dan (4)";
    opsi [0][4] = "E. Semua benar";
	opsi [0][5] = "3";

	opsi [1][0] = "A. Dasar moralitas ketuhanan dan kemanusiaan menjadi kerangka landasan pembangunan ekonomi";
    opsi [1][1] = "B. Mengembangkan sistem ekonomi yang berperikemanusiaan";
    opsi [1][2] = "C. Mengembangkan sistem ekonomi Indonesia yang bercorak kekeluargaan";
    opsi [1][3] = "D. Mengembagkan ekonomi yang berbentuk monopoli dan persaingan bebas";
    opsi [1][4] = "E. Ekonomi yang bertujuan keadilan dan kesejahteraan bersama ";
	opsi [1][5] = "4";

	opsi [2][0] = "A. Bintang - pohon beringin - rantai - padi dan kapas - kepala banteng";
    opsi [2][1] = "B. Bintang - kepala banteng - padi dan kapas - rantai - pohon beringin";
    opsi [2][2] = "C. Bintang - padi dan kapas - pohon beringin - kepala banteng - rantai";
    opsi [2][3] = "D. Bintang - kepala banteng - rantai - pohon beringin - padi dan kapas";
    opsi [2][4] = "E. Bintang - rantai - pohon beringin - kepala banteng - padi dan kapas";
	opsi [2][5] = "5";

	opsi [3][0] = "A. Lima";
    opsi [3][1] = "B. Empat";
    opsi [3][2] = "C. Tiga";
    opsi [3][3] = "D. Dua";
    opsi [3][4] = "E. Satu";
	opsi [3][5] = "4";

	opsi [4][0] = "A. Pendirian PPKI ";
    opsi [4][1] = "B. Rancangan UUD dan pembukaannya";
    opsi [4][2] = "C. Pembacaan teks proklamasi ";
    opsi [4][3] = "D. Dasar negara Indonesia merdeka";
    opsi [4][4] = "E. Waktu dan tempat dibacakannya proklamasi";
	opsi [4][5] = "2";

	opsi [5][0] = "A. 1 kali";
    opsi [5][1] = "B. 2 kali";
    opsi [5][2] = "C. 3 kali";
    opsi [5][3] = "D. 4 kali";
    opsi [5][4] = "E. 5 kali";
	opsi [5][5] = "1";

	opsi [6][0] = "A. 20 hari";
    opsi [6][1] = "B. 30 hari";
    opsi [6][2] = "C. 60 hari";
    opsi [6][3] = "D. 70 hari";
    opsi [6][4] = "E. 90 hari";
	opsi [6][5] = "3";

	opsi [7][0] = "A. Desentralisasi";
    opsi [7][1] = "B. Tugas pembantuan";
    opsi [7][2] = "C. Dekonsentrasi";
    opsi [7][3] = "D. Sentralisasi";
    opsi [7][4] = "E. Daerah otonom";
	opsi [7][5] = "1";

	opsi [8][0] = "A. 5%";
    opsi [8][1] = "B. 10%";
    opsi [8][2] = "C. 15%";
    opsi [8][3] = "D. 20%";
    opsi [8][4] = "E. 25%";
	opsi [8][5] = "4";

	opsi [9][0] = "A. Komisi Yudisial";
    opsi [9][1] = "B. Mahkamah agung";
    opsi [9][2] = "C. Jaksa agung";
    opsi [9][3] = "D. DPR";
    opsi [9][4] = "E. Presiden";
	opsi [9][5] = "1";

	opsi [10][0] = "A. Presiden berhak mengajukan rancangan undang-undang kepada DPR";
    opsi [10][1] = "B. Presiden menetapkan Undang-undang tanpa harus melalui persetujuan DP";
    opsi [10][2] = "C. Presiden bersama-sama DPR menetapkan undang-undang dengan persetujuan MPR";
    opsi [10][3] = "D. DPR membuat Undang-undang dengan persetujuan presiden";
    opsi [10][4] = "E. DPR memegang kekuasaan menetapkan undang-undang";
	opsi [10][5] = "1";

	opsi [11][0] = "A. 6";
    opsi [11][1] = "B. 7";
    opsi [11][2] = "C. 8";
    opsi [11][3] = "D. 9";
    opsi [11][4] = "E. 10";
	opsi [11][5] = "4";

	opsi [12][0] = "A. Pasal 18 ayat 1";
    opsi [12][1] = "B. Pasal 23 ayat 3";
    opsi [12][2] = "C. Pasal 27 ayat 2";
    opsi [12][3] = "D. Pasal 33 ayat 3";
    opsi [12][4] = "E. Pasal 34 ayat 2";
	opsi [12][5] = "4";

	opsi [13][0] = "A. Keadaan di mana seseorang tidak memiliki kewarganegaraan";
    opsi [13][1] = "B. Proses perubahan status seseorang dari penduduk asing menjadi warga negara suatu negara";
    opsi [13][2] = "C. Merupakan suatu hak untuk menolak suatu kewarganegaraan ";
    opsi [13][3] = "D. Di mana seseorang dengan sendirinya menjadi warga negara suatu negara tanpa harus melakukan tindakan hukum";
    opsi [13][4] = "E. Keadaan di mana seseorang memiliki lebih dari dua kewarganegaraan ";
	opsi [13][5] = "2";

	opsi [14][0] = "A. Kebudayaan tidak dapat dipadukan karena memiliki nilai budayanya sendiri";
    opsi [14][1] = "B. Indonesia sulit bersatu karena pemikiran tiap suku bangsa yang berbeda-beda";
    opsi [14][2] = "C. Menguatnya paham primordialisme";
    opsi [14][3] = "D. Memperkaya sifat dan makna persatuan bangsa dan negara Indonesia";
    opsi [14][4] = "E. Setiap nilai-nilai kebudayaan saling bertentangan satu dengan yang lainnya";
	opsi [14][5] = "4";

	opsi [15][0] = "A. 20 Mei 1908";
    opsi [15][1] = "B. 25 Desember 1912";
    opsi [15][2] = "C. 4 Juli 1927";
    opsi [15][3] = "D. 24 Desember 1929";
    opsi [15][4] = "E. 25 April 1931";
	opsi [15][5] = "2";

	opsi [16][0] = "A. Mengakibatkan terbentuknya Pemerintah Darurat Republik Indonesia di Bukittingg";
    opsi [16][1] = "B. Penangkapan beberapa tokoh besar negara termasuk Presiden Soekarno dan Wakil Presiden Moh. Hatta yang dilakukan oleh Belanda";
    opsi [16][2] = "C. Sasaran utama agresi militer tersebut adalah beberapa wilayah Indonesia seperti wilayah Sumatra bagian timur, Jawa Tengah, dan Jawa Timur";
    opsi [16][3] = "D. Periswita Serangan Umum 1 Maret 1949 merupakan usaha tentara Indonesia dalam merebut Yogyakarta dan berhasil menguasainya selama 6 jam sebelum kembali dikuasasi Belanda";
    opsi [16][4] = "E. Agresi militer tersebut dilakukan oleh pihak Belanda pada 19 Desember 1948 ";
	opsi [16][5] = "3";

	opsi [17][0] = "A. Van Vredenburg";
    opsi [17][1] = "B. Chritchley";
    opsi [17][2] = "C. Marle Cochran";
    opsi [17][3] = "D. Van Maarseveen";
    opsi [17][4] = "E. Schermerhorn";
	opsi [17][5] = "2";

	opsi [18][0] = "A. Kartosuwiryo";
    opsi [18][1] = "B. Amir Fatah";
    opsi [18][2] = "C. Kahar Muzakar";
    opsi [18][3] = "D. Ibnu Hajar";
    opsi [18][4] = "E. Daud Beureuh";
	opsi [18][5] = "4";

	opsi [19][0] = "A. 10";
    opsi [19][1] = "B. 16";
    opsi [19][2] = "C. 24";
    opsi [19][3] = "D. 30";
    opsi [19][4] = "E. 34";
	opsi [19][5] = "2";

	opsi [20][0] = "A. Kenaikan tarif angkutan umum kelas ekonomi sudah ditetapkan sekitar 20% sampai 25%";
    opsi [20][1] = "B. Tarif taksi dan bus patas AC akan segera ditetapkan menyusul telah ditetapkannya tarif angkutan umum kelas ekonomi";
    opsi [20][2] = "C. Tarif taksi akan naik 20% dan tarif bus patas AC akan naik 25% mulai tahun 2018";
    opsi [20][3] = "D. Kenaikan tarif sudah dibahas pihak-pihak terkait termasuk pihak organda dan Pemprov";
    opsi [20][4] = "E. Kenaikan tarif diperkirakan bakal ditetapkan pada tahun 2018 yang nantinya akan dibahas terlebih dahulu oleh pihak-pihak terkait ";
	opsi [20][5] = "2";

	opsi [21][0] = "A. Ratna membelikan Sang suami sepasang sepatu olahraga.";
    opsi [21][1] = "B. Pura itu dibangun untuk memuja sang Hyang.";
    opsi [21][2] = "C. Buaya tertipu oleh Sang Kancil.";
    opsi [21][3] = "D. Dalam cerita itu Si Buta berhasil menolong kekasihnya.";
    opsi [21][4] = "E. Saat menjaga toko, Irma lupa memberikan uang kembalian si pembeli.";
	opsi [21][5] = "5";

	opsi [22][0] = "A. Kelima";
    opsi [22][1] = "B. Keempat";
    opsi [22][2] = "C. Ketiga";
    opsi [22][3] = "D. Kedua";
    opsi [22][4] = "E. Pertama";
	opsi [22][5] = "1";

	opsi [23][0] = "A. Milyar, varitas, hutang";
    opsi [23][1] = "B. Seksama, hutang, varietas";
    opsi [23][2] = "C. Zam-zam, inteligen,miliar";
    opsi [23][3] = "D. Isap, yuridiksi, intelijen";
    opsi [23][4] = "E. Varietas, utang, intermeso";
	opsi [23][5] = "5";

	opsi [24][0] = "A. Meminimalisasi, ekstrim, standardisasi, populer";
    opsi [24][1] = "B. Meminimalisir, ekstrem, standarisasi, popular";
    opsi [24][2] = "C. Meminimalisir, ekstrim, standarisasi, popular";
    opsi [24][3] = "D. Meminimalisasi, ekstrem, standardisasi, populer";
    opsi [24][4] = "E. Meminimalisasi, ekstrem, standarisasi, populer";
	opsi [24][5] = "4";

	opsi [25][0] = "A. Membolak-balik, satu-satu, saudara-saudara";
    opsi [25][1] = "B. Terbolak-balik, satu-satunya, saudara-saudaranya";
    opsi [25][2] = "C. Bolak-balik, satu-satu, saudara-saudara";
    opsi [25][3] = "D. Bolak-balik, satu-satu, saudara-saudara";
    opsi [25][4] = "E. Bolak-balik, satu-satunya, saudara-saudara";
	opsi [25][5] = "5";

	opsi [26][0] = "A. Puskesmas";
    opsi [26][1] = "B. Iptek";
    opsi [26][2] = "C. Kowani";
    opsi [26][3] = "D. Mabbim";
    opsi [26][4] = "E. Pemilu";
	opsi [26][5] = "3";

	opsi [27][0] = "A. Kita memerlukan: meja, kursi, lemari, dan papan tulis.";
    opsi [27][1] = "B. Kakak membeli buah-buahan: pisang, jeruk, apel, anggur, dan jambu.";
    opsi [27][2] = "C. Berbagai macam dan jenis makanan daerah: gudeg, rujak cingur, pempek, rendang, dan soto.";
    opsi [27][3] = "D. Bu Wina membeli berbagai perabotan rumah tangga: meja, kursi, lemari, kompor, dan televisi.";
    opsi [27][4] = "E. Peserta lomba menggambar diwajibkan membawa peralatan gambar: pensil, penghapus, penggaris, spidol, dan pewarna.";
	opsi [27][5] = "1";

	opsi [28][0] = "A. Ganja medis dapat menarik perhatian anak-anak karena bentuknya seperti permen dan agar-agar";
    opsi [28][1] = "B. Ebubekir Orsun mengatakan siswa yang mengonsumsi permen ganja tersebut terlihat bingung namun dalam keadaan sehat";
    opsi [28][2] = "C. Pihak sekolah memberikan pengumuman di media sosial untuk orang tua agar lebih berhati-hati menyimpan benda-benda yang tanpa sengaja bisa dimakan anak";
    opsi [28][3] = "D. Dokter memastikan bahwa para siswa dalam kondisi sehat dan baik, meskipun masih sedikit linglung";
    opsi [28][4] = "E. Kepala Sekolah Albuquerque School of Excellence bernama Dr. Barry Ramo";
	opsi [28][5] = "5";

	opsi [29][0] = "A. Ebubekir Orsun";
    opsi [29][1] = "B. Albuquerque";
    opsi [29][2] = "C. Dr. Barry Ramo";
    opsi [29][3] = "D. Murid pemakan ganja";
    opsi [29][4] = "E. Pihak sekolah";
	opsi [29][5] = "3";

	opsi [30][0] = "A. Garis";
    opsi [30][1] = "B. Kedudukan";
    opsi [30][2] = "C. Golongan";
    opsi [30][3] = "D. Kapur";
    opsi [30][4] = "E. Bagan";
	opsi [30][5] = "3";

	opsi [31][0] = "A. Nyata";
    opsi [31][1] = "B. Semu";
    opsi [31][2] = "C. Asli";
    opsi [31][3] = "D. Sudah";
    opsi [31][4] = "E. Kasip";
	opsi [31][5] = "1";

	opsi [32][0] = "A. Sengsara";
    opsi [32][1] = "B. Sederhana";
    opsi [32][2] = "C. Bibi";
    opsi [32][3] = "D. Lanang";
    opsi [32][4] = "E. Ningrat";
	opsi [32][5] = "5";

	opsi [33][0] = "A. Buncah";
    opsi [33][1] = "B. Berani";
    opsi [33][2] = "C. Gamam";
    opsi [33][3] = "D. Gelisah";
    opsi [33][4] = "E. Heran";
	opsi [33][5] = "2";

	opsi [34][0] = "A. Masjid : siak";
    opsi [34][1] = "B. Pelayan : restoran";
    opsi [34][2] = "C. Kiper : gawang";
    opsi [34][3] = "D. Keamanan : polisi";
    opsi [34][4] = "E. Guru : sekolah";
	opsi [34][5] = "3";

	opsi [35][0] = "A. Gorden : ruang tamu";
    opsi [35][1] = "B. Seprai : kamar";
    opsi [35][2] = "C. Jendela : rumah";
    opsi [35][3] = "D. Bantal : guling";
    opsi [35][4] = "E. Karpet : lantai";
	opsi [35][5] = "5";

	opsi [36][0] = "A. -1";
    opsi [36][1] = "B. 0";
    opsi [36][2] = "C. 1";
    opsi [36][3] = "D. 2";
    opsi [36][4] = "E. 3";
	opsi [36][5] = "4";

	opsi [37][0] = "A. 1";
    opsi [37][1] = "B. 2";
    opsi [37][2] = "C. 3";
    opsi [37][3] = "D. 4";
    opsi [37][4] = "E. 5";
	opsi [37][5] = "4";

	opsi [38][0] = "A. 245.565";
    opsi [38][1] = "B. 255.444";
    opsi [38][2] = "C. 255.553";
    opsi [38][3] = "D. 264.577";
    opsi [38][4] = "E. 265.646";
	opsi [38][5] = "1";

	opsi [39][0] = "A. 55";
    opsi [39][1] = "B. 50";
    opsi [39][2] = "C. 45";
    opsi [39][3] = "D. 40";
    opsi [39][4] = "E. 35";
	opsi [39][5] = "2";

	opsi [40][0] = "A. 2.100";
    opsi [40][1] = "B. 2.123";
    opsi [40][2] = "C. 2.234";
    opsi [40][3] = "D. 2.345";
    opsi [40][4] = "E. 2.456";
	opsi [40][5] = "2";

	opsi [41][0] = "A. 12";
    opsi [41][1] = "B. 17";
    opsi [41][2] = "C. 22";
    opsi [41][3] = "D. 27";
    opsi [41][4] = "E. 32";
	opsi [41][5] = "5";

	opsi [42][0] = "A. $x = y$";
    opsi [42][1] = "B. $x > y$";
    opsi [42][2] = "C. $x < y$";
    opsi [42][3] = "D. $2x = 3y$";
    opsi [42][4] = "E. Hubungan 𝑥 dan 𝑦 tidak dapat ditentukan";
	opsi [42][5] = "5";

	opsi [43][0] = "A. 𝑎 + 𝑏 < 0";
    opsi [43][1] = "B. 𝑎𝑏 < 0";
    opsi [43][2] = "C. 𝑎𝑏 + 𝑏 > 0";
    opsi [43][3] = "D. 𝑎𝑏 ≤ 0";
    opsi [43][4] = "E. $a^2 + b^2 ≤ 0$";
	opsi [43][5] = "4";

	opsi [44][0] = "A. 𝑜 > 𝑝";
    opsi [44][1] = "B. 𝑜 < 𝑝";
    opsi [44][2] = "C. 𝑜 = 𝑝";
    opsi [44][3] = "D. 2𝑜 = 3𝑝";
    opsi [44][4] = "E. Hubungan 𝑜 dan 𝑝 tidak dapat ditentukan";
	opsi [44][5] = "1";

	opsi [45][0] = "A. $j < k$";
    opsi [45][1] = "B. 𝑗 > 15𝑘";
    opsi [45][2] = "C. $j = 7k$";
    opsi [45][3] = "D. $2j = k$";
    opsi [45][4] = "E. Hubungan 𝑗 dan 𝑘 tidak dapat ditentukan";
	opsi [45][5] = "3";

	opsi [46][0] = "A. $s = r$";
    opsi [46][1] = "B. $s < r$";
    opsi [46][2] = "C. $s > 4r$";
    opsi [46][3] = "D. $s = 𝜋r$";
    opsi [46][4] = "E. Hubungan 𝑟 dan 𝑠 tidak dapat ditentukan";
	opsi [46][5] = "4";

	opsi [47][0] = "A. 108 km";
    opsi [47][1] = "B. 100 km";
    opsi [47][2] = "C. 92 km";
    opsi [47][3] = "D. 84 km";
    opsi [47][4] = "E. 72 km";
	opsi [47][5] = "1";

	opsi [48][0] = "A. 10 tahun";
    opsi [48][1] = "B. 12 tahun";
    opsi [48][2] = "C. 14 tahun";
    opsi [48][3] = "D. 16 tahun";
    opsi [48][4] = "E. 18 tahun";
	opsi [48][5] = "5";

	opsi [49][0] = "A. 18";
    opsi [49][1] = "B. 21";
    opsi [49][2] = "C. 24";
    opsi [49][3] = "D. 27";
    opsi [49][4] = "E. 30";
	opsi [49][5] = "2";

	opsi [50][0] = "A. 4";
    opsi [50][1] = "B. 6";
    opsi [50][2] = "C. 8";
    opsi [50][3] = "D. 10";
    opsi [50][4] = "E. 12";
	opsi [50][5] = "5";

	opsi [51][0] = "A. Rp165.500,00";
    opsi [51][1] = "B. Rp171.550,00";
    opsi [51][2] = "C. Rp180.000,00";
    opsi [51][3] = "D. Rp182.650,00";
    opsi [51][4] = "E. Rp215.350,00";
	opsi [51][5] = "5";

	opsi [52][0] = "A. D, E";//p-1
    opsi [52][1] = "B. A, C";
    opsi [52][2] = "C. H, D";
    opsi [52][3] = "D. C, E";
    opsi [52][4] = "E. B, D";
	opsi [52][5] = "1";

	opsi [53][0] = "A. 10";//p1
    opsi [53][1] = "B. 8";
    opsi [53][2] = "C. 6";
    opsi [53][3] = "D. 3";
    opsi [53][4] = "E. 1";
	opsi [53][5] = "5";
	
	opsi [54][0] = "A. 6, 8";
    opsi [54][1] = "B. 6, 3";
    opsi [54][2] = "C. 8, -1";
    opsi [54][3] = "D. 3, 6";
    opsi [54][4] = "E. 3, -1";
	opsi [54][5] = "5";

	opsi [55][0] = "A. W";
    opsi [55][1] = "B. U";
    opsi [55][2] = "C. T";
    opsi [55][3] = "D. R";
    opsi [55][4] = "E. M";
	opsi [55][5] = "4";

	opsi [56][0] = "A. Warga lain sangat menghormati pak Parto";
    opsi [56][1] = "B. Pak Parto adalah abdi negara yang tak pantas jadi panutan warga lain";
    opsi [56][2] = "C. Warga lain seharusnya menganut abdi negara";
    opsi [56][3] = "D. Pak Parto seharusnya jadi panutan warga lain";
    opsi [56][4] = "E. Tidak dapat disimpulkan";
	opsi [56][5] = "5";

	opsi [57][0] = "A. Nana bukan mahasiswa semester 1";
    opsi [57][1] = "B. Nana adalah mahasiswa semester 1 yang tidak tinggal di asrama";
    opsi [57][2] = "C. Asrama tidak cukup untuk menampung Nana";
    opsi [57][3] = "D. Nana mahasiswa semester akhir";
    opsi [57][4] = "E. Tidak dapat disimpulkan";
	opsi [57][5] = "5";

	opsi [58][0] = "A. HP Sindi lebih murah dan lebih tahan lama daripada HP Sandi";
    opsi [58][1] = "B. HP Sindi lebih mahal dan tidak lebih mahal daripada HP Sandi";
    opsi [58][2] = "C. HP Sandi tidak lebih tahan lama dan tidak lebih mahal daripada HP Sindi";
	opsi [58][3] = "D. HP Sandi lebih murah daripada HP Sindi";
	opsi [58][4] = "E. Tidak dapat disimpulkan";
	opsi [58][5] = "3";

	opsi [59][0] = "A. Ranti dan Sea";
    opsi [59][1] = "B. Yuna dan Kayla";
    opsi [59][2] = "C. Kayla, Ranti, dan Yuna";
    opsi [59][3] = "D. Dina dan Sea";
    opsi [59][4] = "E. Kayla dan Ranti";
	opsi [59][5] = "5";

	opsi [60][0] = "A. Epa";
    opsi [60][1] = "B. Fina";
    opsi [60][2] = "C. Cindi";
    opsi [60][3] = "D. Ansara";
    opsi [60][4] = "E. Dodit";
	opsi [60][5] = "3";

	opsi [61][0] = "A. <img src='../../assets/img/SKD_p-2/62/A.jpg'/>";
	opsi [61][1] = "B. <img src='../../assets/img/SKD_p-2/62/B.jpg'/>";
	opsi [61][2] = "C. <img src='../../assets/img/SKD_p-2/62/C.jpg'/>";
	opsi [61][3] = "D. <img src='../../assets/img/SKD_p-2/62/D.jpg'/>";
	opsi [61][4] = "E. <img src='../../assets/img/SKD_p-2/62/E.jpg'/>";
	opsi [61][5] = "B";

	opsi [62][0] = "A. <img src='../../assets/img/SKD_p-2/63/A.jpg'/>";
	opsi [62][1] = "B. <img src='../../assets/img/SKD_p-2/63/B.jpg'/>";
	opsi [62][2] = "C. <img src='../../assets/img/SKD_p-2/63/C.jpg'/>";
	opsi [62][3] = "D. <img src='../../assets/img/SKD_p-2/63/D.jpg'/>";
	opsi [62][4] = "E. <img src='../../assets/img/SKD_p-2/63/E.jpg'/>";
	opsi [62][5] = "1";

	opsi [63][0] = "A. <img src='../../assets/img/SKD_p-2/64/A.jpg'/>";
	opsi [63][1] = "B. <img src='../../assets/img/SKD_p-2/64/B.jpg'/>";
	opsi [63][2] = "C. <img src='../../assets/img/SKD_p-2/64/C.jpg'/>";
	opsi [63][3] = "D. <img src='../../assets/img/SKD_p-2/64/D.jpg'/>";
	opsi [63][4] = "E. <img src='../../assets/img/SKD_p-2/64/E.jpg'/>";
	opsi [63][5] = "4";

	opsi [64][0] = "A. <img src='../../assets/img/SKD_p-2/65/A.jpg'/>";
	opsi [64][1] = "B. <img src='../../assets/img/SKD_p-2/65/B.jpg'/>";
	opsi [64][2] = "C. <img src='../../assets/img/SKD_p-2/65/C.jpg'/>";
	opsi [64][3] = "D. <img src='../../assets/img/SKD_p-2/65/D.jpg'/>";
	opsi [64][4] = "E. <img src='../../assets/img/SKD_p-2/65/E.jpg'/>";
	opsi [64][5] = "5";

	opsi [65][0] = "A. Menerima penghargaan tersebut dengan penuh suka cita karena Anda telah bekerja keras selama ini dan selanjutnya akan meningkatkan kinerja Anda supaya dapat terpilih lagi4";
    opsi [65][1] = "B. Senantiasa bersyukur pada Tuhan atas perolehan tersebut dan akan berterima kasih kepada konsumen dengan tetap melakukan pelayanan yang penuh keramahan3";
    opsi [65][2] = "C. Senang karena banyak konsumen yang suka dengan pelayanan Anda dan selanjutnya akan terus bersikap ramah dalam melakukan pelayanan kepada semua konsumen2";
    opsi [65][3] = "D. Bersyukur pada Tuhan atas perolehan tersebut dan akan berusaha bekerja lebih baik lagi dalam melayani konsumen5";
    opsi [65][4] = "E. Senang dan bersyukur atas perolehan tersebut dan akan merayakannya dengan mentraktir rekan kerja1";
	opsi [65][5] = "";

	opsi [66][0] = "A. Melaporkan kejadian tersebut kepada kepala instansi setelah libur Lebaran selesai dan jika disuruh untuk bertanggung jawab akan membawa mobil tersebut ke bengkel untuk diperbaiki3";
    opsi [66][1] = "B. Segera melaporkan kejadian tersebut kepada kepala instansi untuk meminta petunjuk dalam menangani mobil kantor tersebut2";
    opsi [66][2] = "C. Membawa mobil tersebut ke bengkel kemudian melaporkan kejadian tersebut kepada kepala instansi serta menyerahkan segala keputusan selanjutnya kepada kepala instansi5";
    opsi [66][3] = "D. Segera membawa mobil tersebut ke bengkel untuk diperbaiki sehingga saat libur Lebaran selesai kondisi mobil tetap bagus dan kepala instansi tidak akan curiga jika mobil pernah mengalami kecelakaan1";
    opsi [66][4] = "E. Melaporkan kepada kepala instansi mengenai kejadian tersebut setelah memperbaiki mobil tersebut sebagai antisipasi jika disuruh untuk memperbaiki mobil tersebut4";
	opsi [66][5] = "";

	opsi [67][0] = "A. Memberitahunya agar berusaha dengan kemampuan sendiri dahulu dan jika dilihat tidak akan lolos seleksi karena adanya pelamar yang lebih potensial maka baru Anda bantu dengan memberitahu bagian HRD agar menerima teman Anda3";
    opsi [67][1] = "B. Memberitahu agar berusaha dengan kemampuan sendiri tetapi tetap akan membantu dengan memberikan informasi persyaratan untuk memudahkannya5";
    opsi [67][2] = "C. Karena zaman sekarang sulit untuk mencari pekerjaan jika tidak ada koneksi dari dalam perusahaan, sehingga Anda ingin menolong teman Anda dengan meminta kepada bagian HRD agar teman Anda diterima1";
    opsi [67][3] = "D. Meminta maaf tidak dapat melakukannya karena hal tersebut termasuk nepotisme dan khawatir jika ke depannya akan menimbulkan permasalahan4";
    opsi [67][4] = "E. Memberitahu kepada bagian HRD bahwa teman Anda menjadi salah satu pelamar di lowongan kerja tersebut, sehingga dapat menjadi bahan pertembangan dan nilai lebih dalam menilai teman Anda2";
	opsi [67][5] = "";

	opsi [68][0] = "A. Tetap pergi ke Pulau Gili Iyang dengan mencari persewaan motor supaya dapat digunakan menuju lokasi yang sebelumnya bertanya terlebih dahulu kepada pihak persewaan motor mengenai jalan menuju lokasi4";
    opsi [68][1] = "B. Meminta pihak hotel agar salah satu stafnya mau untuk mengantarkan Anda ke sana sekaligus sebagai guide saat berwisata di sekitar wilayah Sumenep2";
    opsi [68][2] = "C. Tetap akan pergi sesuai agenda liburan dan akan bertanya kepada orang di jalan selama menuju lokasi Pulau Gili Iyang3";
    opsi [68][3] = "D. Karena takut tersesat akan memilih pergi ke tempat wisata yang dekat hotel saja, meskipun masih ingin pergi berwisata ke Pulau Gili Iyang1";
    opsi [68][4] = "E. Bertanya terlebih dahulu kepada pihak hotel mengenai lokasi menuju Pulau Gili Iyang dan transportasi yang ada agar memudahkan pulang pergi ke lokasi tersebut5";
	opsi [68][5] = "";

	opsi [69][0] = "A. Menolaknya karena termasuk menyimpang dari aturan sehingga menyarankan untuk tidak membawa bingkisan saja, kepala divisi pasti senang jika sudah dijenguk saja4";
    opsi [69][1] = "B. Menolak rencana ini dan meminta teman tersebut untuk memikirkan risikonya sebelum mengusulkan suatu ide3";
    opsi [69][2] = "C. Menolak untuk menggunakan usulan tersebut dan mengusulkan untuk melakukan iuran saja dalam membeli bingkisan tersebut5";
    opsi [69][3] = "D. Mengajak teman lainnya untuk melakukan iuran dalam membeli bingkisan tersebut, tetapi jika dirasa masih kurang dapat mengambil sedikit dana rapat tersebut1";
    opsi [69][4] = "E. Karena tidak ingin berisiko ke depannya, maka memilih mengajukan diri untuk membayar dengan uang sendiri saat membeli bingkisan tersebut2";
	opsi [69][5] = "";

	opsi [70][0] = "A. Membuat perencanaan dengan mengurangi jumlah konsumsi akan barang kebutuhan pokok sehingga dapat berhemat3";
    opsi [70][1] = "B. Berpikir untuk mencoba mencari tambahan penghasilan dengan mencari pekerjaan sambilan lainnya4";
    opsi [70][2] = "C. Akan melakukan hidup hemat dan berharap perusahaan akan peka dengan kondisi pegawainya sehingga mau menaikkan gaji pegawainya1";
    opsi [70][3] = "D. Melakukan strategi hidup hemat dengan cara mengganti barang yang bisa dibeli dengan barang yang memiliki harga lebih murah2";
    opsi [70][4] = "E. Merencanakan ulang pembelanjaan Anda setiap bulannya agar tetap seimbang dengan pendapatan5";
	opsi [70][5] = "";

	opsi [71][0] = "A. Menegur dan mengingatkan kembali akan pernyataan yang sudah dibuat bersama, serta meminta yang bersangkutan konsisten dengan apa yang sudah dinyatakan dalam pakta integritas5";
    opsi [71][1] = "B. Sekadar mengingatkan saja mengingat anggota kelompok adalah orang dewasa yang mestinya sudah tahu apa yang harus dilakukan dan tetap menjaga kesepakatan yang telah dibuat sebelumnya1";
    opsi [71][2] = "C. Menegurnya dan menunjukkan pelanggaran pakta integritas yang telah dilakukan supaya sia tahu kesalahannya serta tidak akan melakukannya lagi4";
    opsi [71][3] = "D. Mengingatkan bahwa setiap pelanggaran ada konsekuensinya sama halnya dengan dia yang telah melanggar pakta integritas yang sebelumnya sudah disepakati3";
    opsi [71][4] = "E. Mengingatkan dan meminta semua anggota untuk membaca pakta integritas yang sudah disepakati supaya semua anggota tidak melakukan pelanggaran lagi2";
	opsi [71][5] = "";

	opsi [72][0] = "A. Program pemerintah yang bagus dalam mencerdaskan kehidupan masyarakat, asalkan tepat sasaran dalam pelaksanaannya2";
    opsi [72][1] = "B. Kesempatan untuk dapat bersekolah hingga ke jenjang tinggi karena dijamin pemerintah dan lebih baik lagi tanpa ada syarat-syarat khusus untuk menerima beasiswa tersebut4";
    opsi [72][2] = "C. Suatu kesempatan untuk melanjutkan mendidikan secara gratis karena telah ditanggung oleh pemerintah3";
    opsi [72][3] = "D. Suatu kesempatan untuk melanjutkan pendidikan apalagi bagi orang yang terkendala keuangan dalam bersekolah5";
    opsi [72][4] = "E. Pemborosan uang negara karena tidak semua yang menerima beasiswa tersebut benar-benar memiliki masalah keuangan dalam bersekolah1";
	opsi [72][5] = "";

	opsi [73][0] = "A. Akan bersemangat dalam mengerjakannya sebagai pembuktian bahwa dapat bekerja dengan baik dan dapat diakui dalam organisasi tersebut1";
    opsi [73][1] = "B. Meminta kepada salah satu teman organisasi yang lebih senior untuk membimbingnya dalam membuat proposal agar sesuai dengan yang diharapkan oleh ketua organisasi2";
    opsi [73][2] = "C. Mencari informasi mengenai bagaimana menyusun sebuah proposal sehingga memiliki gambaran untuk menyelesaikan proposal yang diminta oleh ketua organisasi5";
    opsi [73][3] = "D. Bertanya terlebih dahulu kepada ketua organisasi mengenai proposal sejenis pada tahun sebelumnya untuk dijadikan contoh membuat proposal sekarang3";
    opsi [73][4] = "E. Mencari referensi untuk mempuat proposal sejenis dan akan menyalinnya dengan beberapa bagian diubah sesuai dengan yang diminta oleh ketua organisasi4";
	opsi [73][5] = "";

	opsi [74][0] = "A. Meminta ibu hamil tersebut untuk duduk di tempat duduk Anda karena tidak ingin melanggar aturan mengenai prioritas tempat duduk bagi ibu hamil, lansia, ibu membawa anak/balita, dan disabilitas4";
    opsi [74][1] = "B. Beristirahat untuk sebentar lagi dan setelah lima menit akan memberikan tempat duduk Anda kepada ibu hamil tersebut2";
    opsi [74][2] = "C. Segera memberikan tempat duduk kepada ibu hamil tersebut karena tidak ingin digunjingkan oleh penumpang kereta lainnya jika tidak memberikan tempat duduk Anda3";
    opsi [74][3] = "D. Mempersilahkan ibu hamil tersebut untuk menempati tempat duduk Anda karena lebih diprioritaskan5";
    opsi [74][4] = "E. Memintanya untuk pergi ke gerbong khusus wanita agar memperoleh tempat duduk karena akan diprioritaskan bagi ibu hamil1";
	opsi [74][5] = "";

	opsi [75][0] = "A. Lebih disebabkan dengan rekan-rekan kerja yang kurang bersahabat sehingga mengurangi kenyamanan dalam bekerja dan menimbulkan rasa bosan3";
    opsi [75][1] = "B. Kurangnya inovasi dalam bekerja yang terkesan monoton dan membuat tidak semangat dalam bekerja serta munculnya rasa bosan5";
    opsi [75][2] = "C. Pada fasilitas yang ada di perusahaan terutama tampilan pada ruangan kerja yang tidak ada pemandangan luar ruangan dapat menimbulkan kesan sumpek dan rasa bosan2";
    opsi [75][3] = "D. Kurang rasa bersyukur atas pekerjaan yang telah didapatkan padahal masih banyak orang yang sulit untuk memperoleh pekerjaan1";
    opsi [75][4] = "E. Masih adanya budaya senioritas dalam lingkungan kerja dapat menimbukan rasa bosan akibat tekanan dari perilaku pegawai senior4";
	opsi [75][5] = "";

	opsi [76][0] = "A. Melakukan analisis pasar dan sistem marketing perusahaan yang ada sehingga berharap dapat menemukan ide mengenai sistem marketing yang baru untuk perusahaan4";
    opsi [76][1] = "B. Mengusulkan inovasi baru dan melakukan apapun agar itu dapat terlaksana karena Anda yakin bahwa usul Anda adalah yang terbaik bagi perusahaan3";
    opsi [76][2] = "C. Menanyakan kepada anggota tim marketing apakah ada ide maupun usulan mengenai sistem marketing baru untuk memperbaiki sistem yang lama1";
    opsi [76][3] = "D. Mengusulkan inovasi baru setelah melakukan analisis terlebih dahulu sehingga dapat menjelaskan alasanalasan yang logis saat rapat anggota perusahaan5";
    opsi [76][4] = "E. Mendiskusikan dengan teman-teman sedivisi marketing agar Anda memperoleh banyak dukungan saat menyampaikan usul mengenai sistem marketing yang baru2";
	opsi [76][5] = "";

	opsi [77][0] = "A. Akan bertahan bekerja di unit kerja baru dengan berusaha akrab pada anggota unit kerja baru sehingga dapat meminta mereka untuk lebih tenang dalam bekerja4";
    opsi [77][1] = "B. Akan mencoba untuk bekerja di unit kerja baru sembari mencari ruangan yang cukup hening agar dapat pindah ke ruangan tersebut untuk bekerja setelah izin pada atasan1";
    opsi [77][2] = "C. Menjalankan perintah tersebut dan akan melaksanakan tugas seperti biasanya meskipun kondisi lingkungan yang berbeda karena hal itu tidak menjadi masalah bagi Anda5";
    opsi [77][3] = "D. Tetap menjalankan perintah atasan sebagai loyalitas pegawai meskipun sempat kaget dengan kondisi unit kerja baru setelah melihatnya pada hari pertama2";
    opsi [77][4] = "E. Tidak mempermasalahkannya karena yang terpenting adalah selesainya tanggung jawab terhadap pekerjaan Anda sehingga tidak masalah juga jika tidak akrab dengan anggota unit kerja baru karena pemindahan hanya bersifat sementara3";
	opsi [77][5] = "";

	opsi [78][0] = "A. Proposal pendidikan saya sehingga dengan dibuatnya proposal tersebut saya berharap akan mendapatkan beasiswa pendidikan untuk melanjutkan ke jenjang universitas karena saya yakin dengan prestasi saya2";
    opsi [78][1] = "B. Universitas tujuan saya yaitu dengan mencari beberapa universitas yang potensial sehingga dapat dibandingkan untuk mendapatkan universitas yang terbaik3";
    opsi [78][2] = "C. Rencana pendidikan saya, dalam rencana tersebut saya menyiapkan segala kebutuhan untuk melanjutkan ke jenjang universitas sehingga berharap dapat mencapai hasil belajar yang maksimal5";
    opsi [78][3] = "D. Kondisi keuangan sebagai persiapan untuk memenuhi kebutuhan dalam melanjutkan bersekolah ke jenjang universitas1";
    opsi [78][4] = "E. Jurusan yang ingin saya ambil di universitas dengan mencari jurusan yang sesuai dengan minat bakat saya sehingga memudahkan dalam mencapai prestasi yang nantinya akan berguna dalam dunia kerja4";
	opsi [78][5] = "";

	opsi [79][0] = "A. Meminta perpanjangan rawat inap sampai benar-benar sembuh dan menambah pemakaian fasilitas rumah sakit sampai jumlah perawatan sama dengan uang penanggungan yang dikeluarkan oleh perusahaan3";
    opsi [79][1] = "B. Melakukan perawatan rumah sakit secukupnya yang Anda rasa sampai kondisi tubuh Anda sudah membaik dan dapat beraktivitas kembali, meskipun masih meminta beberapa hari untuk beristirahat di rumah, tetapi Anda akan memberikan kuitansi perawatan rumah sakit yang sebenarnya4";
    opsi [79][2] = "C. Melakukan perawatan rumah sakit secukupnya dan akan meminta pihak rumah sakit untuk mengisikan biaya perawatan sebesar biaya penanggungan dari perusahaan agar semua uang penanggungan dapat keluar semua, meskipun nanti akan mengambil sisa uang tersebut1";
    opsi [79][3] = "D. Melakukan perawatan rumah sakit secukupnya sampai kondisi tubuh benar-benar sembuh dan mampu kembali beraktivitas serta bekerja kembali sehingga dapat menyerahkan kuitansi perawatan yang sebenarnya untuk ditukar dengan biaya penanggungan dari perusahaan5";
    opsi [79][4] = "E. Menyerahkan kuitansi biaya perawatan dari rumah sakit sesuai jumlah yang sebenarnya dan karena ada sisa biaya penanggungan dari perusahaan, sehingga Anda meminta sisa dana tersebut sebagai bentuk biaya kompensasi perawatan di rumah karena tidak dapat langsung bekerja2";
	opsi [79][5] = "";

	opsi [80][0] = "A. Menggantikan tugas rekan kerja tersebut karena merupakan perintah dari atasan, meskipun harus meninggalkan sementara pekerjaan Anda sendiri3";
    opsi [80][1] = "B. Menerima untuk menggantikan tugas presentasi daan akan berusaha untuk segera menyelesaikan presentasi tersebut karena masih ada tanggung jawab akan pekerjaan Anda sendiri4";
    opsi [80][2] = "C. Mencoba untuk memberitahu atasan untuk memundurkan jadwal presentasi kepada klien dan menunggu hingga rekan kerja tersebut sadar, karena jika Anda yang menggantikan secara mendadak tidak akan maksimal hasilnya sebab belum cukup waktu untuk mempelajari materi presentasi2";
    opsi [80][3] = "D. Menawarkan kepada rekan kerja lain untuk menggantikan tugasnya karena Anda harus segera menyelesaikan pekerjaan Anda sendiri1";
    opsi [80][4] = "E. Berusaha menjalankan presentasi tersebut dengan baik agar selesai tepat waktu dan dengan hasil memuaskan, sehingga Anda dapat melanjutkan menyelesaikan pekerjaan Anda tanpa beban pikiran5";
	opsi [80][5] = "";

	opsi [81][0] = "A. Karena merasa bersalah akan segera meminta maaf pada atasan dengan mengajak Tora untuk meminta maaf juga menjelaskan kejadian yang sebenarnya4";
    opsi [81][1] = "B. Meminta maaf kepada atasan karena Anda yang diberi tanggung jawab akan dokumen tersebut dan sedikit kecewa dengan sikap Tora yang terkesan tidak serius dalam menyimpan dokumen tersebut3";
    opsi [81][2] = "C. Meminta Tora untuk bertanggung jawab mengenai hilangnya dokumen tersebut karena Anda telah menyerahkan tanggung jawab menyimpan dokumen kepada Tora1";
    opsi [81][3] = "D. Meminta maaf pada atasan dan menjelaskan bahwa Anda telah menyerahkan tanggung jawab dokumen tersebut kepada Tora karena Anda berhalangan hadir pada hari rapat2";
    opsi [81][4] = "E. Meminta maaf atas kelalaian Anda karena yang diberikan tanggung jawab menyimpan dokumen dari atasan adalah Anda sehingga Anda yang akan bertanggung jawab dengan hilangnya dokumen tersebut5";
	opsi [81][5] = "";

	opsi [82][0] = "A. Akan mematuhinya tetapi jika ada keadaan mendesak tidak masalah untuk melanggarnya karena sudah ada alasannya jika ditanya oleh orang tua2";
    opsi [82][1] = "B. Berusaha untuk tidak melanggar aturan orang tua saya karena saya paham bahwa orang tua melakukan hal tersebut karena khawatir pada saya4";
    opsi [82][2] = "C. Berusaha untuk mematuhi aturan orang tua tetapi jika ada keadaan mendesak dan mengharuskan untuk pulang larut malam akan menelepon orang tua untuk datang menjemput3";
    opsi [82][3] = "D. Akan mematuhi orang tua saya demi kebaikan saya dan tidak ingin membuat orang tua kecewa serta khawatir jika saya pulang larut malam5";
    opsi [82][4] = "E. Paham bahwa orang tua saya khawatir pada saya tetapi tidak terlalu setuju karena akan mengurangi kebebasan saya apalagi jika ada pekerjaan lembur1";
	opsi [82][5] = "";

	opsi [83][0] = "A. Langsung meminta maaf serta menjelaskan bahwa kondisi komputer yang sudah lama dan sering eror sehingga atasan dapat mempertimbangkan untuk melakukan pengadaan komputer baru2";
    opsi [83][1] = "B. Langsung menjelaskan bahwa kondisi komputer tersebut sebelumnya sudah sering eror sehingga Anda tidak termasuk sebagai orang yang merusaknya1";
    opsi [83][2] = "C. Langsung meminta maaf serta menjelaskan tentang kondisi komputer yang sebenarnya dengan meminta dukungan dari rekan-rekan kerja lainnya, tetapi jika tetap mendapatkan sanksi akan menerimanya4";
    opsi [83][3] = "D. Langsung meminta maaf kepada atasan dan menjelaskan keadaan komputer sebenarnya serta akan menerima konsekuensi yang ada5";
    opsi [83][4] = "E. Langsung berbicara kepada atasan meminta maaf dan menjelaskan kondisi sebenarnya serta langsung ingin menggantinya dengan yang baru sebagai antisipasi sanksi yang diberikan atasan3";
	opsi [83][5] = "";

	opsi [84][0] = "A. Memilih untuk menjawab tidak tahu kemana kepala bagian pergi karena tidak ingin bingung ketika ditanya alasan maupun tujuan kepala bagian pergi1";
    opsi [84][1] = "B. Mengatakan kepada bahwa Anda tidak memiliki kewenangan untuk memberikan informasi mengenai kepergian kepala bagian dan menyarankan agar tamu provinsi tersebut menghubungi langsung kepala bagian5";
    opsi [84][2] = "C. Menanyakan terlebih dahulu kepentingan dari tamu provinsi, jika dirasa kepentingan tersebut penting akan memilih untuk memberi tahu kemana kepala bagian pergi2";
    opsi [84][3] = "D. Meminta waktu sebentar kepada tamu provinsi karena akan menghubungi kepala bagian dahulu untuk meminta pendapatnya3";
    opsi [84][4] = "E. Meminta maaf kepada tamu provinsi karena tidak bisa mengatakan kemana kepala bagian pergi sebab telah berjanji padanya dan memintanya untuk menghubungi sendiri kepala bagian4";
	opsi [84][5] = "";

	opsi [85][0] = "A. Memperbanyak mengikuti <i>tryout</i> dan mengerjakan latihan soal materi SKD serta tidak melupakan untuk mengerjakan juga materi TPA dan TBI5";
    opsi [85][1] = "B. Lebih memfokuskan untuk berlatih mengerjakan soal SKD sebab tidak ingin gagal hanya karena nilai SKD yang tidak lolos dari ambang batasnya2";
    opsi [85][2] = "C. Mengganti jam belajar materi TPA dan TBI untuk belajar materi serta mengerjakan soal-soal SKD sebagai upaya meningkatkan nilai SKD1";
    opsi [85][3] = "D. Belajar siang dan malam demi mendapat nilai tertinggi pada materi TPA, TBI, dan terutama pada SKD4";
    opsi [85][4] = "E. Meminta bantuan teman yang lebih paham materi SKD untuk mengajari dan akan mengajarinya juga mengenai materi TPA maupun TBI yang sudah cukup Caca kuasai3";
	opsi [85][5] = "";

	opsi [86][0] = "A. Mencoba membuka cabang baru di tempat yang tidak terpikirkan oleh kompetitor sehingga diharapkan menjadi pionir akan restoran cepat saji di wilayah tersebut3";
    opsi [86][1] = "B. Menyurvei beberapa tempat kompetitor agar mampu bersaing bila membuka <i>outlet</i> di tempat yang sama1";
    opsi [86][2] = "C. Menganalisis beberapa tempat yang diperkirakan dapat dikunjungi oleh banyak pelanggan dengan pertimbangan tempat yang ramai dikunjungi oleh banyak orang4";
    opsi [86][3] = "D. Mengambil sampel ke beberapa tempat yang berbeda dan memperhitungkan keuntungan dan kerugiannya2";
    opsi [86][4] = "E. Menyediakan sampel gratis di beberapa tempat yang diperkirakan menjadi <i>outlet</i> baru sehingga dapat memutuskan membuka outlet baru dengan mengukur tingkat pembelian5";
	opsi [86][5] = "";

	opsi [87][0] = "A. Membawa sampel beberapa jenis makanan bergizi seimbang yang bisa dikembangkan di daerah tersebut sehingga masyarakat dapat memakan makanan bergizi dengan lebih mudah dan terjangkau harganya3";
    opsi [87][1] = "B. Memberi pengertian dan manfaatnya mengenai makanan bergizi seimbang sehingga masyarakat dapat beralih untuk menyiapkan makanan bergizi seimbang setiap harinya1";
    opsi [87][2] = "C. Meminta kepada pemerintah daerah untuk memberi subsidi bahan makanan bergizi yang lebih murah sebagai bantuan untuk meningkatkan kualitas gizi di daerah tersebut2";
    opsi [87][3] = "D. Bersama warga sekitar untuk mengupayakan ketersediaan bahan makanan bergizi seimbang seperti menanam bahan pangan, mengelola hewan ternak yang sesuai dengan kondisi alam di daerah tersebut5";
    opsi [87][4] = "E. Membantu meningkatkan kualitas pertanian sesuai dengan kondisi alam daerah tersebut sehingga akan mempermudah mendapatkan bahan makanan bergizi4";
	opsi [87][5] = "";

	opsi [88][0] = "A. Karena kepuasan pelanggan yang terpenting makan akan melayani sampai pelanggan tersebut jelas dan paham akan produk yang ditanyakan maupun jika ada keluhan lainnya1";
    opsi [88][1] = "B. Ketika melayani pelanggan akan berusaha untuk menyelesaikan setiap aduan pelanggan kurang dari lima menit sesuai aturan yang ada3";
    opsi [88][2] = "C. Mempelajari cara untuk dapat cepat menyelesaikan permasalahan pelanggan agar ketika melayani waktu pelayanan tidak lebih dari aturan yang ada4";
    opsi [88][3] = "D. Ketika melayani pelanggan akan berbicara seperlunya sesuai yang ditanyakan pelanggan untuk menghemat waktu2";
    opsi [88][4] = "E. Mempelajari terlebih dahulu mengenai produk, komunikasi efektif, dan alternatif pemecahan masalah sehingga ketika bekerja langsung dapat mengatasi masalah pelanggan5";
	opsi [88][5] = "";

	opsi [89][0] = "A. Berusaha untuk mencari cara meningkatkan kemampuan diri dalam bekerja agar pada proyek kerja selanjutnya dapat berhasil menarik investor untuk perusahaan3";
    opsi [89][1] = "B. Menggunakan penilaian atasan sebagai evaluasi diri dengan menerapkannya pada cara kerja Anda yang akan berbeda dari biasanya agar pada proyek kerja selanjutnya dalam memberikan hasil yang lebih baik5";
    opsi [89][2] = "C. Menjadikan penilaian atasan sebagai motivasi untuk semakin semangat dalam bekerja di proyek kerja selanjutnya karena jika gagal akan ada sanksinya2";
    opsi [89][3] = "D. Meminta saran kepada rekan kerja lainnya yang sering berhasil sehingga dapat belajar cara untuk lebih menarik investor dalam menanamkan sahap pada perusahaan4";
    opsi [89][4] = "E. Menjadikan penilaian atasan sebagai evaluasi diri sehingga dapat memperbaiki kelemahan yang ada pada diri sendiri dan akan tetap bekerja seperti biasanya untuk mengerjakan proyek kerja selanjutnya1";
	opsi [89][5] = "";

    opsi [90][0] = "A. Bagaimanapun juga saya hanya anggota unit biasa sehingga tidak dapat mengambil keputusan karena hal itu juga berisiko bagi karier saya1";
    opsi [90][1] = "B. Mengajak rekan kerja satu unit untuk berdiskusi dalam mengambil keputusan yang tepat untuk menyelesaikan situasi tersebut3";
    opsi [90][2] = "C. Saya akan memberanikan diri untuk mengambil keputusan demi menyelamatkan kondisi rumit tersebut dan akan menerima konsekuensinya nanti4";
    opsi [90][3] = "D. Saya memilih untuk menelepon pimpinan dahulu baru kemudian mengambil keputusan sesuai arahan pimpinan dan berdasarkan kondisi saat itu5";
    opsi [90][4] = "E. Berusaha untuk menunda pengambilan keputusan sampai pimpinan hadir di kantor karena melihat rumitnya situasi yang ada2";
    opsi [90][5] = "";

    opsi [91][0] = "A. Menolak ajakan Nia karena bertentangan dengan aturan yang ada dan sanksinya jika ketahuan dapat dipecat serta akan berusaha untuk menasihati Nia untuk tidak melakukannya juga4";
    opsi [91][1] = "B. Menolaknya dan memilih mengajak Nia untuk mengusulkan kepada perusahaan bahwa sebaiknya uang tunjangan tidak perlu dikembalikan jika tersisa karena dapat berguna untuk kebutuhan pegawai1";
    opsi [91][2] = "C. Hal tersebut merupakan perbuatan curang yang bertentangan dengan prinsip diri dan dapat menimbulkan dosa sehingga akan menolak ajakan Nia2";
    opsi [91][3] = "D. Menolaknya dengan tegas dan memberikan pengertian bahwa itu perbuatan curang sehingga Nia dapat sadar untuk tidak melakukannya juga5";
    opsi [91][4] = "E. Memberi pengertian bahwa itu bukan hak kita dan bersikeras mengembalikan sisa uang tunjangan tersebut sesuai aturan yang ada di perusahaan3";
    opsi [91][5] = "";

    opsi [92][0] = "A. Tidak membuka dokumen tersebut karena tidak ingin mendapatkan sanksi dari manajer personalia jika melanggar untuk membuka dokumen tersebut4";
    opsi [92][1] = "B. Menyamarkan dokumen tersebut dan meminta rekan kerja yang terpercaya untuk membuka dokumen tersebut tanpa memberitahukan bahwa itu termasuk dokumen rahasia1";
    opsi [92][2] = "C. Meskipun penasaran dan sempat membuktikan kabar yang didengar dengan membuka sedikit dokumen tersebut, tetapi kembali menutupnya karena khawatir manajer akan mengetahuinya2";
    opsi [92][3] = "D. Memilih untuk menanyakan langsung secara pribadi kepada manajer personalia tentang kebenaran dari isi dokumen tersebut dan menanyakan apakah ada kesempatan Anda untuk dipromosikan3";
    opsi [92][4] = "E. Sebesar apapun rasa penasaran tetapi tetap tidak akan membuka dokumen karena sudah dipesan untuk tidak membukanya5";
    opsi [92][5] = "";

    opsi [93][0] = "A. Akan menerima untuk menjadi perwakilan sekolah dan sebelumnya akan berusaha berlatih untuk percaya diri ketika dihadapan orang banyak5";
    opsi [93][1] = "B. Berusaha untuk membicarakan kepada pihak sekolah supaya dirinya dapat digantikan dengan orang lain dan memberikan alasan yang sebenarnya sehingga tidak perlu dipaksa lagi1";
    opsi [93][2] = "C. Meminta teman dekat untuk membantu dalam menghadapi kelemahannya dan meminta temannya tersebut untuk tidak memberitahu kepada siapa pun4";
    opsi [93][3] = "D. Menjelaskan terus terang mengenai kelemahan Anda kepada pihak sekolah sehingga dapat dicarikan solusi yang terbaik2";
    opsi [93][4] = "E. Tetap menerima untuk menjadi perwakilan sekolah dan akan mencoba berhadapan dengan orang banyak meskipun awalnya merasa tidak percaya diri3";
    opsi [93][5] = "";

    opsi [94][0] = "A. Melihat tidak kondusifnya kantor ketika ada <i>hari kejepit nasional</i>, maka akan mengusulkan kepada atasan untuk mempertimbangkan meliburkan kantor pada hari itu2";
    opsi [94][1] = "B. Menolak mengikuti rekan kerja yang melakukan “bolos massal” dan memilih melaksanakan libur sesuai dengan hari libur nasional yang ada4";
    opsi [94][2] = "C. Menolak untuk melakukan “bolos massal” pada hari Senin tersebut karena bertentangan dengan nilai-nilai dalam diri sendiri5";
    opsi [94][3] = "D. Akan tetap masuk pada hari Senin itu dan jika kondisi kantor benar-benar tidak kondusif karena sepi akibat dari banyaknya rekan kerja yang tidak masuk maka tidak melanjutkan kerja dan memutuskan pulang1";
    opsi [94][4] = "E. Meskipun ingin menjaga toleransi dengan rekan kerja lainnya yang melakukan “bolos massal” tetapi tidak akan melakukannya karena tidak ingin dinilai negatif oleh atasan3";
    opsi [94][5] = "";

    opsi [95][0] = "A. Menanyakan kondisi dia selama bekerja di kantor dan jika dirasa dia mengalami selama ini mengalami kesulitan maka akan menawarkan bantuan untuk mempercepat penyelesaian tugasnya demi kinerja tim4";
    opsi [95][1] = "B. Menegur karena cara kerjanya yang lamban karena dapat menghambat kinerja rekan tim lainnya bahkan bagi tim itu sendiri dan menuntutnya untuk segera memperbaikinya1";
    opsi [95][2] = "C. Menanyakan cara kerja rekan baru tersebut kemudian menyuruhnya supaya kinerjanya dapat diperbaiki supaya tidak mengganggu kinerja tim2";
    opsi [95][3] = "D. Memilih untuk melaporkan hal tersebut kepada ketua tim agar segera ditangani supaya kinerja tim tidak terhambat hanya karena satu orang3";
    opsi [95][4] = "E. Mengingatkan kepada rekan tim baru tersebut akan pola kerjanya yang dapat menghambat kinerja tim dan akan terbuka menawarkan bantuan jika dibutuhkannya5";
    opsi [95][5] = "";

    opsi [96][0] = "A. Selalu membuat pelayanan simpel dan sempurna kepada setiap pelanggan yang datang ke perusahaan sehingga diharapkan pelanggan mendapatkan kepuasan3";
    opsi [96][1] = "B. Selalu bersikap ramah pada setiap pelanggan dengan memberikan pelayanan yang cepat dan tuntas dalam setiap permintaan yang diminta pelanggan5";
    opsi [96][2] = "C. Selalu melakukan pelayanan yang cepat kepada setiap pelanggan dan tepat dalam menyelesaikan permintaan yang diminta oleh pelanggan4";
    opsi [96][3] = "D. Selalu memberikan pelayanan yang bersinergi dan lengkap sesuai aturan yang berlaku di perusahaan kepada setiap pelanggan yang datang1";
    opsi [96][4] = "E. Selalu membuat pelayanan tidak ribet kepada setiap pelanggan dan cepat dalam mengambil keputusan untuk menyelesaikan permintaan dari pelanggan2";
    opsi [96][5] = "";

    opsi [97][0] = "A. Langsung mengemudikan mobil untuk kembali ke kantor karena takut atasan Anda marah kepada Anda jika berkas tersebut terbawa oleh Anda4";
    opsi [97][1] = "B. Menghentikan mobil dahulu kemudian menelepon atasan untuk mengabarkan hal tersebut dan selanjutnya menanyakan atasan bagaimana nasib berkas tersebut2";
    opsi [97][2] = "C. Langsung mengemudikan mobil untuk kembali ke kantor kemudian akan menjelaskan semuanya kepada atasan Anda5";
    opsi [97][3] = "D. Memilih untuk melanjutkan berkendara menuju ke rumah kemudian menelepon atasan untuk mengabarkan salah satu berkas terbawa oleh Anda sehingga dapat membuat janji bertemu untuk menyerahkan berkasnya1";
    opsi [97][4] = "E. Langsung mengemudikan mobil untuk kembali ke kantor untuk mengembalikan berkas tersebut kepada atasan meskipun nanti di jalan akan mampir dahulu untuk makan3";
    opsi [97][5] = "";

    opsi [98][0] = "A. Meminta kepada pejabat setempat untuk mengajukan keluhan langsung kepada Dinas Bina Marga agar jalan segera diperbaiki2";
    opsi [98][1] = "B. Segera meminta atasan untuk menangani kerusakan jalan tersebut karena sudah tanggung jawab Dinas Bina Marga memberikan kenyamanan warga dengan kondisi jalan yang baik4";
    opsi [98][2] = "C. Meminta warga sekitar lokasi jalan tersebut untuk memasang tanda hati-hati agar pengendara dapat berhati-hati dan menghindari jalan dengan bagian yang berlubang1";
    opsi [98][3] = "D. Akan berkonsultasi dengan atasan mengenai permasalahan jalan tersebut sehingga mendapatkan petunjuk untuk langkah selanjutnya3";
    opsi [98][4] = "E. Mengajukan usul kepada atasan saya untuk menangani kerusakan jalan tersebut dengan disertai bukti-bukti nyata adanya kerusakan jalan tersebut5";
    opsi [98][5] = "";

    opsi [99][0] = "A. Akan membuangnya di tempat sampah saat menemukannya karena tidak ingin mendapatkan denda jika membuang sampah sembarangan3";
    opsi [99][1] = "B. Akan membuang botol tersebut ketika menemukan tempat sampah supaya terlihat sebagai orang yang menghargai lingkungan dengan tidak membuang sampah sembarangan apalagi di taman4";
    opsi [99][2] = "C. Berusaha untuk mencari tempat sampah dahulu jika di sekitar taman tidak ada tinggal buang saja karena tidak ada tempat sampah jadi bukan salahnya1";
    opsi [99][3] = "D. Akan mengantongi botol itu terlebih dahulu untuk kemudian buang ketika menemukan bak sampah5";
    opsi [99][4] = "E. Karena tidak menemukan tempat sampah di sekitar tempat itu maka akan meminta tolong kepada tukang taman untuk membuangnya2";
    opsi [99][5] = "";
		
	var datasoal="";//data yang diload
	var datapilihan="";
	//tempatsoal
	var tempatsoal = [];
	var pilihansoal = [];
	for(var y = 0; y < (soalTPA.length - 35); y++){

	tempatsoal[y] = '<label id="soal'+(y+1)+'" class="control-label soal" for="soal" style="line-height: 1.7;">'+soalTPA[y]+'</label>';
	pilihansoal[y]= '<div class="pilihansoal" id="pilihansoal'+(y+1)+'" >';
		for(var x=0; x < 5; x++){
			if(opsi[y][x]==""){
				pilihansoal[y] += '<label class="checkbox " style="display:none">'+opsi[y][x]+'<input class="checkboxbtn'+(y+1)+'"type="checkbox" value='+(x+1)+' name="checkboxbtn'+(y+1)+'" style="display:none">'+
						'<span class="checkmark" style="display:none">  </span></label>';
			}else{

			pilihansoal[y] += '<label class="checkbox ">'+opsi[y][x]+'<input class="checkboxbtn'+(y+1)+'"type="checkbox" value='+(x+1)+' name="checkboxbtn'+(y+1)+'">'+
						'<span class="checkmark">  </span></label>';
			}
			}
	pilihansoal[y] +='</div>';
	datasoal += tempatsoal[y] ;
	datapilihan +=pilihansoal[y];
    }
    
    // tkp
    for(var y = (soalTPA.length - 35); y < soalTPA.length; y++){

        tempatsoal[y] = '<label id="soal'+(y+1)+'" class="control-label soal" for="soal" style="line-height: 1.7;">'+soalTPA[y]+'</label>';
        pilihansoal[y]= '<div class="pilihansoal" id="pilihansoal'+(y+1)+'" >';
            for(var x=0; x < 5; x++){
                if(opsi[y][x]==""){
                    pilihansoal[y] += '<label class="checkbox " style="display:none">'+opsi[y][x]+'<input class="checkboxbtn'+(y+1)+'"type="checkbox" value='+(x+1)+' name="checkboxbtn'+(y+1)+'" style="display:none">'+
                            '<span class="checkmark" style="display:none">  </span></label>';
                }else{
    
                    pilihansoal[y] += '<label class="checkbox ">'+ opsi[y][x].slice(0,-1) +'<input class="checkboxbtn'+(y+1)+'"type="checkbox" value='+ opsi[y][x].slice(opsi[y][x].length - 1) +' name="checkboxbtn'+(y+1)+'">'+
                                '<span class="checkmark">  </span></label>';
                }
                }
        pilihansoal[y] +='</div>';
        datasoal += tempatsoal[y] ;
        datapilihan +=pilihansoal[y];
        }
// console.log(pilihansoal[1]);
	return {
		datasoal : datasoal,
		datapilihan : datapilihan,
		soal : soalTPA,
		opsi : opsi
	};

	
}


function showsoal(){

	var send = soal();
	$("#tempatpilihan").append(send.datapilihan);
	$("#divsoal").prepend(send.datasoal);
	
       M.parseMath(divsoal);
       $(".soal").hide();
       $(".pilihansoal").hide();

}

