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
	soalTPA[0] = "Unktuk soal nomor 1-2, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang mempunyai <b>arti sama atau arti paling dekat</b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>AGRAFIA";
	soalTPA[1] = "Unktuk soal nomor 1-2, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang mempunyai <b>arti sama atau arti paling dekat</b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>ARGARI";
	soalTPA[2] = "Unktuk soal nomor 3-4, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang merupakan <b>padanan kata atau padanan pengertian yang paling dekat</b> dengan kata yang dicetak huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>RAIMUNA";
	soalTPA[3] = "Unktuk soal nomor 3-4, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang merupakan <b>padanan kata atau padanan pengertian yang paling dekat</b> dengan kata yang dicetak huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>RETRIBUSI";
	soalTPA[4] = "Untuk soal nomor 5-6, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>lawan kata atau lawan pengertian yang paling dekat</b> dengan kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>BERAHI";
	soalTPA[5] = "Untuk soal nomor 5-6, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>lawan kata atau lawan pengertian yang paling dekat</b> dengan kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>HAKIKI";
	soalTPA[6] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>PILOT:PESAWAT=...";
	soalTPA[7] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>KILOGRAM : MASSA = ...";
	soalTPA[8] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>BERLARI : LELAH = ...";
	soalTPA[9] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>BUKU : NOVEL = ...";
	soalTPA[10] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>Para peneliti dibuat penasaran dengan <u>Merkurius</u>. Planet paling kecil di tata surya ini menyusut dan belum diketahui alasan di balik penyusutan tersebut. Untuk menyelidikinya, European Space Agency (ESA) dan Japan Aerospace Exploration Agency (JAXA) bekerja sama meluncurkan misi eksplorasi ruang angkasa pada 2018 mendatang. Wahana antariksa BepiColombo ini juga akan ditugaskan untuk mencari air es di kutub Merkurius dan di gunung berapi yang terlindungi dari sinar matahari. Temuan itu diharapkan dapat memberikan petunjuk tentang komposisi Merkurius saat pembentukan planet terjadi. Selain itu, para ilmuwan ingin mengunakan BepiColombo untuk menguji teori relativitas umum Einstein hingga 100 kali lebih akurat dari pada yang bisa didapatkan di Bumi.<br>Lalu, misteri lain yang perlu diungkap adalah inti besi besar Merkurius yang dilapisi oleh batuan silikat tipis. Menurut hipotesis yang ada saat ini, matahari atau tabrakan dengan planet lain mengikis lapisan terluar Merkurius. Sayangnya, hipotesis tersebut tidak sesuai dengan pemindaian permukaan yang diambil oleh Messenger pada tahun 1974. Dengan menggunakan instrumen yang lebih akurat dan jarak lebih dekat, para ahli dari ESA dan JAXA berharap untuk mendapatkan jawaban dari pertanyaan tersebut.<br> Meski demikian, mendatangi Merkurius bukanlah perkara mudah. Planet ini berada sekitar 77 juta kilometer dari bumi. Lalu, atsmosfer yang sangat tipis membuat proses perlambatan wahana antariksa ketika turun dari ruang angkasa menjadi sangat sullit. Untuk dapat mengerem sebanyak mungkin sebelum sampai di Merkurius, BepiColombo harus melalui sembilan titik untuk menghabiskan energi: satu di sekitar bumi, dua di sekitar venus, dan enam di sekitar Merkurius. <br> 'Merkurius adalah planet berbatu yang paling kurang dieksplorasi, tapi bukan karena (Merkurius) tidak menarik. Namun, sangat sulit untuk sampai ke sana dan lebih sulit lagi untuk bekerja di sana, ' kata kepala ESA, Alvaro Giménez Cañete seperti yang dikutip dari Science Alert 8 Juli 2017.<br>Pada saat wahana antariksa berhasil mencapai orbit Merkurius, sekitar tahun 2025, total jarak perjalanan yang telah dilakukannya akan setara dengan mengelilingi tata surya sebanyak 18,5 kali.<br>Begitu berada dalam posisinya, BepiColombo juga perlu bertahan melalui suhu ekstrim Merkurius yang berkisar antara -170 derajat Celcius pada malam hari hingga 430 derajat Celcius pada siang hari. “Ini seperti mengoperasikan wahana antariksa di dalam oven,” kata Project Manager BepiColombo, Ulrich Reininghaus dari ESA.<br>Saat berada di orbit, BepiColmbo akan membelah diri menjadi dua penyelidikan, satu dibuat oleh ESA dan satunya dibuat oleh JAXA. Kemudian, keduanya akan melanjutkan pengumpulan data dari dua penyelidikan sebelumnya, yakni Mariner 10 yang tiba pada tahun 1974 dan Messenger yang tiba pada tahun 2008 di Merkurius.<br>Sumber: Kompas.com<br><br>Pernyataan yang tidak sesuai dengan kalimat diatas adalah ...."; 
	soalTPA[11] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>Para peneliti dibuat penasaran dengan <u>Merkurius</u>. Planet paling kecil di tata surya ini menyusut dan belum diketahui alasan di balik penyusutan tersebut. Untuk menyelidikinya, European Space Agency (ESA) dan Japan Aerospace Exploration Agency (JAXA) bekerja sama meluncurkan misi eksplorasi ruang angkasa pada 2018 mendatang. Wahana antariksa BepiColombo ini juga akan ditugaskan untuk mencari air es di kutub Merkurius dan di gunung berapi yang terlindungi dari sinar matahari. Temuan itu diharapkan dapat memberikan petunjuk tentang komposisi Merkurius saat pembentukan planet terjadi. Selain itu, para ilmuwan ingin mengunakan BepiColombo untuk menguji teori relativitas umum Einstein hingga 100 kali lebih akurat dari pada yang bisa didapatkan di Bumi.<br>Lalu, misteri lain yang perlu diungkap adalah inti besi besar Merkurius yang dilapisi oleh batuan silikat tipis. Menurut hipotesis yang ada saat ini, matahari atau tabrakan dengan planet lain mengikis lapisan terluar Merkurius. Sayangnya, hipotesis tersebut tidak sesuai dengan pemindaian permukaan yang diambil oleh Messenger pada tahun 1974. Dengan menggunakan instrumen yang lebih akurat dan jarak lebih dekat, para ahli dari ESA dan JAXA berharap untuk mendapatkan jawaban dari pertanyaan tersebut.<br> Meski demikian, mendatangi Merkurius bukanlah perkara mudah. Planet ini berada sekitar 77 juta kilometer dari bumi. Lalu, atsmosfer yang sangat tipis membuat proses perlambatan wahana antariksa ketika turun dari ruang angkasa menjadi sangat sullit. Untuk dapat mengerem sebanyak mungkin sebelum sampai di Merkurius, BepiColombo harus melalui sembilan titik untuk menghabiskan energi: satu di sekitar bumi, dua di sekitar venus, dan enam di sekitar Merkurius. <br> 'Merkurius adalah planet berbatu yang paling kurang dieksplorasi, tapi bukan karena (Merkurius) tidak menarik. Namun, sangat sulit untuk sampai ke sana dan lebih sulit lagi untuk bekerja di sana, ' kata kepala ESA, Alvaro Giménez Cañete seperti yang dikutip dari Science Alert 8 Juli 2017.<br>Pada saat wahana antariksa berhasil mencapai orbit Merkurius, sekitar tahun 2025, total jarak perjalanan yang telah dilakukannya akan setara dengan mengelilingi tata surya sebanyak 18,5 kali.<br>Begitu berada dalam posisinya, BepiColombo juga perlu bertahan melalui suhu ekstrim Merkurius yang berkisar antara -170 derajat Celcius pada malam hari hingga 430 derajat Celcius pada siang hari. “Ini seperti mengoperasikan wahana antariksa di dalam oven,” kata Project Manager BepiColombo, Ulrich Reininghaus dari ESA.<br>Saat berada di orbit, BepiColmbo akan membelah diri menjadi dua penyelidikan, satu dibuat oleh ESA dan satunya dibuat oleh JAXA. Kemudian, keduanya akan melanjutkan pengumpulan data dari dua penyelidikan sebelumnya, yakni Mariner 10 yang tiba pada tahun 1974 dan Messenger yang tiba pada tahun 2008 di Merkurius.<br>Sumber: Kompas.com<br><br>Saat ini merkurius menyusut karena ...."; 
	soalTPA[12] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>Para peneliti dibuat penasaran dengan <u>Merkurius</u>. Planet paling kecil di tata surya ini menyusut dan belum diketahui alasan di balik penyusutan tersebut. Untuk menyelidikinya, European Space Agency (ESA) dan Japan Aerospace Exploration Agency (JAXA) bekerja sama meluncurkan misi eksplorasi ruang angkasa pada 2018 mendatang. Wahana antariksa BepiColombo ini juga akan ditugaskan untuk mencari air es di kutub Merkurius dan di gunung berapi yang terlindungi dari sinar matahari. Temuan itu diharapkan dapat memberikan petunjuk tentang komposisi Merkurius saat pembentukan planet terjadi. Selain itu, para ilmuwan ingin mengunakan BepiColombo untuk menguji teori relativitas umum Einstein hingga 100 kali lebih akurat dari pada yang bisa didapatkan di Bumi.<br>Lalu, misteri lain yang perlu diungkap adalah inti besi besar Merkurius yang dilapisi oleh batuan silikat tipis. Menurut hipotesis yang ada saat ini, matahari atau tabrakan dengan planet lain mengikis lapisan terluar Merkurius. Sayangnya, hipotesis tersebut tidak sesuai dengan pemindaian permukaan yang diambil oleh Messenger pada tahun 1974. Dengan menggunakan instrumen yang lebih akurat dan jarak lebih dekat, para ahli dari ESA dan JAXA berharap untuk mendapatkan jawaban dari pertanyaan tersebut.<br> Meski demikian, mendatangi Merkurius bukanlah perkara mudah. Planet ini berada sekitar 77 juta kilometer dari bumi. Lalu, atsmosfer yang sangat tipis membuat proses perlambatan wahana antariksa ketika turun dari ruang angkasa menjadi sangat sullit. Untuk dapat mengerem sebanyak mungkin sebelum sampai di Merkurius, BepiColombo harus melalui sembilan titik untuk menghabiskan energi: satu di sekitar bumi, dua di sekitar venus, dan enam di sekitar Merkurius. <br> 'Merkurius adalah planet berbatu yang paling kurang dieksplorasi, tapi bukan karena (Merkurius) tidak menarik. Namun, sangat sulit untuk sampai ke sana dan lebih sulit lagi untuk bekerja di sana, ' kata kepala ESA, Alvaro Giménez Cañete seperti yang dikutip dari Science Alert 8 Juli 2017.<br>Pada saat wahana antariksa berhasil mencapai orbit Merkurius, sekitar tahun 2025, total jarak perjalanan yang telah dilakukannya akan setara dengan mengelilingi tata surya sebanyak 18,5 kali.<br>Begitu berada dalam posisinya, BepiColombo juga perlu bertahan melalui suhu ekstrim Merkurius yang berkisar antara -170 derajat Celcius pada malam hari hingga 430 derajat Celcius pada siang hari. “Ini seperti mengoperasikan wahana antariksa di dalam oven,” kata Project Manager BepiColombo, Ulrich Reininghaus dari ESA.<br>Saat berada di orbit, BepiColmbo akan membelah diri menjadi dua penyelidikan, satu dibuat oleh ESA dan satunya dibuat oleh JAXA. Kemudian, keduanya akan melanjutkan pengumpulan data dari dua penyelidikan sebelumnya, yakni Mariner 10 yang tiba pada tahun 1974 dan Messenger yang tiba pada tahun 2008 di Merkurius.<br>Sumber: Kompas.com<br><br>Untuk dapat mengerem sebanyak mungkin sebelum sampai di Merkurius, Bepi Colombo harus melalui sembilan titik untuk menghabiskan energi, yaitu ...."; 
	soalTPA[13] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>Para peneliti dibuat penasaran dengan <u>Merkurius</u>. Planet paling kecil di tata surya ini menyusut dan belum diketahui alasan di balik penyusutan tersebut. Untuk menyelidikinya, European Space Agency (ESA) dan Japan Aerospace Exploration Agency (JAXA) bekerja sama meluncurkan misi eksplorasi ruang angkasa pada 2018 mendatang. Wahana antariksa BepiColombo ini juga akan ditugaskan untuk mencari air es di kutub Merkurius dan di gunung berapi yang terlindungi dari sinar matahari. Temuan itu diharapkan dapat memberikan petunjuk tentang komposisi Merkurius saat pembentukan planet terjadi. Selain itu, para ilmuwan ingin mengunakan BepiColombo untuk menguji teori relativitas umum Einstein hingga 100 kali lebih akurat dari pada yang bisa didapatkan di Bumi.<br>Lalu, misteri lain yang perlu diungkap adalah inti besi besar Merkurius yang dilapisi oleh batuan silikat tipis. Menurut hipotesis yang ada saat ini, matahari atau tabrakan dengan planet lain mengikis lapisan terluar Merkurius. Sayangnya, hipotesis tersebut tidak sesuai dengan pemindaian permukaan yang diambil oleh Messenger pada tahun 1974. Dengan menggunakan instrumen yang lebih akurat dan jarak lebih dekat, para ahli dari ESA dan JAXA berharap untuk mendapatkan jawaban dari pertanyaan tersebut.<br> Meski demikian, mendatangi Merkurius bukanlah perkara mudah. Planet ini berada sekitar 77 juta kilometer dari bumi. Lalu, atsmosfer yang sangat tipis membuat proses perlambatan wahana antariksa ketika turun dari ruang angkasa menjadi sangat sullit. Untuk dapat mengerem sebanyak mungkin sebelum sampai di Merkurius, BepiColombo harus melalui sembilan titik untuk menghabiskan energi: satu di sekitar bumi, dua di sekitar venus, dan enam di sekitar Merkurius. <br> 'Merkurius adalah planet berbatu yang paling kurang dieksplorasi, tapi bukan karena (Merkurius) tidak menarik. Namun, sangat sulit untuk sampai ke sana dan lebih sulit lagi untuk bekerja di sana, ' kata kepala ESA, Alvaro Giménez Cañete seperti yang dikutip dari Science Alert 8 Juli 2017.<br>Pada saat wahana antariksa berhasil mencapai orbit Merkurius, sekitar tahun 2025, total jarak perjalanan yang telah dilakukannya akan setara dengan mengelilingi tata surya sebanyak 18,5 kali.<br>Begitu berada dalam posisinya, BepiColombo juga perlu bertahan melalui suhu ekstrim Merkurius yang berkisar antara -170 derajat Celcius pada malam hari hingga 430 derajat Celcius pada siang hari. “Ini seperti mengoperasikan wahana antariksa di dalam oven,” kata Project Manager BepiColombo, Ulrich Reininghaus dari ESA.<br>Saat berada di orbit, BepiColmbo akan membelah diri menjadi dua penyelidikan, satu dibuat oleh ESA dan satunya dibuat oleh JAXA. Kemudian, keduanya akan melanjutkan pengumpulan data dari dua penyelidikan sebelumnya, yakni Mariner 10 yang tiba pada tahun 1974 dan Messenger yang tiba pada tahun 2008 di Merkurius.<br>Sumber: Kompas.com<br><br>Planet merkurius berada pada ....";
	soalTPA[14] = "$$`text 'diketahui ' a^3-b^3 = c; b = 1; `text ' dan ' c = a^2 +ab+b^2 `text '. Maka nilai dari ' a + 3b + 5c = ... $$";
	soalTPA[15] = "$$`text 'Jika ' a = √15129; b = (34 + 23)^2; `text ' dan ' c = 0,6^3 `text '. Maka ' a + b + c = ...$$";
	soalTPA[16] = "$$`text 'Jika ' m/{3n} + {4p}/{2q} = 1 `text ' dan ' {-4q}/{4n}-{6p}/m = 2/3 `text ' maka berapa nilai ' q/m `text ' ? ' $$";
	soalTPA[17] = "$$`text 'Jika ' 3w + 5t = 2/3 `text ' , maka ' 63w + 105t = ...$$";
	soalTPA[18] = "Jika L adalah Luas lingkaran dengan jari-jari 14 dan P adalah luas segitiga yang memiliki sisi 10,24, dan 26 maka ...";
	soalTPA[19] = "$$`text 'Jika ' 2/x + y = 4, 4/y + 2x = 10, `text ' dan ' x,y > 0, `text ' maka ...' $$";
	soalTPA[20] = "Jika x adalah peluang munculnya kedua mata dadu genap semua pada kejadian pelemparan dua buah dadu secara bersama - sama dan y adalah 3/8 dari 2 3/4 , maka ...";
	soalTPA[21] = "Jika B = 12,12121212 ...% dan C = 400% dari 0,03. Maka ...";
	soalTPA[22] = "Diketahui dua buah bilangan yang kuadrat jumlah keduanya sama dengan jumlah kuadrat kedua bilangan tersebut. Hasil perkalian kedua buah bilangan tersebut adalah ....";
	soalTPA[23] = "Moris memiliki sejumlah uang tunai. Dua pertiga nya ia berikan kepada Anggit dan kemudian ia memberikan setengah dari sisa uangnya kepada Septi. Jika uang Moris tinggal Rp60.000,00 maka uang Moris mula-mula adalah ....";
	soalTPA[24] = "Feri berangkat sekolah naik sepeda dengan kecepatan 20km/jam. Ternyata Feri tidak sadar kalau ada buku pelajarannya yang ketinggalan. Mengetahui hal tersebut, kakak Feri yaitu Andre mengantarkan buku tersebut. Jika Andre berangkat 15 menit kemudian dengan menggunakan motor dengan kecepatan 60km/jam, maka setelah berapa kilometer Andre akan menyusul Feri?";
	soalTPA[25] = "Jika 2/3 bilangan pertama dikurangi setengah bilangan kedua akan sama dengan 2 1/3 dari 21. Jika bilangan pertama adalah 𝑥 dan bilangan kedua adalah 𝑦, maka nilai dari 8𝑥 − 6𝑦 = ....";
	soalTPA[26] = "Di tempat parkir ada 84 kendaraan, terdiri dari mobil dan motor. Jumlah roda 220 buah dan tarif parkir Rp1.000,00 untuk motor, dan Rp2.000,00 untuk mobil. Total uang yang diterima tukang parkir tersebut adalah ....";
	soalTPA[27] = "Nilai rata-rata dari 25 siswa adalah 74. Hari selanjutnya ada beberapa siswa yang mengikuti ujian susulan karena mengikuti lomba paduan suara, sehingga merubah rata-rata nilai menjadi 70. Jika rata-rata nilai semua siswa yang mengikuti ujian susulan adalah 65, maka jumlah siswa yang mengikuti ujian susulan adalah ....";
	soalTPA[28] = "Pabrik A memproduksi suatu barang dengan kecepatan 150 barang setiap 50 detik. Dan pabrik B memproduksi barang yang sama dengan kecepatan 120 barang setiap 30 detik. Jika kedua pabrik tersebut digunakan bersama-sama, waktu yang diperlukan untuk memproduksi 560 barang adalah ... detik.";
	soalTPA[29] = "Selisih umur Budi dan Cindy adalah 25 tahun sedangkan lima tahun yang lalu jumlah umur keduanya 33 tahun. Berapakah umur Budi setahun yang akan datang ....";
	soalTPA[30] = "Harga 4 buah permen x dan 3 buah permen y adalah Rp2.500,00, sedangkan harga 2 buah permen x dan 7 buah permen y adalah Rp2.900,00. Berapakah harga 3 lusin permen y ....";
	soalTPA[31] = "$$`text 'Luas permukaan bola yang memiliki volum sebesar ' 9/2π x^3 `text ' adalah ... '$$";
	soalTPA[32] = "Andi naik sepeda dari kota Yogya ke kota Solo yang berjarak 65 km, dengan kecepatan rata‐rata 30 km/jam. Sedangkan Beni juga bersepeda dari kota yang sama dengan kecepatan 25 km/jam. Mereka berangkat dalam waktu bersamaan, dan setelah menempuh perjalanan 2 jam Andi beristirahat sambil menunggu Beni. Berapa lama Andi menunggu Beni?";
	soalTPA[33] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>3, 5, 8, 13, 21, ....";
	soalTPA[34] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>5, -1, 7, -4, 11, -7, 17 , ... , ....";
	soalTPA[35] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>A, C, G, I, M, O, ... , ....";
	soalTPA[36] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>J, X, N, W, R, V, ... , ....";
	soalTPA[37] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Semua bilangan genap habis dibagi 2.<br>Sebagian bilangan prima adalah bilangan genap.";
	soalTPA[38] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Jika dipanaskan pada suhu 100oC, maka air akan menguap. Dendi memanaskan air pada panci terlalu lama sehingga suhu air mencapai 105oC.";
	soalTPA[39] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Jika Adi berolahraga, maka badannya akan sehat.<br>Adi tidak berolahraga.";
	soalTPA[40] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Semua penderita penyakit gula tidak boleh banyak makan tepung-tepungan. Ibu penderita penyakit gula.";
	soalTPA[41] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut<b><br><br>Enam mahasiswa yaitu A, B, C, D, E, dan F, masing-masing akan presentasi di depan kelas. Masing-masing hanya akan maju ke depan kelas satu kali saja dan sesuai dengan urutan sebagai berikut:<br>• C akan maju pada urutan ke empat atau terakhir<br>• D akan menjadi pembicara ke tiga setelah A<br>• B akan maju sebelum C<br>• F akan maju sebelum D<br>Dari urutan berikut, manakah yang mungkin?";
	soalTPA[42] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut<b><br><br>Enam mahasiswa yaitu A, B, C, D, E, dan F, masing-masing akan presentasi di depan kelas. Masing-masing hanya akan maju ke depan kelas satu kali saja dan sesuai dengan urutan sebagai berikut:<br>• C akan maju pada urutan ke empat atau terakhir<br>• D akan menjadi pembicara ke tiga setelah A<br>• B akan maju sebelum C<br>• F akan maju sebelum D<br>Manakah dari pernyataan berikut yang benar?";
	soalTPA[43] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut<b><br><br>Enam mahasiswa yaitu A, B, C, D, E, dan F, masing-masing akan presentasi di depan kelas. Masing-masing hanya akan maju ke depan kelas satu kali saja dan sesuai dengan urutan sebagai berikut:<br>• C akan maju pada urutan ke empat atau terakhir<br>• D akan menjadi pembicara ke tiga setelah A<br>• B akan maju sebelum C<br>• F akan maju sebelum D<br>Mahasiswa yang maju setelah C maju adalah ....";
	soalTPA[44] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut<b><br><br>Enam mahasiswa yaitu A, B, C, D, E, dan F, masing-masing akan presentasi di depan kelas. Masing-masing hanya akan maju ke depan kelas satu kali saja dan sesuai dengan urutan sebagai berikut:<br>• C akan maju pada urutan ke empat atau terakhir<br>• D akan menjadi pembicara ke tiga setelah A<br>• B akan maju sebelum C<br>• F akan maju sebelum D<br>Apabila B maju pada urutan ke lima, manakah dari pernyataan berikut yang benar?";
	soalTPA[45] = "<b>Untuk soal nomor 46-47, perhatikan ilustrasi tersebut<b><br><br>Dalam rangka seleksi calon anggota tim bola basket putri, akan dilakukan pengukuran tinggi badan. Ani lebih tinggi daripada Wati. Tinggi Clara sama dengan tinggi Feny. Emili lebih tinggi daripada Dara. Hanya ada dua peserta yang tinggi badannya sama.Jika Clara lebih tinggi daripada Ani, maka ....";
	soalTPA[46] = "<b>Untuk soal nomor 46-47, perhatikan ilustrasi tersebut<b><br><br>Dalam rangka seleksi calon anggota tim bola basket putri, akan dilakukan pengukuran tinggi badan. Ani lebih tinggi daripada Wati. Tinggi Clara sama dengan tinggi Feny. Emili lebih tinggi daripada Dara. Hanya ada dua peserta yang tinggi badannya sama.Pernyataan yang pasti salah adalah ....";
	soalTPA[47] = "<img src='../../assets/img/48/soal.jpg'>";
	soalTPA[48] = "<img src='../../assets/img/49/soal.jpg'>";
	soalTPA[49] = "<img src='../../assets/img/50/soal.jpg'>";

	soalTPA[50] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Not only … the best student in his school, but also receives a scholarship.";
	soalTPA[51] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>I have already bought … last Thursday in a well known department store.";
	soalTPA[52] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Mr. Felix, …, is displaying his painting collection in my father’s gallery.";
	soalTPA[53] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>It is crucial that Trafalgar … his assignment if he wants better schedule for tomorrow.";
	soalTPA[54] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Raiju Vinsmoke wanted to make sure that she did her presentation well, fast, and …";
	soalTPA[55] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>… most of fire in the hills was extinguished relieves the people.";
	soalTPA[56] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>…, I would have been so happy.";
	soalTPA[57] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>The waitress will bring you … bowl of soup if you want.";
	soalTPA[58] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Nico … by the time I raise money to marry her.";
	soalTPA[59] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>The child talked … to his mother which seemed …";
	soalTPA[60] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Many people find spider …, but Usop is so much interested in it.";
	soalTPA[61] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>The farther Alvida walks around Atu-Atu, her beautiful village she lives in, every morning to do her diet, … she is.";
	soalTPA[62] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>No sooner … one project than she started working on the last week.";
	soalTPA[63] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Buggy looks different today. It seems that he had his hair …";
	soalTPA[64] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Cavendish and I got the lowest scores in Math. <br>However, he hardly seems to care, …?";
	soalTPA[65] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br>The <b><u>largest</u></b> Manasai dance <b><u>in Kapuas</u></b> is breaking the track record of MURI in Indonesia. It's really shocking, attaching and <b><u>involve</u></b> many people <b><u>to</u></b> join the event";
	soalTPA[66] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br>Both Rana <b><u>also</u></b> Rani are twins. They <b><u>live</u></b> next <b><u>to my house</u></b>. Every Sunday morning, we always <b><u>go</u></b> to the jogging track";
	soalTPA[67] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br>Sinta have <b><u>play</u></b> her <b><u>new guitar</u></b> since her father <b><u>bought</u></b> it <b><u>for her</u></b>";
	soalTPA[68] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br><b><u>The book</u></b> of USM PKN STAN is often <b><u>open</u></b> <b><u>by</u></b> the students and <b><u>the teachers</u></b>";
	soalTPA[69] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br>Mars <b><u>was</u></b> the <b><u>fourth planet</u></b> from the sun <b><u>and</u></b> the second-smallest planet in the solar system, <b><u>after</u></b> Mercury";
	soalTPA[70] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>A portable stove is a cooking stove specially designed to be portable and lightweight, used in camping, picnicking, backpacking, or other use in remote locations where an easily transportable means of cooking or heating is needed. Portable stoves can be used in <b>diverse</b> situations, such as for outdoor food service and catering and in field hospitals.<br>Since the <b>invention</b> of the portable stove in the 19th century, a wide variety of designs and models have seen use in a number of different applications. Portable stoves can be broken down into several broad categories based on the type of fuel used and stove design: unpressurized stoves that use solid or liquid fuel placed in the burner before ignition; stoves that use a volatile liquid fuel in a pressurized burner; bottled gas stoves; and gravity-fed \'spirit'\ stoves.<br><br>The word “diverse” in the first paragraph is closest in meaning to …";
	soalTPA[71] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>A portable stove is a cooking stove specially designed to be portable and lightweight, used in camping, picnicking, backpacking, or other use in remote locations where an easily transportable means of cooking or heating is needed. Portable stoves can be used in <b>diverse</b> situations, such as for outdoor food service and catering and in field hospitals.<br>Since the <b>invention</b> of the portable stove in the 19th century, a wide variety of designs and models have seen use in a number of different applications. Portable stoves can be broken down into several broad categories based on the type of fuel used and stove design: unpressurized stoves that use solid or liquid fuel placed in the burner before ignition; stoves that use a volatile liquid fuel in a pressurized burner; bottled gas stoves; and gravity-fed \'spirit'\ stoves.<br><br>The word ”invention” in second paragraph refers to …";
	soalTPA[72] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>A portable stove is a cooking stove specially designed to be portable and lightweight, used in camping, picnicking, backpacking, or other use in remote locations where an easily transportable means of cooking or heating is needed. Portable stoves can be used in <b>diverse</b> situations, such as for outdoor food service and catering and in field hospitals.<br>Since the <b>invention</b> of the portable stove in the 19th century, a wide variety of designs and models have seen use in a number of different applications. Portable stoves can be broken down into several broad categories based on the type of fuel used and stove design: unpressurized stoves that use solid or liquid fuel placed in the burner before ignition; stoves that use a volatile liquid fuel in a pressurized burner; bottled gas stoves; and gravity-fed \'spirit'\ stoves.<br><br>The author’s main purpose is to describe?";
	soalTPA[73] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>A portable stove is a cooking stove specially designed to be portable and lightweight, used in camping, picnicking, backpacking, or other use in remote locations where an easily transportable means of cooking or heating is needed. Portable stoves can be used in <b>diverse</b> situations, such as for outdoor food service and catering and in field hospitals.<br>Since the <b>invention</b> of the portable stove in the 19th century, a wide variety of designs and models have seen use in a number of different applications. Portable stoves can be broken down into several broad categories based on the type of fuel used and stove design: unpressurized stoves that use solid or liquid fuel placed in the burner before ignition; stoves that use a volatile liquid fuel in a pressurized burner; bottled gas stoves; and gravity-fed \'spirit'\ stoves.<br><br>Which of the following can be a variety of portable stove?";
	soalTPA[74] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>A portable stove is a cooking stove specially designed to be portable and lightweight, used in camping, picnicking, backpacking, or other use in remote locations where an easily transportable means of cooking or heating is needed. Portable stoves can be used in <b>diverse</b> situations, such as for outdoor food service and catering and in field hospitals.<br>Since the <b>invention</b> of the portable stove in the 19th century, a wide variety of designs and models have seen use in a number of different applications. Portable stoves can be broken down into several broad categories based on the type of fuel used and stove design: unpressurized stoves that use solid or liquid fuel placed in the burner before ignition; stoves that use a volatile liquid fuel in a pressurized burner; bottled gas stoves; and gravity-fed \'spirit'\ stoves.<br><br>A portable stove is a type of stove …";
	//pilihan
	var opsi = ArrOpsi(soalTPA.length,6); //deklarasi 2d array untuk pilihan
	// var pilihan = '';
	opsi [0][0] = "A. Kegemaran membaca";//A
	opsi [0][1] = "B. Kegemaran menulis";//B
	opsi [0][2] = "C. Ketidakmampuan untuk membaca";//C
	opsi [0][3] = "D. Ketidakmampuan untuk menulis";//D
	opsi [0][4] = "E. Kemampuan Baca Tulis";//E
	opsi [0][5] = "4";//kunci jawaban

	// opsi = [[]];
	opsi [1][0] = "A. Bercocok tanam";//A
	opsi [1][1] = "B. Makanan untuk tahanan";//B
	opsi [1][2] = "C. Persembahan untuk dewa";//C
	opsi [1][3] = "D. Senjata perang";//D
	opsi [1][4] = "E. Belenggu tangan";//E
	opsi [1][5] = "3";//kunci jawaban

	opsi [2][0] = "A. Upacara";//A
	opsi [2][1] = "B. Perkemahan";//B
	opsi [2][2] = "C. Pertemuan";//C
	opsi [2][3] = "D. Penjelajahan";//D
	opsi [2][4] = "E. Penyuluhan";//E
	opsi [2][5] = "3";//kunci jawaban

	opsi [3][0] = "A. Setoran";//A
	opsi [3][1] = "B. Pungutan";//B
	opsi [3][2] = "C. Pajak";//C
	opsi [3][3] = "D. Denda";//D
	opsi [3][4] = "E. Tagihan";//E
	opsi [3][5] = "2";//kunci jawaban

	opsi [4][0] = "A. Cinta";//A
	opsi [4][1] = "B. Syahwat";//B
	opsi [4][2] = "C. Benci";//C
	opsi [4][3] = "D. Sopan";//D
	opsi [4][4] = "E. Alim";//E
	opsi [4][5] = "3";//kunci jawaban

	opsi [5][0] = "A. Majasi";//A
	opsi [5][1] = "B. Penipuan";//B
	opsi [5][2] = "C. Bohong";//C
	opsi [5][3] = "D. Kewajiban";//D
	opsi [5][4] = "E. Sebentar";//E
	opsi [5][5] = "1";//kunci jawaban

	opsi [6][0] = "A. Masinis : Nahkoda";//A
	opsi [6][1] = "B. Kapal : Nahkoda";//B
	opsi [6][2] = "C. Kereta : Nahkoda";//C
	opsi [6][3] = "D. Kereta : Masinis";//D
	opsi [6][4] = "E. Masinis : Kereta";//E
	opsi [6][5] = "5";//kunci jawaban

	opsi [7][0] = "A. Liter : m^3";//A
	opsi [7][1] = "B. Tekanan : Pascal";//B
	opsi [7][2] = "C. Desimeter : Luas";//C
	opsi [7][3] = "D. Newton : Berat";//D
	opsi [7][4] = "E. Ton : Megabyte";//E
	opsi [7][5] = "4";//kunci jawaban

	opsi [8][0] = "A. Berpikir : bosan";//A
	opsi [8][1] = "B. Haus : Minum";//B
	opsi [8][2] = "C. Penyakit : menular";//C
	opsi [8][3] = "D. Sesak : Mua";//D
	opsi [8][4] = "E. Makan : Kenyang";//E
	opsi [8][5] = "5";//kunci jawaban

	opsi [9][0] = "A. Lagu : Rock";//A
	opsi [9][1] = "B. Pop : Lagu";//B
	opsi [9][2] = "C. Jazz : Pop";//C
	opsi [9][3] = "D. Rock : Nada";//D
	opsi [9][4] = "E. Penyanyi : Sounds";//E
	opsi [9][5] = "1";//kunci jawaban

	opsi [10][0] = "A. Pada tahun 2025 wahana antariksa berhasil mencapai orbit Merkurius mengelilingi tata surya sebanyak 18,5 kali";//A
	opsi [10][1] = "B. BepiColmbo akan membelah diri menjadi dua penyelidikan, satu dibuat oleh ESA dan satunya dibuat oleh JAXA";//B
	opsi [10][2] = "C. BepiColombo bertahan melalui suhu ekstrim Merkurius yang berkisar antara -170 derajat Celcius pada siang hari hingga 430 derajat Celcius pada malam hari";//C
	opsi [10][3] = "D. Merkurius berada sekitar 77 juta kilometer dari bumi.";//D
	opsi [10][4] = "E. Merkurius adalah planet berbatu yang paling kurang dieksplorasi";//E
	opsi [10][5] = "3";//kunci jawaban

	opsi [11][0] = "A. Merkurius dilapi oleh batuan silikat tipis";//A
	opsi [11][1] = "B. Belum diketahui alasannya";//B
	opsi [11][2] = "C. Merkurius kehabisan energi";//C
	opsi [11][3] = "D. Mencairnya kutub Merkurius";//D
	opsi [11][4] = "E. Merkurius terhalang oleh matahari";//E
	opsi [11][5] = "2";//kunci jawaban

	opsi [12][0] = "A. Satu di sekitar bumi, dua di sekitar venus, dan enam di sekitar Merkurius";//A
	opsi [12][1] = "B. Dua di sekitar bumi, dua di sekitar venus, dan lima di sekitar Merkurius";//B
	opsi [12][2] = "C. Enam di sekitar bumi, satu di sekitar venus, dan dua di sekitar Merkurius";//C
	opsi [12][3] = "D. Empat di sekitar bumi, tiga di sekitar venus, dan dua di sekitar Merkurius";//D
	opsi [12][4] = "E. satu di sekitar bumi, enam di sekitar venus, dan dua di sekitar Merkurius";//E
	opsi [12][5] = "1";//kunci jawaban

	opsi [13][0] = "A. 77 kilometer dari bumi";//A
	opsi [13][1] = "B. 77 kilometer dari matahari";//B
	opsi [13][2] = "C. 167 kilometer dari bulan";//C
	opsi [13][3] = "D. 57 kilometer dari bumi";//D
	opsi [13][4] = "E. 177 kilometer dari matah";//E
	opsi [13][5] = "1";//kunci jawaban

	opsi [14][0] = "A. -30";//A
	opsi [14][1] = "B. -20";//B
	opsi [14][2] = "C. -10";//C
	opsi [14][3] = "D. 40";//D
	opsi [14][4] = "E. 100";//E
	opsi [14][5] = "4";//kunci jawaban

	opsi [15][0] = "A. 3372,216";//A
	opsi [15][1] = "B. 4412,512";//B
	opsi [15][2] = "C. 6124,144";//C
	opsi [15][3] = "D. 1412,726";//D
	opsi [15][4] = "E. 1435,728";//E
	opsi [15][5] = "1";//kunci jawaban

	opsi [16][0] = "$$`text 'A. '{12}/{31}$$";//A
	opsi [16][1] = "$$`text 'B. '2,367$$";//B
	opsi [16][2] = "$$`text 'C. '-{2/3}$$";//C
	opsi [16][3] = "$$`text 'D. '-0,33$$";//D
	opsi [16][4] = "$$`text 'E. '-{1/2}$$";//E
	opsi [16][5] = "3";//kunci jawaban

	opsi [17][0] = "A. 14";//A
	opsi [17][1] = "B. 15";//B
	opsi [17][2] = "C. 16";//C
	opsi [17][3] = "D. 17";//D
	opsi [17][4] = "E. 18";//E
	opsi [17][5] = "1";//kunci jawaban

	opsi [18][0] = "A. L > P";//A
	opsi [18][1] = "B. L < P";//B
	opsi [18][2] = "C. L = P";//C
	opsi [18][3] = "D. L = P + 30";//D
	opsi [18][4] = "E. Hubungan L dan P tidak dapat ditentukan";//E
	opsi [18][5] = "1";//kunci jawaban

	opsi [19][0] = "A. x > y";//A
	opsi [19][1] = "B. x < y";//B
	opsi [19][2] = "C. x = y";//C
	opsi [19][3] = "D. 4x = 5y";//D
	opsi [19][4] = "E. Hubungan x dan y tidak dapat ditentukan";//E
	opsi [19][5] = "4";//kunci jawaban

	opsi [20][0] = "A. x > y";//A
	opsi [20][1] = "B. x < y";//B
	opsi [20][2] = "C. x = y";//C
	opsi [20][3] = "D. 2x = 5y";//D
	opsi [20][4] = "E. Hubungan x dan y tidak dapat ditentukan";//E
	opsi [20][5] = "2";//kunci jawaban

	opsi [21][0] = "A. B < C";//A
	opsi [21][1] = "B. B > C";//B
	opsi [21][2] = "C. B = C";//C
	opsi [21][3] = "D. 2B = 5C";//D
	opsi [21][4] = "E. Hubungan B dan C tidak dapat ditentukan";//E
	opsi [21][5] = "2";//kunci jawaban

	opsi [22][0] = "A. 0";//A
	opsi [22][1] = "B. 1";//B
	opsi [22][2] = "C. 2";//C
	opsi [22][3] = "D. 3";//D
	opsi [22][4] = "E. 4";//E
	opsi [22][5] = "1";//kunci jawaban

	opsi [23][0] = "A. Rp180.000,00";//A
	opsi [23][1] = "B. Rp240.000,00";//B
	opsi [23][2] = "C. Rp270.000,00";//C
	opsi [23][3] = "D. Rp320.000,00";//D
	opsi [23][4] = "E. Rp360.000,00";//E
	opsi [23][5] = "5";//kunci jawaban

	opsi [24][0] = "A. R2,5 km";//A
	opsi [24][1] = "B. 5 km";//B
	opsi [24][2] = "C. 7,5 km";//C
	opsi [24][3] = "D. 10 km";//D
	opsi [24][4] = "E. 12,5 km";//E
	opsi [24][5] = "3";//kunci jawaban

	opsi [25][0] = "A. 126";//A
	opsi [25][1] = "B. 294";//B
	opsi [25][2] = "C. 588";//C
	opsi [25][3] = "D. 1024";//D
	opsi [25][4] = "E. 2048";//E
	opsi [25][5] = "3";//kunci jawaban

	opsi [26][0] = "A. Rp110.000,00";//A
	opsi [26][1] = "B. Rp112.000,00";//B
	opsi [26][2] = "C. Rp120.000,00";//C
	opsi [26][3] = "D. Rp122.000,00";//D
	opsi [26][4] = "E. Rp150.000,00";//E
	opsi [26][5] = "1";//kunci jawaban

	opsi [27][0] = "5";//A
	opsi [27][1] = "10";//B
	opsi [27][2] = "15";//C
	opsi [27][3] = "20";//D
	opsi [27][4] = "25";//E
	opsi [27][5] = "4";//kunci jawaban

	opsi [28][0] = "A. 70";//A
	opsi [28][1] = "B. 80";//B
	opsi [28][2] = "C. 55";//C
	opsi [28][3] = "D. 65";//D
	opsi [28][4] = "E. 85";//E
	opsi [28][5] = "2";//kunci jawaban

	opsi [29][0] = "A. 25 tahun";//A
	opsi [29][1] = "B. 24 tahun";//B
	opsi [29][2] = "C. 35 tahun";//C
	opsi [29][3] = "D. 34 tahun";//D
	opsi [29][4] = "E. 33 tahun";//E
	opsi [29][5] = "2";//kunci jawaban

	opsi [30][0] = "A. Rp3.000,00";//A
	opsi [30][1] = "B. Rp3.300,00";//B
	opsi [30][2] = "C. Rp6.000,00";//C
	opsi [30][3] = "D. Rp8.800,00";//D
	opsi [30][4] = "E. Rp10.800,00";//E
	opsi [30][5] = "5";//kunci jawaban

	opsi [31][0] = "$$`text 'A. ' 3πx^2 `text ' cm'^2$$";//A
	opsi [31][1] = "$$`text 'B. ' (9/2)πx^2 `text ' cm'^2$$";//B
	opsi [31][2] = "$$`text 'C. ' 9πx^2 `text ' cm'^2$$";//C
	opsi [31][3] = "$$`text 'D. ' ({243}/{16})πx^2 `text ' cm'^2$$";//D
	opsi [31][4] = "$$`text 'E. ' 6πx^2 `text ' cm'^2$$";//E
	opsi [31][5] = "3";//kunci jawaban

	opsi [32][0] = "A. 24 menit";//A
	opsi [32][1] = "B. 30 menit";//B
	opsi [32][2] = "C. 50 menit";//C
	opsi [32][3] = "D. 55 menit";//D
	opsi [32][4] = "E. 60 menit";//E
	opsi [32][5] = "1";//kunci jawaban

	opsi [33][0] = "A. 30";//A
	opsi [33][1] = "B. 34";//B
	opsi [33][2] = "C. 37";//C
	opsi [33][3] = "D. 13";//D
	opsi [33][4] = "E. 12";//E
	opsi [33][5] = "2";//kunci jawaban

	opsi [34][0] = "A. -10, 25";//A
	opsi [34][1] = "B. -10, 15";//B
	opsi [34][2] = "C. -13, 25";//C
	opsi [34][3] = "D. -13, 15";//D
	opsi [34][4] = "E. -15, 10";//E
	opsi [34][5] = "1";//kunci jawaban

	opsi [35][0] = "A. S, O";//A
	opsi [35][1] = "B. N, P";//B
	opsi [35][2] = "C. O, S";//C
	opsi [35][3] = "D. T, O";//D
	opsi [35][4] = "E. M, N";//E
	opsi [35][5] = "3";//kunci jawaban

	opsi [36][0] = "A. U, V";//A
	opsi [36][1] = "B. U, W";//B
	opsi [36][2] = "C. W, U";//C
	opsi [36][3] = "D. V, W";//D
	opsi [36][4] = "E. V, U";//E
	opsi [36][5] = "5";//kunci jawaban

	opsi [37][0] = "A. Sebagian bilangan prima habis dibagi 2";//A
	opsi [37][1] = "B. Semua bilangan prima tidak habis dibagi 2";//B
	opsi [37][2] = "C. Semua bilangan genap adalah bilangan prima";//C
	opsi [37][3] = "D. Sebagian bilangan yang habis dibagi 2 bukan bilangan genap";//D
	opsi [37][4] = "E. Tidak dapat disimpulkan";//E
	opsi [37][5] = "1";//kunci jawaban

	opsi [38][0] = "A. Air pada panci justru membeku";//A
	opsi [38][1] = "B. Air pada panci tidak menguap";//B
	opsi [38][2] = "C. Air pasti menguap bila dipanaskan pada panci";//C
	opsi [38][3] = "D. Air pada panci sudah menguap";//D
	opsi [38][4] = "E. Hanya air pada panci saja yang bisa menguap";//E
	opsi [38][5] = "4";//kunci jawaban

	opsi [39][0] = "A. Adi badannya sehat";//A
	opsi [39][1] = "B. Adi badannya tidak akan sehat";//B
	opsi [39][2] = "C. Badan akan sehat jika adi berolahraga";//C
	opsi [39][3] = "D. Adi badannya kekar";//D
	opsi [39][4] = "E. Adi Selalu berolahraga sehingga badannya sehat";//E
	opsi [39][5] = "5";//kunci jawaban

	opsi [40][0] = "A. Nenek tidak boleh makan tepung-tepungan";//A
	opsi [40][1] = "B. Semua penderita penyakit gula termasuk ibu boleh makan tepung-tepungan";//B
	opsi [40][2] = "C. Banyak makan tepung-tepungan tidak mengakibatkan penyakit gula";//C
	opsi [40][3] = "D. Ibu senang makan tepung-tepungan";//D
	opsi [40][4] = "E. Ibu menghindari tepung-tepungan supaya tidak terkena penyakit gula";//E
	opsi [40][5] = "";//kunci jawaban

	opsi [41][0] = "A. E, F, A, C, B, D";//A
	opsi [41][1] = "B. A, F, C, D, B, E";//B
	opsi [41][2] = "C. E, F, A, B, D, C";//C
	opsi [41][3] = "D. B, A, F, E, D, C";//D
	opsi [41][4] = "E. C, B, A, F, E, D";//E
	opsi [41][5] = "4";//kunci jawaban

	opsi [42][0] = "A. D akan maju pada urutan ke tiga";//A
	opsi [42][1] = "B. D akan maju setelah F";//B
	opsi [42][2] = "C. F akan maju pada urutan ke enam";//C
	opsi [42][3] = "D. E akan maju pada urutan ke enam";//D
	opsi [42][4] = "E.  C akan maju sebelum B";//E
	opsi [42][5] = "2";//kunci jawaban

	opsi [43][0] = "A. A, D";//A
	opsi [43][1] = "B. E";//B
	opsi [43][2] = "C. E, A";//C
	opsi [43][3] = "D. D, E, B";//D
	opsi [43][4] = "E. B, A, E";//E
	opsi [43][5] = "2";//kunci jawaban

	opsi [44][0] = "A. A maju pada urutan pertama";//A
	opsi [44][1] = "B. E maju pada urutan ke tiga";//B
	opsi [44][2] = "C. A maju pada urutan ke tiga";//C
	opsi [44][3] = "D. D maju pada urutan ke enam";//D
	opsi [44][4] = "E. C maju pada urutan ke empat";//E
	opsi [44][5] = "1";//kunci jawaban

	opsi [45][0] = "A. Ani lebih tinggi daripada Feny";//A
	opsi [45][1] = "B. Feny lebih tinggi daripada Wati";//B
	opsi [45][2] = "C. Clara lebih tinggi daripada Dara";//C
	opsi [45][3] = "D. Emili lebih tinggi daripada Wati";//D
	opsi [45][4] = "E. Clara lebih tinggi daripada Feny";//E
	opsi [45][5] = "2";//kunci jawaban

	opsi [46][0] = "A. Wati lebih tinggi daripada Dara";//A
	opsi [46][1] = "B. Ani lebih tinggi daripada Emili";//B
	opsi [46][2] = "C. Ani sama dengan Feny";//C
	opsi [46][3] = "D. Dara lebih tinggi daripada Ani";//D
	opsi [46][4] = "E. Dara lebih pendek daripada Emili";//E
	opsi [46][5] = "3";//kunci jawaban

	opsi [47][0] = "A. <img src='../../assets/img/48/A.jpg'>";//A
	opsi [47][1] = "B. <img src='../../assets/img/48/B.jpg'>";//B
	opsi [47][2] = "C. <img src='../../assets/img/48/C.jpg'>";//C
	opsi [47][3] = "D. <img src='../../assets/img/48/D.jpg'>";//D
	opsi [47][4] = "E. <img src='../../assets/img/48/E.jpg'>";//E
	opsi [47][5] = "3";//kunci jawaban

	opsi [48][0] = "A. <img src='../../assets/img/49/A.jpg'>";//A
	opsi [48][1] = "B. <img src='../../assets/img/49/B.jpg'>";//B
	opsi [48][2] = "C. <img src='../../assets/img/49/C.jpg'>";//C
	opsi [48][3] = "D. <img src='../../assets/img/49/D.jpg'>";//D
	opsi [48][4] = "E. <img src='../../assets/img/49/E.jpg'>";//E
	opsi [48][5] = "2";//kunci jawaban

	opsi [49][0] = "A. <img src='../../assets/img/50/A.jpg'>";//A
	opsi [49][1] = "B. <img src='../../assets/img/50/B.jpg'>";//B
	opsi [49][2] = "C. <img src='../../assets/img/50/C.jpg'>";//C
	opsi [49][3] = "D. <img src='../../assets/img/50/D.jpg'>";//D
	opsi [49][4] = "E. <img src='../../assets/img/50/E.jpg'>";//E
	opsi [49][5] = "3";//kunci jawaban

	opsi [50][0] = "A. Ivankov become";//A
	opsi [50][1] = "B. did Ivankov become";//B
	opsi [50][2] = "C. does Ivankov become";//C
	opsi [50][3] = "D. Ivankov becoming";//D
	opsi [50][4] = "";//D
	opsi [50][5] = "3";//kunci jawaban

	opsi [51][0] = "A. beautiful a light blue kimono Japanese";//A
	opsi [51][1] = "B. beautiful Japanese a kimono light blue";//B
	opsi [51][2] = "C. a Japanese beautiful light blue kimono";//C
	opsi [51][3] = "D. a beautiful light blue Japanese kimono";//D
	opsi [51][4] = "";//D
	opsi [51][5] = "4";//kunci jawaban

	opsi [52][0] = "A. is a painter";//A
	opsi [52][1] = "B. a well-known painter";//B
	opsi [52][2] = "C. he is a talented man";//C
	opsi [52][3] = "D. that a professional painter";//D
	opsi [52][4] = "";//D
	opsi [52][5] = "2";//kunci jawaban

	opsi [53][0] = "A. does";//A
	opsi [53][1] = "B. will do";//B
	opsi [53][2] = "C. is doing";//C
	opsi [53][3] = "D. do";//D
	opsi [53][4] = "";//D
	opsi [53][5] = "4";//kunci jawaban

	opsi [54][0] = "A. persuasive";//A
	opsi [54][1] = "B. persuading";//B
	opsi [54][2] = "C. persuade";//C
	opsi [54][3] = "D. persuasively";//D
	opsi [54][4] = "";//D
	opsi [54][5] = "4";//kunci jawaban

	opsi [55][0] = "A. that";//A
	opsi [55][1] = "B. wether";//B
	opsi [55][2] = "C. where";//C
	opsi [55][3] = "D. unless";//D
	opsi [55][4] = "";//D
	opsi [55][5] = "1";//kunci jawaban

	opsi [56][0] = "A. If my parent bought me a car";//A
	opsi [56][1] = "B. If my parent buys me a car";//B
	opsi [56][2] = "C. Had my parent bought me a car";//C
	opsi [56][3] = "D. Had bought my parent a car";//D
	opsi [56][4] = "";//D
	opsi [56][5] = "3";//kunci jawaban

	opsi [57][0] = "A. another";//A
	opsi [57][1] = "B. other";//B
	opsi [57][2] = "C. the other";//C
	opsi [57][3] = "D. the others";//D
	opsi [57][4] = "";//D
	opsi [57][5] = "1";//kunci jawaban

	opsi [58][0] = "A. is graduating";//A
	opsi [58][1] = "B. has graduated";//B
	opsi [58][2] = "C. will graduate";//C
	opsi [58][3] = "D. will have graduated";//D
	opsi [58][4] = "";//D
	opsi [58][5] = "4";//kunci jawaban

	opsi [59][0] = "A. quick, nice";//A
	opsi [59][1] = "B. quickly, nicely";//B
	opsi [59][2] = "C. quickly, nice";//C
	opsi [59][3] = "D. quick, nicely";//D
	opsi [59][4] = "";//D
	opsi [59][5] = "4";//kunci jawaban

	opsi [60][0] = "A. fright";//A
	opsi [60][1] = "B. frighten";//B
	opsi [60][2] = "C. frightened";//C
	opsi [60][3] = "D. frightening";//D
	opsi [60][4] = "";//kunci jawaban
	opsi [60][5] = "4";//kunci jawaban

	opsi [61][0] = "A. the slimmest";//A
	opsi [61][1] = "B. the slimmer";//B
	opsi [61][2] = "C. the more slim";//C
	opsi [61][3] = "D. the most slimmest";//D
	opsi [61][4] = "";//kunci jawaban
	opsi [61][5] = "2";//kunci jawaban

	opsi [62][0] = "A. Vivi finished";//A
	opsi [62][1] = "B. Vivi has finished";//B
	opsi [62][2] = "C. has Vivi finished";//C
	opsi [62][3] = "D. had Vivi finished";//D
	opsi [62][4] = "";//kunci jawaban
	opsi [62][5] = "4";//kunci jawaban

	opsi [63][0] = "A. cut";//A
	opsi [63][1] = "B. cutted";//B
	opsi [63][2] = "C. cutting";//C
	opsi [63][3] = "D. cuts";//D
	opsi [63][4] = "";//kunci jawaban
	opsi [63][5] = "1";//kunci jawaban

	opsi [64][0] = "A. does he";//A
	opsi [64][1] = "B. did he";//B
	opsi [64][2] = "C. doesn't he";//C
	opsi [64][3] = "D. didn't he";//D
	opsi [64][4] = "";//kunci jawaban
	opsi [64][5] = "1";//kunci jawaban

	opsi [65][0] = "A. Largest";//A
	opsi [65][1] = "B. In Kapuas";//B
	opsi [65][2] = "C. involve";//C
	opsi [65][3] = "D. To";//D
	opsi [65][4] = "";//kunci jawaban
	opsi [65][5] = "3";//kunci jawaban

	opsi [66][0] = "A. Also";//A
	opsi [66][1] = "B. Live";//B
	opsi [66][2] = "C. To my house";//C
	opsi [66][3] = "D. Go";//D
	opsi [66][4] = "";//kunci jawaban
	opsi [66][5] = "1";//kunci jawaban

	opsi [67][0] = "A. Play";//A
	opsi [67][1] = "B. New guitar";//B
	opsi [67][2] = "C. Bought";//C
	opsi [67][3] = "D. For her";//D
	opsi [67][4] = "";//kunci jawaban
	opsi [67][5] = "1";//kunci jawaban

	opsi [68][0] = "A. The book";//A
	opsi [68][1] = "B. Open";//B
	opsi [68][2] = "C. By";//C
	opsi [68][3] = "D. The teachers";//D
	opsi [68][4] = "";//kunci jawaban
	opsi [68][5] = "2";//kunci jawaban

	opsi [69][0] = "A. Was";//A
	opsi [69][1] = "B. Fourth planet";//B
	opsi [69][2] = "C. And";//C
	opsi [69][3] = "D. After";//D
	opsi [69][4] = "";//kunci jawaban
	opsi [69][5] = "1";//kunci jawaban

	opsi [70][0] = "A. various";//A
	opsi [70][1] = "B. common";//B
	opsi [70][2] = "C. identical";//C
	opsi [70][3] = "D. together";//D
	opsi [70][4] = "";//kunci jawaban
	opsi [70][5] = "1";//kunci jawaban

	opsi [71][0] = "A. its variety";//A
	opsi [71][1] = "B. its stove";//B
	opsi [71][2] = "C. its content";//C
	opsi [71][3] = "D. its liquid";//D
	opsi [71][4] = "";//kunci jawaban
	opsi [71][5] = "1";//kunci jawaban

	opsi [72][0] = "A. The function of portable stove";//A
	opsi [72][1] = "B. The current technology for cooking";//B
	opsi [72][2] = "C. All about portable stove";//C
	opsi [72][3] = "D. The benefit of using portable stove";//D
	opsi [72][4] = "";//kunci jawaban
	opsi [72][5] = "3";//kunci jawaban

	opsi [73][0] = "A. Use a volatile liquid fuel and bottled gas";//A
	opsi [73][1] = "B. Use solid or liquid fuel for unpressurized stove";//B
	opsi [73][2] = "C. Use liquid, solid and bottled gas";//C
	opsi [73][3] = "D. Unpressurized stove, pressurized, and gravity-fed \'spirit'\ stove";//D
	opsi [73][4] = "";//kunci jawaban
	opsi [73][5] = "4";//kunci jawaban

	opsi [74][0] = "A. for picnicking, camping and backpacking";//A
	opsi [74][1] = "B. used for outdoor food service";//B
	opsi [74][2] = "C. tcan be used in common situation";//C
	opsi [74][3] = "D. which can be used in diverse situations";//D
	opsi [74][4] = "";//kunci jawaban
	opsi [74][5] = "4";//kunci jawaban

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

