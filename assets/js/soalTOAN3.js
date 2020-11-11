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

	//soal
	soalTPA[0] = "Unktuk soal nomor 1-2, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang mempunyai <b>arti sama atau arti paling dekat</b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>INTERFERENS";
	soalTPA[1] = "Unktuk soal nomor 1-2, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang mempunyai <b>arti sama atau arti paling dekat</b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>REVANS";
	soalTPA[2] = "Unktuk soal nomor 3-4, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang merupakan <b>padanan kata atau padanan pengertian yang paling dekat</b> dengan kata yang dicetak huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>INTIMASI";
	soalTPA[3] = "Unktuk soal nomor 3-4, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang merupakan <b>padanan kata atau padanan pengertian yang paling dekat</b> dengan kata yang dicetak huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>POSTULAT";
	soalTPA[4] = "Untuk soal nomor 5-6, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>lawan kata atau lawan pengertian yang paling dekat</b> dengan kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>INDISIPLINER";
	soalTPA[5] = "Untuk soal nomor 5-6, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>lawan kata atau lawan pengertian yang paling dekat</b> dengan kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>SAHIH";
	soalTPA[6] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>BAROMETER : TORICELLI =...";
	soalTPA[7] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>DENOTASI : KIASAN = ...";
	// soalTPA[8] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>API : BAKAR : PANAS = ...";
	// soalTPA[9] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>HASANUDIN : AYAM JANTAN DARI TIMUR = ...";
	// soalTPA[10] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>&emsp; Pemerintah mewajibkan seluruh pelanggan kartu SIM prabayar untuk melakukan registrasi berdasarkan data kependudukan berupa nomor induk kependudukan (NIK) KTP dan nomor Kartu Keluarga (KK). Ketentuan ini berlaku bagi pelanggan kartu SIM prabayar baru maupun lama. Pemerintah menerapkan aturan ini mulai 31 Oktober 2017 dengan batas akhir registrasi ulang yang divalidasi NIK KTP dan nomor KK pada 28 Ferbruari 2018. <br> &emsp; Meski yang dibutuhkan untuk proses registrasi hanya NIK KTP dan nomor KK, di masyarakat beredar informasi palsu registrasi kartu SIM prabayar perlu menyertakan informasi nama ibu kandung. Hal ini sebelumnya sudah ditegaskan oleh Direktur Jenderal Penyelenggara Pos dan Informatika Kementerian Komunikasi dan Informatika Ahmad M Ramli. Dia mengatakan, data nama ibu kandung tidak diperlukan dalam proses registrasi pelanggan kartu SIM prabayar. \"Nama ibu kandung tidak perlu karena itu kami anggap sebagai <em>super password</em> dan itu riskan untuk di-<em>share</em>\", katanya saat sosialisasi registrasi kartu SIM berdasarkan data kependudukan di Kantor Kemkominfo, Rabu lalu.<br>&emsp; Sekadar informasi, data nama ibu kandung biasanya diminta dalam pendaftaran akun perbankan termasuk saat nasabah mengisi aplikasi kartu kredit. Karena berhubungan dengan transaksi finansial, nama ibu kandung disebut sebagai <em>super password</em> dan riskan dibagikan.<bremsp;  Ada pun cara registrasi kartu perdana (pelanggan prabayar baru) adalah mengirimkan SMS ke 4444 dengan mengetik NIK#NomorKK#, sedangkan untuk pelanggan lama cukup mengetik ULANG#NIK#Nomor KK#. Data yang dicantumkan harus sesuai dengan nomor NIK yang tertera di KTP pelanggan, demikian juga dengan nomor KK yang diregistrasikan. Tujuannya agar proses validasi ke database Ditjen Dukcapil berhasil dilakukan.<br><br>Nama ibu dianggap sebagai <em>super password</em> karena  ...."; 
	// soalTPA[11] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>&emsp; Pemerintah mewajibkan seluruh pelanggan kartu SIM prabayar untuk melakukan registrasi berdasarkan data kependudukan berupa nomor induk kependudukan (NIK) KTP dan nomor Kartu Keluarga (KK). Ketentuan ini berlaku bagi pelanggan kartu SIM prabayar baru maupun lama. Pemerintah menerapkan aturan ini mulai 31 Oktober 2017 dengan batas akhir registrasi ulang yang divalidasi NIK KTP dan nomor KK pada 28 Ferbruari 2018. <br> &emsp; Meski yang dibutuhkan untuk proses registrasi hanya NIK KTP dan nomor KK, di masyarakat beredar informasi palsu registrasi kartu SIM prabayar perlu menyertakan informasi nama ibu kandung. Hal ini sebelumnya sudah ditegaskan oleh Direktur Jenderal Penyelenggara Pos dan Informatika Kementerian Komunikasi dan Informatika Ahmad M Ramli. Dia mengatakan, data nama ibu kandung tidak diperlukan dalam proses registrasi pelanggan kartu SIM prabayar. \"Nama ibu kandung tidak perlu karena itu kami anggap sebagai <em>super password</em> dan itu riskan untuk di-<em>share</em>\", katanya saat sosialisasi registrasi kartu SIM berdasarkan data kependudukan di Kantor Kemkominfo, Rabu lalu.<br>&emsp; Sekadar informasi, data nama ibu kandung biasanya diminta dalam pendaftaran akun perbankan termasuk saat nasabah mengisi aplikasi kartu kredit. Karena berhubungan dengan transaksi finansial, nama ibu kandung disebut sebagai <em>super password</em> dan riskan dibagikan.<bremsp;  Ada pun cara registrasi kartu perdana (pelanggan prabayar baru) adalah mengirimkan SMS ke 4444 dengan mengetik NIK#NomorKK#, sedangkan untuk pelanggan lama cukup mengetik ULANG#NIK#Nomor KK#. Data yang dicantumkan harus sesuai dengan nomor NIK yang tertera di KTP pelanggan, demikian juga dengan nomor KK yang diregistrasikan. Tujuannya agar proses validasi ke database Ditjen Dukcapil berhasil dilakukan.<br><br>Paragraf keempat membahas tentang ...."; 
	// soalTPA[12] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>&emsp; Pemerintah mewajibkan seluruh pelanggan kartu SIM prabayar untuk melakukan registrasi berdasarkan data kependudukan berupa nomor induk kependudukan (NIK) KTP dan nomor Kartu Keluarga (KK). Ketentuan ini berlaku bagi pelanggan kartu SIM prabayar baru maupun lama. Pemerintah menerapkan aturan ini mulai 31 Oktober 2017 dengan batas akhir registrasi ulang yang divalidasi NIK KTP dan nomor KK pada 28 Ferbruari 2018. <br> &emsp; Meski yang dibutuhkan untuk proses registrasi hanya NIK KTP dan nomor KK, di masyarakat beredar informasi palsu registrasi kartu SIM prabayar perlu menyertakan informasi nama ibu kandung. Hal ini sebelumnya sudah ditegaskan oleh Direktur Jenderal Penyelenggara Pos dan Informatika Kementerian Komunikasi dan Informatika Ahmad M Ramli. Dia mengatakan, data nama ibu kandung tidak diperlukan dalam proses registrasi pelanggan kartu SIM prabayar. \"Nama ibu kandung tidak perlu karena itu kami anggap sebagai <em>super password</em> dan itu riskan untuk di-<em>share</em>\", katanya saat sosialisasi registrasi kartu SIM berdasarkan data kependudukan di Kantor Kemkominfo, Rabu lalu.<br>&emsp; Sekadar informasi, data nama ibu kandung biasanya diminta dalam pendaftaran akun perbankan termasuk saat nasabah mengisi aplikasi kartu kredit. Karena berhubungan dengan transaksi finansial, nama ibu kandung disebut sebagai <em>super password</em> dan riskan dibagikan.<bremsp;  Ada pun cara registrasi kartu perdana (pelanggan prabayar baru) adalah mengirimkan SMS ke 4444 dengan mengetik NIK#NomorKK#, sedangkan untuk pelanggan lama cukup mengetik ULANG#NIK#Nomor KK#. Data yang dicantumkan harus sesuai dengan nomor NIK yang tertera di KTP pelanggan, demikian juga dengan nomor KK yang diregistrasikan. Tujuannya agar proses validasi ke database Ditjen Dukcapil berhasil dilakukan.<br><br>Pernyataan yang benar sesuai dengan bacaan di atas adalah ...."; 
	// soalTPA[13] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>&emsp; Pemerintah mewajibkan seluruh pelanggan kartu SIM prabayar untuk melakukan registrasi berdasarkan data kependudukan berupa nomor induk kependudukan (NIK) KTP dan nomor Kartu Keluarga (KK). Ketentuan ini berlaku bagi pelanggan kartu SIM prabayar baru maupun lama. Pemerintah menerapkan aturan ini mulai 31 Oktober 2017 dengan batas akhir registrasi ulang yang divalidasi NIK KTP dan nomor KK pada 28 Ferbruari 2018. <br> &emsp; Meski yang dibutuhkan untuk proses registrasi hanya NIK KTP dan nomor KK, di masyarakat beredar informasi palsu registrasi kartu SIM prabayar perlu menyertakan informasi nama ibu kandung. Hal ini sebelumnya sudah ditegaskan oleh Direktur Jenderal Penyelenggara Pos dan Informatika Kementerian Komunikasi dan Informatika Ahmad M Ramli. Dia mengatakan, data nama ibu kandung tidak diperlukan dalam proses registrasi pelanggan kartu SIM prabayar. \"Nama ibu kandung tidak perlu karena itu kami anggap sebagai <em>super password</em> dan itu riskan untuk di-<em>share</em>\", katanya saat sosialisasi registrasi kartu SIM berdasarkan data kependudukan di Kantor Kemkominfo, Rabu lalu.<br>&emsp; Sekadar informasi, data nama ibu kandung biasanya diminta dalam pendaftaran akun perbankan termasuk saat nasabah mengisi aplikasi kartu kredit. Karena berhubungan dengan transaksi finansial, nama ibu kandung disebut sebagai <em>super password</em> dan riskan dibagikan.<bremsp;  Ada pun cara registrasi kartu perdana (pelanggan prabayar baru) adalah mengirimkan SMS ke 4444 dengan mengetik NIK#NomorKK#, sedangkan untuk pelanggan lama cukup mengetik ULANG#NIK#Nomor KK#. Data yang dicantumkan harus sesuai dengan nomor NIK yang tertera di KTP pelanggan, demikian juga dengan nomor KK yang diregistrasikan. Tujuannya agar proses validasi ke database Ditjen Dukcapil berhasil dilakukan.<br><br>Kata riskan pada paragraf ketiga berarti ....";
	soalTPA[14] = "$${p^3q^2 - p^3 - 3p^3} / {q^5 - 3q^4 + 2q^3} = ... $$";
	soalTPA[15] = "$$`text 'Jika ' m/n = 3/5 `text ' dan ' p/m = 2/7, `text ' maka ' n/p = ...$$";
	soalTPA[16] = "Kotak berisi 100 bola merah dan 50 bola putih. 15 bola merah dan 25 bola putih sudah rusak. Jika diambil satu bola acak dari kotak tersebut, maka peluang terpilihnya bola yang sudah rusak adalah ... ";
	soalTPA[17] = "$${4,321 x 2,234 - 1,234 x 5,231} / {-1,234x3,321 + 4,321 x 0,234} = ...$$";
	soalTPA[18] = "$$`text 'Jika ' x = 1/10 - 1/19 `text ' dan ' y = 1/21 - 1/23, `text ' maka ' ...$$";
	soalTPA[19] = "$$`text 'Jika ' a = 4^x + 4^x + 4^x + 4^x `text ' dan ' b = 4^{x+1},`text ' maka ' ...$$";
	soalTPA[20] = "$$`text 'Diketahui ' a > b, a>c, `text ' dan ' b>c, `text ' dengan ' a,b,c>0 `text '. Jika ' x = a/b$$<br>$$`text 'dan ' y = a/c, `text ' maka ' ...$$";
	soalTPA[21] = "Jika 3 < 𝑋 < 6 dan 2 < 𝑌 < 5, dengan 𝑋, 𝑌 adalah bilangan bulat, maka ....";
	soalTPA[22] = "Jika 𝑥 = jumlah bilangan kelipatan 8 antara 1 dan 100.000, dan 𝑦 = jumlah bilangan kelipatan 4 antara 1 dan 100.000, maka ...";
	soalTPA[23] = "5 tahun lalu Aristu berusia 3 kali usia adiknya. Saat itu usia Aristu adalah 15 tahun. Jika usia Aristu sekarang dua kali lebih tua daripada adiknya, maka berapakah usia Aristu dan adiknya saat ini?";
	soalTPA[24] = "Suatu pekerjaan diselesaikan oleh 8 orang dalam waktu 4 hari. Berapa orang yang harus ditambahkan jika pekerjaan tersebut harus diselesaikan dalam waktu setengah hari saja?";
	soalTPA[25] = "Untuk menganalisis data, suatu komputer memerlukan waktu 2 11/12 jam. Jika komputer mulai menganalisis data pada pukul 22.40, maka komputer akan selesai menganalisis data pada pukul ....";
	soalTPA[26] = "Ani mempunyai saudara perempuan yang banyaknya dua kali saudara laki-lakinya. Jika Ardi adalah saudara laki-laki Ani dan Ardi mengatakan bahwa Ardi hanya memiliki satu saudara laki-laki, maka keluarga Ani terdiri dari berapa bersaudara?";
	soalTPA[27] = "Anggit adalah seorang mahasiswa yang memperoleh nilai-nilai 82, 60, 77, 70, dan 65 untuk lima ujian mata kuliah yang diambilnya. Setelah itu Anggit mengikuti satu ujian lagi sehingga rata-rata nilainya menjadi 75. Berapakah nilai ujian terakhirnya?";
	soalTPA[28] = "Lodi meninggalkan kota A pukul 06.30 dan tiba di kota B pukul 12.00. Jika dia mengendarai mobilnya dengan kecepatan rata-rata 40 km/jam, dan dia berhenti satu jam untuk makan. Berapa km kah antara jarak kota A dan kota B?";
	soalTPA[29] = "Jika sisi persegi P adalah 30% dari sisi persegi Q, maka berapa persenkah luas persegi P dari persegi Q?";
	soalTPA[30] = "Selisih kuadrat dua buah bilangan adalah 12. Jika jumlah kedua bilangan tersebut adalah 6, maka selisih kedua bilangan tersebut adalah ....";
	soalTPA[31] = "Dari suatu survey kepada 30 orang, diperoleh data bahwa 10 orang menyukai Soto, 21 orang menyukai Bakso, dan 3 orang menyukai keduanya. Jumlah orang yang tidak menyukai keduanya adalah ....";
	soalTPA[32] = "Putra memiliki sebuah kotak berisi 𝑥 bola warna merah, 𝑦 bola kuning, dan 𝑧 bola hijau. Jika diambil sebuah bola secara acak, maka peluang terambilnya bola warna merah atau kuning adalah ....";
	soalTPA[33] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>625, 1296, 25, 36, 5, 6, ...";
	soalTPA[34] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>3, 4, 9, 32, 155, ...";
	soalTPA[35] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>O, M, L, K, I, I, ...";
	soalTPA[36] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>F, Z, I, V, L, R, ..., ..., ...";
	soalTPA[37] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Jika 𝑥 adalah kelipatan 4, maka 𝑥 kelipatan 2.<br>Jika 𝑥 kelipatan 2, maka 𝑥 genap.<br>Ternyata 𝑥 ganjil.";
	soalTPA[38] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Semua mahasiswa universitas A memiliki IQ lebih dari 100.<br>Sebagian warga Sukabaca adalah mahasiswa universitas A";
	soalTPA[39] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Jika mahasiswa kampus P mendapatkan IPK tidak lebih dari 2,5 maka tidak boleh mengambil mata kuliah lebih dari 18 sks.<br>Morgan adalah mahasiswa kampus P mengambil mata kuliah sebanyak 17 sks";
	soalTPA[40] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Tidak semua mahasiswa meraih IPK <em>cumlaude</em>. Taka adalah mahasiswa";
	soalTPA[41] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut</b><br><br>Enam calon pegawai, Inzaghi, Joko, Kimmich, Lemar, Mertens, dan Niguez akan diwawancarai secara bergiliran. Beberapa fakta tentang urutan wawancara mereka adalah sebagai berikut: <br>• Kimmich akan diwawancarai pada urutan keempat atau terakhir<br>• Lemar akan diwawancarai setelah Inzaghi<br>• Joko akan diwawancarai sebelum Kimmich<br>• Niguez akan diwawancarai sebelum Lemar<br><br>Jika Mertens diwawancarai pada urutan keenam, maka Lemar berada di urutan ....";
	soalTPA[42] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut</b><br><br>Enam calon pegawai, Inzaghi, Joko, Kimmich, Lemar, Mertens, dan Niguez akan diwawancarai secara bergiliran. Beberapa fakta tentang urutan wawancara mereka adalah sebagai berikut: <br>• Kimmich akan diwawancarai pada urutan keempat atau terakhir<br>• Lemar akan diwawancarai setelah Inzaghi<br>• Joko akan diwawancarai sebelum Kimmich<br>• Niguez akan diwawancarai sebelum Lemar<br><br>Pernyataan yang tidak mungkin terjadi adalah ....";
	soalTPA[43] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut</b><br><br>Enam calon pegawai, Inzaghi, Joko, Kimmich, Lemar, Mertens, dan Niguez akan diwawancarai secara bergiliran. Beberapa fakta tentang urutan wawancara mereka adalah sebagai berikut: <br>• Kimmich akan diwawancarai pada urutan keempat atau terakhir<br>• Lemar akan diwawancarai setelah Inzaghi<br>• Joko akan diwawancarai sebelum Kimmich<br>• Niguez akan diwawancarai sebelum Lemar<br><br>Dari urutan berikut (dari yang pertama ke terakhir), manakah yang mungkin terjadi?";
	soalTPA[44] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut</b><br><br>Enam calon pegawai, Inzaghi, Joko, Kimmich, Lemar, Mertens, dan Niguez akan diwawancarai secara bergiliran. Beberapa fakta tentang urutan wawancara mereka adalah sebagai berikut: <br>• Kimmich akan diwawancarai pada urutan keempat atau terakhir<br>• Lemar akan diwawancarai setelah Inzaghi<br>• Joko akan diwawancarai sebelum Kimmich<br>• Niguez akan diwawancarai sebelum Lemar<br><br>Pernyataan yang pasti terjadi adalah ....";
	soalTPA[45] = "<b>Untuk soal nomor 46-47, perhatikan ilustrasi tersebut</b><br><br>Di Universitas SS terdapat enam jurusan yaitu Psikologi, Kedokteran, Akuntansi, Matematika, Teknik, dan Bahasa Inggris. Dari jurusan-jurusan tersebut, Endang, Samuel, dan Liam harus memilih jurusan yang berbeda, dengan aturan:<br>• Apabila ada yang memilih akuntansi, maka tidak ada yang memilih teknik dan apabila ada yang memilih kedokteran, maka tidak ada yang memilih matematika.<br>• Satu di antara mereka memilih psikologi.<br>• Samuel tidak memilih bahasa Inggris dan Liam tidak memilih kedokteran maupun bahasa Inggris.<br><br>Apabila Endang memilih jurusan teknik dan Samuel tidak memilih jurusan psikologi, maka Liam akan memilih jurusan .... ";
	soalTPA[46] = "<b>Untuk soal nomor 46-47, perhatikan ilustrasi tersebut</b><br><br>Di Universitas SS terdapat enam jurusan yaitu Psikologi, Kedokteran, Akuntansi, Matematika, Teknik, dan Bahasa Inggris. Dari jurusan-jurusan tersebut, Endang, Samuel, dan Liam harus memilih jurusan yang berbeda, dengan aturan:<br>• Apabila ada yang memilih akuntansi, maka tidak ada yang memilih teknik dan apabila ada yang memilih kedokteran, maka tidak ada yang memilih matematika.<br>• Satu di antara mereka memilih psikologi.<br>• Samuel tidak memilih bahasa Inggris dan Liam tidak memilih kedokteran maupun bahasa Inggris.<br><br>Endang, Samuel, dan Liam berturut-turut dapat memilih jurusan .... ";
	soalTPA[47] = "<img src='../../assets/img/48/soal.jpg'>";
	soalTPA[48] = "<img src='../../assets/img/49/soal.jpg'>";
	soalTPA[49] = "<img src='../../assets/img/50/soal.jpg'>";

	soalTPA[50] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Not only … places of beauty, but they also serve scientific and educational purposes as well.";
	soalTPA[51] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>I’m so confused why he opened the envelope with … hand.";
	soalTPA[52] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Sasa can answer every question in the whiteboard correctly. She must be feeling … right now.";
	soalTPA[53] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Among the students will the club captain … by the teacher.";
	soalTPA[54] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>She is so happy after getting … from his boyfriend.";
	soalTPA[55] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>… a second, I’m waiting for my laundry to finish.";
	soalTPA[56] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>My mother used to teach me that … is not good for our activity.";
	soalTPA[57] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>I don’t like Mira’s … to another school.";
	soalTPA[58] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Shutter Island, …, is one of the best mystery movies that I ever watched";
	soalTPA[59] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>… located besides my great-grandparent’s house is so creepy.";
	soalTPA[60] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>My sister speaks English …";
	soalTPA[61] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>No sooner … the classroom than the students stood up.";
	soalTPA[62] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>The professor asked me, “have you finished your research?” The professor asked me …";
	soalTPA[63] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>... they said the construction was complete, there were still many builders working on the hotel when we arrived.";
	soalTPA[64] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>In this level of treason, the king would command that you …";
	soalTPA[65] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br>At the time the clerks were <b><u>processing</u></b> the applications, Harry figured that it <b><u>will take</u></b> four hours for <b><u>his</u></b> <b><u>to be reviewed.</u></b>";
	soalTPA[66] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br>We had better <b><u>to review</u></b> this chapter <b><u>carefully</u></b> because we will have <b><u>some</u></b> questions <b><u>on it on our</u></b> test tomorrow";
	soalTPA[67] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br><b><u>The</u></b> little boy’s mother bought <b><u>him</u></b> a <b><u>five-speeds</u></b> racing bicycle <b><u>for his</u></b> birthday.";
	soalTPA[68] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br>If Rudy <b><u>would have studied</u></b> German <b><u>in college</u></b>, he would not have found <b><u>the scientific</u></b> terminology <b><u>so difficult to understand.</u></b>";
	soalTPA[69] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br><b><u>Although</u></b> the quantity <b><u>was</u></b> small, we had <b><u>supplies enough</u></b> to finish <b><u>the</u></b> experiment.";
	soalTPA[70] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>Jupiter is the largest planet in the solar system. Jupiter is so big that all the other planets in the solar system could fit inside it. More than 1,300 Earths would fit inside Jupiter. Jupiter is the fifth planet from the sun. From Earth, it is almost always the second brightest planet in the night sky. Venus is brighter. The planet is named after another Jupiter. He was the king of the gods in old Roman stories. The planet Jupiter is not a solid like Earth is. Jupiter is made of gases. It is made of the same things that stars are made of. In fact, Jupiter would have become a star if it were about 80 times bigger.<br>&emsp; The planet is a giant ball of gas. So Jupiter is called a \"gas giant\" planet. The planet is covered in thick red, brown, yellow and white clouds. The clouds make the planet look like it has stripes. Jupiter is very windy. Its winds blow more than 400 mph. That is faster than hurricanes and tornadoes. Jupiter is famous for its Great Red Spot. The swirling, red spot is a giant spinning storm. It looks like a hurricane. Almost 3 1/2 Earths would fit across the storm. Jupiter has three thin rings. Its rings are not like Saturn's rings. Jupiter's rings are hard to see. NASA’s Voyager 1 spacecraft found the rings in 1979. Jupiter’s rings are made up mostly of tiny bits of dust.<br>&emsp; Jupiter rotates, or spins, faster than any other planet. Earth takes almost 24 hours to spin once. Jupiter only takes 10. So a day on Jupiter is about 10 hours long. It is so far from the sun that Jupiter takes 12 Earth years to make one trip around the sun. That means one year on Jupiter is 12 years on Earth. It is very cold on Jupiter. Gravity is different, too. There is more gravity on Jupiter than on Earth. Someone who weighs 100 pounds on Earth would weigh about 240 pounds on Jupiter.<br><br>Which one is not true about Jupiter?";
	soalTPA[71] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>Jupiter is the largest planet in the solar system. Jupiter is so big that all the other planets in the solar system could fit inside it. More than 1,300 Earths would fit inside Jupiter. Jupiter is the fifth planet from the sun. From Earth, it is almost always the second brightest planet in the night sky. Venus is brighter. The planet is named after another Jupiter. He was the king of the gods in old Roman stories. The planet Jupiter is not a solid like Earth is. Jupiter is made of gases. It is made of the same things that stars are made of. In fact, Jupiter would have become a star if it were about 80 times bigger.<br>&emsp; The planet is a giant ball of gas. So Jupiter is called a \"gas giant\" planet. The planet is covered in thick red, brown, yellow and white clouds. The clouds make the planet look like it has stripes. Jupiter is very windy. Its winds blow more than 400 mph. That is faster than hurricanes and tornadoes. Jupiter is famous for its Great Red Spot. The swirling, red spot is a giant spinning storm. It looks like a hurricane. Almost 3 1/2 Earths would fit across the storm. Jupiter has three thin rings. Its rings are not like Saturn's rings. Jupiter's rings are hard to see. NASA’s Voyager 1 spacecraft found the rings in 1979. Jupiter’s rings are made up mostly of tiny bits of dust.<br>&emsp; Jupiter rotates, or spins, faster than any other planet. Earth takes almost 24 hours to spin once. Jupiter only takes 10. So a day on Jupiter is about 10 hours long. It is so far from the sun that Jupiter takes 12 Earth years to make one trip around the sun. That means one year on Jupiter is 12 years on Earth. It is very cold on Jupiter. Gravity is different, too. There is more gravity on Jupiter than on Earth. Someone who weighs 100 pounds on Earth would weigh about 240 pounds on Jupiter.<br><br>According to the passage, why Jupiter is called as a gas giant planet?";
	soalTPA[72] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>Jupiter is the largest planet in the solar system. Jupiter is so big that all the other planets in the solar system could fit inside it. More than 1,300 Earths would fit inside Jupiter. Jupiter is the fifth planet from the sun. From Earth, it is almost always the second brightest planet in the night sky. Venus is brighter. The planet is named after another Jupiter. He was the king of the gods in old Roman stories. The planet Jupiter is not a solid like Earth is. Jupiter is made of gases. It is made of the same things that stars are made of. In fact, Jupiter would have become a star if it were about 80 times bigger.<br>&emsp; The planet is a giant ball of gas. So Jupiter is called a \"gas giant\" planet. The planet is covered in thick red, brown, yellow and white clouds. The clouds make the planet look like it has stripes. Jupiter is very windy. Its winds blow more than 400 mph. That is faster than hurricanes and tornadoes. Jupiter is famous for its Great Red Spot. The swirling, red spot is a giant spinning storm. It looks like a hurricane. Almost 3 1/2 Earths would fit across the storm. Jupiter has three thin rings. Its rings are not like Saturn's rings. Jupiter's rings are hard to see. NASA’s Voyager 1 spacecraft found the rings in 1979. Jupiter’s rings are made up mostly of tiny bits of dust.<br>&emsp; Jupiter rotates, or spins, faster than any other planet. Earth takes almost 24 hours to spin once. Jupiter only takes 10. So a day on Jupiter is about 10 hours long. It is so far from the sun that Jupiter takes 12 Earth years to make one trip around the sun. That means one year on Jupiter is 12 years on Earth. It is very cold on Jupiter. Gravity is different, too. There is more gravity on Jupiter than on Earth. Someone who weighs 100 pounds on Earth would weigh about 240 pounds on Jupiter.<br><br>The main idea of paragraph three is …";
	soalTPA[73] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>Jupiter is the largest planet in the solar system. Jupiter is so big that all the other planets in the solar system could fit inside it. More than 1,300 Earths would fit inside Jupiter. Jupiter is the fifth planet from the sun. From Earth, it is almost always the second brightest planet in the night sky. Venus is brighter. The planet is named after another Jupiter. He was the king of the gods in old Roman stories. The planet Jupiter is not a solid like Earth is. Jupiter is made of gases. It is made of the same things that stars are made of. In fact, Jupiter would have become a star if it were about 80 times bigger.<br>&emsp; The planet is a giant ball of gas. So Jupiter is called a \"gas giant\" planet. The planet is covered in thick red, brown, yellow and white clouds. The clouds make the planet look like it has stripes. Jupiter is very windy. Its winds blow more than 400 mph. That is faster than hurricanes and tornadoes. Jupiter is famous for its Great Red Spot. The swirling, red spot is a giant spinning storm. It looks like a hurricane. Almost 3 1/2 Earths would fit across the storm. Jupiter has three thin rings. Its rings are not like Saturn's rings. Jupiter's rings are hard to see. NASA’s Voyager 1 spacecraft found the rings in 1979. Jupiter’s rings are made up mostly of tiny bits of dust.<br>&emsp; Jupiter rotates, or spins, faster than any other planet. Earth takes almost 24 hours to spin once. Jupiter only takes 10. So a day on Jupiter is about 10 hours long. It is so far from the sun that Jupiter takes 12 Earth years to make one trip around the sun. That means one year on Jupiter is 12 years on Earth. It is very cold on Jupiter. Gravity is different, too. There is more gravity on Jupiter than on Earth. Someone who weighs 100 pounds on Earth would weigh about 240 pounds on Jupiter.<br><br>It can be inferred from that passage that gravity in Jupiter is …";
	soalTPA[74] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>Jupiter is the largest planet in the solar system. Jupiter is so big that all the other planets in the solar system could fit inside it. More than 1,300 Earths would fit inside Jupiter. Jupiter is the fifth planet from the sun. From Earth, it is almost always the second brightest planet in the night sky. Venus is brighter. The planet is named after another Jupiter. He was the king of the gods in old Roman stories. The planet Jupiter is not a solid like Earth is. Jupiter is made of gases. It is made of the same things that stars are made of. In fact, Jupiter would have become a star if it were about 80 times bigger.<br>&emsp; The planet is a giant ball of gas. So Jupiter is called a \"gas giant\" planet. The planet is covered in thick red, brown, yellow and white clouds. The clouds make the planet look like it has stripes. Jupiter is very windy. Its winds blow more than 400 mph. That is faster than hurricanes and tornadoes. Jupiter is famous for its Great Red Spot. The swirling, red spot is a giant spinning storm. It looks like a hurricane. Almost 3 1/2 Earths would fit across the storm. Jupiter has three thin rings. Its rings are not like Saturn's rings. Jupiter's rings are hard to see. NASA’s Voyager 1 spacecraft found the rings in 1979. Jupiter’s rings are made up mostly of tiny bits of dust.<br>&emsp; Jupiter rotates, or spins, faster than any other planet. Earth takes almost 24 hours to spin once. Jupiter only takes 10. So a day on Jupiter is about 10 hours long. It is so far from the sun that Jupiter takes 12 Earth years to make one trip around the sun. That means one year on Jupiter is 12 years on Earth. It is very cold on Jupiter. Gravity is different, too. There is more gravity on Jupiter than on Earth. Someone who weighs 100 pounds on Earth would weigh about 240 pounds on Jupiter.<br><br>The pronoun “it” in line 3 refers to …";
	//pilihan
	var opsi = ArrOpsi(soalTPA.length,6); //deklarasi 2d array untuk pilihan
	// var pilihan = '';
	opsi [0][0] = "A. Pemeriksaan terhadap seseorang melalui pertanyaan";//A
	opsi [0][1] = "B. Variasi amplitudo gelombang";//B
	opsi [0][2] = "C. Ikut campur dalam urusan";//C
	opsi [0][3] = "D. Penyelaan pembicaraan";//D
	opsi [0][4] = "E. Penambahan frekuensi";//E
	opsi [0][5] = "2";//kunci jawaban

	opsi [1][0] = "A. Penebusan kekalahan";//A
	opsi [1][1] = "B. Bersifat rawan";//B
	opsi [1][2] = "C. Peninjauan kembali untuk perbaikan";//C
	opsi [1][3] = "D. Pengembalian uang";//D
	opsi [1][4] = "E. Proses mengklaim dana dari asuransi";//E
	opsi [1][5] = "1";//kunci jawaban

	opsi [2][0] = "A. Ancaman";//A
	opsi [2][1] = "B. Intisari";//B
	opsi [2][2] = "C. Suntikan";//C
	opsi [2][3] = "D. Keakraban";//D
	opsi [2][4] = "E. Pembalikan";//E
	opsi [2][5] = "4";//kunci jawaban

	opsi [3][0] = "A. Filsafat";//A
	opsi [3][1] = "B. Aksioma";//B
	opsi [3][2] = "C. Hukum";//C
	opsi [3][3] = "D. Maklumat";//D
	opsi [3][4] = "E. Aturan";//E
	opsi [3][5] = "2";//kunci jawaban

	opsi [4][0] = "A. Malas";//A
	opsi [4][1] = "B. Berantakan";//B
	opsi [4][2] = "C. Loyal";//C
	opsi [4][3] = "D. Akrab";//D
	opsi [4][4] = "E. Hemat";//E
	opsi [4][5] = "3";//kunci jawaban

	opsi [5][0] = "A. Absah";//A
	opsi [5][1] = "B. Sah";//B
	opsi [5][2] = "C. Ilegal";//C
	opsi [5][3] = "D. Isbat";//D
	opsi [5][4] = "E. Buruk";//E
	opsi [5][5] = "3";//kunci jawaban

	opsi [6][0] = "A. Penisilin : Fleming";//A
	opsi [6][1] = "B. Lampu pijar : Rontgen";//B
	opsi [6][2] = "C. Elektron : Newton";//C
	opsi [6][3] = "D. Radar : Marconi";//D
	opsi [6][4] = "E. . Piala : Nobel";//E
	opsi [6][5] = "1";//kunci jawaban

	opsi [7][0] = "A. Urbanisasi";//A
	opsi [7][1] = "B. Nomaden";//B
	opsi [7][2] = "C. Menetap";//C
	opsi [7][3] = "D. Hijrah";//D
	opsi [7][4] = "E. Lugas";//E
	opsi [7][5] = "3";//kunci jawaban

	// opsi [8][0] = "A. Air : dingin : lembab";//A
	// opsi [8][1] = "B. Udara : segar : hangat";//B
	// opsi [8][2] = "C. Es : beku : dingin";//C
	// opsi [8][3] = "D. Kayu : Keras : Panjang";//D
	// opsi [8][4] = "E. Besi : panas : memuai";//E
	// opsi [8][5] = "3";//kunci jawaban

	// opsi [9][0] = "A. Obama : Presiden";//A
	// opsi [9][1] = "B. Michael Jackson : King of pop";//B
	// opsi [9][2] = "C. Michael Schmacer : Pembalap";//C
	// opsi [9][3] = "D. Madona : Penyanyi";//D
	// opsi [9][4] = "E. Michael Gorbachev : Pemimpin Soviet";//E
	// opsi [9][5] = "2";//kunci jawaban

	// opsi [10][0] = "A. Diperlukan dalam proses registrasi pelanggan kartu SIM prabayar";//A
	// opsi [10][1] = "B. Menghambat proses validasi ke datatbase Ditjen Dukcapil";//B
	// opsi [10][2] = "C. Berhubungan dengan transaksi finansial";//C
	// opsi [10][3] = "D. Dapat digunakan sebagai password dengan tingkat kesulitan tinggi";//D
	// opsi [10][4] = "E. Diperlukan dalam proses validasi";//E
	// opsi [10][5] = "3";//kunci jawaban

	// opsi [11][0] = "A. Data yang dicantumkan ketika registrasi ";//A
	// opsi [11][1] = "B. Database Ditjen Dukcapil";//B
	// opsi [11][2] = "C. NIK pada KTP";//C
	// opsi [11][3] = "D. Cara registrasi kartu perdana";//D
	// opsi [11][4] = "E. Penyebab nama ibu disebut sebagai super password";//E
	// opsi [11][5] = "4";//kunci jawaban

	// opsi [12][0] = "A. Aturan Registrasi kartu SIM prabayar dimulai pada 28 Ferbruari 2018";//A
	// opsi [12][1] = "B. Registrasi kartu SIM prabayar perlu menyertakan informasi nama ibu kandung";//B
	// opsi [12][2] = "C. Data yang dicantumkan tidak harus sesuai dengan nomor NIK yang tertera di KTP pelanggan";//C
	// opsi [12][3] = "D. Data nama ibu kandung biasanya diminta dalam pendaftaran SIM prabayar";//D
	// opsi [12][4] = "E. Nama ibu kandung berhubungan dengan transaksi finansia";//E
	// opsi [12][5] = "5";//kunci jawaban

	// opsi [13][0] = "A. Rahasia";//A
	// opsi [13][1] = "B. Privat";//B
	// opsi [13][2] = "C. Pribadi";//C
	// opsi [13][3] = "D. Berbahaya";//D
	// opsi [13][4] = "E. Tidak boleh disebarkan";//E
	// opsi [13][5] = "4";//kunci jawaban

	opsi [14][0] = "$$`text 'A. ' {p^3(p+2)}/{q^3(q-1)}$$";//A
	opsi [14][1] = "$$`text 'B. '{q^3}/{p^3(p-1)}$$";//B
	opsi [14][2] = "$$`text 'C. '{p^3(q+2)}/{q^3(q-1)}$$";//C
	opsi [14][3] = "$$`text 'D. 'q^3/p^3$$";//D
	opsi [14][4] = "$$`text 'E. '1$$";//E
	opsi [14][5] = "3";//kunci jawaban

	opsi [15][0] = "$$`text 'A. '3 {1/6}$$ ";//A
	opsi [15][1] = "$$`text 'B. '6/35$$ ";//B
	opsi [15][2] = "$$`text 'C. '3/21$$ ";//C
	opsi [15][3] = "$$`text 'D. '5{5/6}$$ ";//D
	opsi [15][4] = "$$`text 'E. '7{1/12}$$ ";//E
	opsi [15][5] = "4";//kunci jawaban

	opsi [16][0] = "$$`text 'A. '13/20$$";//A
	opsi [16][1] = "$$`text 'B. '4/15$$";//B
	opsi [16][2] = "$$`text 'C. '1/3$$";//C
	opsi [16][3] = "$$`text 'D. '11/15$$";//D
	opsi [16][4] = "$$`text 'E. '7/20$$";//E
	opsi [16][5] = "2";//kunci jawaban

	opsi [17][0] = "A. 2";//A
	opsi [17][1] = "B. -2";//B
	opsi [17][2] = "C. 0";//C
	opsi [17][3] = "D. 1";//D
	opsi [17][4] = "E. -1";//E
	opsi [17][5] = "5";//kunci jawaban

	opsi [18][0] = "A. x > y";//A
	opsi [18][1] = "B. x < y";//B
	opsi [18][2] = "C. x = y";//C
	opsi [18][3] = "D. x > y<sup>2</sup>";//D
	opsi [18][4] = "E. Hubungan x dan y tidak dapat ditentukan";//E
	opsi [18][5] = "2";//kunci jawaban

	opsi [19][0] = "A. a > b";//A
	opsi [19][1] = "B. a < b";//B
	opsi [19][2] = "C. a = b";//C
	opsi [19][3] = "D. a > b<sup>2</sup>";//D
	opsi [19][4] = "E. Hubungan a dan b tidak dapat ditentukan";//E
	opsi [19][5] = "3";//kunci jawaban

	opsi [20][0] = "A. x > y";//A
	opsi [20][1] = "B. x < y";//B
	opsi [20][2] = "C. x = y";//C
	opsi [20][3] = "D. x = 2y<sup>2</sup>";//D
	opsi [20][4] = "E. Hubungan x dan y tidak dapat ditentukan";//E
	opsi [20][5] = "2";//kunci jawaban

	opsi [21][0] = "A. X > Y";//A
	opsi [21][1] = "B. X < Y";//B
	opsi [21][2] = "C. X = Y";//C
	opsi [21][3] = "D. X = Y + 1";//D
	opsi [21][4] = "E. Hubungan X dan Y tidak dapat ditentukan";//E
	opsi [21][5] = "5";//kunci jawaban

	opsi [22][0] = "A. x > y";//A
	opsi [22][1] = "B. x < y";//B
	opsi [22][2] = "C. x = y";//C
	opsi [22][3] = "D. x = y<sup>2</sup>";//D
	opsi [22][4] = "E. Hubungan x dan y tidak dapat ditentukan";//E
	opsi [22][5] = "2";//kunci jawaban

	opsi [23][0] = "A. 14 tahun dan 6 tahun";//A
	opsi [23][1] = "B. 15 tahun dan 5 tahun";//B
	opsi [23][2] = "C. 18 tahun dan 6 tahun";//C
	opsi [23][3] = "D. 20 tahun dan 10 tahun";//D
	opsi [23][4] = "E. 30 tahun dan 10 tahun";//E
	opsi [23][5] = "4";//kunci jawaban

	opsi [24][0] = "A. 64";//A
	opsi [24][1] = "B. 56";//B
	opsi [24][2] = "C. 48";//C
	opsi [24][3] = "D. 32";//D
	opsi [24][4] = "E. 16";//E
	opsi [24][5] = "2";//kunci jawaban

	opsi [25][0] = "A. 02.55";//A
	opsi [25][1] = "B. 01.45";//B
	opsi [25][2] = "C. 01.35";//C
	opsi [25][3] = "D. 00.35";//D
	opsi [25][4] = "E. 23.55";//E
	opsi [25][5] = "3";//kunci jawaban

	opsi [26][0] = "A. 8";//A
	opsi [26][1] = "B. 7";//B
	opsi [26][2] = "C. 6";//C
	opsi [26][3] = "D. 5";//D
	opsi [26][4] = "E. 4";//E
	opsi [26][5] = "2";//kunci jawaban

	opsi [27][0] = "96";//A
	opsi [27][1] = "95";//B
	opsi [27][2] = "94";//C
	opsi [27][3] = "92";//D
	opsi [27][4] = "90";//E
	opsi [27][5] = "1";//kunci jawaban

	opsi [28][0] = "A. 140 km";//A
	opsi [28][1] = "B. 150 km";//B
	opsi [28][2] = "C. 160 km";//C
	opsi [28][3] = "D. 180 km";//D
	opsi [28][4] = "E. 200 km";//E
	opsi [28][5] = "4";//kunci jawaban

	opsi [29][0] = "A. 9%";//A
	opsi [29][1] = "B. 18%";//B
	opsi [29][2] = "C. 40%";//C
	opsi [29][3] = "D. 60%";//D
	opsi [29][4] = "E. 96%";//E
	opsi [29][5] = "1";//kunci jawaban

	opsi [30][0] = "A. 2";//A
	opsi [30][1] = "B. 4";//B
	opsi [30][2] = "C. 6";//C
	opsi [30][3] = "D. 12";//D
	opsi [30][4] = "E. 18";//E
	opsi [30][5] = "1";//kunci jawaban

	opsi [31][0] = "A. 1";//A
	opsi [31][1] = "B. 2";//B
	opsi [31][2] = "C. 3";//C
	opsi [31][3] = "D. 4";//D
	opsi [31][4] = "E. 5";//E
	opsi [31][5] = "2";//kunci jawaban

	opsi [32][0] = "A. $1/{x+y}$";//A
	opsi [32][1] = "B. $1/{x+y+z}$";//B
	opsi [32][2] = "C. ${x+z}/{x+y+z}$";//C
	opsi [32][3] = "D. ${y+z}/{x+y+z}$";//D
	opsi [32][4] = "E. ${x+y}/{x+y+z}$";//E
	opsi [32][5] = "5";//kunci jawaban

	opsi [33][0] = "A. 4";//A
	opsi [33][1] = "B. 5";//B
	opsi [33][2] = "C. √5";//C
	opsi [33][3] = "D. √6";//D
	opsi [33][4] = "E. 6";//E
	opsi [33][5] = "3";//kunci jawaban

	opsi [34][0] = "A. 826";//A
	opsi [34][1] = "B. 924";//B
	opsi [34][2] = "C. 1028";//C
	opsi [34][3] = "D. 1532";//D
	opsi [34][4] = "E. 1624";//E
	opsi [34][5] = "2";//kunci jawaban

	opsi [35][0] = "A. F";//A
	opsi [35][1] = "B. J";//B
	opsi [35][2] = "C. M";//C
	opsi [35][3] = "D. O";//D
	opsi [35][4] = "E. R";//E
	opsi [35][5] = "1";//kunci jawaban

	opsi [36][0] = "A. O, N, R";//A
	opsi [36][1] = "B. N, N, Q";//B
	opsi [36][2] = "C. N, O, R";//C
	opsi [36][3] = "D. O, N, Q";//D
	opsi [36][4] = "E. O, O, R";//E
	opsi [36][5] = "1";//kunci jawaban

	opsi [37][0] = "A. x adalah kelipatan 4";//A
	opsi [37][1] = "B. 𝑥 adalah kelipatan 2";//B
	opsi [37][2] = "C. 𝑥 genap";//C
	opsi [37][3] = "D. 𝑥 bukan kelipatan 4";//D
	opsi [37][4] = "E. Tidak dapat disimpulkan";//E
	opsi [37][5] = "4";//kunci jawaban

	opsi [38][0] = "A. Semua mahasiswa universitas A adalah warga Sukabaca";//A
	opsi [38][1] = "B. Semua warga Sukabaca memiliki IQ lebih dari 100";//B
	opsi [38][2] = "C. Sebagian mahasiswa universitas A memiliki IQ dibawah 100";//C
	opsi [38][3] = "D. Sebagian warga Sukabaca memiliki IQ lebih dari 100";//D
	opsi [38][4] = "E. Tidak dapat disimpulkan";//E
	opsi [38][5] = "4";//kunci jawaban

	opsi [39][0] = "A. Morgan mendapatkan IPK tidak lebih dari 2,5";//A
	opsi [39][1] = "B. Morgan tidak boleh mengambil mata kuliah lebih dari 18 sks";//B
	opsi [39][2] = "C. Morgan bukan mahasiswa kampus P";//C
	opsi [39][3] = "D. Morgan harus mengulang ";//D
	opsi [39][4] = "E. Tidak dapat disimpulkan";//E
	opsi [39][5] = "5";//kunci jawaban

	opsi [40][0] = "A. Taka meraih IPK cumlaude";//A
	opsi [40][1] = "B. Taka bukan seorang mahasiswa";//B
	opsi [40][2] = "C. Taka tidak meraih IPK cumlaude";//C
	opsi [40][3] = "D. Taka harus meraih IPK cumlaude";//D
	opsi [40][4] = "E. Tidak dapat disimpulkan";//E
	opsi [40][5] = "5";//kunci jawaban

	opsi [41][0] = "A. Pertama";//A
	opsi [41][1] = "B. Kedua";//B
	opsi [41][2] = "C. Ketiga";//C
	opsi [41][3] = "D. Kelima";//D
	opsi [41][4] = "E. Tidak dapat ditentukan";//E
	opsi [41][5] = "4";//kunci jawaban

	opsi [42][0] = "A. Inzaghi diwawancarai pertama";//A
	opsi [42][1] = "B. Niguez diwawancarai pertama";//B
	opsi [42][2] = "C. Niguez diwawancarai terakhir";//C
	opsi [42][3] = "D. Mertens diwawancarai terakhir";//D
	opsi [42][4] = "E. Kimmich diwawancarai pada urutan keenam";//E
	opsi [42][5] = "3";//kunci jawaban

	opsi [43][0] = "A. Inzaghi, Lemar, Mertens, Niguez, Joko, Kimmich";//A
	opsi [43][1] = "B. Niguez, Mertens, Inzaghi, Kimmich, Joko, Lemar";//B
	opsi [43][2] = "C. Mertens, Joko, Inzaghi, Lemar, Niguez, Kimmich";//C
	opsi [43][3] = "D. Mertens, Niguez, Inzaghi, Kimmich, Joko, Lemar";//D
	opsi [43][4] = "E. Joko, Inzaghi, Niguez, Mertens, Lemar, Kimmich";//E
	opsi [43][5] = "5";//kunci jawaban

	opsi [44][0] = "A. Inzaghi diwawancarai pertama";//A
	opsi [44][1] = "B. Kimmich diwawancarai setelah Joko";//B
	opsi [44][2] = "C. Mertens diwawancarai pada urutan keenam";//C
	opsi [44][3] = "D. Niguez diwawancarai setelah Lemar";//D
	opsi [44][4] = "E. Lemar diwawancarai sebelum Inzaghi";//E
	opsi [44][5] = "2";//kunci jawaban

	opsi [45][0] = "A. Kedokteran";//A
	opsi [45][1] = "B. Akuntansi";//B
	opsi [45][2] = "C. Matematika";//C
	opsi [45][3] = "D. Bahasa Inggris";//D
	opsi [45][4] = "E. Psikologi";//E
	opsi [45][5] = "5";//kunci jawaban

	opsi [46][0] = "A. Psikologi, Kedokteran, Teknik";//A
	opsi [46][1] = "B. Psikologi, Kedokteran, Matematika";//B
	opsi [46][2] = "C. Akuntansi, Psikologi, Teknik";//C
	opsi [46][3] = "D. Matematika, Bahasa Inggris, Psikologi";//D
	opsi [46][4] = "E. Matematika, Kedokteran, Psikologi";//E
	opsi [46][5] = "1";//kunci jawaban

	opsi [47][0] = "A. <img src='../../assets/img/48/A.jpg'>";//A
	opsi [47][1] = "B. <img src='../../assets/img/48/B.jpg'>";//B
	opsi [47][2] = "C. <img src='../../assets/img/48/C.jpg'>";//C
	opsi [47][3] = "D. <img src='../../assets/img/48/D.jpg'>";//D
	opsi [47][4] = "E. <img src='../../assets/img/48/E.jpg'>";//E
	opsi [47][5] = "2";//kunci jawaban

	opsi [48][0] = "A. <img src='../../assets/img/49/A.jpg'>";//A
	opsi [48][1] = "B. <img src='../../assets/img/49/B.jpg'>";//B
	opsi [48][2] = "C. <img src='../../assets/img/49/C.jpg'>";//C
	opsi [48][3] = "D. <img src='../../assets/img/49/D.jpg'>";//D
	opsi [48][4] = "E. <img src='../../assets/img/49/E.jpg'>";//E
	opsi [48][5] = "1";//kunci jawaban

	opsi [49][0] = "A. <img src='../../assets/img/50/A.jpg'>";//A
	opsi [49][1] = "B. <img src='../../assets/img/50/B.jpg'>";//B
	opsi [49][2] = "C. <img src='../../assets/img/50/C.jpg'>";//C
	opsi [49][3] = "D. <img src='../../assets/img/50/D.jpg'>";//D
	opsi [49][4] = "E. <img src='../../assets/img/50/E.jpg'>";//E
	opsi [49][5] = "3";//kunci jawaban

	opsi [50][0] = "A. are botanical gardens";//A
	opsi [50][1] = "B. botanical gardens to be";//B
	opsi [50][2] = "C. to be botanical gardens";//C
	opsi [50][3] = "D. botanical gardens are";//D
	opsi [50][4] = "";//D
	opsi [50][5] = "1";//kunci jawaban

	opsi [51][0] = "A. tremble";//A
	opsi [51][1] = "B. trembling";//B
	opsi [51][2] = "C. trembled";//C
	opsi [51][3] = "D. is trembling";//D
	opsi [51][4] = "";//D
	opsi [51][5] = "2";//kunci jawaban

	opsi [52][0] = "A. smartly";//A
	opsi [52][1] = "B. smart";//B
	opsi [52][2] = "C. is smart";//C
	opsi [52][3] = "D. outsmart";//D
	opsi [52][4] = "";//D
	opsi [52][5] = "2";//kunci jawaban

	opsi [53][0] = "A. choose";//A
	opsi [53][1] = "B. chosen";//B
	opsi [53][2] = "C. is chosen";//C
	opsi [53][3] = "D. be chosen";//D
	opsi [53][4] = "";//D
	opsi [53][5] = "4";//kunci jawaban

	opsi [54][0] = "A. a beautiful small magenta leather bag";//A
	opsi [54][1] = "B. a small leather beautiful magenta bag";//B
	opsi [54][2] = "C. a beautiful bag small magenta leather";//C
	opsi [54][3] = "D. a leather bag small beautiful magenta";//D
	opsi [54][4] = "";//D
	opsi [54][5] = "1";//kunci jawaban

	opsi [55][0] = "A. Hang on";//A
	opsi [55][1] = "B. Hang in";//B
	opsi [55][2] = "C. Hang down";//C
	opsi [55][3] = "D. Hang up";//D
	opsi [55][4] = "";//D
	opsi [55][5] = "1";//kunci jawaban

	opsi [56][0] = "A. smoking";//A
	opsi [56][1] = "B. smoke";//B
	opsi [56][2] = "C. smoker";//C
	opsi [56][3] = "D. smoky";//D
	opsi [56][4] = "";//D
	opsi [56][5] = "1";//kunci jawaban

	opsi [57][0] = "A. moves";//A
	opsi [57][1] = "B. moving";//B
	opsi [57][2] = "C. moved";//C
	opsi [57][3] = "D. move";//D
	opsi [57][4] = "";//D
	opsi [57][5] = "2";//kunci jawaban

	opsi [58][0] = "A. directing by Martin Scorsese";//A
	opsi [58][1] = "B. directed by Martin Scorsese";//B
	opsi [58][2] = "C. is directed by Martin Scorsese";//C
	opsi [58][3] = "D. is directing by Martin Scorsese";//D
	opsi [58][4] = "";//kunci jawaban
	opsi [58][5] = "2";//kunci jawaban

	opsi [59][0] = "A. The big carved brown old wooden house";//A
	opsi [59][1] = "B. The big old brown wooden carved house";//B
	opsi [59][2] = "C. The old brown big wooden carved house";//C
	opsi [59][3] = "D. The old house big wooden brown carved";//D
	opsi [59][4] = "";//D
	opsi [59][5] = "2";//kunci jawaban

	opsi [60][0] = "A. better";//A
	opsi [60][1] = "B. beest";//B
	opsi [60][2] = "C. well";//C
	opsi [60][3] = "D. good";//D
	opsi [60][4] = "";//D
	opsi [60][5] = "3";//kunci jawaban


	opsi [61][0] = "A. the teacher entered";//A
	opsi [61][1] = "B. do the teacher enter";//B
	opsi [61][2] = "C. did the teacher entered";//C
	opsi [61][3] = "D. had the teacher entered";//D
	opsi [61][4] = "";//kunci jawaban
	opsi [61][5] = "4";//kunci jawaban

	opsi [62][0] = "A. have I finish my research";//A
	opsi [62][1] = "B. had I finish my research";//B
	opsi [62][2] = "C. if I have finished my research";//C
	opsi [62][3] = "D. if I had finished my research";//D
	opsi [62][4] = "";//kunci jawaban
	opsi [62][5] = "4";//kunci jawaban

	opsi [63][0] = "A. In spite of";//A
	opsi [63][1] = "B. Despite";//B
	opsi [63][2] = "C. Although";//C
	opsi [63][3] = "D. Because";//D
	opsi [63][4] = "";//kunci jawaban
	opsi [63][5] = "3";//kunci jawaban

	opsi [64][0] = "A. execute";//A
	opsi [64][1] = "B. are executed";//B
	opsi [64][2] = "C. be executed";//C
	opsi [64][3] = "D. are executing";//D
	opsi [64][4] = "";//kunci jawaban
	opsi [64][5] = "3";//kunci jawaban

	opsi [65][0] = "A. processing";//A
	opsi [65][1] = "B. will take";//B
	opsi [65][2] = "C. his";//C
	opsi [65][3] = "D. to be reviewed";//D
	opsi [65][4] = "";//kunci jawaban
	opsi [65][5] = "2";//kunci jawaban

	opsi [66][0] = "A. to review";//A
	opsi [66][1] = "B. carefully";//B
	opsi [66][2] = "C. some";//C
	opsi [66][3] = "D. on it on our";//D
	opsi [66][4] = "";//kunci jawaban
	opsi [66][5] = "1";//kunci jawaban

	opsi [67][0] = "A. The";//A
	opsi [67][1] = "B. him";//B
	opsi [67][2] = "C. five-speeds";//C
	opsi [67][3] = "D. for his";//D
	opsi [67][4] = "";//kunci jawaban
	opsi [67][5] = "3";//kunci jawaban

	opsi [68][0] = "A. would have studied ";//A
	opsi [68][1] = "B.  in college";//B
	opsi [68][2] = "C. the scientific";//C
	opsi [68][3] = "D. so difficult to understand";//D
	opsi [68][4] = "";//kunci jawaban
	opsi [68][5] = "1";//kunci jawaban

	opsi [69][0] = "A. Although";//A
	opsi [69][1] = "B. was";//B
	opsi [69][2] = "C. supplies enough";//C
	opsi [69][3] = "D. the";//D
	opsi [69][4] = "";//kunci jawaban
	opsi [69][5] = "3";//kunci jawaban

	opsi [70][0] = "A. Jupiter is the largest planet in solar system";//A
	opsi [70][1] = "B. Jupiter known as gas giant planet";//B
	opsi [70][2] = "C. Jupiter is the brightest planet in night sky";//C
	opsi [70][3] = "D. Jupiter has cold weathe";//D
	opsi [70][4] = "";//kunci jawaban
	opsi [70][5] = "3";//kunci jawaban

	opsi [71][0] = "A. Because Jupiter is the largest planet";//A
	opsi [71][1] = "B. Name of Jupiter is taken from King of God from Old Rome";//B
	opsi [71][2] = "C. The planet is made from the gases";//C
	opsi [71][3] = "D. Because Jupiter very windy";//D
	opsi [71][4] = "";//kunci jawaban
	opsi [71][5] = "3";//kunci jawaban

	opsi [72][0] = "A. the largest planet in solar system";//A
	opsi [72][1] = "B. gas giant planet";//B
	opsi [72][2] = "C. great red spot in Jupiter";//C
	opsi [72][3] = "D. Jupiter’s rotation";//D
	opsi [72][4] = "";//kunci jawaban
	opsi [72][5] = "4";//kunci jawaban

	opsi [73][0] = "A. windy";//A
	opsi [73][1] = "B. different";//B
	opsi [73][2] = "C. cold";//C
	opsi [73][3] = "D. has many gases";//D
	opsi [73][4] = "";//kunci jawaban
	opsi [73][5] = "2";//kunci jawaban

	opsi [74][0] = "A. Venus";//A
	opsi [74][1] = "B. Earth";//B
	opsi [74][2] = "C. Jupiter";//C
	opsi [74][3] = "D. Gravity";//D
	opsi [74][4] = "";//kunci jawaban
	opsi [74][5] = "3";//kunci jawaban

	var datasoal="";//data yang diload
	var datapilihan="";
	//tempatsoal
	var tempatsoal = [];
	var pilihansoal = [];
	for(var y = 0; y < soalTPA.length; y++){

	tempatsoal [y]= '<label id="soal'+(y+1)+'" class="control-label soal" for="soal">'+soalTPA[y]+'</label>';
	pilihansoal[y]= '<div class="pilihansoal" id="pilihansoal'+(y+1)+'" >';
		for(var x=0; x < 5; x++){
			if(opsi[y][x]==""){
				pilihansoal[y] += '<label class="checkbox " style="display:none">'+opsi[y][x]+'<input class="checkboxbtn'+(y+1)+'"type="checkbox" value="'+(x+1)+'" name="checkboxbtn'+(y+1)+'" style="display:none">'+
						'<span class="checkmark" style="display:none">  </span></label>';
			}else{

			pilihansoal[y] += '<label class="checkbox ">'+opsi[y][x]+'<input class="checkboxbtn'+(y+1)+'"type="checkbox" value="'+(x+1)+'" name="checkboxbtn'+(y+1)+'">'+
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

