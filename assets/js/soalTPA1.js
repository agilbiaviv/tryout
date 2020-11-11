function ArrOpsi(rows, coloumns){
var arr = [];
	for(var x = 0; x < rows ; x++){
		arr[x] = new Array(coloumns);
	}
	return arr;
}

//set soal
function soal() {
	var pertanyaan = [];

	pertanyaan [0]  = 'Untuk soal nomor 1 – 2, pilihlah kata atau frasa yang bertanda A, B, C, D, atau E yang mempunyai <b><u>arti sama atau arti paling dekat</u></b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut!<br><br>BORJUASI'
	pertanyaan [1]  = 'Untuk soal nomor 1 – 2, pilihlah kata atau frasa yang bertanda A, B, C, D, atau E yang mempunyai <b><u>arti sama atau arti paling dekat</u></b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut!<br><br>EIGENDOM'
	pertanyaan [2]  = 'Untuk soal nomor 3 – 4, pilihlah kata-kata atau frasa yang bertanda A, B, C, D, atau E yang merupakan <b><u>padanan kata atau padanan pengertian yang paling dekat</u></b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut!<br><br>AGUNAN'
	pertanyaan [3]  = 'Untuk soal nomor 3 – 4, pilihlah kata-kata atau frasa yang bertanda A, B, C, D, atau E yang merupakan <b><u>padanan kata atau padanan pengertian yang paling dekat</u></b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut!<br><br>IMLA'
	pertanyaan [4]  = 'Untuk soal nomor 5 – 6, pilihlah kata-kata atau frasa yang bertanda A, B, C, D, atau E yang merupakan <b><u>lawan kata atau lawan pengertian yang paling dekat</u></b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut!<br><br>CUPAI'
	pertanyaan [5]  = 'Untuk soal nomor 5 – 6, pilihlah kata-kata atau frasa yang bertanda A, B, C, D, atau E yang merupakan <b><u>lawan kata atau lawan pengertian yang paling dekat</u></b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut!<br><br>BATIL'
	pertanyaan [6]  = 'Untuk soal nomor 7 – 8, pilihlah kata-kata atau frasa yang bertanda A, B, C, D, atau E yang merupakan <b><u>padanan hubungan atau hubungan paling serupa</u></b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut!<br><br>HAK : KEWAJIBAN = ... : ...'
	pertanyaan [7]  = 'Untuk soal nomor 7 – 8, pilihlah kata-kata atau frasa yang bertanda A, B, C, D, atau E yang merupakan <b><u>padanan hubungan atau hubungan paling serupa</u></b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut!<br><br>JARAK : METER = ... : ...'
	pertanyaan [8]  = 'Jika $a^2b^3 − 23 = 177$ dan 𝑎𝑏 = 𝑐, maka 𝑎 = ....'
	pertanyaan [9]  = 'Jika $a = 3 + √5$, maka $(3 + √5) (√{3 − √5})$= ....'
	pertanyaan [10] = 'Jika $a = √{x^2 − 2xy + y^2}$ dan $b = √{x^2 + 2xy + y^2}$ untuk 𝑥 > 𝑦 > 0, maka $(a + b)^2$ = ....'
	pertanyaan [11] = 'Jika 4𝑥 + 6𝑦 = 26, maka 6𝑥 + 9𝑦 = ....'
	pertanyaan [12] = '${{57^2 - 43^2}/7}$  x  $3% + {√{20^2 - 16^2}} / 2 =$ ... '
	pertanyaan [13] = 'Jika 𝑎 = 3𝑏 dan 𝑐 =$1/3$𝑎, untuk 𝑎, 𝑏, 𝑐 $∈$ $ℕ$, maka nilai dari ${a^2 + b^2 + c^2}/{5ac}$ = ...'
	pertanyaan [14] = '${7^2018 + 7^10009} / {7^2009 + 7^1000} $= ...'
	pertanyaan [15] = 'Jika 𝑎 + 𝑏 = $2√{ab}$, untuk 𝑎, 𝑏 > 0, maka nilai dari $(1/a + 1/b)(a + b)$ = ...'
	pertanyaan [16] = 'Jika 𝑎 = 107 × 127 − 119 × 115 dan 𝑏 = $10^2$ − 4, maka ....'
	pertanyaan [17] = 'Jika 𝑥 = luas lingkaran dengan jari-jari 14, sedangkan 𝑦 = luas persegi dengan sisi 28, maka ....'
	pertanyaan [18] = 'Jika diketahui 𝑥 = $7^7$ − 𝑦, 𝑦 = $7^6$, dan 𝑧 = 4𝑦, untuk 𝑥, 𝑦, 𝑧 > 0, maka ....'
	pertanyaan [19] = 'Diketahui 𝑥 ∗ 𝑦 = 𝑥 + 𝑦 + 𝑥𝑦, untuk 𝑥, 𝑦 $∈$ $ℕ$. Jika 𝑎 = 6 ∗ 5 dan 𝑏 = 3 ∗ 7, maka ....'
	pertanyaan [20] = 'Sebuah lingkaran memiliki luas 𝑝 cm$^2$. Jari-jari lingkaran tersebut lalu diperpanjang sehingga luasnya berubah menjadi 𝑞 cm$^2$. Pernyataan yang benar adalah ....'
	pertanyaan [21] = 'Jika 𝑥 = 3 + 5 + 7 + ⋯ + 21 dan 𝑦 = 4 + 6 + 8 + ⋯ + 20, maka ....'
	pertanyaan [22] = 'Jika $3^a$ = 729 dan $4^b$ = 1024, maka ....'
	pertanyaan [23] = 'Perbandingan uang Cahyo dan Adi adalah 3 : 4. Jumlah uang mereka berdua adalah Rp210.000,00. Jika Cahyo menggunakan uangnya untuk membeli mi ayam seharga Rp10.000,00 dan Adi menggunakan uangnya untuk membeli bakso seharga Rp20.000,00, maka perbandingan uang Cahyo dan Adi sekarang akan menjadi ....'
	pertanyaan [24] = 'Lantai berukuran 21 m × 12 m akan ditutup dengan keramik berukuran 50 cm × 50 cm. Jika harga keramik tersebut adalah Rp140.000,00/lusin, maka berapakah biaya yang dibutuhkan untuk mengeramik lantai tersebut?'
	pertanyaan [25] = 'Sepuluh tahun yang lalu, usia Hazard sama dengan dua lebihnya dari usia Morata. Jika 5 tahun yang akan datang perbandingan usia Morata dan Hazard adalah 15 : 16, maka usia Morata sekarang adalah ....'
	pertanyaan [26] = 'Sebuah proyek mampu diselesaikan oleh 15 pekerja dalam waktu 30 hari. Berapa hari proyek tersebut akan selesai jika dikerjakan oleh 25 pekerja?'
	pertanyaan [27] = 'Harga 5 kg gula dan 3 kg tepung adalah Rp50.400,00. Sedangkan 3 kg gula dan 5 kg tepung adalah Rp38.400,00. Jika ibu membeli 1 kg gula dan 1 kg tepung, maka uang yang harus dibayarkan adalah ….'
	pertanyaan [28] = 'Rata-rata nilai matematika dari 40 siswa adalah 7,3. Jika terdapat sepuluh siswa yang mengikuti ulangan susulan sehingga mengakibatkan rata-rata nilai matematika berubah menjadi 7,5, maka rata-rata nilai sepuluh siswa tersebut adalah ....'
	pertanyaan [29] = 'Sebuah produk seharga 𝐴 rupiah didiskon sebesar 𝐵%. Pak Dadang membeli produk tersebut dan membayar menggunakan uang sebesar 𝐶 rupiah. Jika ternyata Pak Dadang membayar menggunakan uang lebih, maka kembalian yang diperoleh Pak Dadang adalah ... rupiah.'
	pertanyaan [30] = 'Diagonal pada segi−𝑛 beraturan adalah garis yang menghubungkan dua buah titik sudut yang tidak segaris pada segi−𝑛 beraturan. Banyaknya diagonal pada segi−7 beraturan adalah ....'
	pertanyaan [31] = 'Sebuah bak air terisi setengah penuh. Jika diisi 50 liter, maka bak tersebut akan terisi 5/8 bagian. Volume total bak air tersebut adalah ... liter.'
	pertanyaan [32] = 'Banyaknya kursi pada baris pertama dalam gedung pertunjukan adalah 15 kursi. Banyaknya kursi pada baris berikutnya selalu bertambah 4 lebih banyak daripada kursi pada baris sebelumnya. Jika dalam gedung terdapat 10 baris kursi, maka jumlah kursi seluruhnya adalah ….'
	pertanyaan [33] = 'A, A, B, D, D, I, G, P, ... , ....'
	pertanyaan [34] = '34, 32, 37, ... , ... , 38, 43'
	pertanyaan [35] = '2255, 2002, 1749, 1496, ….'
	pertanyaan [36] = 'Jika Toni sedang mengikuti jam pelajaran di sekolah, maka ia tidak membawa ponsel.<br>Toni membawa ponsel'
	pertanyaan [37] = 'Semua A adalah B. Semua B adalah C.<br>Sebagian A adalah D.'
	pertanyaan [38] = 'Sebagian hewan yang hidup di air bernapas menggunakan paru-paru.<br>Hewan X hidup di air.'
	pertanyaan [39] = 'Untuk soal nomor 40 perhatikan ilustrasi berikut!<br>Ginting, Jojo, Kevin, dan Gideon mengikuti perlombaan bulutangkis tunggal putra. Mereka berempat akan saling bertanding satu sama lain. Beberapa fakta tentang perlombaan tersebut antara lain: <br></br>∙ Setiap dua orang akan bertemu satu kali <br> ∙ Skor menang adalah 1, dan skor kalah adalah 0 <br> ∙ Juara dari perlombaan tersebut adalah yang mendapatkan skor terbanyak <br> ∙ Kevin menang 3 kali <br> ∙ Skor yang diperoleh Jojo adalah 2, sedangkan skor yang diperoleh Ginting adalah 0 <br>Urutan mereka berempat dari skor yang paling tinggi adalah ....'
	pertanyaan [40] = 'Untuk soal nomor 41 perhatikan ilustrasi berikut!<br>Marion sedang merencanakan liburan ke Boyolali. Ia ingin pergi ke beberapa objek wisata, antara lain: Tlatar, Simpang Siaga, Alun-Alun, Selo, dan Ketep. Ada beberapa hal yang harus ia perhatikan, yaitu:<br>∙ Ketep harus dikunjungi terakhir<br> ∙ Tlatar hanya dapat dikunjungi jika Simpang siaga dan Alun-Alun sudah dikunjungi<br> ∙ Selo hanya dapat dikunjungi setelah Simpang siaga <br>Jika Marion memutuskan bahwa objek wisata pertama yang ia kunjungi adalah Alun-Alun, maka pernyataan yang pasti benar adalah ....'
	pertanyaan [41] = 'Untuk soal nomor 42 perhatikan ilustrasi berikut!<br>Ada enam anak remaja A, B, C, D, E dan F, dalam suatu kelompok belajar. Dari paling kecil hingga paling besar, anak-anak ini masing masing secara berturut turut menyukai apel, durian, jeruk, manga, nanas, dan sawo.<br>∙ A tidak menyukai nanas, lebih besar daripada C <br>∙ B lebih besar daripad E dan F <br>∙ B lebih kecil daripada D <br>∙ C lebih besar daripada F <br>Jika A menyukai jeruk, C haruslah anak yang menyukai….'
	pertanyaan [42] = '<img src="../../assets/img/TPA1/43/soal.jpg">'
	pertanyaan [43] = '<img src="../../assets/img/TPA1/44/soal.jpg">'
	pertanyaan [44] = '<img src="../../assets/img/TPA1/45/soal.jpg">'
	
	//pilihan
	var opsi = ArrOpsi(pertanyaan.length,6); //deklarasi 2d array untuk pilihan
	// var pilihan = '';
	opsi [0][0] = 'Suku bangsa yang mendiami daerah Bima';//A
	opsi [0][1] = 'Golongan menengah ke atas';//B
	opsi [0][2] = 'Kulit batang sagu';//C
	opsi [0][3] = 'Berlubang besar karena sobek';//D
	opsi [0][4] = 'Ucapan selamat pagi';//E
	opsi [0][5] = '2';//kunci jawaban

	opsi [1][0] = 'Hak mutlak atas suatu barang';//A
	opsi [1][1] = 'Kata yang terbaca sama dari depan maupun belakang';//B
	opsi [1][2] = 'Peribahasa yang mengandung nasihat';//C
	opsi [1][3] = 'Karakter yang memiliki lebih dari satu cara pengucapan';//D
	opsi [1][4] = 'Peringatan yang disertai dengan ancaman';//E
	opsi [1][5] = '1';//kunci jawaban

	opsi [2][0] = 'Kebun';//A
	opsi [2][1] = 'Anjungan';//B
	opsi [2][2] = 'Jaminan';//C
	opsi [2][3] = 'Ajudan';//D
	opsi [2][4] = 'Kereta';//E
	opsi [2][5] = '3';//kunci jawaban

	opsi [3][0] = 'Imlek';//A
	opsi [3][1] = 'Celah';//B
	opsi [3][2] = 'Kosong';//C
	opsi [3][3] = 'Bukti';//D
	opsi [3][4] = 'Dikte';//E
	opsi [3][5] = '5';//kunci jawaban

	opsi [4][0] = 'Semangat';//A
	opsi [4][1] = 'Kuat';//B
	opsi [4][2] = 'Waspada';//C
	opsi [4][3] = 'Lalai';//D
	opsi [4][4] = 'Kerja';//E
	opsi [4][5] = '3';//kunci jawaban

	opsi [5][0] = 'Batal';//A
	opsi [5][1] = 'Jujur';//B
	opsi [5][2] = 'Benar';//C
	opsi [5][3] = 'Terang';//D
	opsi [5][4] = 'Gelap';//E
	opsi [5][5] = '3';//kunci jawaban

	opsi [6][0] = 'Abai : Acuh';//A
	opsi [6][1] = 'Hirau : Acuh';//B
	opsi [6][2] = 'Peduli : Sangat';//C
	opsi [6][3] = 'Harus : Seimbang';//D
	opsi [6][4] = 'Pasti : Mutlak';//E
	opsi [6][5] = '1';//kunci jawaban

	opsi [7][0] = 'Gram : Kilo';//A
	opsi [7][1] = 'Kilogram : Bobot';//B
	opsi [7][2] = 'Kain : Halus';//C
	opsi [7][3] = 'Volume : Liter';//D
	opsi [7][4] = 'Lembar : Kertas';//E
	opsi [7][5] = '4';//kunci jawaban

	opsi [8][0] = '$c^3/200$';//A
	opsi [8][1] = '$200/c^2$';//B
	opsi [8][2] = '$c^2/200$';//C
	opsi [8][3] = '$200/c^3$';//D
	opsi [8][4] = '${c^3 + 200}/c$';//E
	opsi [8][5] = '1';//kunci jawaban

	opsi [9][0] = '$√a$';//A
	opsi [9][1] = '$a$';//B
	opsi [9][2] = '$2√a$';//C
	opsi [9][3] = '$2a$';//D
	opsi [9][4] = '$a√a$';//E
	opsi [9][5] = '3';//kunci jawaban

	opsi [10][0] = '$x − y$';//A
	opsi [10][1] = '$x + y$';//B
	opsi [10][2] = '$2y$';//C
	opsi [10][3] = '$2x^2$';//D
	opsi [10][4] = '$4x^2$';//E
	opsi [10][5] = '5';//kunci jawaban

	opsi [11][0] = '52';//A
	opsi [11][1] = '39';//B
	opsi [11][2] = '26';//C
	opsi [11][3] = '13';//D
	opsi [11][4] = '7';//E
	opsi [11][5] = '2';//kunci jawaban

	opsi [12][0] = '3';//A
	opsi [12][1] = '6';//B
	opsi [12][2] = '9';//C
	opsi [12][3] = '12';//D
	opsi [12][4] = '15';//E
	opsi [12][5] = '4';//kunci jawaban

	opsi [13][0] = '$11/15$';//A
	opsi [13][1] = '$9/15$';//B
	opsi [13][2] = '$7/15$';//C
	opsi [13][3] = '$5/15$';//D
	opsi [13][4] = '$1/15$';//E
	opsi [13][5] = '1';//kunci jawaban

	opsi [14][0] = '1';//A
	opsi [14][1] = '7';//B
	opsi [14][2] = '49';//C
	opsi [14][3] = '$7^5$';//D
	opsi [14][4] = '$7^9$';//E
	opsi [14][5] = '5';//kunci jawaban

	opsi [15][0] = '5';//A
	opsi [15][1] = '4';//B
	opsi [15][2] = '3';//C
	opsi [15][3] = '2';//D
	opsi [15][4] = '1';//E
	opsi [15][5] = '2';//kunci jawaban

	opsi [16][0] = '$a > b$';//A
	opsi [16][1] = '$a = b$';//B
	opsi [16][2] = '$a = 2b$';//C
	opsi [16][3] = '$a < -b$';//D
	opsi [16][4] = '$a + b = 0$';//E
	opsi [16][5] = '5';//kunci jawaban

	opsi [17][0] = '$x = y$';//A
	opsi [17][1] = '$x < y$';//B
	opsi [17][2] = '$x > y$';//C
	opsi [17][3] = '$x = y + 14$';//D
	opsi [17][4] = 'Hubungan $x$ dan $y$ tidak dapat ditentukan';//E
	opsi [17][5] = '2';//kunci jawaban

	opsi [18][0] = '$x = z$';//A
	opsi [18][1] = '$z = x - y$';//B
	opsi [18][2] = '$x = y + 2z$';//C
	opsi [18][3] = '$x > z$';//D
	opsi [18][4] = '$x + z = y + z$';//E
	opsi [18][5] = '4';//kunci jawaban

	opsi [19][0] = '$a = b$';//A
	opsi [19][1] = '$a < b$';//B
	opsi [19][2] = '$a = b + 1$';//C
	opsi [19][3] = '$a > b$';//D
	opsi [19][4] = '$b = a + 1$';//E
	opsi [19][5] = '4';//kunci jawaban

	opsi [20][0] = '$p > q$';//A
	opsi [20][1] = '$p < q$';//B
	opsi [20][2] = '$p = q$';//C
	opsi [20][3] = '$p = q + r$';//D
	opsi [20][4] = 'Hubungan $p$ dan $q$ tidak dapat ditentukan';//E
	opsi [20][5] = '2';//kunci jawaban

	opsi [21][0] = '$x > y$';//A
	opsi [21][1] = '$x = y$';//B
	opsi [21][2] = '$x < y$';//C
	opsi [21][3] = '$x = y + 3$';//D
	opsi [21][4] = 'Hubungan $x$ dan $y$ tidak dapat ditentukan';//E
	opsi [21][5] = '1';//kunci jawaban

	opsi [22][0] = '$b = a + 1$';//A
	opsi [22][1] = '$a < b$';//B
	opsi [22][2] = '$a = b$';//C
	opsi [22][3] = '$a = b + 3$';//D
	opsi [22][4] = '$a = b + 1$';//E
	opsi [22][5] = '5';//kunci jawaban

	opsi [23][0] = '1 : 2';//A
	opsi [23][1] = '3 : 4';//B
	opsi [23][2] = '4 : 5';//C
	opsi [23][3] = '5 : 6';//D
	opsi [23][4] = '6 : 7';//E
	opsi [23][5] = '3';//kunci jawaban

	opsi [24][0] = 'Rp 13.840.000,00';//A
	opsi [24][1] = 'Rp 12.560.000,00';//B
	opsi [24][2] = 'Rp 11.760.000,00';//C
	opsi [24][3] = 'Rp 10.144.000,00';//D
	opsi [24][4] = 'Rp 10.000.000,00';//E
	opsi [24][5] = '3';//kunci jawaban

	opsi [25][0] = '35';//A
	opsi [25][1] = '30';//B
	opsi [25][2] = '25';//C
	opsi [25][3] = '20';//D
	opsi [25][4] = '15';//E
	opsi [25][5] = '3';//kunci jawaban

	opsi [26][0] = '30';//A
	opsi [26][1] = '25';//B
	opsi [26][2] = '24';//C
	opsi [26][3] = '18';//D
	opsi [26][4] = '15';//E
	opsi [26][5] = '4';//kunci jawaban

	opsi [27][0] = 'Rp 11.100,00';//A
	opsi [27][1] = 'Rp 12.100,00';//B
	opsi [27][2] = 'Rp 13.200,00';//C
	opsi [27][3] = 'Rp 14.600,00';//D
	opsi [27][4] = 'Rp 24.000,00';//E
	opsi [27][5] = '1';//kunci jawaban

	opsi [28][0] = '9,2';//A
	opsi [28][1] = '8,3';//B
	opsi [28][2] = '7,6';//C
	opsi [28][3] = '6,8';//D
	opsi [28][4] = '6,5';//E
	opsi [28][5] = '2';//kunci jawaban

	opsi [29][0] = '${100A - 100C + AB}/100$';//A
	opsi [29][1] = '${100C - 100A + BC}/100$';//B
	opsi [29][2] = '${100B - 100C + AB}/100$';//C
	opsi [29][3] = '${100C - 100A + AB}/100$';//D
	opsi [29][4] = '${100AB - 100A + C}/100$';//E
	opsi [29][5] = '4';//kunci jawaban

	opsi [30][0] = '14';//A
	opsi [30][1] = '15';//B
	opsi [30][2] = '18';//C
	opsi [30][3] = '19';//D
	opsi [30][4] = '21';//E
	opsi [30][5] = '1';//kunci jawaban

	opsi [31][0] = '500';//A
	opsi [31][1] = '400';//B
	opsi [31][2] = '300';//C
	opsi [31][3] = '200';//D
	opsi [31][4] = '100';//E
	opsi [31][5] = '2';//kunci jawaban

	opsi [32][0] = '245 Kursi';//A
	opsi [32][1] = '255 Kursi';//B
	opsi [32][2] = '275 Kursi';//C
	opsi [32][3] = '300 Kursi';//D
	opsi [32][4] = '330 Kursi';//E
	opsi [32][5] = '5';//kunci jawaban

	opsi [33][0] = 'J, X';//A
	opsi [33][1] = 'K, M';//B
	opsi [33][2] = 'G, P';//C
	opsi [33][3] = 'K, Y';//D
	opsi [33][4] = 'W, Z';//E
	opsi [33][5] = '4';//kunci jawaban

	opsi [34][0] = '34, 41';//A
	opsi [34][1] = '34, 48';//B
	opsi [34][2] = '40, 50';//C
	opsi [34][3] = '41, 46';//D
	opsi [34][4] = '35, 40';//E
	opsi [34][5] = '5';//kunci jawaban

	opsi [35][0] = '1243';//A
	opsi [35][1] = '1342';//B
	opsi [35][2] = '1442';//C
	opsi [35][3] = '1423';//D
	opsi [35][4] = '1443';//E
	opsi [35][5] = '1';//kunci jawaban

	opsi [36][0] = 'Toni tidak sedang mengikuti jam pelajaran di sekolah';//A
	opsi [36][1] = 'Toni sedang mengikuti jam pelajaran di sekolah';//B
	opsi [36][2] = 'Toni sedang di rumah';//C
	opsi [36][3] = 'Toni membawa ponsel meski sedang mengikuti jam pelajaran';//D
	opsi [36][4] = 'Tidak dapat disimpulkan';//E
	opsi [36][5] = '1';//kunci jawaban

	opsi [37][0] = 'Semua C adalah A';//A
	opsi [37][1] = 'Semua B adalah A';//B
	opsi [37][2] = 'Sebagian C adalah D';//C
	opsi [37][3] = 'Semua B bukanlah D';//D
	opsi [37][4] = 'Semua D adalah C';//E
	opsi [37][5] = '3';//kunci jawaban

	opsi [38][0] = 'Hewan X bernapas menggunakan insang';//A
	opsi [38][1] = 'Hewan X bernapas menggunakan paru-paru';//B
	opsi [38][2] = 'Hewan X sebenarnya hidup di darat';//C
	opsi [38][3] = 'Tidak mungkin hewan X dapat hidup di darat';//D
	opsi [38][4] = 'Mungkin saja hewan X bernapas menggunakan insang';//E
	opsi [38][5] = '5';//kunci jawaban

	opsi [39][0] = 'Kevin, Gideon, Jojo, Ginting';//A
	opsi [39][1] = 'Kevin, Jojo, Gideon, Ginting';//B
	opsi [39][2] = 'Kevin, Jojo, Ginting, Gideon';//C
	opsi [39][3] = 'Jojo, Kevin, Gideon, Ginting';//D
	opsi [39][4] = 'Jojo, Gideon, Kevin, Ginting';//E
	opsi [39][5] = '2';//kunci jawaban

	opsi [40][0] = 'Ketep dikunjungi sebelum Selo';//A
	opsi [40][1] = 'Selo dikunjungi setelah Tlatar';//B
	opsi [40][2] = 'Tlatar dikunjungi sebelum ketep';//C
	opsi [40][3] = 'Selo dikunjungi sebelum Simpang Siaga';//D
	opsi [40][4] = 'Alun-Alun Dikunjungi setelah Simpang Siaga';//E
	opsi [40][5] = '3';//kunci jawaban

	opsi [41][0] = 'Durian';//A
	opsi [41][1] = 'Jeruk';//B
	opsi [41][2] = 'Nanas';//C
	opsi [41][3] = 'Apel';//D
	opsi [41][4] = 'Sawo';//E
	opsi [41][5] = '1';//kunci jawaban

	opsi [42][0] = '<img src="../../assets/img/TPA1/43/a.jpg">';//A
	opsi [42][1] = '<img src="../../assets/img/TPA1/43/b.jpg">';//B
	opsi [42][2] = '<img src="../../assets/img/TPA1/43/c.jpg">';//C
	opsi [42][3] = '<img src="../../assets/img/TPA1/43/d.jpg">';//D
	opsi [42][4] = '<img src="../../assets/img/TPA1/43/e.jpg">';//E
	opsi [42][5] = '1';//kunci jawaban

	opsi [43][0] = '<img src="../../assets/img/TPA1/44/a.jpg">';//A
	opsi [43][1] = '<img src="../../assets/img/TPA1/44/b.jpg">';//B
	opsi [43][2] = '<img src="../../assets/img/TPA1/44/c.jpg">';//C
	opsi [43][3] = '<img src="../../assets/img/TPA1/44/d.jpg">';//D
	opsi [43][4] = '<img src="../../assets/img/TPA1/44/e.jpg">';//E
	opsi [43][5] = '4';//kunci jawaban

	opsi [44][0] = '<img src="../../assets/img/TPA1/45/a.jpg">';//A
	opsi [44][1] = '<img src="../../assets/img/TPA1/45/b.jpg">';//B
	opsi [44][2] = '<img src="../../assets/img/TPA1/45/c.jpg">';//C
	opsi [44][3] = '<img src="../../assets/img/TPA1/45/d.jpg">';//D
	opsi [44][4] = '<img src="../../assets/img/TPA1/45/e.jpg">';//E
	opsi [44][5] = '1';//kunci jawaban

	var datasoal="";//data yang diload
	var datapilihan="";
	//tempatsoal
	var tempatsoal = [];
	var pilihansoal = [];
	for(var y = 0; y < pertanyaan.length; y++){

	tempatsoal [y]= '<label id="soal'+(y+1)+'" class="control-label soal" for="soal">'+pertanyaan[y]+'</label>';
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
		soal : pertanyaan,
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

