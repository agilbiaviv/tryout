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
	soalTPA[0] = "Unktuk soal nomor 1-2, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang mempunyai <b>arti sama atau arti paling dekat</b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>LEUKOPENIA";
	soalTPA[1] = "Unktuk soal nomor 1-2, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang mempunyai <b>arti sama atau arti paling dekat</b> dengan huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>IMAGO";
	soalTPA[2] = "Unktuk soal nomor 3-4, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang merupakan <b>padanan kata atau padanan pengertian yang paling dekat</b> dengan kata yang dicetak huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>IKAB";
	soalTPA[3] = "Unktuk soal nomor 3-4, pilihlah kata atau frasa yang bertanda A,B,C,D,atau E yang merupakan <b>padanan kata atau padanan pengertian yang paling dekat</b> dengan kata yang dicetak huruf kapital (huruf besar) yang terdapat di atas pilihan-pilihan tersebut.<br><br>RAFIK";
	soalTPA[4] = "Untuk soal nomor 5-6, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>lawan kata atau lawan pengertian yang paling dekat</b> dengan kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>ADATI";
	soalTPA[5] = "Untuk soal nomor 5-6, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>lawan kata atau lawan pengertian yang paling dekat</b> dengan kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>CACAU";
	soalTPA[6] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>KETELA POHON : AKAR=...";
	soalTPA[7] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>1001 MALAM : 1001 LARANGAN = ...";
	soalTPA[8] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>MERAH : KUNING : JINGGA = ...";
	soalTPA[9] = "Untuk soal nomor 7-10, pilihlah kata-kata atau frasa yang bertanda A,B,C,D, atau E yang merupakan <b>padanan hubungan atau hubungan yang paling serupa</b> dengan hubungan kata-kata yang dicetak dengan huruf kapital yang terdapat di atas pilihan-pilihan tersebut.<br><br>SAPI : LUMBA-LUMBA = ...";
	soalTPA[10] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>Otoritas Jasa Keuangan (OJK) bekerjasama dengan Universitas Udayana Bali meluncurkan Bali Center for Sustainable Finance (BCSF), di Denpasar, Bali, Rabu (12/7/2017). Ketua Dewan Komisioner OJK Muliaman D Hadad atakan, BCSF adalah upaya untuk menyediakan informasi terpadu mengenai keuangan berkelanjutan guna mendukung keberhasilan implementasi program keuangan berkelanjutan di Indonesia. \"Jadi ini implementasi roadmap keuangan berkelanjutan 2015-2019 yang telah diluncurkan OJK pada Desember 2014 lalu. Sekaligus sebagai bentuk dukungan pembangunan berkelanjutan di Indonesia,\" kata Muliaman. Pembentukan BCFS juga merupakan bentuk dukungan dari sektor jasa keuangan untuk menciptakan pertumbuhan ekonomi berkelanjutan dari keselarasan antara kepentingan ekonomi, sosial dan lingkungan hidup. Lebih rinci, tujuan pembentukan BCSF antara lain, sebagai pusat studi dan pembelajaran bagi semua pihak dalam melakukan pembelajaran tentang keuangan berkelanjutan dan sarana berkumpulnya para ahli dari berbagai bidang studi. \"Jadi bisa bersama-sama mendiskusikan dan berbagi pengetahuan tentang tantangan serta hambatan dalam implementasi keuangan berkelanjutan,\" kata Muliaman. Tak hanya itu, adanya BCFS juga diharapkan bisa membangun jejaring seluruh pemangku kepentingan dari program keuangan berkelanjutan. Termasuk sebagai pilot project yang menghubungkan antara hasil riset akademis, pelaku industri, dan sektor jasa keuangan. \"Jadi bisa lebih dikembangkan publikasi ilmiah terkait keuangan berkelanjutan, mengingat research terkait masih sangat terbatas baik nasional maupun internasional,\" kata Muliaman. Diketahui, pendirian BCSF didukung oleh Kemenristek DIKTI serta Kementerian Lingkungan Hidup dan Kehutanan (KLHK) dan Kementerian Riset, Teknologi, dan Pendidikan Tinggi (Kemenristekdikti). Dipilihnya Universitas Udayana Bali sebagai pilot project BCFS. Alasannya, karena Bali sebagai wilayah wisata di Indonesia yang punya kondisi sosial dan lingkungan hidup yang kondusif untuk pengembangan keuangan berkelanjutan.<br><br>Ide pokok bacaan diatas yang paling tepat adalah ...."; 
	soalTPA[11] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>Otoritas Jasa Keuangan (OJK) bekerjasama dengan Universitas Udayana Bali meluncurkan Bali Center for Sustainable Finance (BCSF), di Denpasar, Bali, Rabu (12/7/2017). Ketua Dewan Komisioner OJK Muliaman D Hadad atakan, BCSF adalah upaya untuk menyediakan informasi terpadu mengenai keuangan berkelanjutan guna mendukung keberhasilan implementasi program keuangan berkelanjutan di Indonesia. \"Jadi ini implementasi roadmap keuangan berkelanjutan 2015-2019 yang telah diluncurkan OJK pada Desember 2014 lalu. Sekaligus sebagai bentuk dukungan pembangunan berkelanjutan di Indonesia,\" kata Muliaman. Pembentukan BCFS juga merupakan bentuk dukungan dari sektor jasa keuangan untuk menciptakan pertumbuhan ekonomi berkelanjutan dari keselarasan antara kepentingan ekonomi, sosial dan lingkungan hidup. Lebih rinci, tujuan pembentukan BCSF antara lain, sebagai pusat studi dan pembelajaran bagi semua pihak dalam melakukan pembelajaran tentang keuangan berkelanjutan dan sarana berkumpulnya para ahli dari berbagai bidang studi. \"Jadi bisa bersama-sama mendiskusikan dan berbagi pengetahuan tentang tantangan serta hambatan dalam implementasi keuangan berkelanjutan,\" kata Muliaman. Tak hanya itu, adanya BCFS juga diharapkan bisa membangun jejaring seluruh pemangku kepentingan dari program keuangan berkelanjutan. Termasuk sebagai pilot project yang menghubungkan antara hasil riset akademis, pelaku industri, dan sektor jasa keuangan. \"Jadi bisa lebih dikembangkan publikasi ilmiah terkait keuangan berkelanjutan, mengingat research terkait masih sangat terbatas baik nasional maupun internasional,\" kata Muliaman. Diketahui, pendirian BCSF didukung oleh Kemenristek DIKTI serta Kementerian Lingkungan Hidup dan Kehutanan (KLHK) dan Kementerian Riset, Teknologi, dan Pendidikan Tinggi (Kemenristekdikti). Dipilihnya Universitas Udayana Bali sebagai pilot project BCFS. Alasannya, karena Bali sebagai wilayah wisata di Indonesia yang punya kondisi sosial dan lingkungan hidup yang kondusif untuk pengembangan keuangan berkelanjutan.<br><br>Pernyataan di bawah ini yang tidak sesuai dengan bacaan adalah ...."; 
	soalTPA[12] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>Otoritas Jasa Keuangan (OJK) bekerjasama dengan Universitas Udayana Bali meluncurkan Bali Center for Sustainable Finance (BCSF), di Denpasar, Bali, Rabu (12/7/2017). Ketua Dewan Komisioner OJK Muliaman D Hadad atakan, BCSF adalah upaya untuk menyediakan informasi terpadu mengenai keuangan berkelanjutan guna mendukung keberhasilan implementasi program keuangan berkelanjutan di Indonesia. \"Jadi ini implementasi roadmap keuangan berkelanjutan 2015-2019 yang telah diluncurkan OJK pada Desember 2014 lalu. Sekaligus sebagai bentuk dukungan pembangunan berkelanjutan di Indonesia,\" kata Muliaman. Pembentukan BCFS juga merupakan bentuk dukungan dari sektor jasa keuangan untuk menciptakan pertumbuhan ekonomi berkelanjutan dari keselarasan antara kepentingan ekonomi, sosial dan lingkungan hidup. Lebih rinci, tujuan pembentukan BCSF antara lain, sebagai pusat studi dan pembelajaran bagi semua pihak dalam melakukan pembelajaran tentang keuangan berkelanjutan dan sarana berkumpulnya para ahli dari berbagai bidang studi. \"Jadi bisa bersama-sama mendiskusikan dan berbagi pengetahuan tentang tantangan serta hambatan dalam implementasi keuangan berkelanjutan,\" kata Muliaman. Tak hanya itu, adanya BCFS juga diharapkan bisa membangun jejaring seluruh pemangku kepentingan dari program keuangan berkelanjutan. Termasuk sebagai pilot project yang menghubungkan antara hasil riset akademis, pelaku industri, dan sektor jasa keuangan. \"Jadi bisa lebih dikembangkan publikasi ilmiah terkait keuangan berkelanjutan, mengingat research terkait masih sangat terbatas baik nasional maupun internasional,\" kata Muliaman. Diketahui, pendirian BCSF didukung oleh Kemenristek DIKTI serta Kementerian Lingkungan Hidup dan Kehutanan (KLHK) dan Kementerian Riset, Teknologi, dan Pendidikan Tinggi (Kemenristekdikti). Dipilihnya Universitas Udayana Bali sebagai pilot project BCFS. Alasannya, karena Bali sebagai wilayah wisata di Indonesia yang punya kondisi sosial dan lingkungan hidup yang kondusif untuk pengembangan keuangan berkelanjutan.<br><br>Istilah <b>implementasi</b> pada bacaan diatas adalah ...."; 
	soalTPA[13] = "Untuk soal nomor 11-14, bacalah tiap bacaan dengan seksama,<b>kemudian jawablah pertanyaan yang berkaitan dengan kutipan tersebut dengan memilih A, B, C, D, atau E<br><br>BACAAN 1 berikut ini untuk soal nomor 11-14</b><br><br>Otoritas Jasa Keuangan (OJK) bekerjasama dengan Universitas Udayana Bali meluncurkan Bali Center for Sustainable Finance (BCSF), di Denpasar, Bali, Rabu (12/7/2017). Ketua Dewan Komisioner OJK Muliaman D Hadad atakan, BCSF adalah upaya untuk menyediakan informasi terpadu mengenai keuangan berkelanjutan guna mendukung keberhasilan implementasi program keuangan berkelanjutan di Indonesia. \"Jadi ini implementasi roadmap keuangan berkelanjutan 2015-2019 yang telah diluncurkan OJK pada Desember 2014 lalu. Sekaligus sebagai bentuk dukungan pembangunan berkelanjutan di Indonesia,\" kata Muliaman. Pembentukan BCFS juga merupakan bentuk dukungan dari sektor jasa keuangan untuk menciptakan pertumbuhan ekonomi berkelanjutan dari keselarasan antara kepentingan ekonomi, sosial dan lingkungan hidup. Lebih rinci, tujuan pembentukan BCSF antara lain, sebagai pusat studi dan pembelajaran bagi semua pihak dalam melakukan pembelajaran tentang keuangan berkelanjutan dan sarana berkumpulnya para ahli dari berbagai bidang studi. \"Jadi bisa bersama-sama mendiskusikan dan berbagi pengetahuan tentang tantangan serta hambatan dalam implementasi keuangan berkelanjutan,\" kata Muliaman. Tak hanya itu, adanya BCFS juga diharapkan bisa membangun jejaring seluruh pemangku kepentingan dari program keuangan berkelanjutan. Termasuk sebagai pilot project yang menghubungkan antara hasil riset akademis, pelaku industri, dan sektor jasa keuangan. \"Jadi bisa lebih dikembangkan publikasi ilmiah terkait keuangan berkelanjutan, mengingat research terkait masih sangat terbatas baik nasional maupun internasional,\" kata Muliaman. Diketahui, pendirian BCSF didukung oleh Kemenristek DIKTI serta Kementerian Lingkungan Hidup dan Kehutanan (KLHK) dan Kementerian Riset, Teknologi, dan Pendidikan Tinggi (Kemenristekdikti). Dipilihnya Universitas Udayana Bali sebagai pilot project BCFS. Alasannya, karena Bali sebagai wilayah wisata di Indonesia yang punya kondisi sosial dan lingkungan hidup yang kondusif untuk pengembangan keuangan berkelanjutan.<br><br>Hal yang dapat disimpulkan dari bacaan diatas adalah ....";
	soalTPA[14] = "$${4x25x36+4x35^2x36^2}/{2x25+36}=....$$";
	soalTPA[15] = "$$1/{1.4}+1/{4.7}+1/{7.10}+1/{10.13}+1/{13.16}+...+1/{25.28}=...$$";
	soalTPA[16] = "$$({x^{-4/7}y}/{y^{4/7}x^{-1/7}})^{7/3}=...$$";
	soalTPA[17] = "$$`text 'Jika ' p^3 = 20√^3{0,008} - q^3 `text ' dan ' 6^2 - 2 / q = (6^2 + 15)p,$$<br> $$`text ' maka nilai yang mungkin dari p + q adalah ....'$$";
	soalTPA[18] = "$$`text 'Diketahui ' x = 2p^5 + 1 `text ' dan ' y = 2p^4 + 1, `text ' maka ' ...$$";
	soalTPA[19] = "Cika dan Desta adalah dua pekerja sebuah pabrik pakaian. Jika A adalah waktu (dalam jam) yang diperlukan Cika untuk menyelesaikan jahitan baju dengan kecepatan 5 baju/jam, sedangkan B = 6 jam adalah waktu yang diperlukan Desta untuk menyelesaikan jumlah baju yang sama dengan kecepatan 4 baju/jam maka ....";
	soalTPA[20] = "$$`text 'Jika ' 3xy > x^3 + y^3, `text ' maka ' ....$$";
	soalTPA[21] = "Jika 45% dari x adalah 63 dan y adalah jumlah bilangan-bilangan prima kurang dari 35, maka ....";
	soalTPA[22] = "25% dari panjang sebuah sisi persegi panjang sama dengan 30% dari panjang sisi lainnya. Jika keliling persegi panjang tersebut adalah 198 cm, maka selisih panjang dan lebar persegi panjang tersebut adalah ... cm";
	soalTPA[23] = "Bennny adalah importir <em>smartphone</em>. Dari total <em>smartphone</em> yang akan dikirim dari Jepang, hanya 96% yang lolos QC (<em>Quality Control</em>) dan bisa dikirim ke Indonesia. Sepertiga dari total <em>smartphone</em> yang dikirim tidak lolos perijinan bea cukai sehingga tidak sampai di rumah Benny. Jika 20% jumlah <em>smartphone</em> yang datang ke tempat Benny adalah 128 unit, maka total unit yang sebenarnya ingin dikirim Benny dari Jepang pada mulanya adalah ....";
	soalTPA[24] = "Universitas w, x, y, dan z sedang memperebutkan 45 medali. DI akhir ajang, diperoleh jumlah medali yang diperoleh universitas x dan z sama banyak, sedangkan medali universitas y adalah 3/2 medali universitas z. Jika perolehan medali universitas w adalah 1/4 medali universitas x, maka banyak medali yang diperoleh universitas z adalah ...";
	soalTPA[25] = "Jumlah dari dua buah bilangan A dan B dengan A > B adalah 5 kali selisihnya, maka 2/3 dari bilangan A jika dikurangkan dengan bilangan B, hasilnya akan sama dengan ....";
	soalTPA[26] = "Uang Andi adalah 10000a + 1000b rupiah, sedangkan uang Budi 10000b + 1000a rupiah, dimana 0 < a,b < 10. Jumlah uang mereka Rp. 55.000,00, sedangkan selisihnya Rp 9.000,00. Nilai dari a<sup>2</sup> - b<sup>2</sup> adalah ....";
	soalTPA[27] = "Suatu bilangan terdiri dari empat digit angka yang berbeda. Hasil kali keempat digit adalah 84. Angka ke-3 dikurangi angka ke-4 sama dengan angka ke-1. Angka ke-1 ditambah dengan angka ke-2 sama dengan angka ke-4. Dua kali angka ke-1 ditambah angka ke-2 sama dengan angka ke-3. Bilangan tersebut adalah ....";
	soalTPA[28] = "Jessie mendapatkan potongan harga sebesar 50% dari pembelian pakaian di toko & dikenakan pajak sebesar (𝐴 × 10)% dari harga setelah dipotong. Jika 𝐵 adalah harga total, maka yang harus dibayar Jessie adalah ....";
	soalTPA[29] = "Pembeli di suatu kedai martabak memiliki rasa kesukaan masing-masing seperti Toblerone milk & Kitkat green. Dari total 420 pembeli diketahui 320 membeli rasa Toblerone milk, 200 membeli keduanya, dan 34 membeli rasa lainnya. Jika setiap dus hanya muat 19 martabak, maka dus yang perlu disiapkan untuk pembeli martabak rasa Kitkat green adalah ....";
	soalTPA[30] = "Budi membeli kulkas dari Jakarta untuk dijual kembali di Solo. Jika Budi membelinya dengan harga 𝑎, sedangkan dia menginginkan laba penjualan 𝑐%, maka berapa dia harus menjual kulkas tersebut?";
	soalTPA[31] = "Sebuah kardus berukuran 60 cm× 100 cm× 60 cm akan digunakan untuk wadah kaleng-kaleng sarden yang jari-jarinya 2 cm dan tinggi nya 5 cm. Berapa jumlah kaleng sarden maksimal bisa muat dalam kardus tersebut ....";
	soalTPA[32] = "Umur kakek Tama 60 tahun lebih tua dari Tama. Jika umur Kakek 4 tahun lagi adalah 6 kali umur Tama, maka umur kakek Tama 18 tahun yang lalu adalah ...";
	//DURUNG
	soalTPA[33] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>29, 31, 37, 41, 43, 49, 53, ...";
	soalTPA[34] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>L, K, L, K, M, L, O, N, ...";
	soalTPA[35] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>T, U, S, V, R, W, ..., ...";
	soalTPA[36] = "Untuk soal nomor 34-37 masing-masing soal merupakan deret yang belum selesai. Selesaikanlah deret-deret tersebut dengan memilih salah satu alternative yang disediakan, yang Anda anggap paling tepat.<br><br>D, F, I, K, N, P, ...";
	soalTPA[37] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Jika tidak ada korupsi, maka penggunaan dana desa akan optimal.<br>Jika penggunaan dana desa optimal, maka jalan akan diaspal.<br>Ternyata jalan tidak diaspal.";
	soalTPA[38] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Semua Peserta BPJS kesehatan memiliki kartu BPJS.<br>Sebagian warga desa Kapuas Hulu adalah peserta BPJS kesehatan";
	soalTPA[39] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Jika daun dimasukkan dalam air yang telah dididihkan lebih dari 3 menit maka sel daun akanlangsung mati.<br>Daylen memasukkan daun ke dalam air yang telah dididihkan selama 1 menit";
	soalTPA[40] = "Untuk soal nomor 38-41 masing-masing terdiri dari premis-premis dan lima kemungkinan kesimpulan. Pilihlah kesimpulan yang Anda anggap merupakan jawaban yang paling tepat!<br><br>Kuda Mongolia memili kuku yang kuat dan keras.<br>Kuda milik Pak Reno bukan kuda Mongolia. ";
	soalTPA[41] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut</b><br><br>Ada enam bilik yang dapat digunakan pencoblos pada pemilu di desa Mawar. Pada saat tertentu, Pak Beni, Pak Dani, Pak Candra, Pak Lusi, Pak Ogi, dan Pak Joni bersamaan mencoblos dengan urutan tempat pencoblosan sebagai berikut:<br>• Bilik Pak Beni persis sebelah kanan bilik Pak Lusi.<br>• Bilik Pak Candra terletak persis di kanan bilik Pak Ogi.<br>• Bilik Pak Dani terletak tiga bilik di kiri bilik Pak Lusi.<br>• Bilik pak Candra terletak dua bilik di sebelah kanan bilik Pak Dani.<br>• Bilik Pak Joni terletak paling kanan.<br><br>Bilik Pak Lusi berada tepat di antara bilik milik ....";
	soalTPA[42] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut</b><br><br>Ada enam bilik yang dapat digunakan pencoblos pada pemilu di desa Mawar. Pada saat tertentu, Pak Beni, Pak Dani, Pak Candra, Pak Lusi, Pak Ogi, dan Pak Joni bersamaan mencoblos dengan urutan tempat pencoblosan sebagai berikut:<br>• Bilik Pak Beni persis sebelah kanan bilik Pak Lusi.<br>• Bilik Pak Candra terletak persis di kanan bilik Pak Ogi.<br>• Bilik Pak Dani terletak tiga bilik di kiri bilik Pak Lusi.<br>• Bilik pak Candra terletak dua bilik di sebelah kanan bilik Pak Dani.<br>• Bilik Pak Joni terletak paling kanan.<br><br>Jika Pak Ogi dan Pak Beni bertukar posisi, maka urutan dari kiri ke kanan yang benar adalah ...";
	soalTPA[43] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut</b><br><br>Ada enam bilik yang dapat digunakan pencoblos pada pemilu di desa Mawar. Pada saat tertentu, Pak Beni, Pak Dani, Pak Candra, Pak Lusi, Pak Ogi, dan Pak Joni bersamaan mencoblos dengan urutan tempat pencoblosan sebagai berikut:<br>• Bilik Pak Beni persis sebelah kanan bilik Pak Lusi.<br>• Bilik Pak Candra terletak persis di kanan bilik Pak Ogi.<br>• Bilik Pak Dani terletak tiga bilik di kiri bilik Pak Lusi.<br>• Bilik pak Candra terletak dua bilik di sebelah kanan bilik Pak Dani.<br>• Bilik Pak Joni terletak paling kanan.<br><br>Apabila Pak Dani bertukar posisi dengan Pak Lusi sedangkan Pak Joni sudah keluar dari biliknya, posisi tengah ditempati oleh ....";
	soalTPA[44] = "<b>Untuk soal nomor 42-45, perhatikan ilustrasi tersebut</b><br><br>Ada enam bilik yang dapat digunakan pencoblos pada pemilu di desa Mawar. Pada saat tertentu, Pak Beni, Pak Dani, Pak Candra, Pak Lusi, Pak Ogi, dan Pak Joni bersamaan mencoblos dengan urutan tempat pencoblosan sebagai berikut:<br>• Bilik Pak Beni persis sebelah kanan bilik Pak Lusi.<br>• Bilik Pak Candra terletak persis di kanan bilik Pak Ogi.<br>• Bilik Pak Dani terletak tiga bilik di kiri bilik Pak Lusi.<br>• Bilik pak Candra terletak dua bilik di sebelah kanan bilik Pak Dani.<br>• Bilik Pak Joni terletak paling kanan.<br><br>Pak Dani bertukar posisi dengan Pak Candra, sedangkan Pak Ogi bertukar dengan Pak Joni, manakah pernyataan yang benar?";
	soalTPA[45] = "<b>Untuk soal nomor 46-47, perhatikan ilustrasi tersebut</b><br><br>Perasaan Putri selalu berubah-ubah dengan karakteristik berikut:<br>• Jika hari ini murung dan malam tidak hujan, maka besok biasa-biasa saja. Kalau hujan, maka besok pemarah<br>• Jika hari ini apatis dan malam hujan, maka besok pemurung. Kalau tidak, Putri akan berseri-seri<br>• Jika hari ini berseri-seri dan malam hujan maka besok pemurung. Jika tidak, besok biasa-biasa saja<br>• Jika hari ini pemarah, malam hujan, maka besok apatis. Kalau tidak, maka biasa saja<br>• Jika hari ini biasa saja, malam tidak hujan, maka besok berseri-seri. Kalau hujan, besok apatis ";
	soalTPA[46] = "<b>Untuk soal nomor 46-47, perhatikan ilustrasi tersebut</b><br><br>Perasaan Putri selalu berubah-ubah dengan karakteristik berikut:<br>• Jika hari ini murung dan malam tidak hujan, maka besok biasa-biasa saja. Kalau hujan, maka besok pemarah<br>• Jika hari ini apatis dan malam hujan, maka besok pemurung. Kalau tidak, Putri akan berseri-seri<br>• Jika hari ini berseri-seri dan malam hujan maka besok pemurung. Jika tidak, besok biasa-biasa saja<br>• Jika hari ini pemarah, malam hujan, maka besok apatis. Kalau tidak, maka biasa saja<br>• Jika hari ini biasa saja, malam tidak hujan, maka besok berseri-seri. Kalau hujan, besok apatis ";
	soalTPA[47] = "<img src='../../assets/img/48/soal.jpg'>";
	soalTPA[48] = "<img src='../../assets/img/49/soal.jpg'>";
	soalTPA[49] = "<img src='../../assets/img/50/soal.jpg'>";

	soalTPA[50] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>I was bothered by the ... that lived in the old sofa at the corner of the room, so that I bought some pesticides to kill them";
	soalTPA[51] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>... than his mother went to sleep.";
	soalTPA[52] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>... between Oyashio and Kuroshio stream makes Japan become one of the best source of fish.";
	soalTPA[53] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>... the catastrophe has destroyed the village, the people still celebrate the independence day.";
	soalTPA[54] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Mr. Lukmono made the secretary ... the letter of demand before the production of the company begin.";
	soalTPA[55] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>My sister has two children. The first is Tiara and … is Rena.";
	soalTPA[56] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>…, I might have known it.";
	soalTPA[57] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>I feel so … because there are many works to do..";
	soalTPA[58] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Please do not … Ibrahim that I forgot his birthday!";
	soalTPA[59] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Not until I bought that pink bag … realize my sister just bought the same color.";
	soalTPA[60] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>She is a … supermodel.";
	soalTPA[61] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Maria’s father, Allessandro Montessori, …, was very traditional.";
	soalTPA[62] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>My mother suggested that buying red shoes … replaced with white shoes.";
	soalTPA[63] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>Madonna eats as if she … a queen.";
	soalTPA[64] = "<b>STRUCTURE AND WRITTEN EXPRESSION</b><br>Select the correct answer from the four choices given!<br><br>As soon as we have enough money saved, we … vacation to Costa Rica.";
	soalTPA[65] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br><b><u>The</u></b> International Labor Organization <b><u>concern</u></b> on the wealth of <b><u>the employees</u></b> around the world and ensures them to get their <b><u>rights</u></b>.";
	soalTPA[66] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br>The federal police <b><u>have been</u></b> <b><u>identifying</u></b> <b><u>the corpse mutilated</u></b> near the blue lagoon <b><u>found</u></b> three days ago.";
	soalTPA[67] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br><b><u>The Japan</u></b> always <b><u>use</u></b> the word “Nippon” which <b><u>means</u></b> <b><u>“The Land of The Rising Sun”.</u></b>";
	soalTPA[68] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br><b><u>Although</u></b> there are <b><u>more</u></b> than 2,000 different <b><u>variety</u></b> of fabric, all of them <b><u>are</u></b> made from yarn.";
	soalTPA[69] = "<b>ERROR RECOGNITION</b><br>Choose the one <b><u>underlined</b></u> word or phrase which would not be appropriate in standard written English!<br><br>The director encouraged them <b><u>work</u></b> in committees <b><u>to plan</u></b> a more <b><u>effective</u></b> advertising campaign <b><u>for the</u></b> new product.";
	soalTPA[70] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>&emsp;Schizophrenia is a chronic brain disorder that affects about one percent of the population. When Schizophrenia is active, symptoms can include delusions, hallucinations, trouble with thinking and concentration and lack of motivation. However when these symptoms are treated, most people with Schizophrenia will greatly improve over time.<br>&emsp;While there is no cure for Schizophrenia, research is leading to new, safer treatments. Experts also are <b><u>unraveling</u></b> the causes of the disease by studying genetics, conducting behavioral research and by using advanced imaging to look at the brain’s structure and function. These approaches hold the promise of new, more effective therapies.<br>&emsp;The complexity of Schizophrenia may help explain why these are misconceptions about the disease. Schizophrenia does not mean split personality or multiple-personality. Most people with Schizophrenia are not dangerous or <b><u>violent</u></b>. <b><u>They</u></b> are not homeless nor do they live in hospitals. Most people with Schizophrenia live with family, in group homes or on their own.<br>&emsp;Research has shown that Schizophrenia affects men and women about equally but may have an earlier onset in males. Rates are similar in all ethnic group around the world. Schizophrenia is considered a group of disorders where causes and symptoms very considerable between individuals.<br><br>From the passage we can conclude that the Schizophrenia is ...";
	soalTPA[71] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>&emsp;Schizophrenia is a chronic brain disorder that affects about one percent of the population. When Schizophrenia is active, symptoms can include delusions, hallucinations, trouble with thinking and concentration and lack of motivation. However when these symptoms are treated, most people with Schizophrenia will greatly improve over time.<br>&emsp;While there is no cure for Schizophrenia, research is leading to new, safer treatments. Experts also are <b><u>unraveling</u></b> the causes of the disease by studying genetics, conducting behavioral research and by using advanced imaging to look at the brain’s structure and function. These approaches hold the promise of new, more effective therapies.<br>&emsp;The complexity of Schizophrenia may help explain why these are misconceptions about the disease. Schizophrenia does not mean split personality or multiple-personality. Most people with Schizophrenia are not dangerous or <b><u>violent</u></b>. <b><u>They</u></b> are not homeless nor do they live in hospitals. Most people with Schizophrenia live with family, in group homes or on their own.<br>&emsp;Research has shown that Schizophrenia affects men and women about equally but may have an earlier onset in males. Rates are similar in all ethnic group around the world. Schizophrenia is considered a group of disorders where causes and symptoms very considerable between individuals.<br><br>The word “they” in line 11 refers to ...";
	soalTPA[72] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>&emsp;Schizophrenia is a chronic brain disorder that affects about one percent of the population. When Schizophrenia is active, symptoms can include delusions, hallucinations, trouble with thinking and concentration and lack of motivation. However when these symptoms are treated, most people with Schizophrenia will greatly improve over time.<br>&emsp;While there is no cure for Schizophrenia, research is leading to new, safer treatments. Experts also are <b><u>unraveling</u></b> the causes of the disease by studying genetics, conducting behavioral research and by using advanced imaging to look at the brain’s structure and function. These approaches hold the promise of new, more effective therapies.<br>&emsp;The complexity of Schizophrenia may help explain why these are misconceptions about the disease. Schizophrenia does not mean split personality or multiple-personality. Most people with Schizophrenia are not dangerous or <b><u>violent</u></b>. <b><u>They</u></b> are not homeless nor do they live in hospitals. Most people with Schizophrenia live with family, in group homes or on their own.<br>&emsp;Research has shown that Schizophrenia affects men and women about equally but may have an earlier onset in males. Rates are similar in all ethnic group around the world. Schizophrenia is considered a group of disorders where causes and symptoms very considerable between individuals.<br><br>The statements below are true, except ...";
	soalTPA[73] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>&emsp;Schizophrenia is a chronic brain disorder that affects about one percent of the population. When Schizophrenia is active, symptoms can include delusions, hallucinations, trouble with thinking and concentration and lack of motivation. However when these symptoms are treated, most people with Schizophrenia will greatly improve over time.<br>&emsp;While there is no cure for Schizophrenia, research is leading to new, safer treatments. Experts also are <b><u>unraveling</u></b> the causes of the disease by studying genetics, conducting behavioral research and by using advanced imaging to look at the brain’s structure and function. These approaches hold the promise of new, more effective therapies.<br>&emsp;The complexity of Schizophrenia may help explain why these are misconceptions about the disease. Schizophrenia does not mean split personality or multiple-personality. Most people with Schizophrenia are not dangerous or <b><u>violent</u></b>. <b><u>They</u></b> are not homeless nor do they live in hospitals. Most people with Schizophrenia live with family, in group homes or on their own.<br>&emsp;Research has shown that Schizophrenia affects men and women about equally but may have an earlier onset in males. Rates are similar in all ethnic group around the world. Schizophrenia is considered a group of disorders where causes and symptoms very considerable between individuals.<br><br>The world “unraveling” in line 6 is closest in meaning to ...";
	soalTPA[74] = "<b>READING COMPREHENSION<br><br>Read the passage carefully and select the one correct answer from the four choices (A, B, C, or, D)!</b><br><br><b>Reading 1 for questions 71-75</b><br><br>&emsp;Schizophrenia is a chronic brain disorder that affects about one percent of the population. When Schizophrenia is active, symptoms can include delusions, hallucinations, trouble with thinking and concentration and lack of motivation. However when these symptoms are treated, most people with Schizophrenia will greatly improve over time.<br>&emsp;While there is no cure for Schizophrenia, research is leading to new, safer treatments. Experts also are <b><u>unraveling</u></b> the causes of the disease by studying genetics, conducting behavioral research and by using advanced imaging to look at the brain’s structure and function. These approaches hold the promise of new, more effective therapies.<br>&emsp;The complexity of Schizophrenia may help explain why these are misconceptions about the disease. Schizophrenia does not mean split personality or multiple-personality. Most people with Schizophrenia are not dangerous or <b><u>violent</u></b>. <b><u>They</u></b> are not homeless nor do they live in hospitals. Most people with Schizophrenia live with family, in group homes or on their own.<br>&emsp;Research has shown that Schizophrenia affects men and women about equally but may have an earlier onset in males. Rates are similar in all ethnic group around the world. Schizophrenia is considered a group of disorders where causes and symptoms very considerable between individuals.<br><br>The world “violent” in line 11 is closest in meaning to ...";
	//pilihan
	var opsi = ArrOpsi(soalTPA.length,6); //deklarasi 2d array untuk pilihan
	// var pilihan = '';
	opsi [0][0] = "A. Kelainan seseorang untuk tidur cepat";//A
	opsi [0][1] = "B. Keadaan kurangnya sel darah putih";//B
	opsi [0][2] = "C. Toko jual beli online di Indonesia";//C
	opsi [0][3] = "D. Pembengkakan kelenjar getah bening";//D
	opsi [0][4] = "E. Penyumbatan saluran nafas";//E
	opsi [0][5] = "1";//kunci jawaban

	opsi [1][0] = "A. Angan-angan sesorang yang tidak normal";//A
	opsi [1][1] = "B. Kecerdesan diatas rata-rata orang kebanyakan";//B
	opsi [1][2] = "C. Stadium dewasa dari metamorfosa serangga";//C
	opsi [1][3] = "D. Kemampuan orang untuk mendeteksi hantu";//D
	opsi [1][4] = "E. Sesuatu yang dibayangkan dalam pikirann";//E
	opsi [1][5] = "3";//kunci jawaban

	opsi [2][0] = "A. Hukuman";//A
	opsi [2][1] = "B. Nikah";//B
	opsi [2][2] = "C. Hisap";//C
	opsi [2][3] = "D. Musik";//D
	opsi [2][4] = "E. Akibat";//E
	opsi [2][5] = "1";//kunci jawaban

	opsi [3][0] = "A. Pengikat";//A
	opsi [3][1] = "B. Gambar";//B
	opsi [3][2] = "C. Kurva";//C
	opsi [3][3] = "D. Tiang";//D
	opsi [3][4] = "E. Sahabat";//E
	opsi [3][5] = "5";//kunci jawaban

	opsi [4][0] = "A. Tradisional";//A
	opsi [4][1] = "B. Konvensional";//B
	opsi [4][2] = "C. Budaya";//C
	opsi [4][3] = "D. Modern";//D
	opsi [4][4] = "E. Berkembang";//E
	opsi [4][5] = "4";//kunci jawaban

	opsi [5][0] = "A. Cekatan";//A
	opsi [5][1] = "B. Gesit";//B
	opsi [5][2] = "C. Lincah";//C
	opsi [5][3] = "D. Lemas";//D
	opsi [5][4] = "E. Cepat";//E
	opsi [5][5] = "4";//kunci jawaban

	opsi [6][0] = "A. Ubi jalar : Lapis";//A
	opsi [6][1] = "B. Wortel : Batang";//B
	opsi [6][2] = "C. Lobak : Lapis";//C
	opsi [6][3] = "D. Kangkung : Batang";//D
	opsi [6][4] = "E. Kentang : Batang";//E
	opsi [6][5] = "5";//kunci jawaban

	opsi [7][0] = "A. Arab Saudi : Amerika";//A
	opsi [7][1] = "B. Malaysia : Indonesia";//B
	opsi [7][2] = "C. Irak : Singapura";//C
	opsi [7][3] = "D. Qatar : Inggris";//D
	opsi [7][4] = "E. Argentina : Spanyol";//E
	opsi [7][5] = "3";//kunci jawaban

	opsi [8][0] = "A. Kuning : Biru : Merah";//A
	opsi [8][1] = "B. Merah : Biru : Putih";//B
	opsi [8][2] = "C. Hijau : Merah : Hitam";//C
	opsi [8][3] = "D. Biru : Hijau : Ungu";//D
	opsi [8][4] = "E. Kuning : Biru : Hijau";//E
	opsi [8][5] = "5";//kunci jawaban

	opsi [9][0] = "A. Iguana : Kuda Nil";//A
	opsi [9][1] = "B. Penyu : Ular";//B
	opsi [9][2] = "C. Merpati : Kuda Laut";//C
	opsi [9][3] = "D. Katak : Kambing";//D
	opsi [9][4] = "E. Belalang : Nemo";//E
	opsi [9][5] = "2";//kunci jawaban

	opsi [10][0] = "A. Bali menjadi <em>pilot project</em> program keuangan berkelanjutan";//A
	opsi [10][1] = "B. BCSF di dukung oleh Badan Kementrian";//B
	opsi [10][2] = "C. OJK bekerja sama dengan Kementrian";//C
	opsi [10][3] = "D. Fungsi BCSF di Indonesia";//D
	opsi [10][4] = "E. OJK membentuk BCSF";//E
	opsi [10][5] = "1";//kunci jawaban
//durung
	opsi [11][0] = "A. BCSF tidak didukung oleh Kemenristek DIKTI serta Kementerian Lingkungan Hidup";//A
	opsi [11][1] = "B. Dipilihnya Universitas Udayana Bali sebagai pilot project BCFS";//B
	opsi [11][2] = "C. Bali sebagai wilayah wisata di Indonesia yang punya kondisi sosial dan lingkungan hidup yang kondusif untuk pengembangan keuangan berkelanjutan";//C
	opsi [11][3] = "D. Pembentukan BCFS juga merupakan bentuk dukungan dari sektor jasa keuangan";//D
	opsi [11][4] = "E. BCFS bisa membangun jejaring seluruh pemangku kepentingan dari program keuangan berkelanjutan";//E
	opsi [11][5] = "1";//kunci jawaban

	opsi [12][0] = "A. Pelaksanaan";//A
	opsi [12][1] = "B. Pengoptimalan";//B
	opsi [12][2] = "C. Penambahan";//C
	opsi [12][3] = "D. Daya guna";//D
	opsi [12][4] = "E. Pencetusan";//E
	opsi [12][5] = "1";//kunci jawaban

	opsi [13][0] = "A. Tujuan BCSF sebagai pusat studi dan pembelajaran bagi para ahli dari berbagai bidang studi";//A
	opsi [13][1] = "B. Mendiskusikan dan berbagi pengetahuan tentang tantangan keuangan";//B
	opsi [13][2] = "C. Upaya untuk menyediakan informasi terpadu mengenai keuangan berkelanjutan";//C
	opsi [13][3] = "D. Mendukung keberhasilan implementasi program keuangan berkelanjutan di Indonesia";//D
	opsi [13][4] = "E. BCFS didirikan untuk menciptakan pertumbuhan ekonomi berkelanjutan dari keselarasan antara kepentingan ekonomi, sosial, dan lingkungan hidup";//E
	opsi [13][5] = "5";//kunci jawaban

	opsi [14][0] = "A. 141";//A
	opsi [14][1] = "B. 41";//B
	opsi [14][2] = "C. 86";//C
	opsi [14][3] = "D. 101";//D
	opsi [14][4] = "E. 136";//E
	opsi [14][5] = "3";//kunci jawaban

	opsi [15][0] = "A. 9/28";//A
	opsi [15][1] = "B. 11/28";//B
	opsi [15][2] = "C. 14/28";//C
	opsi [15][3] = "D. 15/28";//D
	opsi [15][4] = "E. 17/28";//E
	opsi [15][5] = "1";//kunci jawaban

	opsi [16][0] = "$$`text 'A. 'xy$$";//A
	opsi [16][1] = "$$`text 'B. 'x/y$$";//B
	opsi [16][2] = "$$`text 'C. 'y/x$$";//C
	opsi [16][3] = "$$`text 'D. 'x^2y$$";//D
	opsi [16][4] = "$$`text 'E. 'xy^2$$";//E
	opsi [16][5] = "3";//kunci jawaban

	opsi [17][0] = "A. 2";//A
	opsi [17][1] = "B. 4";//B
	opsi [17][2] = "C. 6";//C
	opsi [17][3] = "D. 8";//D
	opsi [17][4] = "E. 10";//E
	opsi [17][5] = "1";//kunci jawaban

	opsi [18][0] = "A. x > y";//A
	opsi [18][1] = "B. x < y";//B
	opsi [18][2] = "C. 4x = 5y";//C
	opsi [18][3] = "D. x<sup>4</sup> = y<sup>5</sup>";//D
	opsi [18][4] = "E. Hubungan x dan y tidak dapat ditentukan";//E
	opsi [18][5] = "5";//kunci jawaban

	opsi [19][0] = "A. A < B";//A
	opsi [19][1] = "B. A > B";//B
	opsi [19][2] = "C. A = B";//C
	opsi [19][3] = "D. A + 1,3 < B";//D
	opsi [19][4] = "E. Hubungan A dan B tidak dapat ditentukan";//E
	opsi [19][5] = "1";//kunci jawaban

	opsi [20][0] = "A. x = y";//A
	opsi [20][1] = "B. x ≠ y";//B
	opsi [20][2] = "C. xy > 3";//C
	opsi [20][3] = "D. x > 3 dan y > 3";//D
	opsi [20][4] = "E. Hubungan x dan y tidak dapat ditentukan";//E
	opsi [20][5] = "5";//kunci jawaban

	opsi [21][0] = "A. x > y";//A
	opsi [21][1] = "B. x < y";//B
	opsi [21][2] = "C. x ≥ y";//C
	opsi [21][3] = "D. x = y";//D
	opsi [21][4] = "E. Hubungan x dan y tidak dapat ditentukan";//E
	opsi [21][5] = "2";//kunci jawaban

	opsi [22][0] = "A. 9";//A
	opsi [22][1] = "B. 8";//B
	opsi [22][2] = "C. 7";//C
	opsi [22][3] = "D. 6";//D
	opsi [22][4] = "E. 5";//E
	opsi [22][5] = "1";//kunci jawaban

	opsi [23][0] = "A. 900";//A
	opsi [23][1] = "B. 1000";//B
	opsi [23][2] = "C. 1200";//C
	opsi [23][3] = "D. 1400";//D
	opsi [23][4] = "E. 1600";//E
	opsi [23][5] = "2";//kunci jawaban

	opsi [24][0] = "A. 8";//A
	opsi [24][1] = "B. 10";//B
	opsi [24][2] = "C. 12";//C
	opsi [24][3] = "D. 14";//D
	opsi [24][4] = "E. 16";//E
	opsi [24][5] = "3";//kunci jawaban

	opsi [25][0] = "A. 0";//A
	opsi [25][1] = "B. 2";//B
	opsi [25][2] = "C. 4";//C
	opsi [25][3] = "D. 6";//D
	opsi [25][4] = "E. 8";//E
	opsi [25][5] = "1";//kunci jawaban

	opsi [26][0] = "A. 13";//A
	opsi [26][1] = "B. 11";//B
	opsi [26][2] = "C. 9";//C
	opsi [26][3] = "D. 7";//D
	opsi [26][4] = "E. 5";//E
	opsi [26][5] = "5";//kunci jawaban

	opsi [27][0] = "4173";//A
	opsi [27][1] = "4731";//B
	opsi [27][2] = "3741";//C
	opsi [27][3] = "3471";//D
	opsi [27][4] = "3174";//E
	opsi [27][5] = "5";//kunci jawaban

	opsi [28][0] = "A. (0,5 + 0,05A)B";//A
	opsi [28][1] = "B. (1 + 0,1A)B";//B
	opsi [28][2] = "C. (10 + A)B";//C
	opsi [28][3] = "D. (5 + 0,5A)B";//D
	opsi [28][4] = "E. (2 + 0,2A)B";//E
	opsi [28][5] = "1";//kunci jawaban

	opsi [29][0] = "A. 14";//A
	opsi [29][1] = "B. 15";//B
	opsi [29][2] = "C. 16";//C
	opsi [29][3] = "D. 17";//D
	opsi [29][4] = "E. 18";//E
	opsi [29][5] = "1";//kunci jawaban

	opsi [30][0] = "$$`text 'A. ' 100a/c$$";//A
	opsi [30][1] = "$$`text 'B. ' a(c + 100):100$$";//B
	opsi [30][2] = "$$`text 'C. ' ac/100$$";//C
	opsi [30][3] = "$$`text 'D. ' 100ac$$";//D
	opsi [30][4] = "$$`text 'E. ' 100(a-c)-100$$";//E
	opsi [30][5] = "4";//kunci jawaban

	opsi [31][0] = "A. 3000";//A
	opsi [31][1] = "B. 3500";//B
	opsi [31][2] = "C. 4000";//C
	opsi [31][3] = "D. 4500";//D
	opsi [31][4] = "E. 5000";//E
	opsi [31][5] = "5";//kunci jawaban

	opsi [32][0] = "A. 50 tahun";//A
	opsi [32][1] = "B. 57 tahun";//B
	opsi [32][2] = "C. 60 tahun";//C
	opsi [32][3] = "D. 64 tahun";//D
	opsi [32][4] = "E. 77 tahun";//E
	opsi [32][5] = "1";//kunci jawaban

	opsi [33][0] = "A. 53";//A
	opsi [33][1] = "B. 51";//B
	opsi [33][2] = "C. 54";//C
	opsi [33][3] = "D. 57";//D
	opsi [33][4] = "E. 55";//E
	opsi [33][5] = "5";//kunci jawaban

	opsi [34][0] = "A. O";//A
	opsi [34][1] = "B. R";//B
	opsi [34][2] = "C. P";//C
	opsi [34][3] = "D. S";//D
	opsi [34][4] = "E. T";//E
	opsi [34][5] = "2";//kunci jawaban

	opsi [35][0] = "A. Q, X";//A
	opsi [35][1] = "B. Q, Y";//B
	opsi [35][2] = "C. P, X";//C
	opsi [35][3] = "D. X, Q";//D
	opsi [35][4] = "E. Y, P";//E
	opsi [35][5] = "1";//kunci jawaban

	opsi [36][0] = "A. T";//A
	opsi [36][1] = "B. U";//B
	opsi [36][2] = "C. Q";//C
	opsi [36][3] = "D. R";//D
	opsi [36][4] = "E. S";//E
	opsi [36][5] = "5";//kunci jawaban

	opsi [37][0] = "A. Tidak ada korupsi.";//A
	opsi [37][1] = "B. Penggunaan dana desa optimal.";//B
	opsi [37][2] = "C. Jalan tidak optimal.";//C
	opsi [37][3] = "D. Ada korupsi.";//D
	opsi [37][4] = "E. Dana desa optimal.";//E
	opsi [37][5] = "4";//kunci jawaban

	opsi [38][0] = "A. Yang berhak memiliki kartu BPJS hanyalah warga desa Kapuas Hulu";//A
	opsi [38][1] = "B. Warga desa Kapuas Hulu banyak yang memiliki kartu BPJS.";//B
	opsi [38][2] = "C. Sebagian pemilik kartu BPJS adalah warga desa Kapuas Hulu yang bukan peserta BPJS.";//C
	opsi [38][3] = "D. Sebagian warga desa Kapuas Hulu memiliki kartu BPJS.";//D
	opsi [38][4] = "E. Tidak dapat disimpulkan";//E
	opsi [38][5] = "4";//kunci jawaban

	opsi [39][0] = "A. Sel-sel daun langsung mati";//A
	opsi [39][1] = "B. Sel-sel daun akan mati jika dimasukkan ke dalam air";//B
	opsi [39][2] = "C. Hanya air yang harus mendidih tetapi sel daun tidak harus mati";//C
	opsi [39][3] = "D. Sel-sel daun tidak langsung mati";//D
	opsi [39][4] = "E. Tidak dapat ditarik kesimpulan";//E
	opsi [39][5] = "5";//kunci jawaban

	opsi [40][0] = "A. Kuda Pak Reno tidak memiliki kuku yang kuat dan keras.";//A
	opsi [40][1] = "B. Kuda Pak Reno memiliki kuku yang cukup kuat dan keras.";//B
	opsi [40][2] = "C. Ada kuda Mongolia yang tidak memiliki kuku yang kuat dan keras.";//C
	opsi [40][3] = "D. Kuda Pak Reno harusnya ras Mongolia.";//D
	opsi [40][4] = "E. Tidak dapat ditarik kesimpulan.";//E
	opsi [40][5] = "5";//kunci jawaban

	opsi [41][0] = "A. Pak Ogi dan Pak Joni";//A
	opsi [41][1] = "B. Pak Beni dan Pak Ogi";//B
	opsi [41][2] = "C. Pak Joni dan Pak Candra";//C
	opsi [41][3] = "D. Pak Beni dan Pak Candra";//D
	opsi [41][4] = "E. Pak Dani dan Pak CandraD";//E
	opsi [41][5] = "4";//kunci jawaban

	opsi [42][0] = "A. Pak Beni, Pak Candra, Pak Ogi, Pak Dani, Pak Lusi, Pak Joni";//A
	opsi [42][1] = "B. Pak Beni, Pak Lusi, Pak Dani, Pak Candra, Pak Ogi, Pak Joni.";//B
	opsi [42][2] = "C. Pak Candra, Pak Ogi, Pak Dani, Pak Beni, Pak Lusi, Pak Joni";//C
	opsi [42][3] = "D. Pak Dani, Pak Ogi, Pak Candra, Pak Lusi, Pak Beni, Pak Joni";//D
	opsi [42][4] = "E. Pak Dani, Pak Beni, Pak Candra, Pak Lusi, Pak Ogi, Pak Joni";//E
	opsi [42][5] = "5";//kunci jawaban

	opsi [43][0] = "A. Pak Ogi";//A
	opsi [43][1] = "B. Pak Beni";//B
	opsi [43][2] = "C. Pak Lusi";//C
	opsi [43][3] = "D. Pak Candra";//D
	opsi [43][4] = "E. Pak Dani";//E
	opsi [43][5] = "4";//kunci jawaban

	opsi [44][0] = "A. Pak Beni berada di ujung";//A
	opsi [44][1] = "B. Pak Candra berada di ujung";//B
	opsi [44][2] = "C. Pak Ogi dan Pak Lusi bersebelahan";//C
	opsi [44][3] = "D. Pak Lusi berada di samping Pak Candra";//D
	opsi [44][4] = "E. Pak Ogi berada di antara Pak Dani dan Pak Candra.t";//E
	opsi [44][5] = "2";//kunci jawaban

	opsi [45][0] = "A. Apatis";//A
	opsi [45][1] = "B. Berseri-ser";//B
	opsi [45][2] = "C. Pemarah";//C
	opsi [45][3] = "D. Pemurung";//D
	opsi [45][4] = "E. Biasa saja";//E
	opsi [45][5] = "4";//kunci jawaban

	opsi [46][0] = "A. Apatis atau Berseri-seri";//A
	opsi [46][1] = "B. Berseri-seri atau Permarah";//B
	opsi [46][2] = "C. Biasa saja atau Pemurung";//C
	opsi [46][3] = "D. Pemurung atau Berseri-seri";//D
	opsi [46][4] = "E. Apatis atau Pemurung";//E
	opsi [46][5] = "1";//kunci jawaban

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
	opsi [48][5] = "5";//kunci jawaban

	opsi [49][0] = "A. <img src='../../assets/img/50/A.jpg'>";//A
	opsi [49][1] = "B. <img src='../../assets/img/50/B.jpg'>";//B
	opsi [49][2] = "C. <img src='../../assets/img/50/C.jpg'>";//C
	opsi [49][3] = "D. <img src='../../assets/img/50/D.jpg'>";//D
	opsi [49][4] = "E. <img src='../../assets/img/50/E.jpg'>";//E
	opsi [49][5] = "1";//kunci jawaban

	opsi [50][0] = "A. lice";//A
	opsi [50][1] = "B. louse";//B
	opsi [50][2] = "C. lices";//C
	opsi [50][3] = "D. louses";//D
	opsi [50][4] = "";//D
	opsi [50][5] = "1";//kunci jawaban

	opsi [51][0] = "A. No sooner had the electricity been off";//A
	opsi [51][1] = "B. The electricity no sooner had been off";//B
	opsi [51][2] = "C. The electricity had been off no sooner";//C
	opsi [51][3] = "D. No sooner the electricity been off";//D
	opsi [51][4] = "";//D
	opsi [51][5] = "1";//kunci jawaban

	opsi [52][0] = "A. Locating";//A
	opsi [52][1] = "B. Located";//B
	opsi [52][2] = "C. Location";//C
	opsi [52][3] = "D. To locate";//D
	opsi [52][4] = "";//D
	opsi [52][5] = "2";//kunci jawaban

	opsi [53][0] = "A. In spite of";//A
	opsi [53][1] = "B. Despite";//B
	opsi [53][2] = "C. Although";//C
	opsi [53][3] = "D. Because of";//D
	opsi [53][4] = "";//D
	opsi [53][5] = "3";//kunci jawaban

	opsi [54][0] = "A. to type";//A
	opsi [54][1] = "B. type";//B
	opsi [54][2] = "C. typing";//C
	opsi [54][3] = "D. typed";//D
	opsi [54][4] = "";//D
	opsi [54][5] = "2";//kunci jawaban

	opsi [55][0] = "A. others";//A
	opsi [55][1] = "B. the other";//B
	opsi [55][2] = "C. another";//C
	opsi [55][3] = "D. the others";//D
	opsi [55][4] = "";//D
	opsi [55][5] = "2";//kunci jawaban

	opsi [56][0] = "A. If Mona hadn’t tell me";//A
	opsi [56][1] = "B. Had Mona tell me";//B
	opsi [56][2] = "C. If Mona hadn’t told me";//C
	opsi [56][3] = "D. Had Mona told me";//D
	opsi [56][4] = "";//D
	opsi [56][5] = "4";//kunci jawaban

	opsi [57][0] = "A. exhausted";//A
	opsi [57][1] = "B. exhausting";//B
	opsi [57][2] = "C. exhaust";//C
	opsi [57][3] = "D. exhaused";//D
	opsi [57][4] = "";//D
	opsi [57][5] = "1";//kunci jawaban

	opsi [58][0] = "A. let in";//A
	opsi [58][1] = "B. let out";//B
	opsi [58][2] = "C. look on";//C
	opsi [58][3] = "D. make it";//D
	opsi [58][4] = "";//kunci jawaban
	opsi [58][5] = "2";//kunci jawaban

	opsi [59][0] = "A. I am";//A
	opsi [59][1] = "B. does I";//B
	opsi [59][2] = "C. did I";//C
	opsi [59][3] = "D. I was";//D
	opsi [59][4] = "";//D
	opsi [59][5] = "3";//kunci jawaban

	opsi [60][0] = "A. beautiful black slim Brazilian";//A
	opsi [60][1] = "B. Brazilian beautiful black slim";//B
	opsi [60][2] = "C. slim beautiful black Brazilian";//C
	opsi [60][3] = "D. beautiful slim black Brazilian";//D
	opsi [60][4] = "";//D
	opsi [60][5] = "4";//kunci jawaban


	opsi [61][0] = "A. a retired army officer";//A
	opsi [61][1] = "B. was a retired army officer";//B
	opsi [61][2] = "C. worked as an army officer";//C
	opsi [61][3] = "D. have been working as an army officer";//D
	opsi [61][4] = "";//kunci jawaban
	opsi [61][5] = "1";//kunci jawaban

	opsi [62][0] = "A. was";//A
	opsi [62][1] = "B. have";//B
	opsi [62][2] = "C. be";//C
	opsi [62][3] = "D. is";//D
	opsi [62][4] = "";//kunci jawaban
	opsi [62][5] = "3";//kunci jawaban

	opsi [63][0] = "A. was";//A
	opsi [63][1] = "B. are";//B
	opsi [63][2] = "C. were";//C
	opsi [63][3] = "D. is";//D
	opsi [63][4] = "";//kunci jawaban
	opsi [63][5] = "3";//kunci jawaban

	opsi [64][0] = "A. would take";//A
	opsi [64][1] = "B. will take";//B
	opsi [64][2] = "C. took";//C
	opsi [64][3] = "D. take";//D
	opsi [64][4] = "";//kunci jawaban
	opsi [64][5] = "2";//kunci jawaban

	opsi [65][0] = "A. The";//A
	opsi [65][1] = "B. concern";//B
	opsi [65][2] = "C. the employees";//C
	opsi [65][3] = "D. rights";//D
	opsi [65][4] = "";//kunci jawaban
	opsi [65][5] = "2";//kunci jawaban

	opsi [66][0] = "A. have been";//A
	opsi [66][1] = "B. identifying";//B
	opsi [66][2] = "C. the corpse mutilated";//C
	opsi [66][3] = "D. found";//D
	opsi [66][4] = "";//kunci jawaban
	opsi [66][5] = "3";//kunci jawaban

	opsi [67][0] = "A. The Japan";//A
	opsi [67][1] = "B. use";//B
	opsi [67][2] = "C. means";//C
	opsi [67][3] = "D. The Land of The Rising Sun";//D
	opsi [67][4] = "";//kunci jawaban
	opsi [67][5] = "1";//kunci jawaban

	opsi [68][0] = "A. Although";//A
	opsi [68][1] = "B. more";//B
	opsi [68][2] = "C. variety";//C
	opsi [68][3] = "D. are";//D
	opsi [68][4] = "";//kunci jawaban
	opsi [68][5] = "3";//kunci jawaban

	opsi [69][0] = "A. work";//A
	opsi [69][1] = "B. to plan";//B
	opsi [69][2] = "C. effective";//C
	opsi [69][3] = "D. for the";//D
	opsi [69][4] = "";//kunci jawaban
	opsi [69][5] = "1";//kunci jawaban

	opsi [70][0] = "A. incurable";//A
	opsi [70][1] = "B. untreatable";//B
	opsi [70][2] = "C. curable";//C
	opsi [70][3] = "D. healable";//D
	opsi [70][4] = "";//kunci jawaban
	opsi [70][5] = "1";//kunci jawaban

	opsi [71][0] = "A. men and women";//A
	opsi [71][1] = "B. individuals";//B
	opsi [71][2] = "C. people with Schizophrenia";//C
	opsi [71][3] = "D. homeless";//D
	opsi [71][4] = "";//kunci jawaban
	opsi [71][5] = "3";//kunci jawaban

	opsi [72][0] = "A. Schizophrenia is a chronic brain disorder that affects the majority of the population";//A
	opsi [72][1] = "B. Schizophrenia is considered a group of disorders where causes and symptoms very substantial between individuals";//B
	opsi [72][2] = "C. Schizophrenia is distinct with multiplepersonality";//C
	opsi [72][3] = "D. Schizophrenia affects an earlier onset in males";//D
	opsi [72][4] = "";//kunci jawaban
	opsi [72][5] = "1";//kunci jawaban

	opsi [73][0] = "A. elaborating";//A
	opsi [73][1] = "B. binding";//B
	opsi [73][2] = "C. explaining";//C
	opsi [73][3] = "D. sticking";//D
	opsi [73][4] = "";//kunci jawaban
	opsi [73][5] = "3";//kunci jawaban

	opsi [74][0] = "A. kind";//A
	opsi [74][1] = "B. rugged";//B
	opsi [74][2] = "C. sedate";//C
	opsi [74][3] = "D. sober";//D
	opsi [74][4] = "";//kunci jawaban
	opsi [74][5] = "2";//kunci jawaban

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

