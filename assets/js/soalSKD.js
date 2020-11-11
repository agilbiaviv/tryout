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
	soalTPA[0] = "Sinonim dari kata privasi adalah ….";
	soalTPA[1] = "Lawan kata dari degenerasi adalah ….";
	soalTPA[2] = "Sinonim dari kata arogan adalah ….";
	soalTPA[3] = "Antonim dari kata krusial adalah ….";
	soalTPA[4] = "Gelap : Lampu = … : ….";
	soalTPA[5] = "Pizza : Gandum = … : ….";
	soalTPA[6] = "(1) Suasana alam di desaku sangatlah sejuk dan damai. (2) Desaku jauh dari suara bising kendaraan kota. (3) Udaranya pun sangat sejuk karena tidak ada gangguan polusi. (4) Pepohonan pun masih rindang sehingga semakin menambah keasrian desa. (5) Pemandangan hamparan sawah selalu menghiasi desaku. (6) Sungai di desaku masih berair jernih dan sangat nyaman untuk bermain-main. (7) Orang-orang desa sangat senang dengan hasil panen yang melimpah.<br><br>Kalimat sumbang dari bacaan diatas terdapat pada kalimat ….";
	soalTPA[7] = "Semangat juang dan perlawanan Cut Nyak Dien bertambah kuat saat Belanda membakar Masjid Besar Aceh. Dengan semangat menyala, beliau mengajak seluruh rakyat Aceh untuk terus berjuang. Saat Teuku Ibrahim gugur, di tengah kesedihan, beliau bertekad meneruskan perjuangan. Dua tahun setelah kematian suami pertamanya tepatnya pada tahun 1880, Cut Nyak Dien menikah lagi dengan Teuku Umar. Seperti Teuku Ibrahim, Teuku Umar adalah pejuang kemerdekaan yang hebat.<br><br>Simpulan yang tepat dari paragraf tersebut adalah ….";
	soalTPA[8] = "Kata-kata di bawah ini yang sesuai dengan Ejaan Bahasa Indonesia adalah ….";
	soalTPA[9] = "Penggunaan kalimat langsung yang tepat terdapat pada kalimat ….";
	soalTPA[10] = "Penulisan huruf kapital dibawah ini yang salah adalah ….";
	soalTPA[11] = "Penulisan judul karangan yang sesuai dengan Ejaan Bahasa Indonesia adalah ….";
	soalTPA[12] = "… Panahan Nasional Indonesia, Dellie Threesyadinda atau yang akrab disapa Dinda berasal dari Indonesia yang berprestasi di kancah … panahan baik skala nasional maupun internasional. Dinda pernah mendapat … perak pada ajang World Cup di Inggris 2007. Selain jago Manahan, Dinda juga memiliki wajah yang cantik, bahkan jika diperhatikan Dinda mirip dengan pesinetron cantik Revalina S. Temat.<br><br>Kata baku yang tepat untuk melengkapi paragraf di atas adalah ….";
	soalTPA[13] = "Perhatikan kalimat berikut:<br>“Akibat … dari rumah Andi mengakibatkan rumah disekitarnya telah … oleh si jago merah” <br><br>Istilah baku yang tepat untuk melengkapi kalimat diatas adalah ….";
	soalTPA[14] = "Jika 𝑎, 𝑏 adalah akar-akar dari persamaan kuadrat <br>$$x^2 + 4x + 2 = 0, `text ' maka ' 2a^2 + 2b^2 +4ab = ...$$";
	soalTPA[15] = "Jika 𝑥 = 2𝑝<sup>3</sup> − 2 dan 𝑦 = 3𝑝<sup>3</sup> − 3, maka ....";
	soalTPA[16] = "$$`text 'Nilai dari ' √^4{1000√^3{40√{625}} `text ' adalah ....'$$";
	soalTPA[17] = "$$`text 'Jika ' x = √9− √2 `text ' sedangkan ' y = √7, `text ' maka ....'$$";
	soalTPA[18] = "Pada tahun 2018 ini, umur Beni adalah 4/5 umur Candra. Sewindu yang lalu, jumlah umur kedua orang tersebut adalah 38. Perbandingan umur Beni dan Candra pada tahun 2024 adalah ....";
	soalTPA[19] = "Seorang pedagang menjual sebuah barang dengan harga Rp212.750,00 dan mendapatkan laba 15%. Harga beli barang tersebut adalah ....";
	soalTPA[20] = "Feni dan Rose ingin membeli tiket kereta. Jika terdapat tujuh buah loket pembelian tiket, peluang mereka membeli tiket di loket berbeda adalah ....";
	soalTPA[21] = "Doni biasanya mengendarai motor untuk pergi ke kantor selama 1 jam dan ia sampai tepat waktu. Pagi ini ia terlambat berangkat selama 15 menit. Jika jarak rumah Doni ke kantor adalah 45 km, maka kecepatan minimal yang harus digunakan agar tetap datang tepat waktu adalah ... km/jam.";
	soalTPA[22] = "6, 12, 21, 33, 48, 66, ....";
	soalTPA[23] = "B, B, E, C, H, D, ... , ....";
	soalTPA[24] = "73, 71, 68, 63, 56, 45, ....";
	soalTPA[25] = "B, X, F, W, J, V, ....";
	soalTPA[26] = "Beberapa mahasiswa sering mengunjungi perpustakaan. Setiap orang yang mengunjungi perpustakaan tidak ada yang tidak meminjam buku.";
	soalTPA[27] = "Semua pegawai SS memiliki ID Card. Sebagian warga Pucangan adalah pegawai SS.";
	soalTPA[28] = "Di suatu pusat perbelanjaan terdapat 7 buah mobil yang berbeda warna sedang parkir dalam satu baris dari kiri ke kanan. Beberapa fakta tentang posisi parkir mobil-mobil tersebut adalah sebagai berikut:<br>• Mobil jingga parkir di sebelah paling kiri<br>• Mobil hijau parkir tepat di antara mobil nila dan mobil merah<br>• Mobil kedua di sebelah kiri mobil biru adalah mobil Ungu<br>• Mobil merah berada di sebelah kiri mobil biru<br><br>Mobil yang berada di urutan nomor enam dari kiri adalah mobil ....";
	soalTPA[29] = "Suatu lomba menyanyi telah menyisakan 5 finalis yaitu Abdel, Dhea, Juan, Mario, dan Uya yang akan bertanding pada babak grand final. Hadiah untuk juara pertama adalah mobil, juara kedua mendapat motor, juara ketiga mendapatkan televisi, juara keempat mendapatkan blender, dan juara kelima mendapatkan kipas angin. Setelah mereka semua tampil, juri merekap nilai mereka untuk menentukan siapa yang menjadi juara. Beberapa fakta tentang skor mereka berlima adalah sebagai berikut:<br>• Skor Abdel lebih tinggi dari skor Dhea dan Uya<br>• Skor Juan lebih tinggi dari skor Mario dan Abdel<br>• Skor Mario lebih tinggi dari Abdel<br>• Skor Uya lebih sedikit dari Dhea<br><br>Siapakah yang mendapatkan blender?";
	soalTPA[30] = "Perang puputan adalah …";
	soalTPA[31] = "Istilah “Indonesia” ditetapkan menjadi identitas nasional bangsa dan negara sejak ….";
	soalTPA[32] = "Organisasi pergerakan kebangsaan Indonesia salah satunya adalah Indische Partij dengan pendiri ….";
	soalTPA[33] = "Kongres Pemuda I di Jakarta yang dipimpin oleh Moh. Tabrani dari Jong Java diadakan pada tanggal ….";
	soalTPA[34] = "Upaya pemerintah Belanda menanamkan kebudayaan Barat dalam lingkungan masyarakat Indonesia adalah …";
	soalTPA[35] = "Organisasi yang dibentuk oleh “Empat Serangkai” pada tahun 1943 adalah ….";
	soalTPA[36] = "Badan Penyelidik Usaha Persiapan Kemerdekaan Indonesia yang mengadakan sidang pertamanya pada tanggal 29 Mei - 1 Juni diketuai oleh ….";
	soalTPA[37] = "Yang dimaksud “The Boston Tea Party” adalah ….";
	soalTPA[38] = "Akibat Revolusi Perancis bagi dunia Internasional dalam bidang politik adalah, kecuali ….";
	soalTPA[39] = "Seorang filsuf Inggris yang berpendapat bahwa manusia memiliki hak-hak sejak ia lahir seperti kemerdekaan, hak hidup, hak memilih dan hak untuk memiliki adalah …";
	soalTPA[40] = "Rupadhatu merupakan bagian tengah Candi Borobudur. Pada bagian ini menggambarkan ….";
	soalTPA[41] = "Kitab yang berisi silsilah raja-raja Majapahit yang memiliki hubungan erat dengan raja-raja Singasari adalah ….";
	soalTPA[42] = "Raja Mpu Sindok dari Kerajaan … setelah memindahkan pemerintahannya dari Jawa Tengah ke Jawa Timur.";
	soalTPA[43] = "Kerajaan Mataram mencapai kejayaannya pada masa pemerintahan Raja ….";
	soalTPA[44] = "Kepindahan pusat kekuasaan ygang dilakukan Raja Mpu Sindok dari Jawa Tengah ke Jawa Timur adalah ….";
	soalTPA[45] = "Unsur dasar konsep wawasan nusantara ada tiga yaitu ….";
	soalTPA[46] = "Kedudukan Pancasila sebagai sumber nilai pada hakikatnya merupakan penegasan bahwa Pancasila merupakan ….";
	soalTPA[47] = "Warga Negara Indonesia memiliki kedudukan, hak dan kewajiban yang sama. Hal tersebut merupakan salah satu penjabaran dari nilai-nilai Pancasila, yaitu ….";
	soalTPA[48] = "Berikut ini yang tidak termasuk aspek pancagatra wawasan nusantara adalah ….";
	soalTPA[49] = "Selain Bhinneka Tunggal Ika, Negara Indonesia juga memliki alat pemersatu bangsa, antara lain, kecuali ….";
	soalTPA[50] = "Berikut ini yang bukan urusan pemerintahan absolut adalah ….";
	soalTPA[51] = "Pengampunan berupa perubahan, peringanan, pengurangan, atau penghapusan pelaksanaan pidana kepada terpidana yang diberikan oleh presiden adalah ….";
	soalTPA[52] = "Amandemen pertama disahkan pada ….";
	soalTPA[53] = "Yang dimaksud sistem non-parliamentary executive adalah ….";
	soalTPA[54] = "Infrastruktur politik di Indonesia adalah, kecuali ….";
	soalTPA[55] = " Yang bukan merupakan fungsi partai politik adalah ….";
	soalTPA[56] = "Sistem politik merupakan sistem interaksi yang ditemui dalam masyarakat merdeka yang menjalankan fungsi integrasi dan adaptasi. Sistem politik tersebut merupakan pendapat dari ….";
	soalTPA[57] = "Bertempat tinggal atau mendiami suatu wilayah negara untuk sementara waktu disebut dengan ….";
	soalTPA[58] = "Kekuasaan yang berhubungan dengan penyelenggaraan pemeriksaan atas pengelolaan dan tanggung jawab tentang keuangan negara adalah ….";
	soalTPA[59] = "Presiden Soekarno mengeluarkan Dekrit Presiden pada tanggal ….";
	soalTPA[60] = "Tujuan dikeluarkan Dekrit Presiden adalah ….";
	soalTPA[61] = "Warga Negara dan Penduduk telah diatur dalam UUD NRI Tahun 1945 ....";
	soalTPA[62] = "Berikut ini yang bukan merupakan wewenang, kewajiban dan hak Presiden adalah ….";
	soalTPA[63] = "Bhinneka Tunggal Ika bermakna “berbeda-beda tetapi tetap satu jua”, yang diambil dari sebuah Kitab Kerajaan Majapahit bernama Kitab Sutasoma yang dikarang oleh …";
	soalTPA[64] = "Pendidikan dasar bagi seluruh rakyat Indonesia merupakan tanggung jawab dari pemerintah. Hal ini merupakan pencerminan Undang-Undang Dasar 1945 ….";
	soalTPA[65] = "Anda sedang memeriksa berkas-berkas tua dan tanpa sengaja Anda menemukan akta kelahiran Anda yang menyatakan bahwa Anda sebenarnya diadopsi oleh orang tua Anda. Orang tua angkat Anda sendiri sudah begitu tua dan mereka bermaksud supaya Anda tidak mengetahui hal tersebut. Sikap Anda akan hal ini adalah ....";
	soalTPA[66] = "Anda sudah berjanji bertemu dengan orang tua Anda nanti malam, satu jam sebelum pergi, telepon berdering dan teman Anda bertanya apakah Anda tidak keberatan menukar jadwal piket dengannya karena dia ada urusan mendadak, maka .... ";
	soalTPA[67] = "Anda adalah seorang dosen di suatu universitas negeri. Anda dituntut melakukan pengajaran, penelitian, dan pengabdian kepada masyarakat sebagaimana diwajibkan melakasanakan Tri Darma Perguruan Tinggi. Pada akhir semester kinerja Anda dinilai atasan tidak terlalu baik dalam mengajar dibandingkan dengan rekan sejawat Anda. Maka sikap Anda ....";
	soalTPA[68] = "Suatu organisasi dalam pemerintahan akan berjalan dengan baik jika dibuat berdasarkan peraturan perundangundangan dan bekerja berdasarkan tugas pokok dan fungsi masing-masing ASN. Ketika Anda dihadapkan dengan situasi pimpinan di organisasi Anda menetapkan aturan-aturan beserta <i>reward</i> dan <i>punishment</i> yang menurut Anda berat untuk dilaksanakan, maka sikap Anda ....";
	soalTPA[69] = "Anda sedang ada <i>deadline</i> laporan untuk diserahkan ke atasan Anda dan harus diserahkan besok. Tiba-tiba teman Anda datang dengan wajah sedih dan ingin curhat terkait masalah besar yang sedang ia hadapi. Sikap yang Anda ambil adalah ....";
	soalTPA[70] = "Pada saat memasuki tahun politik 2019, banyak sekali isu politik terus muncul dengan tidak terbendung. Informasi tersebut beragam, ada yang positif dan negatif. Selain itu tidak jarang beredar kabar yang sengaja dibuat untuk kepentingan politik golongan tertentu (hoaks). Tentu saja hal tersebut bisa membahayakan persatuan bangsa yang telah lama dibangun. Sikap Anda dalam menghadapi arus informasi adalah ....";
	soalTPA[71] = "Perkembangan teknologi informasi dan komunikasi sekarang memberikan dampak yang besar bagi kehidupan masyarakat. Tidak dapat dipungkiri hal tersebut dapat memberikan dampak positif dan negatif. Salah satu dampak positifnya adalah memberikan kemudahan dalam menyelesaikan pekerjaan. Instansi tempat Anda bekerja sedang mengadopsi teknologi informasi dan komunikasi dan Anda diminta oleh atasan untuk ikut dalam pengaplikasiannya. Padahal latar belakang pendidikan Anda bukan dari bidang tersebut. Sikap Anda dalam menerima tugas tersebut adalah ....";
	soalTPA[72] = "Anda bekerja sebagai ASN dilingkup pemerintahan provinsi sebagai staf administrasi. Sutau ketika salah satu pimpinan Anda terkena Operasi Tangkap Tangan (OTT) oleh KPK yang menyebabkan organisasi Anda terganggu. Sikap Anda sebagai salah satu ASN dalam organisasi tersebut adalah ....";
	soalTPA[73] = "Seorang ASN dituntut agar menjalankan tugas sebagai abdi masyarakat dan selalu berinovasi agar meningkatkan kualitas diri beserta dengan institusi tempatnya mengabdi. Bagaimana cara Anda mewujudkannya?";
	soalTPA[74] = "Pagi ini seperti biasanya Anda selalu sibuk dengan rutinitas di pekerjaan sebagai seorang customer service pada sebuah rumah sakit pemerintah. Ketika Anda sedang asik bekerja datanglah seorang ibu-ibu tua yang ingin menanyakan prosedur penggunaan BPJS kesehatan untuk proses rawat inap anaknya yang sedang sakit dan membutuhkan perawatan secepatnya agar sakitnya tidak bertambah parah. Setelah Anda menjelaskan panjang lebar dengan bahasa yang mudah dimengerti beberapa kali kepada sang ibu namun ternyata ibu tersebut tampak sangat kebingungan dan mengatakan bahwa dia tidak mengerti sama sekali dengan prosedur yang Anda jelaskan, bagaimana sikap Anda?";
	soalTPA[75] = "Anda baru saja di pindahkan ke departement lain di kantor Anda yang masih memiliki hubungan dengan pekerjaan sebelumnya. Namun di tempat Anda yang baru setiap karyawan sangat serius dalam bekerja, jarang bahkan tidak pernah Anda melihat mereka bekerja dengan santai dan sedikit bercanda, sikap Anda ....";
	soalTPA[76] = "Tim Anda mendapat tugas dari atasan Anda untuk membantunya menyelesaikan dokumen-dokumen penting yang harus dibawanya dalam rapat petinggi perusahaan. Dokumen yang harus disiapkan cukup banyak. Namun salah seorang rekan Anda sulit untuk diajak bekerja sama dan cenderung menganggap sepele tugas yang diberikan atasan, perilaku dan sikapnya bahkan dapat berbahaya bagi keselarasan di tempat kerja, sikap Anda .... ";
	soalTPA[77] = "Ketika menjadi panitia sebuah acara di kampus Anda, Anda mendapatkan telepon dari pacar Anda bahwa dia membutuhkan bantuan Anda untuk menjemputnya ke stasiun kota, pacar Anda mengatakan jika sudah mencoba menghubungi jasa angkutan online tapi tidak ada yang mengambil orderannya, sedangkan tugas Anda masih banyak dan harus selesai hari ini juga mengingat acara akan dilaksanakan besok, sikap Anda ....";
	soalTPA[78] = " Minggu ini Anda berencana membantu adik Anda dan teman kelompoknya untuk membuat sebuah artikel ilmiah. Ketika sedang mengajarkan bagaimana cara membuat sebuah karya ilmiah yang baik, kemudian di televisi terdapat berita tentang semakin besarnya angka pengangguran di Indonesia, yang dapat Anda sarankan untuk adik dan teman kelompoknya adalah ....";
	soalTPA[79] = " Pelayanan publik adalah segala sesuatu bentuk kegitan pelayanan yang dilaksanakan instansi pemerintah pusat dan daerah serta di lingkungan BUMN/BUMD. Prinsip pelayanan publik yang baik untuk mewujudkan pelayanan prima adalah .... ";
	soalTPA[80] = "Ketika Anda sedang mengambil beberapa dokumen di meja <i>customer service</i>, tiba-tiba datang seorang pelanggan yang marah pada Anda karena pelayanan yang kurang baik bahkan sampai mencaci Anda, yang Anda lakukan ....";
	soalTPA[81] = "Anda baru saja pulang liburan dari sebuah pulau. Ketika hendak mengambil barang Anda di pengambilan bagasi ternyata koper Anda yang berisi oleh-oleh untuk keluarga Anda tidak ada. Sikap Anda ...";
	soalTPA[82] = "Anda ditunjuk menjadi seorang pemimpin pada sebuah tim dari berbagai lulusan universitas terkemuka. Akhir-akhir ini tim Anda mendapatkan banyak tugas dengan <i>deadline</i> yang lumayan singkat, akan tetapi tim Anda selalu berhasil menyelesaikan tugas-tugas tersebut dengan hasil yang memuaskan. Banyak yang menilai jika kinerja tim Anda sangat bagus. menurut Anda apa penyebabnya?";
	soalTPA[83] = "Anda dan tim Anda diberikan tugas baru oleh pimpinan, tugas tersebut merupakan tugas yang lumayan baru dan belum pernah Anda kerjakan sebelumnya, begitu pun dengan rekan tim yang lain mereka merasa kebingungan dan juga mereka semua juga belum memahami maksud dan cara mengerjakan tugas baru tersebut. Sikap Anda ....";
	soalTPA[84] = "Anda termasuk ke dalam salah satu dari tiga kandidat karyawan terbaik yang akan dipromosikan untuk naik jabatan di perusahaan Anda. Untuk memutuskan siapa yang layak di antara kandidat yang ada, pimpinan perusahaan memberikan tugas yang sebelumnya tidak pernah kamu kerjakan, bagaimana Anda mengatasinya?";
	soalTPA[85] = "Sebagai ketua kelompok kepanitiaan acara tahunan di sekolah, ada seorang anggota saya yang tidak sependapat dengan anggota lainnya sehingga seringkali menimbulkan konflik dengan anggota panitia lainnya. Sikap saya adalah .... ";
	soalTPA[86] = "Anda adalah seorang anggota dari sebuah organisasi yang memiliki aturan bahwa setiap anggotanya dilarang untuk menggunakan fasilitas organisasi tanpa izin. Suatu ketika karena suatu alasan Anda melanggar peraturan tersebut Sikap Anda adalah ....";
	soalTPA[87] = "Anda adalah seorang ketua dari sebuah perkumpulan seni grafiti di kota Anda yang memiliki peraturan bahwa setiap anggota perkumpulan tersebut dilarang mencoret-coret fasilitas umum di kota. Suatu ketika Anda mendapati salah satu anggota perkumpulan Anda melanggar peraturan tersebut. Sikap Anda menghadapi anggota yang melanggar peraturan tersebut adalah .... ";
	soalTPA[88] = "Suatu hari Anda dimarahi oleh atasan Anda karena terlambat mengumpulkan laporang kerja sehingga Anda dinilai kurang bertanggung jawab dan membuat kinerja kerja Anda buruk. Sedangkan fakta Anda terlambat mengumpulkan tugas tersebut karena printer yang Anda gunakan bermasalah. Sikap Anda ....";
	soalTPA[89] = "Atasan Anda menugaskan Anda membuat sebuah tim untuk menyelesaikan sebuah masalah pekerjaan di kantor Anda, tetapi di kantor Anda terdiri dari orang-orang dari berbagai macam latar belakang suku yang berbeda dengan Anda. Bagaiman sikap Anda? ";
	soalTPA[90] = "Anda bekerja sebagai juru masak di sebuah restoran besar. Ketika restoran sedang ramai, tiba-tiba saudara Anda datang meminta tolong Anda untuk mengantarkan ke bandara. Sikap Anda adalah ....";
	soalTPA[91] = "Anda adalah seorang wanita yang cantik dan modis. Dalam hal berpenampilan Anda suka memakai pakaian yang sedikit terbuka. Setelah lulus kuliah, Anda mendapatkan pekerjaan di sebuah perusahaan di mana mayoritas karyawannya berlawanan jenis kelamin dengan Anda. Suatu hari atasan Anda menemui Anda dan mengatakan bahwa kehadiran Anda membuat banyak karyawan susah fokus dalam bekerja karena mereka lebih banyak memperhatikan diri Anda dibanding pekerjaan mereka sendiri. Atasan Anda kemudian mengisyaratkan agar Anda melakukan sesuatu untuk mengatasi permasalahn tersebut. Apa yang akan Anda lakukan?";
	soalTPA[92] = "Saat jam istirahat di kantor, semua rekan-rekan Anda berkumpul di kantin untuk makan siang, tiba-tiba salah satu teman Anda berbicara dalam bahasa daerah yang membuat semua rekan menertawakan teman Anda tersebut, bagaimana sikap Anda menanggapi hal ini?";
	soalTPA[93] = "Ketika Anda mendapati seorang pimpinan di tempat Anda bekerja yang mana setiap keputusannya tidak bijaksana bahkan terkesan merugikan. Sikap Anda sebagai seorang yang diberi kepercayaan oleh rekan-rekan sekitar adalah ....";
	soalTPA[94] = "Dengan naiknya biaya hidup dan harga barang yang serba mahal serta sulitnya lapangan pekerjaan membuat masyarakat merasa terjepit masalah perekonomian untuk memenuhi kebutuhan sehari-hari. Begitu pun dengan Anda sendiri yang merupakan seorang karyawan perusahaan swasta dengan gaji yang sangat pas-pasan setiap bulannya. Teman-teman Anda yang lain juga sering merasa kesulitan untuk memenuhi kebutuhan hidup. Banyak dari teman-teman Anda yang meminjam uang di aplikasi <i>online</i> dengan bunga yang tidak sedikit ditambah lagi jika melakukan pembayaran melebihi tempo yang sudah ditentukan mengakibatkan besar bunga bisa melebihi pinjaman. Sikap Anda jika dihadapkan pada permasalahan di atas adalah .... A. Mencari tahu sejarah perusahaan dan menasihati teman-teman yang lain ";
	soalTPA[95] = "Pagi ini Anda meminta bawahan Anda untuk melakukan tinjauan ke lokasi proyek yang berada di bawah tanggung jawab Anda. Namun lagi-lagi bawahan Anda tersebut mengingkari janjinya untuk melakukan tinjauan ke lokasi dengan berbagai alasan yang Anda rasa kurang masuk akal. Sedangkan ini merupakan pekerjaan yang sangat penting demi menjaga nama baik perusahaan dan kepercayaan pemakai jasa perusahaan Anda. Sikap Anda .... ";
	soalTPA[96] = "Siang ini Anda menerima panggilan untuk proses rekrutmen pada sebuah perusahaan. Ketika Anda berangkat untuk mengikuti rekrutmen tersebut di tengah perjalanan Anda melihat kerumunan orang di pinggir jalan dan ternyata telah terjadi kecelakaan dengan korban tabrak lari, sedangkan Anda harus sesegera mungkin sampai di perusahaan untuk memulai seleksi, maka sikap Anda ....";
	soalTPA[97] = "Anda adalah PNS melalui jalur CPNS resmi suatu instansi yang dikepalai kerabat Anda. Belakangan diketahui bahwa ternyata Anda tidak lulus dan orang tua menggunakan jalur belakang untuk meluluskan Anda. Padahal selama ini Anda selalu aktif memerangi korupsi, kolusi, dan nepotisme di perusahaan kementerian Anda, sikap Anda ...";
	soalTPA[98] = "Anda adalah seorang pemimpin dalam organisasi pemerintahan. Sebagai seorang pimpinan Anda bertugas memimpin rapat-rapat penting dalam pertimbangan, pengambilan keputusan, dan lain-lain. Suatu ketika anggota rapat yang Anda sedang pimpin berbeda pendapat dengan Anda, padahal mereka tahu Andalah pimpinan rapat, sikap Anda sebagai pimpinan adalah ....";
	soalTPA[99] = "Sandi, teman kantor Anda harus menyelesaikan laporan yang sangat penting dan berkaitan dengan pengambilan keputusan mengenai <i>shift</i> untuk satu bulan ke depan pada hari ini. Padahal 10 menit lagi jam kantor akan berakhir. Ketika menghadapi situasi seperti Sandi, yang akan saya lakukan adalah ….";

	//pilihan
	var opsi = ArrOpsi(soalTPA.length,6); //deklarasi 2d array untuk pilihan
	// var pilihan = '';
	opsi [0][0] = "A. Pribadi";//A
	opsi [0][1] = "B. Egois";//B
	opsi [0][2] = "C. Izin";//C
	opsi [0][3] = "D. Kehilangan";//D
	opsi [0][4] = "E. Diskusi";//E
	opsi [0][5] = "1";//kunci jawaban

	opsi [1][0] = "A. Kemajuan";//A
	opsi [1][1] = "B. Pembentukan";//B
	opsi [1][2] = "C. Pemilihan";//C
	opsi [1][3] = "D. Perolehan";//D
	opsi [1][4] = "E. Analisis";//E
	opsi [1][5] = "1";//kunci jawaban

	opsi [2][0] = "A. Suka membagi";//A
	opsi [2][1] = "B. Menolong";//B
	opsi [2][2] = "C. Sombong";//C
	opsi [2][3] = "D. Murah hati";//D
	opsi [2][4] = "E. Pelit";//E
	opsi [2][5] = "3";//kunci jawaban

	opsi [3][0] = "A. Berharga";//A
	opsi [3][1] = "B. Sepele";//B
	opsi [3][2] = "C. Berharap";//C
	opsi [3][3] = "D. Perhatian";//D
	opsi [3][4] = "E. Pendapat";//E
	opsi [3][5] = "2";//kunci jawaban

	opsi [4][0] = "A. Hujan : Payung";//A
	opsi [4][1] = "B. Buku : Pena";//B
	opsi [4][2] = "C. Meja : Kursi";//C
	opsi [4][3] = "D. Rak : Buku";//D
	opsi [4][4] = "E. Pot : Bunga";//E
	opsi [4][5] = "1";//kunci jawaban

	opsi [5][0] = "A. Rumah : Tukang";//A
	opsi [5][1] = "B. Genteng : Tanah liat";//B
	opsi [5][2] = "C. Patung : Pemahat";//C
	opsi [5][3] = "D. Gambar : Pelukis";//D
	opsi [5][4] = "E. Skripsi : Buku";//E
	opsi [5][5] = "2";//kunci jawaban

	opsi [6][0] = "A. Kalimat (1)";//A
	opsi [6][1] = "B. Kalimat (2)";//B
	opsi [6][2] = "C. Kalimat (3)";//C
	opsi [6][3] = "D. Kalimat (5)";//D
	opsi [6][4] = "E. Kalimat (7)";//E
	opsi [6][5] = "5";//kunci jawaban

	opsi [7][0] = "A. Cut Nyak Dien wanita pejuang yang bisa menggerakkan perlawanan rakyat Aceh";//A
	opsi [7][1] = "B. Cut Nyak Dien merupakan wanita pejuang yang menginspirasi rakyat Aceh";//B
	opsi [7][2] = "C. Cut Nyak Dien merupakan wanita pejuang yang memiliki semangat juang membara";//C
	opsi [7][3] = "D. Sosok wanita pejuang yang tidak menghiraukan kesedihan diri sendiri";//D
	opsi [7][4] = "E. Cut Nyak Dien merupakan wanita yang berasal dari Naggroe Aceh";//E
	opsi [7][5] = "1";//kunci jawaban

	opsi [8][0] = "A. Keloter, Kiai, Syahid";//A
	opsi [8][1] = "B. Varitas, Keloter, Sahid";//B
	opsi [8][2] = "C. Varietas, Kloter, Sahid";//C
	opsi [8][3] = "D. Kiai, Syahid, Varietas";//D
	opsi [8][4] = "E. Sahid, Keloter, Kyai";//E
	opsi [8][5] = "4";//kunci jawaban

	opsi [9][0] = "A. “Riana akan pulang nanti sore,” Desti memberi kabar.";//A
	opsi [9][1] = "B. Besok aku beri kabar lagi”, ucap Andirana “Aku mungkin tidak akan pulang malam ini.”";//B
	opsi [9][2] = "C. “Hari ini kita akan mengadakan gotong-royong,” ucap Danur “Semuanya mari bekerja sama demi kebersihan sekolah kita.”";//C
	opsi [9][3] = "D. Bu Neti berpesan, “jika hari ini beliau tidak dapat masuk ”";//D
	opsi [9][4] = "E. “Semuanya kesini!” teriak Hilda “Hari ini kita akan adakan rapat.”";//E
	opsi [9][5] = "1";//kunci jawaban

	opsi [10][0] = "A. Kuliner Gonggong khas Kepulauan Riau.";//A
	opsi [10][1] = "B. Wali kelas kami bernama Riani Fatimah Septiani.";//B
	opsi [10][2] = "C. Rumah nenekku berada di kaki Pegunungan Brawijaya.";//C
	opsi [10][3] = "D. Dani merupakan seorang yang bijaksana.";//D
	opsi [10][4] = "E. Ibunya menunaikan ibadah Haji.";//E
	opsi [10][5] = "5";//kunci jawaban

	opsi [11][0] = "A. Manfaat Lidah Buaya untuk Kesehatan";//A
	opsi [11][1] = "B. Manfaat Lidah Buaya Untuk Kesehatan";//B
	opsi [11][2] = "C. Manfaat lidah buaya untuk kesehatan";//C
	opsi [11][3] = "D. Manfaat Lidah Buaya untuk kesehatan";//D
	opsi [11][4] = "E.  Manfaat lidah Buaya untuk kesehatan";//E
	opsi [11][5] = "1";//kunci jawaban

	opsi [12][0] = "A. Atlit, Olahraga, Medeli";//A
	opsi [12][1] = "B. Atlet, Olah raga, Mendali";//B
	opsi [12][2] = "C. Atlit, Olah raga, Medal";//C
	opsi [12][3] = "D. Atlet Olahraga, Mendali";//D
	opsi [12][4] = "E. Atlet, Olahraga, Medali";//E
	opsi [12][5] = "5";//kunci jawaban
	
	opsi [13][0] = "A. Konsleting, Hangus";//A
	opsi [13][1] = "B. Konleting, Angus";//B
	opsi [13][2] = "C. Korleting, Hangus";//C
	opsi [13][3] = "D. Konslething, Angus";//D
	opsi [13][4] = "E. Korsleting, Hangus";//E
	opsi [13][5] = "5";//kunci jawaban
	
	opsi [14][0] = "A. −32";//A
	opsi [14][1] = "B. −8";//B
	opsi [14][2] = "C. 0";//C
	opsi [14][3] = "D. 24";//D
	opsi [14][4] = "E. 32";//E
	opsi [14][5] = "5";//kunci jawaban
	
	opsi [15][0] = "A. 𝑥 > 𝑦";//A
	opsi [15][1] = "B. 𝑥 < 𝑦";//B
	opsi [15][2] = "C. 𝑥 = 𝑦";//C
	opsi [15][3] = "D. 3𝑥 = 2𝑦";//D
	opsi [15][4] = "E. Hubungan 𝑥 dan 𝑦 tidak dapat ditentukan";//E
	opsi [15][5] = "4";//kunci jawaban
	
	opsi [16][0] = "A. 5";//A
	opsi [16][1] = "B. 10";//B
	opsi [16][2] = "C. 15";//C
	opsi [16][3] = "D. 20";//D
	opsi [16][4] = "E. 25";//E
	opsi [16][5] = "4";//kunci jawaban
	
	opsi [17][0] = "A. 𝑥 = 𝑦";//A
	opsi [17][1] = "B. 𝑥 > 𝑦";//B
	opsi [17][2] = "C. 𝑥 < 𝑦";//C
	opsi [17][3] = "D. 𝑥<sup>2</sup> = 𝑦<sup>2</sup>";//D
	opsi [17][4] = "E. Hubungan 𝑥 dan 𝑦 tidak dapat ditentukan";//E
	opsi [17][5] = "3";//kunci jawaban
	
	opsi [18][0] = "A. 4 : 5";//A
	opsi [18][1] = "B. 5 : 6";//B
	opsi [18][2] = "C. 7 : 9";//C
	opsi [18][3] = "D. 9 : 13";//D
	opsi [18][4] = "E. 14 : 17";//E
	opsi [18][5] = "2";//kunci jawaban
	
	opsi [19][0] = "A. Rp103.500,00";//A
	opsi [19][1] = "B. Rp132.600,00";//B
	opsi [19][2] = "C. Rp185.000,00";//C
	opsi [19][3] = "D. Rp190.500,00";//D
	opsi [19][4] = "E. Rp195.000,00";//E
	opsi [19][5] = "3";//kunci jawaban
	
	opsi [20][0] = "A. 6/7";//A
	opsi [20][1] = "B. 3/7";//B
	opsi [20][2] = "C. 5/14";//C
	opsi [20][3] = "D. 9/14";//D
	opsi [20][4] = "E. 11/14";//E
	opsi [20][5] = "1";//kunci jawaban
	
	opsi [21][0] = "A. 45";//A
	opsi [21][1] = "B. 50";//B
	opsi [21][2] = "C. 55";//C
	opsi [21][3] = "D. 60";//D
	opsi [21][4] = "E. 70";//E
	opsi [21][5] = "4";//kunci jawaban
	
	opsi [22][0] = "A. 66";//A
	opsi [22][1] = "B. 70";//B
	opsi [22][2] = "C. 81";//C
	opsi [22][3] = "D. 84";//D
	opsi [22][4] = "E. 87";//E
	opsi [22][5] = "5";//kunci jawaban
	
	opsi [23][0] = "A. E, J";//A
	opsi [23][1] = "B. K, E";//B
	opsi [23][2] = "C. I, J";//C
	opsi [23][3] = "D. K, I";//D
	opsi [23][4] = "E. E, I";//E
	opsi [23][5] = "2";//kunci jawaban
	
	opsi [24][0] = "A. 15";//A
	opsi [24][1] = "B. 24";//B
	opsi [24][2] = "C. 30";//C
	opsi [24][3] = "D. 32";//D
	opsi [24][4] = "E. 4";//E
	opsi [24][5] = "4";//kunci jawaban
	
	opsi [25][0] = "A. U";//A
	opsi [25][1] = "B. T";//B
	opsi [25][2] = "C. P";//C
	opsi [25][3] = "D. O";//D
	opsi [25][4] = "E. N";//E
	opsi [25][5] = "5";//kunci jawaban
	
	opsi [26][0] = "A. Semua mahasiswa meminjam buku";//A
	opsi [26][1] = "B. Beberapa mahasiswa tidak meminjam buku tetapi mengunjungi perpustakaan";//B
	opsi [26][2] = "C. Sebagian mahasiswa tidak masuk kuliah";//C
	opsi [26][3] = "D. Beberapa mahasiswa meminjam buku";//D
	opsi [26][4] = "E. Tidak dapat disimpulkan";//E
	opsi [26][5] = "4";//kunci jawaban
	
	opsi [27][0] = "A. Pemilik ID Card adalah warga Pucangan";//A
	opsi [27][1] = "B. Warga Pucangan banyak yang memiliki ID Card";//B
	opsi [27][2] = "C. Sebagian warga Pucangan memiliki ID Card";//C
	opsi [27][3] = "D. Semua pemilik ID Card adalah pegawai SS";//D
	opsi [27][4] = "E. Tidak dapat disimpulkan";//E
	opsi [27][5] = "3";//kunci jawaban
	
	opsi [28][0] = "A. Nila";//A
	opsi [28][1] = "B. Merah";//B
	opsi [28][2] = "C. Ungu";//C
	opsi [28][3] = "D. Kuning";//D
	opsi [28][4] = "E. Biru";//E
	opsi [28][5] = "4";//kunci jawaban
	
	opsi [29][0] = "A. Mario";//A
	opsi [29][1] = "B. Abdel";//B
	opsi [29][2] = "C. Juan";//C
	opsi [29][3] = "D. Uya";//D
	opsi [29][4] = "E. Dhea";//E
	opsi [29][5] = "5";//kunci jawaban
	
	opsi [30][0] = "A. Perang sampai titik darah penghabisan untuk menentang kekuasaan Belanda yang dilakukan oleh masyarakat Kerajaan Bali";//A
	opsi [30][1] = "B. Perang melawan Belanda yang terjadi di Sumatera Barat karena masalah kekerabatan yang berhubungan dengan warisan";//B
	opsi [30][2] = "C. Perang yang mengakibatkan kebencian di kedua belah pihak karena kekejaman dan kezaliman";//C
	opsi [30][3] = "D. Perang yang terjadi sejak kedatangan Belanda yang menyebabkan Kerajaan Mataram mengalami kemerosotan";//D
	opsi [30][4] = "E. Perang yang mengakibatkan perpecahan wilayah menjadi 4 kerajaan kecil: Surakarta, Ngayogjakarta, Mangkunegara dan Paku Alaman";//E
	opsi [30][5] = "1";//kunci jawaban
	
	opsi [31][0] = "A. 28 Oktober 1948";//A
	opsi [31][1] = "B. Sumpah Pemuda";//B
	opsi [31][2] = "C. Pengesahan UUD 1945";//C
	opsi [31][3] = "D. 18 Agustus 1945";//D
	opsi [31][4] = "E. Rengasdengklok";//E
	opsi [31][5] = "2";//kunci jawaban
	
	opsi [32][0] = "A. Dr. Sutomo, Cipto Mangunkusumo, Suwardi Suryaningrat";//A
	opsi [32][1] = "B. Haji Samanhudi, Cipto Mangunkusumo, Suwardi Suryaningrat";//B
	opsi [32][2] = "C. Douwes Dekker, Budi Utomo, Suwardi Suryaningrat";//C
	opsi [32][3] = "D. Douwes Dekker, Cipto Mangunkusumo, Haji Samanhud";//D
	opsi [32][4] = "E. Douwes Dekker, Cipto Mangunkusumo, Suwardi Suryaningrat";//E
	opsi [32][5] = "5";//kunci jawaban
	
	opsi [33][0] = "A. 30 April – 2 Mei 1926";//A
	opsi [33][1] = "B. 20 Februari 1927";//B
	opsi [33][2] = "C. 28 Oktober 1928";//C
	opsi [33][3] = "D. 7 Maret 1915";//D
	opsi [33][4] = "E. 20 -24 Juli 1935";//E
	opsi [33][5] = "1";//kunci jawaban
	
	opsi [34][0] = "A. Merkantilisme";//A
	opsi [34][1] = "B. Politik Etis";//B
	opsi [34][2] = "C. Politik Kanalisasi";//C
	opsi [34][3] = "D. Westernisasi";//D
	opsi [34][4] = "E. Swadesi";//E
	opsi [34][5] = "4";//kunci jawaban
	
	opsi [35][0] = "A. PETA";//A
	opsi [35][1] = "B. Putera (Pusat Tenaga Rakyat)";//B
	opsi [35][2] = "C. Gerakan Tiga A";//C
	opsi [35][3] = "D. GAPI (Gabungan Politik Indonesia)";//D
	opsi [35][4] = "E. Parindra (Partai Indonesia Raya)";//E
	opsi [35][5] = "2";//kunci jawaban
	
	opsi [36][0] = "A. Ir. Soekarno";//A
	opsi [36][1] = "B. Moh. Hatta";//B
	opsi [36][2] = "C. Wahid Hasyim";//C
	opsi [36][3] = "D. Dr. Radjiman Wediodiningrat";//D
	opsi [36][4] = "E. Ahmad Subardjo";//E
	opsi [36][5] = "4";//kunci jawaban
	
	opsi [37][0] = "A. Pesta teh di Boston yang diadakan di atas kapal Inggris";//A
	opsi [37][1] = "B. Perlawanan kaum kolonis terhadap pemerintah Inggris dengan mengadakan pesta teh";//B
	opsi [37][2] = "C. Peristiwa perayaan setelah perlawanan terhadap pemerintah Inggris dengan mengadakan pesta teh";//C
	opsi [37][3] = "D. Peristiwa pembongkaran teh dari kapal Inggris di Boston dan membuangnya ke laut sebagai bentuk perlawanan terhadap pemerintah Inggris";//D
	opsi [37][4] = "E. Peristiwa perebutan teh dari kapal Inggris di Boston";//E
	opsi [37][5] = "4";//kunci jawaban
	
	opsi [38][0] = "A. Tersebarnya paham liberalisme";//A
	opsi [38][1] = "B. Meluasnya perkembangan paham demokrasi";//B
	opsi [38][2] = "C. Meluasnya perkembangan paham nasionalisme";//C
	opsi [38][3] = "D. Berkembangnya ide aksi revolusioner";//D
	opsi [38][4] = "E. Timbulnya industri-industri di Eropa";//E
	opsi [38][5] = "5";//kunci jawaban
	
	opsi [39][0] = "A. John Locke";//A
	opsi [39][1] = "B. Montesquieu";//B
	opsi [39][2] = "C. Jean Jacques Rousseau";//C
	opsi [39][3] = "D. Cardinal Richelieu";//D
	opsi [39][4] = "E. Oliver Cromwell";//E
	opsi [39][5] = "1";//kunci jawaban
	
	opsi [40][0] = "A. Hubungan manusia dengan manusia";//A
	opsi [40][1] = "B. Keterikatan manusia oleh kama atau nafsu";//B
	opsi [40][2] = "C. Cerita-cerita tentang Jatakamala";//C
	opsi [40][3] = "D. Keterikatan manusia oleh rupa dan bentuk";//D
	opsi [40][4] = "E. Keinginan manusia untuk masuk Nirwana";//E
	opsi [40][5] = "4";//kunci jawaban
		
	opsi [41][0] = "A. Kitab Pararaton";//A
	opsi [41][1] = "B. Kitab Negarakertagama";//B
	opsi [41][2] = "C. Kitab Lubdhaka";//C
	opsi [41][3] = "D. Kitab Parahyangan";//D
	opsi [41][4] = "E. Kitab Wiracarita";//E
	opsi [41][5] = "2";//kunci jawaban
		
	opsi [42][0] = "A. Mataram";//A
	opsi [42][1] = "B. Demak";//B
	opsi [42][2] = "C. Majapahit";//C
	opsi [42][3] = "D. Singasari";//D
	opsi [42][4] = "E. Samudra Pasai";//E
	opsi [42][5] = "1";//kunci jawaban
		
	opsi [43][0] = "A. Sultan Agung";//A
	opsi [43][1] = "B. Mas Jolang";//B
	opsi [43][2] = "C. Martapura";//C
	opsi [43][3] = "D. Amangkurat I";//D
	opsi [43][4] = "E. Amangkurat II";//E
	opsi [43][5] = "1";//kunci jawaban
		
	opsi [44][0] = "A. Untuk membangun dinasti baru dan menghindari serangan Kerajaan Sriwijaya";//A
	opsi [44][1] = "B. Jawa Tengah tidak menarik lagi untuk aktivitas perdagangan";//B
	opsi [44][2] = "C. Wilayah Jawa Timur masih terbuka luas untuk usaha pertanian";//C
	opsi [44][3] = "D. Penduduk Jawa Timur menganut agama Budha";//D
	opsi [44][4] = "E. Banyak bahan dasar membuat candi di Jawa Timur";//E
	opsi [44][5] = "1";//kunci jawaban
		
	opsi [45][0] = "A. Wadah, isi, dan tata laku";//A
	opsi [45][1] = "B. Pembuka, isi dan wadah";//B
	opsi [45][2] = "C. Wadah, isi, dan tata kelola";//C
	opsi [45][3] = "D. Pembuka, isi, dan penutup";//D
	opsi [45][4] = "E. Pembuka, isi dan tata laku";//E
	opsi [45][5] = "1";//kunci jawaban
		
	opsi [46][0] = "A. Ideologi bangsa";//A
	opsi [46][1] = "B. Falsafah bangsa";//B
	opsi [46][2] = "C. Pandangan hidup bangsa";//C
	opsi [46][3] = "D. Dasar Negara Indonesia";//D
	opsi [46][4] = "E. Hukum tertinggi bangsa";//E
	opsi [46][5] = "1";//kunci jawaban
		
	opsi [47][0] = "A. Ketuhanan Yang Maha Esa";//A
	opsi [47][1] = "B. Kemanusiaan yang Adil dan Beradab";//B
	opsi [47][2] = "C. Persatuan Indonesia";//C
	opsi [47][3] = "D. Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan Perwakilan";//D
	opsi [47][4] = "E. Keadilan sosial bagi Seluruh Rakyat Indonesia";//E
	opsi [47][5] = "5";//kunci jawaban
		
	opsi [48][0] = "A. Ideology";//A
	opsi [48][1] = "B. Ekonomi";//B
	opsi [48][2] = "C. Sosial-budaya";//C
	opsi [48][3] = "D. Kekayaan alam";//D
	opsi [48][4] = "E. Pertahanan dan keamanan";//E
	opsi [48][5] = "4";//kunci jawaban
		
	opsi [49][0] = "A. Bendera Merah Putih";//A
	opsi [49][1] = "B. Bahasa Indonesia";//B
	opsi [49][2] = "C. Burung Garuda";//C
	opsi [49][3] = "D. Pancasila";//D
	opsi [49][4] = "E. Suku bangsa";//E
	opsi [49][5] = "5";//kunci jawaban
		
	opsi [50][0] = "A. Politik luar negeri";//A
	opsi [50][1] = "B. Pertahanan";//B
	opsi [50][2] = "C. Keamanan";//C
	opsi [50][3] = "D. Agama";//D
	opsi [50][4] = "E. Pendidikan";//E
	opsi [50][5] = "5";//kunci jawaban
			
	opsi [51][0] = "A. Grasi";//A
	opsi [51][1] = "B. Rehabilitasi";//B
	opsi [51][2] = "C. Amnesti";//C
	opsi [51][3] = "D. Abolisi";//D
	opsi [51][4] = "E. Interpelasi";//E
	opsi [51][5] = "1";//kunci jawaban
			
	opsi [52][0] = "A. 19 Oktober 1998";//A
	opsi [52][1] = "B. 19 Oktober 1999";//B
	opsi [52][2] = "C. 19 Oktober 2000";//C
	opsi [52][3] = "D. 19 Oktober 2001";//D
	opsi [52][4] = "E. 19 Oktober 2002";//E
	opsi [52][5] = "2";//kunci jawaban
			
	opsi [53][0] = "A. Presiden adalah pihak yang berwenang menyusun kabinet dan mengangkat menteri ";//A
	opsi [53][1] = "B. Presiden adalah kepala negara sekaligus kepala pemerintahan";//B
	opsi [53][2] = "C. Menteri adalah pembantu presiden dan tidak boleh menjadi anggota parlemen";//C
	opsi [53][3] = "D. Menteri bertanggung jawab pada presiden bukan kepada parlemen";//D
	opsi [53][4] = "E. Parlemen sebagai legislatif dan presiden sebagai eksekutif";//E
	opsi [53][5] = "1";//kunci jawaban
			
	opsi [54][0] = "A. Partai politik";//A
	opsi [54][1] = "B. Kelompok kepentingan";//B
	opsi [54][2] = "C. Kelompok penekan";//C
	opsi [54][3] = "D. Alat komunikasi politik";//D
	opsi [54][4] = "E. Rekrutmen politik";//E
	opsi [54][5] = "5";//kunci jawaban
			
	opsi [55][0] = "A. Komunikasi politik";//A
	opsi [55][1] = "B. Sosialisasi politik";//B
	opsi [55][2] = "C. Rekrutmen politik";//C
	opsi [55][3] = "D. Pengatur konflik";//D
	opsi [55][4] = "E. Tokoh politik";//E
	opsi [55][5] = "5";//kunci jawaban
			
	opsi [56][0] = "A. Sri Sumantri";//A
	opsi [56][1] = "B. Gabriel Almond";//B
	opsi [56][2] = "C. David Easton";//C
	opsi [56][3] = "D. Rusandi Simuntapura";//D
	opsi [56][4] = "E. M. Budiana";//E
	opsi [56][5] = "2";//kunci jawaban
			
	opsi [57][0] = "A. Penduduk";//A
	opsi [57][1] = "B. Warga Negara";//B
	opsi [57][2] = "C. Warga Negara asing";//C
	opsi [57][3] = "D. Bukan penduduk";//D
	opsi [57][4] = "E. Bukan warga Negara";//E
	opsi [57][5] = "4";//kunci jawaban
			
	opsi [58][0] = "A. Moneter";//A
	opsi [58][1] = "B. Legislatif";//B
	opsi [58][2] = "C. Yudikatif";//C
	opsi [58][3] = "D. Konstitutif";//D
	opsi [58][4] = "E. Eksaminatif";//E
	opsi [58][5] = "5";//kunci jawaban
			
	opsi [59][0] = "A. 5 Juli 1959";//A
	opsi [59][1] = "B. 17 Agustus 1945";//B
	opsi [59][2] = "C. 11 Maret 1966";//C
	opsi [59][3] = "D. 29 Agustus 1945";//D
	opsi [59][4] = "E. 18 Agustus 1945";//E
	opsi [59][5] = "1";//kunci jawaban
			
	opsi [60][0] = "A. Memberlakukan UUD 1945 sebagai Undang-Undang Dasar menggantikan UUDS 1950";//A
	opsi [60][1] = "B. Memberlakukan UUDS 1950 menggantikan UUD 1945";//B
	opsi [60][2] = "C. Menetapkan Soekarno menjadi presiden seumur hidup";//C
	opsi [60][3] = "D. Mengangkat Ketua dan Wakil Ketua MPR/DPR dan MA serta Wakil Ketua DPA menjdai Menteri Negara";//D
	opsi [60][4] = "E. Menyatakan dan menjalankan masa Orde Baru";//E
	opsi [60][5] = "1";//kunci jawaban
			
	opsi [61][0] = "A. Pasal 26 dan 27";//A
	opsi [61][1] = "B. Pasal 26 dan 30";//B
	opsi [61][2] = "C. Pasal 28";//C
	opsi [61][3] = "D. Pasal 29 dan 30";//D
	opsi [61][4] = "E. Pasal 33";//E
	opsi [61][5] = "1";//kunci jawaban
			
	opsi [62][0] = "A. Memegang kekuasaan pemerintahan menurut UUD 1945";//A
	opsi [62][1] = "B. Memegang kekuasaan yang tertinggi atas AD, AU dan AL";//B
	opsi [62][2] = "C. Menetapkan Peraturan Pemerintah";//C
	opsi [62][3] = "D. Menyatakan keadaan bahaya";//D
	opsi [62][4] = "E. Melaksanakan pengawasan terhadap pelaksanaan UU, APBN, serta kebijakan pemerintah";//E
	opsi [62][5] = "5";//kunci jawaban
			
	opsi [63][0] = "A. Empu Tantular";//A
	opsi [63][1] = "B. Empu Sindok";//B
	opsi [63][2] = "C. Empu Sedah";//C
	opsi [63][3] = "D. Empu Kanwa";//D
	opsi [63][4] = "E. Empu Tanakung";//E
	opsi [63][5] = "1";//kunci jawaban
			
	opsi [64][0] = "A. Pasal 29 ayat (1)";//A
	opsi [64][1] = "B. Pasal 30 ayat (1)";//B
	opsi [64][2] = "C. Pasal 31 ayat (2)";//C
	opsi [64][3] = "D. Pasal 33 ayat (2)";//D
	opsi [64][4] = "E. Pasal 34 ayat (1)";//E
	opsi [64][5] = "3";//kunci jawaban
			
	opsi [65][0] = "A. Mencari tahu sendiri kebenaran akan fakta tersebut3";//A
	opsi [65][1] = "B. Mengisyaratkan secara halus kepada orang tua Anda bahwa Anda memiliki keraguan tentang asal usul Anda dan berharap bahwa mereka akan menjelaskannya5";//B
	opsi [65][2] = "C. Memasukkan kembali kertas tersebut dan berpura-pura Anda tidak pernah menemukannya karena tidak ingin membuat sedih orang tua Anda jika Anda menanyakan hal tersebut1";//C
	opsi [65][3] = "D. Meminta penjelasan secara langsung kepada orang tua Anda tentang kebenarannya4";//D
	opsi [65][4] = "E. Meminta bantuan orang lain untuk menyelidiki kebenaran akan fakta tersebut2";//E
	opsi [65][5] = "";//kunci jawaban

	opsi [66][0] = "A. Meminta kepada teman secara halus untuk bertukar dengan teman lainnya karena Anda sudah ada janji dengan orang tua Anda2";//A
	opsi [66][1] = "B. Mengatakan kepada teman Anda bahwa Anda tidak bisa menggantikannya karena sudah ada janji malam itu1";//B
	opsi [66][2] = "C. Mengatur waktu lain untuk bertemu orang tua Anda4";//C
	opsi [66][3] = "D. Mengatakan kepada orang tua Anda bahwa Anda ada pertukaran jadwal piket dan merencanakan kembali pertemuan dengan orang tua Anda5";//D
	opsi [66][4] = "E. Meminta maaf kepada teman bahwa tidak bisa menggantikannya karena sudah janji bertemu dengan orang tua Anda3";//E
	opsi [66][5] = "";//kunci jawaban

	opsi [67][0] = "A. Melakukan penelitian dan pengabdian kepada masyarakat yang lebih terencana dan maksimal1";//A
	opsi [67][1] = "B. Mengambil jam tambahan untuk mengajar kepada mahasiswa agar ilmu yang didapatkan lebih maksimal3";//B
	opsi [67][2] = "C. Meminta saran kepada rekan kerja Anda bagaimana berkinerja yang baik5";//C
	opsi [67][3] = "D. Melakukan introspeksi diri kenapa Anda kurang berprestasi4";//D
	opsi [67][4] = "E. Menerima apa yang diucapkan oleh atasan Anda dengan ikhlas2";//E
	opsi [67][5] = "";//kunci jawaban

	opsi [68][0] = "A. Melaksanakan tugas yang penting-penting agar lebih nyaman bekerja1";//A
	opsi [68][1] = "B. Memberi masukan kepada pimpinan pusat yang lebih tinggi agar mengkaji aturan-aturan pimpinan langsung Anda3";//B
	opsi [68][2] = "C. Menerima saja dan melaksanakan semua keputusan pimpinan5";//C
	opsi [68][3] = "D. Mengingatkan pimpinan Anda tentang beban kerja2";//D
	opsi [68][4] = "E. Melibatkan pegawai lain dalam pengambilan keputusan terhadap aturan yang ditetapkan pimpinan4";//E
	opsi [68][5] = "";//kunci jawaban

	opsi [69][0] = "A. Menyarankan untuk mencari teman lain sebagai teman curhat karena saya harus menyelesaikan laporan yang harus diserahkan besok. Hal tersebut lebih baik bila dibandingkan dia harus menunggu saya menyelesaikan laporan terlebih dahulu dan membuatnya bosan dan tidak dipedulikan1";//A
	opsi [69][1] = "B. Mengerjakan laporan terlebih dahulu agar bisa lebih fokus. Sebelumnya saya menjelaskan dengan baik-baik bahwa saya sedang ada pekerjaan penting dan meminta untuk menunggu sampai pekerjaan saya selesai. Saya juga meyakinkan dia akan membantunya setelah laporan selesai4";//B
	opsi [69][2] = "C. Mendengarkan dahulu cerita dan masalah teman saya dengan meninggalkan laporan sementara waktu, setelah teman saya merasa tenang baru melanjutkan menyelesaikan laporan3";//C
	opsi [69][3] = "D. Mengajaknya untuk membantu saya terlebih dahulu dengan tujuan untuk mengalihkan pikirannya terhadap masalah yang dihadapi, setelah laporan selesai baru mendiskusikan solusinya5";//D
	opsi [69][4] = "E. Dikarenakan saya harus menyelesaikan laporan yang akan diserahkan besok tapi di sisi lain saya harus membantu menenangkan teman, maka saya mengerjakan laporan sambil mendengarkan curhat teman2";//E
	opsi [69][5] = "";//kunci jawaban

	opsi [70][0] = "A. Segera melaporkan kepada pihak yang berwajib bila mendapatkan informasi yang dinilai dapat menganggu stabilitas politik serta mengancam persatuan bangsa. Hal tersebut dilakukan untuk memberi pelajaran bagi penyebar informasi palsu sehingga dapat mengurangi beredarnya inforamsi palsu (hoaks)3";//A
	opsi [70][1] = "B. Memahami hal tersebut sebagai propaganda dan strategi politik sehingga saya tidak ingin terlalu jauh memikirkan informasi yang berkaitan dengan politik dan saya hanya fokus pada bidang lain yang sedang saya tekuni1";//B
	opsi [70][2] = "C. Ikut berpartisipasi aktif dalam kegiatan sosialisasi akan pentingnya sikap dan kebijaksanaan dalam menerima informasi yang beredar terutama menjelang tahun politik karena momen tersebut sering dimanfaatkan untuk menyebarkan isu politik untuk kepentingan golongan tertentu5";//C
	opsi [70][3] = "D. Memilah-milah dan selektif dalam menerima informasi karena dengan perkembangan era digital dan sosial media sekarang, setiap orang sangat mudah menyebarkan informasi secara bebas, sehingga memungkinkan beredar informasi yang menyesatkan serta merugikan bagi orang lain4";//D
	opsi [70][4] = "E. Berhati-hati dalam menyebarkan informasi yang belum jelas kebenarannya yang dapat memicu terjadinya perpecahan di tengah masyarakat selain itu menyebar informasi palsu (hoaks) dapat ditindak secara hukum2";//E
	opsi [70][5] = "";//kunci jawaban

	opsi [71][0] = "A. Mengajak rekan kerja lain untuk ikut membantu karena banyak yang ikut membantu akan cepat memecahkan masalah ketika menghadapi kendala dalam proses pengaplikasiannya2";//A
	opsi [71][1] = "B. Mencari berbagai referensi untuk menunjang pengetahuan dalam melakukan tugas tersebut baik dari literatur media cetak maupun media elektronik. Selain itu aktif pada berbagai forum yang berkaitan dengan teknologi informasi5";//B
	opsi [71][2] = "C. Bertanya dan meminta saran kepada orang yang pernah menjalankan tugas tersebut karena dengan belajar pada orang yang berpengalaman akan lebih cepat dalam memahami seluk beluk teknologi informasi dan komunikasi yang sedang diaplikasikan pada instansi tempat saya bekerja4";//C
	opsi [71][3] = "D. Meminta waktu kepada atasan untuk mempelajari terlebih dahulu semua seluk beluk tentang teknologi yang akan diaplikasikan agar hasilnya bisa lebih optimal, bila langsung dijalankan dikhawatirkan ada kesalahan yang fatal sehingga menganggu sistem kerja yang telah lama dibangun3";//D
	opsi [71][4] = "E. Meminta izin kepada atasan untuk mencari konsultan ahli di bidang tersebut serta meminta biaya/honor konsultan tersebut. Penggunaan jasa konsultan ahli akan mempercepat proses pengaplikasian teknologi baru dan saya bisa ikut mempelajarinya sehingga di saat masa kontrak konsultan berakhir, saya bisa menanganinya sendiri1";//E
	opsi [71][5] = "";//kunci jawaban

	opsi [72][0] = "A. Bekerja seperti biasa karena tahu Anda tidak terlibat kasus tersebut4";//A
	opsi [72][1] = "B. Berusaha menjaga posisi Anda tetap aman sambil bersikap tenang3";//B
	opsi [72][2] = "C. Memberi masukan kepada pimpinan jika perlu karena Anda bagian dari organisasi5";//C
	opsi [72][3] = "D. Membuat status di media sosial untuk menenangkan warga masyarakat agar situasi tidak gaduh1";//D
	opsi [72][4] = "E. Berbicara kepada keluarga tentang masalah tersebut karena keluarga Anda berhak tahu2";//E
	opsi [72][5] = "";//kunci jawaban

	opsi [73][0] = "A. Menyusun rencana kerja harian agar pekerjaan menjadi efektif dan efisien4";//A
	opsi [73][1] = "B. Memahami visi dan misi organisasi dan menyusun langkah mencapainya5";//B
	opsi [73][2] = "C. Bekerja keras, bekerja tuntas, dan bekerja ikhlas3";//C
	opsi [73][3] = "D. Menanamkan sikap bekerja tanpa harus diperintah terlebih dahulu2";//D
	opsi [73][4] = "E. Bekerja sesuai dengan tugas pokok dan fungsi jabatan yang diemban1";//E
	opsi [73][5] = "";//kunci jawaban

	opsi [74][0] = "A. Menjelaskan secara pelan-pelan dengan bahasa yang mudah dipahami oleh ibunya agar dia tahu maksud dari apa yang Anda jelaskan1";//A
	opsi [74][1] = "B. Menjelaskan dengan sabar sembari mengajak sang ibu untuk tenang terlebih dahulu agar lebih fokus ketika Anda menjelaskan3";//B
	opsi [74][2] = "C. Menjelaskan secara perlahan tahapan demi tahapan yang harus dilakukan ibu tersebut dengan bahasa yang santun agar sang ibu paham maksud dari apa yang Anda jelaskan2";//C
	opsi [74][3] = "D. Meminta sang ibu untuk memanggil salah satu anggota keluarganya agar Anda bisa menjelaskan hal tersebut kepadanya5";//D
	opsi [74][4] = "E. Meminta teman Anda yang lebih berpengalaman dalam melayani keluarga pasien yang kebingungan dalam memahami prosedur yang ada4";//E
	opsi [74][5] = "";//kunci jawaban

	opsi [75][0] = "A. Tetap bekerja seperti biasanya pada saat Anda bekerja di tempat lama1";//A
	opsi [75][1] = "B. Mempertanyakan tentang kondisi tersebut kepada rekan baru Anda2";//B
	opsi [75][2] = "C. Melakukan pembiasaan dengan cara kerja di tempat baru5";//C
	opsi [75][3] = "D. Bekerja sesuai dengan jati diri saya sendiri tanpa terpengaruh orang lain4";//D
	opsi [75][4] = "E. Mengajak mereka untuk tidak terlalu serius dalam bekerja3";//E
	opsi [75][5] = "";//kunci jawaban

	opsi [76][0] = "A. Meminta atasan untuk menegurnya agar bisa diajak bekerja sama2";//A
	opsi [76][1] = "B. Memberikan pengertian agar sadar akan tugas dan tanggung jawab5";//B
	opsi [76][2] = "C. Menyuruhnya untuk menyelesaikan tugasnya secepat mungkin3";//C
	opsi [76][3] = "D. Membiarkan saja, karena bukan urusan Anda untuk menegurnya1";//D
	opsi [76][4] = "E. Memintanya untuk tidak menganggap sepele setiap pekerjaan4";//E
	opsi [76][5] = "";//kunci jawaban

	opsi [77][0] = "A. Minta maaf dan mengatakan bahwa Anda tidak bisa datang untuk menjemputnya4";//A
	opsi [77][1] = "B. Memintanya untuk mencoba lagi untuk memesan jasa kendaraan online5";//B
	opsi [77][2] = "C. Menjemputnya terlebih dahulu dan melanjutkan pekerjaan yang tertunda selama Anda pergi3";//C
	opsi [77][3] = "D. Meminta rekan Anda yang lain untuk menyelesaikan tugas Anda dan pergi menjemput pacar Anda2";//D
	opsi [77][4] = "E. Tidak datang menjemput dan risiko diputus oleh pacar Anda1";//E
	opsi [77][5] = "";//kunci jawaban

	opsi [78][0] = "A. Minta mereka untuk kuliah dengan sungguh-sungguh agar pada saat lulus nanti mudah mendapatkan pekerjaan3";//A
	opsi [78][1] = "B. Meminta rajin dan serius ketika kuliah dan patuh pada aturan agar bisa lulus tepat waktu2";//B
	opsi [78][2] = "C. Meminta mereka menyiapkan <i>soft skill</i> dan <i>hard skill</i> mulai dari sekarang5";//C
	opsi [78][3] = "D. Meminta mereka untuk tidak hanya menjadi kutu buku saja tapi juga ikut organisasi4";//D
	opsi [78][4] = "E. Tidak menyarankan apa-apa berharap mereka sadar sendiri nantinya tentang persaingan dunia kerja1";//E
	opsi [78][5] = "";//kunci jawaban

	opsi [79][0] = "A. Pelayanan publik yang dilaksanakan harus memiliki persyaratan dan membayar dengan biaya murah5";//A
	opsi [79][1] = "B. Dalam penyelenggaraan pelayanan publik dibutuhkan peran pemerintah, pihak swasta tanpa melibatkan masyarakat dalam pengambilan keputusan3";//B
	opsi [79][2] = "C. Memberi kewenangan kepada pihak luar seperti ombudsman agar dapat menjalankan kontrol terhadap birokrasi sehingga tidak perlu lagi melibatkan pengguna4";//C
	opsi [79][3] = "D. Pelayanan publik yang diselenggarakan pemerintah harus bersifat eksklusif1";//D
	opsi [79][4] = "E. Penyelenggaraan pelayanan didasarkan kesepakatan pengguna dan penyelenggara kebijakan2";//E
	opsi [79][5] = "";//kunci jawaban

	opsi [80][0] = "A. Menahan emosi dan menjawab pertanyaannya karena sudah tugas saya melayani4";//A
	opsi [80][1] = "B. Tetap tersenyum dan mendengarkan keluhannya3";//B
	opsi [80][2] = "C. Menasihatinya agar tidak boleh berkata kasar1";//C
	opsi [80][3] = "D. Meminta maaf dan mendengarkan keluhannya5";//D
	opsi [80][4] = "E. Berusaha tidak marah meskipun dicaci dan tetap melayani keluhannya2";//E
	opsi [80][5] = "";//kunci jawaban

	opsi [81][0] = "A. Meminta pertanggungjawaban dari pihak maskapai penerbangan4";//A
	opsi [81][1] = "B. Melapor kepada petugas yang berwenang5";//B
	opsi [81][2] = "C. Menanyakan kenapa barang Anda tidak ada kepada petugas2";//C
	opsi [81][3] = "D. Meminta pihak bandara bertanggung jawab dan mengganti barang Anda1";//D
	opsi [81][4] = "E. Mengurus koper yang hilang dengan membayar asuransi perjalanan3";//E
	opsi [81][5] = "";//kunci jawaban

	opsi [82][0] = "A. Seluruh anggota tim bekerja sama dengan disiplin dan profesional dalam menyelesaikan tugas5";//A
	opsi [82][1] = "B. Semua anggota tim menjiwai tujuan tim3";//B
	opsi [82][2] = "C. Anggota tim masing masing mempunyai potensi yang bagus di setiap bidangnya2";//C
	opsi [82][3] = "D. Kekompakan dan bermusyawarah mufakat dalam bekerja4";//D
	opsi [82][4] = "E. Motivasi yang bagus kepada seluruh anggota tim1";//E
	opsi [82][5] = "";//kunci jawaban

	opsi [83][0] = "A. Saya yakin bahwa para anggota tim juga dapat belajar sendiri untuk memahami cara menyelesaikan tugas baru tersebut3";//A
	opsi [83][1] = "B. Saya mempelajari tugas tersebut, lalu membagi pengetahuan saya kepada anggota tim yang lain4";//B
	opsi [83][2] = "C. Saya akan meminta bantuan rekan kerja yang paling pandai untuk mempelajari tugas tersebut, kemudian menjelaskannya pada semua anggota tim2";//C
	opsi [83][3] = "D. Kami mengerjakan bersama-sama tugas tersebut sesuai dengan pemahaman kami, bila ada kesulitan kami akan menyelesaikannya secara bersama-sama5";//D
	opsi [83][4] = "E. Pimpinan yang memberikan tugas, sebaiknya menjelaskan terlebih dahulu bagaimana mengerjakan tugas tersebut sebaik-baiknya1";//E
	opsi [83][5] = "";//kunci jawaban

	opsi [84][0] = "A. Bekerja sama dengan dua kandidat yang lain untuk saling membantu2";//A
	opsi [84][1] = "B. Membaca berbagai referensi yang mendukung penyelesaian tugas tersebut5";//B
	opsi [84][2] = "C. Membeli buku-buku penunjang di toko buku untuk memudahkan dalam pemahaman terhadap tugas4";//C
	opsi [84][3] = "D. Mencari referensi di internet dan jurnal jurnal online dan memakainya untuk penyelesaian tugas agar hasilnya maksimal3";//D
	opsi [84][4] = "E. Meminta bantuan dan pencerahan kepada atasan untuk menjelaskan bagaimana cara mengerjakannya1";//E
	opsi [84][5] = "";//kunci jawaban

	opsi [85][0] = "A. Mendorong anggota yang lain untuk mengesampingkan konflik dan mbahas hal lain yang lebih ringan dan menyenangkan dalam agenda3";//A
	opsi [85][1] = "B. Mendiamkan saja karena itu adalah cara terbaik untuk menghindari konflik kelompok berkepanjangan1";//B
	opsi [85][2] = "C. Mencoba menjelaskan alasan anggota tersebut sering berbeda pendapat karena memiliki sudut pandang yang berbeda agar anggota yang lainnya dapat meninjau kembali pendapat masing-masing5";//C
	opsi [85][3] = "D. Memastikan anggota yang sering berbeda pendapat tersebut dapat menjelaskan pendapatnya hingga tercapai kesepakatan dengan seluruh anggota kelompok4";//D
	opsi [85][4] = "E. Menyarankan pada anggota panitia lainnya untuk membiarkan anggota tersebut karena dapat menghambat kerja dan demi kelancaran kerja kelompok2";//E
	opsi [85][5] = "";//kunci jawaban

	opsi [86][0] = "A. Memberi alasan yang dapat diterima mengapa saya melanggar peraturan tersebut4";//A
	opsi [86][1] = "B. Mengakui kesalahan meskipun akan menghadapi konsekuensi untuk dibenci oleh anggota lain5";//B
	opsi [86][2] = "C. Menemui ketua organisasi sebelum mendapat teguran3";//C
	opsi [86][3] = "D. Menunggu dipanggil dan mempersiapkan jawaban-jawaban yang akan saya berikan2";//D
	opsi [86][4] = "E. Pasrah akan nasib yang akan saya terima1";//E
	opsi [86][5] = "";//kunci jawaban


	//LAST UPDATE
	opsi [87][0] = "A. Mengingatkan bahwa setiap pelanggaran ada konsekuensinya3";//A
	opsi [87][1] = "B. Menegur dan menunjukkan pelanggaran yang sudah dilakukan4";//B
	opsi [87][2] = "C. Mengingatkan dan meminta masing-masing anggota untuk membaca kembali kesepakatan yang sudah dibuat2";//C
	opsi [87][3] = "D. Sekadar mengingatkan saja karena anggota kelompok adalah orang dewasa yang semestinya tahu apa yang harus dilakukan1";//D
	opsi [87][4] = "E. Menegur dan mengingatkan kembali akan pernyataan yang sudah dibuat bersama serta meminta yang bersangkutan konsisten dengan apa yang sudah dinyatakan dalam kesepakatan bersama5";//E
	opsi [87][5] = "";//kunci jawaban

	opsi [88][0] = "A. Meminta maaf kepada atasan dan berjanji tidak mengulangi hal yang sama3";//A
	opsi [88][1] = "B. Meminta maaf dan menjelaskan bahwa kesalahan tersebut bukan semata-mata karena Anda2";//B
	opsi [88][2] = "C. Menjelaskan bahwa printer untuk mencetak laporan bermasalah4";//C
	opsi [88][3] = "D. Minta maaf dan menjelaskan jika keterlambatan Anda karena printer perusahaan yang bermasalah5";//D
	opsi [88][4] = "E. Tidak menerima karena seharusnya perusahaan juga memfasilitasi semua sarana penunjang kerja karyawan1";//E
	opsi [88][5] = "";//kunci jawaban

	opsi [89][0] = "A. Membuka kesempatan bagi siapapun yang memiliki kemauan dan kemampuan bekerja tim tanpa membedakan latar belakang2";//A
	opsi [89][1] = "B. Membuka kesempatan bagi siapapun yang memiliki kemauan dan kemampuan bekerja tim1";//B
	opsi [89][2] = "C. Memilih orang-orang dari berbagai latar belakang agar tidak ada kecemburuan sosial4";//C
	opsi [89][3] = "D. Memilih orang-orang dari berbagai latar belakang yang berbeda agar dapat memperoleh bermacam saran dan masukan5";//D
	opsi [89][4] = "E. Membuat sebuah kelompok yang solid dengan orang-orang sepemahaman dengan saya karena kekompakan itu penting3";//E
	opsi [89][5] = "";//kunci jawaban

	opsi [90][0] = "A. Meminta teman untuk mengantarkan saudara Anda ke bandara karena restoran ramai sehingga Anda tidak dapat mengantarkan sendiri3";//A
	opsi [90][1] = "B. Meminta saudara Anda menunggu karena restoran ramai dan mengantarkan ke bandara setelah restoran selesai4";//B
	opsi [90][2] = "C. Menyarankan saudara Anda untuk naik angkutan umum menuju bandara karena restoran sedang ramai5";//C
	opsi [90][3] = "D. Meminta izin pemilik restoran untuk mengantar saudara Anda ke bandara karena tidak ada yang bisa mengantarkan1";//D
	opsi [90][4] = "E. Meminta izin pemilik restoran untuk mengantar saudara Anda ke bandara dan berjanji kembali secepat mungkin2";//E
	opsi [90][5] = "";//kunci jawaban

	opsi [91][0] = "A. Sedapat mungkin menyarankan kepada rekan-rekan yang lain agar lebih fokus dalam bekerja4";//A
	opsi [91][1] = "B. Mengubah penampilan dan perilaku Anda agar tidak menarik perhatian lawan jenis5";//B
	opsi [91][2] = "C. Meminta kepada bagian kepegawaian untuk dipindahkan ke divisi lain1";//C
	opsi [91][3] = "D. Menyarankan kepada atasan agar mendisiplinkan para karyawan tersebut3";//D
	opsi [91][4] = "E. Tetap bekeja seperti biasanya karena kesalahan bukan berada di pihak saya2";//E
	opsi [91][5] = "";//kunci jawaban

	opsi [92][0] = "A. Melaporkan hal ini kepada atasan2";//A
	opsi [92][1] = "B. Menemui rekan tersebut di belakang secara personal dan menghiburnya3";//B
	opsi [92][2] = "C. Ikut menertawakan hal tersebut bersama rekan yang lain1";//C
	opsi [92][3] = "D. Langsung mengalihkan pembicaraan lain yang tidak berhubungan dengan candaan teman Anda tersebut4";//D
	opsi [92][4] = "E. Mengajak mengobrol rekan kerja tersebut dan menyampaikan jika candaan tersebut tidak perlu ditanggapi5";//E
	opsi [92][5] = "";//kunci jawaban

	opsi [93][0] = "A. Mengingatkan dengan baik agar Anda diberi jabatan penting1";//A
	opsi [93][1] = "B. Mengingatkannya jika diminta oleh rekan-rekan2";//B
	opsi [93][2] = "C. Mengingatkan dengan sopan dan mengharuskan segera merubah kebijaksanaannya3";//C
	opsi [93][3] = "D. Mencoba mengingatkannya pada saat rapat berlangsung4";//D
	opsi [93][4] = "E. Mencoba mengingatkan pimpinan dengan mengajaknya berdiskusi empat mata5";//E
	opsi [93][5] = "";//kunci jawaban

	opsi [94][0] = "A. Mencari tahu sejarah perusahaan dan menasihati teman-teman yang lain agar berhati-hati2";//A
	opsi [94][1] = "B. Mencari tahu detail tentang perusahaan yang memberikan pinjaman jika suatu saat terpaksa harus melakukan peminjaman5";//B
	opsi [94][2] = "C. Berusaha agar tidak melakukan peminjaman agar tidak mersa kesulitan pada saat melakukan pembayaran nanti4";//C
	opsi [94][3] = "D. Tidak ingin melakukan hal yang sama bahkan dalam kondisi terdesak sekalipun3";//D
	opsi [94][4] = "E. Menasihati teman-teman saya agar berhati-hati untuk melakukan pinjaman online meskipun dengan prosedur yang lebih mudah1";//E
	opsi [94][5] = "";//kunci jawaban

	opsi [95][0] = "A. Tidak lagi memberinya maaf karena ini sudah keterlaluan tidak mengindahkan perintah Anda padahal itu adalah pekerjaan yang sangat penting3";//A
	opsi [95][1] = "B. Berhenti memercayainya sejak kejadian pertama hingga selanjutnya2";//B
	opsi [95][2] = "C. Melaporkan hal ini kepada pemilik perusahaan agar mendapat hukuman dan supaya dia memahami tugsanya untuk masa yang akan datang4";//C
	opsi [95][3] = "D. Berani berkata tegas dan menegurnya agar bertanggung jawab5";//D
	opsi [95][4] = "E. Tidak cepat percaya dengannya jika diserahkan tugas lagi untuk ke depannya1";//E
	opsi [95][5] = "";//kunci jawaban

	opsi [96][0] = "A. Mengejar pelaku tabrak lari dan memintanya untuk bertanggung jawab atas perbuatannya1";//A
	opsi [96][1] = "B. Menolongnya kemudian membawanya ke rumah sakit2";//B
	opsi [96][2] = "C. Tetap melanjutkan perjalanan setelah yakin ada orang lain yang menolong5";//C
	opsi [96][3] = "D. Mengabaikannya karena harus mengikuti tes yang akan dimulai sebentar lagi3";//D
	opsi [96][4] = "E. Tetap melanjutkan perjalanan untuk tepat waktu mengikuti tes pekerjaan4";//E
	opsi [96][5] = "";//kunci jawaban

	opsi [97][0] = "A. Menyesali perbuatan dengan bersedekah membantu korban bencana dan aktif di organisasi kemanusiaan1";//A
	opsi [97][1] = "B. Menasihati orang tua dan melaporkan kepada pihak berwenang4";//B
	opsi [97][2] = "C. Mengakui kecurangan orang tua di depan semua orang dan menunggu keputusan instansi5";//C
	opsi [97][3] = "D. Menyesali perbuatan, tetap tenang dan tidak gegabah karena sulit memecat PNS2";//D
	opsi [97][4] = "E. Meminta maaf dan melapor ke pihak berwenang3";//E
	opsi [97][5] = "";//kunci jawaban

	opsi [98][0] = "A. Menerima pendapat anggota tersebut karena rekam jejak organisasinya yang sangat baik3";//A
	opsi [98][1] = "B. Mempertahankan pendapat sendiri karena saya seorang pemimpin dalam organisasi1";//B
	opsi [98][2] = "C. Menganggap perbedaan pendapat adalah suatu hal biasa dalam organisasi2";//C
	opsi [98][3] = "D. Mempertimbangkan pendapat anggota tersebut5";//D
	opsi [98][4] = "E. Menanyakan mengapa anggota tersebut memiliki pandangan yang berbeda4";//E
	opsi [98][5] = "";//kunci jawaban

	opsi [99][0] = "A. Tetap fokus menyelesaikan laporan secara maksimal, bila perlu melampaui jam kerja5";//A
	opsi [99][1] = "B. Mengalihkan pengambilan keputusan pada pegawai di <i>shift</i> selanjutnya2";//B
	opsi [99][2] = "C. Menyelesaikan masalah secepat mungkin, karena menunjukkan komitmen bekerja4";//C
	opsi [99][3] = "D. Menyelesaikan laporan sesegera mungkin, agar bisa segera beristirahat3";//D
	opsi [99][4] = "E. Bila memang tidak mampu, mempercayakan pada teman yang lain1";//E
	opsi [99][5] = "";//kunci jawaban



		
	var datasoal="";//data yang diload
	var datapilihan="";
	//tempatsoal
	var tempatsoal = [];
	var pilihansoal = [];
	for(var y = 0; y < (soalTPA.length - 35); y++) {

		tempatsoal[y] = '<label id="soal'+(y+1)+'" class="control-label soal" for="soal" style="line-height: 1.7;">'+soalTPA[y]+'</label>';
		pilihansoal[y]= '<div class="pilihansoal" id="pilihansoal'+(y+1)+'" >';
		for(var x = 0; x < 5; x++){
			if(opsi[y][x] == "") {
				pilihansoal[y] += '<label class="checkbox " style="display:none">'+opsi[y][x]+'<input class="checkboxbtn'+(y+1)+'"type="checkbox" value='+(x+1)+' name="checkboxbtn'+(y+1)+'" style="display:none">'+
							'<span class="checkmark" style="display:none">  </span></label>';
			}else {
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

