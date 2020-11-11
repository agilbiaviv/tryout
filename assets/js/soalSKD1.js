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
	soalTPA[0] = "Cermati paragraf di bawah ini dengan saksama!<br><br> (1) Terjadinya kerusakan lingkungan di Indonesia, khususnya di Jawa Barat, lebih disebabkan masih lemahnya penegakan hukum di bidang lingkungan. (2) Bahkan, beberapa kasus yang benar-benar merusak lingkungan pun kadang luput dari jeratan hukum. (3) Kepala Badan Pengendalian Lingkungan Hidup Daerah (BPLHD) Jawa Barat, Ade Suhanda Asnawidjaja menyatakan secara ideal kasus yang menyangkut lingkungan seharusnya ditangani pihak eksekutif. (4) Namun, hal itu tidak bisa dilakukan mengingat adanya keterbatasan kewenangan dan personel. (6) Oleh karena itu, penegakan hukum dalam berbagai bidang harus dilaksanakan secara bersih, transparan, dan profesional. <br><br>Kalimat utama pada paragraf di atas terdapat pada nomor ....";
	soalTPA[1] = "Cermati paragraf berikut!<br><br> Peneliti Badan Tenaga Nuklir Nasional memanfaatkan radiasi sinar gama di fasilitas iradiator untuk membuat materi genetik sorgum bermutasi. Hasilnya, sorgum cocok ditanam di lahan yang kering sekaligus menjadi sumber pangan dan energi. Ia menanam benih sorgum di lahan-lahan kering Nusa Tenggara Barat dan Nusa Tenggara Timur, hasilnya pun positif. Harga sorgum lebih murah daripada harga padi. Ia menghasilkan kualitas unggul sorgum bernama Pahat. <br><br> Apa manfaat menanam sorgum?";
	soalTPA[2] = "Cermati paragraf berikut!<br><br> Jasa-jasa ekologi yang terdapat di Kawasan Ekosistem Leuser mencakup penyediaan air bersih, pengendalian erosi ... banjir, pengaturan iklim lokal, penyerapan karbon, perikanan air tawar, ... keindahan alam mendukung industri pariwisata. Jasa-jasa ini hanya dapat tersedia ... Kawasan Ekosistem Leuser dijaga dan dipelihara fungsinya sebagai suatu kesatuan interaksi yang utuh. <br><br>Kata penghubung yang tepat untuk melengkapi bagian yang rumpang dalam paragraf tersebut adalah ....";
	soalTPA[3] = "Berikut merupakan fungsi dari pemakaian huruf miring, <i>kecuali</i> ....";
	soalTPA[4] = "Penulisan menggunakan huruf kapital yang tepat sesuai Ejaan Bahasa Indonesia yaitu ....";
	soalTPA[5] = "Penulisan partikel lah, kah, pun, dan per yang tepat adalah ....";
	soalTPA[6] = "Kalimat di bawah ini yang menggunakan tanda hubung (-) sesuai dengan Ejaan Bahasa Indonesia adalah ....";
	soalTPA[7] = "Penulisan judul karangan yang tepat adalah ....";
	soalTPA[8] = "Di bawah ini pemenggalan kata yang tidak tepat adalah ....";
	soalTPA[9] = "Dari deret kata berikut yang semuanya kata baku adalah ....";
	soalTPA[10] = "Maksud dari Pancasila sebagai ideologi terbuka adalah ....";
	soalTPA[11] = "Pancasila mengandung cita-cita yang ingin dicapai dalam berbagai bidang kehidupan. Hal ini berarti Pancasila memiliki dimensi ....";
	soalTPA[12] = "Ir. Soekarno mengusulkan konsep dasar negara Indonesia dalam sidang BPUPKI pertama pada tanggal ....";
	soalTPA[13] = "Jumlah bulu pada leher Garuda Pancasila adalah ....";
	soalTPA[14] = "Berikut ini merupakan nilai yang terkandung dalam Pancasila sila kelima adalah ....";
	soalTPA[15] = "Pada periode 27 Desember 1949–17 Agustus 1950, konstitusi yang berlaku di Indonesia adalah ....";
	soalTPA[16] = "Pasal berapa saja UUD 1945 yang pertama kali diamendemen? ";
	soalTPA[17] = "Berikut ini merupakan kekuasaan presiden, <i>kecuali</i> ....";
	soalTPA[18] = "Sistem demokrasi yang digunakan untuk menyalurkan keinginan dari rakyat melalui perwakilan dari parlemen disebut ....";
	soalTPA[19] = "Negara hendak mewujudkan keadilan sosial bagi seluruh rakyat Indonesia merupakan pokok pikiran ... pembukaan UUD 1945.";
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

	//ss
    // soalTPA[63] = "<img src='../../assets/img/SKD_p-1/64'/>";
    // soalTPA[64] = "<img src='../../assets/img/SKD_p-1/65'/>";
    soalTPA[65] = "Anda sedang memeriksa berkas-berkas tua dan tanpa sengaja Anda menemukan akta kelahiran Anda yang menyatakan bahwa Anda sebenarnya diadopsi oleh orang tua Anda. Orang tua angkat Anda sendiri sudah begitu tua dan mereka bermaksud supaya Anda tidak mengetahui hal tersebut. Sikap Anda akan hal ini adalah ....";
    soalTPA[66] = "Anda sudah berjanji bertemu dengan orang tua Anda nanti malam, satu jam sebelum pergi, telepon berdering dan teman Anda bertanya apakah Anda tidak keberatan menukar jadwal piket dengannya karena dia ada urusan mendadak, maka ....";
    soalTPA[67] = "Anda adalah seorang dosen di suatu universitas negeri. Anda dituntut melakukan pengajaran, penelitian, dan pengabdian kepada masyarakat sebagaimana diwajibkan melakasanakan Tri Darma Perguruan Tinggi. Pada akhir semester kinerja Anda dinilai atasan tidak terlalu baik dalam mengajar dibandingkan dengan rekan sejawat Anda. Maka sikap Anda ....";
    soalTPA[68] = "Suatu organisasi dalam pemerintahan akan berjalan dengan baik jika dibuat berdasarkan peraturan perundangundangan dan bekerja berdasarkan tugas pokok dan fungsi masing-masing ASN. Ketika Anda dihadapkan dengan situasi pimpinan di organisasi Anda menetapkan aturan-aturan beserta <i>reward</i> dan <i>punishment</i> yang menurut Anda berat untuk dilaksanakan, maka sikap Anda ....";
    soalTPA[69] = "Anda sedang ada <i>deadline</i> laporan untuk diserahkan ke atasan Anda dan harus diserahkan besok. Tiba-tiba teman Anda datang dengan wajah sedih dan ingin curhat terkait masalah besar yang sedang ia hadapi. Sikap yang Anda ambil adalah .... ";
    soalTPA[70] = "Pada saat memasuki tahun politik 2019, banyak sekali isu politik terus muncul dengan tidak terbendung. Informasi tersebut beragam, ada yang positif dan negatif. Selain itu tidak jarang beredar kabar yang sengaja dibuat untuk kepentingan politik golongan tertentu (hoaks). Tentu saja hal tersebut bisa membahayakan persatuan bangsa yang telah lama dibangun. Sikap Anda dalam menghadapi arus informasi adalah ....";
    soalTPA[71] = "Perkembangan teknologi informasi dan komunikasi sekarang memberikan dampak yang besar bagi kehidupan masyarakat. Tidak dapat dipungkiri hal tersebut dapat memberikan dampak positif dan negatif. Salah satu dampak positifnya adalah memberikan kemudahan dalam menyelesaikan pekerjaan. Instansi tempat Anda bekerja sedang mengadopsi teknologi informasi dan komunikasi dan Anda diminta oleh atasan untuk ikut dalam pengaplikasiannya. Padahal latar belakang pendidikan Anda bukan dari bidang tersebut. Sikap Anda dalam menerima tugas tersebut adalah ....";
    soalTPA[72] = "Anda bekerja sebagai ASN dilingkup pemerintahan provinsi sebagai staf administrasi. Sutau ketika salah satu pimpinan Anda terkena Operasi Tangkap Tangan (OTT) oleh KPK yang menyebabkan organisasi Anda terganggu. Sikap Anda sebagai salah satu ASN dalam organisasi tersebut adalah ....";
    soalTPA[73] = "Seorang ASN dituntut agar menjalankan tugas sebagai abdi masyarakat dan selalu berinovasi agar meningkatkan kualitas diri beserta dengan institusi tempatnya mengabdi. Bagaimana cara Anda mewujudkannya?";
    soalTPA[74] = "Pagi ini seperti biasanya Anda selalu sibuk dengan rutinitas di pekerjaan sebagai seorang <i>customer service</i> pada sebuah rumah sakit pemerintah. Ketika Anda sedang asik bekerja datanglah seorang ibu-ibu tua yang ingin menanyakan prosedur penggunaan BPJS kesehatan untuk proses rawat inap anaknya yang sedang sakit dan membutuhkan perawatan secepatnya agar sakitnya tidak bertambah parah. Setelah Anda menjelaskan panjang lebar dengan bahasa yang mudah dimengerti beberapa kali kepada sang ibu namun ternyata ibu tersebut tampak sangat kebingungan dan mengatakan bahwa dia tidak mengerti sama sekali dengan prosedur yang Anda jelaskan, bagaimana sikap Anda?";
    soalTPA[75] = "Anda baru saja di pindahkan ke departement lain di kantor Anda yang masih memiliki hubungan dengan pekerjaan sebelumnya. Namun di tempat Anda yang baru setiap karyawan sangat serius dalam bekerja, jarang bahkan tidak pernah Anda melihat mereka bekerja dengan santai dan sedikit bercanda, sikap Anda ....";
    soalTPA[76] = "Tim Anda mendapat tugas dari atasan Anda untuk membantunya menyelesaikan dokumen-dokumen penting yang harus dibawanya dalam rapat petinggi perusahaan. Dokumen yang harus disiapkan cukup banyak. Namun salah seorang rekan Anda sulit untuk diajak bekerja sama dan cenderung menganggap sepele tugas yang diberikan atasan, perilaku dan sikapnya bahkan dapat berbahaya bagi keselarasan di tempat kerja, sikap Anda ....";
    soalTPA[77] = "Ketika menjadi panitia sebuah acara di kampus Anda, Anda mendapatkan telepon dari pacar Anda bahwa dia membutuhkan bantuan Anda untuk menjemputnya ke stasiun kota, pacar Anda mengatakan jika sudah mencoba menghubungi jasa angkutan <i>online</i> tapi tidak ada yang mengambil orderannya, sedangkan tugas Anda masih banyak dan harus selesai hari ini juga mengingat acara akan dilaksanakan besok, sikap Anda ....";
    soalTPA[78] = "Minggu ini Anda berencana membantu adik Anda dan teman kelompoknya untuk membuat sebuah artikel ilmiah. Ketika sedang mengajarkan bagaimana cara membuat sebuah karya ilmiah yang baik, kemudian di televisi terdapat berita tentang semakin besarnya angka pengangguran di Indonesia, yang dapat Anda sarankan untuk adik dan teman kelompoknya adalah ....";
    soalTPA[79] = "Pelayanan publik adalah segala sesuatu bentuk kegitan pelayanan yang dilaksanakan instansi pemerintah pusat dan daerah serta di lingkungan BUMN/BUMD. Prinsip pelayanan publik yang baik untuk mewujudkan pelayanan prima adalah ....";
    soalTPA[80] = "Ketika Anda sedang mengambil beberapa dokumen di meja <i>customer service</i>, tiba-tiba datang seorang pelanggan yang marah pada Anda karena pelayanan yang kurang baik bahkan sampai mencaci Anda, yang Anda lakukan ....";
    soalTPA[81] = " Anda baru saja pulang liburan dari sebuah pulau. Ketika hendak mengambil barang Anda di pengambilan bagasi ternyata koper Anda yang berisi oleh-oleh untuk keluarga Anda tidak ada. Sikap Anda ...";
    soalTPA[82] = "Anda ditunjuk menjadi seorang pemimpin pada sebuah tim dari berbagai lulusan universitas terkemuka. Akhir-akhir ini tim Anda mendapatkan banyak tugas dengan <i>deadline</i> yang lumayan singkat, akan tetapi tim Anda selalu berhasil menyelesaikan tugas-tugas tersebut dengan hasil yang memuaskan. Banyak yang menilai jika kinerja tim Anda sangat bagus. menurut Anda apa penyebabnya?";
    soalTPA[83] = "Anda dan tim Anda diberikan tugas baru oleh pimpinan, tugas tersebut merupakan tugas yang lumayan baru dan belum pernah Anda kerjakan sebelumnya, begitu pun dengan rekan tim yang lain mereka merasa kebingungan dan juga mereka semua juga belum memahami maksud dan cara mengerjakan tugas baru tersebut. Sikap Anda ....";
    soalTPA[84] = "Anda termasuk ke dalam salah satu dari tiga kandidat karyawan terbaik yang akan dipromosikan untuk naik jabatan di perusahaan Anda. Untuk memutuskan siapa yang layak di antara kandidat yang ada, pimpinan perusahaan memberikan tugas yang sebelumnya tidak pernah kamu kerjakan, bagaimana Anda mengatasinya?";
    soalTPA[85] = "Sebagai ketua kelompok kepanitiaan acara tahunan di sekolah, ada seorang anggota saya yang tidak sependapat dengan anggota lainnya sehingga seringkali menimbulkan konflik dengan anggota panitia lainnya. Sikap saya adalah ....";
    soalTPA[86] = "Anda adalah seorang anggota dari sebuah organisasi yang memiliki aturan bahwa setiap anggotanya dilarang untuk menggunakan fasilitas organisasi tanpa izin. Suatu ketika karena suatu alasan Anda melanggar peraturan tersebut Sikap Anda adalah ....";
    soalTPA[87] = "Anda adalah seorang ketua dari sebuah perkumpulan seni grafiti di kota Anda yang memiliki peraturan bahwa setiap anggota perkumpulan tersebut dilarang mencoret-coret fasilitas umum di kota. Suatu ketika Anda mendapati salah satu anggota perkumpulan Anda melanggar peraturan tersebut. Sikap Anda menghadapi anggota yang melanggar peraturan tersebut adalah ....";
    soalTPA[88] = "Suatu hari Anda dimarahi oleh atasan Anda karena terlambat mengumpulkan laporang kerja sehingga Anda dinilai kurang bertanggung jawab dan membuat kinerja kerja Anda buruk. Sedangkan fakta Anda terlambat mengumpulkan tugas tersebut karena printer yang Anda gunakan bermasalah. Sikap Anda ....";
    soalTPA[89] = "Atasan Anda menugaskan Anda membuat sebuah tim untuk menyelesaikan sebuah masalah pekerjaan di kantor Anda, tetapi di kantor Anda terdiri dari orang-orang dari berbagai macam latar belakang suku yang berbeda dengan Anda. Bagaiman sikap Anda?";
    soalTPA[90] = "Anda bekerja sebagai juru masak di sebuah restoran besar. Ketika restoran sedang ramai, tiba-tiba saudara Anda datang meminta tolong Anda untuk mengantarkan ke bandara. Sikap Anda adalah ....";
    soalTPA[91] = "Anda adalah seorang wanita yang cantik dan modis. Dalam hal berpenampilan Anda suka memakai pakaian yang sedikit terbuka. Setelah lulus kuliah, Anda mendapatkan pekerjaan di sebuah perusahaan di mana mayoritas karyawannya berlawanan jenis kelamin dengan Anda. Suatu hari atasan Anda menemui Anda dan mengatakan bahwa kehadiran Anda membuat banyak karyawan susah fokus dalam bekerja karena mereka lebih banyak memperhatikan diri Anda dibanding pekerjaan mereka sendiri. Atasan Anda kemudian mengisyaratkan agar Anda melakukan sesuatu untuk mengatasi permasalahn tersebut. Apa yang akan Anda lakukan?";
    soalTPA[92] = "Saat jam istirahat di kantor, semua rekan-rekan Anda berkumpul di kantin untuk makan siang, tiba-tiba salah satu teman Anda berbicara dalam bahasa daerah yang membuat semua rekan menertawakan teman Anda tersebut, bagaimana sikap Anda menanggapi hal ini?";
    soalTPA[93] = "Ketika Anda mendapati seorang pimpinan di tempat Anda bekerja yang mana setiap keputusannya tidak bijaksana bahkan terkesan merugikan. Sikap Anda sebagai seorang yang diberi kepercayaan oleh rekan-rekan sekitar adalah ....";
    soalTPA[94] = "Dengan naiknya biaya hidup dan harga barang yang serba mahal serta sulitnya lapangan pekerjaan membuat masyarakat merasa terjepit masalah perekonomian untuk memenuhi kebutuhan sehari-hari. Begitu pun dengan Anda sendiri yang merupakan seorang karyawan perusahaan swasta dengan gaji yang sangat pas-pasan setiap bulannya. Teman-teman Anda yang lain juga sering merasa kesulitan untuk memenuhi kebutuhan hidup. Banyak dari teman-teman Anda yang meminjam uang di aplikasi <i>online</i> dengan bunga yang tidak sedikit ditambah lagi jika melakukan pembayaran melebihi tempo yang sudah ditentukan mengakibatkan besar bunga bisa melebihi pinjaman. Sikap Anda jika dihadapkan pada permasalahan di atas adalah ....";
    soalTPA[95] = "Pagi ini Anda meminta bawahan Anda untuk melakukan tinjauan ke lokasi proyek yang berada di bawah tanggung jawab Anda. Namun lagi-lagi bawahan Anda tersebut mengingkari janjinya untuk melakukan tinjauan ke lokasi dengan berbagai alasan yang Anda rasa kurang masuk akal. Sedangkan ini merupakan pekerjaan yang sangat penting demi menjaga nama baik perusahaan dan kepercayaan pemakai jasa perusahaan Anda. Sikap Anda ....";
    soalTPA[96] = "Siang ini Anda menerima panggilan untuk proses rekrutmen pada sebuah perusahaan. Ketika Anda berangkat untuk mengikuti rekrutmen tersebut di tengah perjalanan Anda melihat kerumunan orang di pinggir jalan dan ternyata telah terjadi kecelakaan dengan korban tabrak lari, sedangkan Anda harus sesegera mungkin sampai di perusahaan untuk memulai seleksi, maka sikap Anda ....";
    soalTPA[97] = "Anda adalah PNS melalui jalur CPNS resmi suatu instansi yang dikepalai kerabat Anda. Belakangan diketahui bahwa ternyata Anda tidak lulus dan orang tua menggunakan jalur belakang untuk meluluskan Anda. Padahal selama ini Anda selalu aktif memerangi korupsi, kolusi, dan nepotisme di perusahaan kementerian Anda, sikap Anda ....";
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
			
	opsi [65][0] = "A. Menutupi kesalahan kerja sebelumnya agar tidak diketahui atasan yang baru1";//A
	opsi [65][1] = "B. Menggalang dukungan sosial dengan rekan kerja agar kompak menghadapi atasan yang baru4";//B
	opsi [65][2] = "C. Merubah perilaku kerja yang tidak efektif selama ini agar diperhatikan atasan yang baru5";//C
	opsi [65][3] = "D. Menerima atasan baru sewajarnya, menyesuaikan gaya kerja jika diperlukan3";//D
	opsi [65][4] = "E. Menerima keberadaan atasan yang baru dengan menunjukkan perilaku kerja yang sesempurna mungkin2";//E
	opsi [65][5] = "";//kunci jawaban
			
	opsi [66][0] = "A. Tertekan karena cemas memikirkan dampaknya3";//A
	opsi [66][1] = "B. Bingung bagaimana harus bersikap2";//B
	opsi [66][2] = "C. Pesimis karena tidak dilibatkan dalam proses awal4";//C
	opsi [66][3] = "D. Berhati-hati memetakan dampak politis perubahan1";//D
	opsi [66][4] = "E. Penuh harapan akan ada perbaikan5";//E
	opsi [66][5] = "";//kunci jawaban
			
	opsi [67][0] = "A. Tertutup, tidak nyaman berinteraksi dengan orang baru2";//A
	opsi [67][1] = "B. Sibuk dengan dirinya sendiri5";//B
	opsi [67][2] = "C. Waspada, tidak mudah percaya pada orang lain1";//C
	opsi [67][3] = "D. Kritis, mempertanyakan pemikiran orang lain4";//D
	opsi [67][4] = "E. Supel, cepat membaur dengan orang baru3";//E
	opsi [67][5] = "";//kunci jawaban
			
	opsi [68][0] = "A. Terjaga sampai pagi";//A
	opsi [68][1] = "B. Hampir tidak dapat tidur sampai pagi";//B
	opsi [68][2] = "C. Tidur dengan beberapa kali terbangun karena merasa tidak nyaman";//C
	opsi [68][3] = "D. Menunggu beberapa saat, baru tidur lelap";//D
	opsi [68][4] = "E. Tetap dapat tidur dengan mudah";//E
	opsi [68][5] = "";//kunci jawaban
			
	opsi [69][0] = "A. Tak akan memuji ";//A
	opsi [69][1] = "B. Berpura-pura tidak tahu akan keberhasilannya melakukan tugas";//B
	opsi [69][2] = "C. Puas, tetapi tak perlu memuji karena hal itu akan membuatnya sombong";//C
	opsi [69][3] = "D. Memuji setinggi langit agar dia juga senang kepada saya";//D
	opsi [69][4] = "E. Memuji secara proporsional";//E
	opsi [69][5] = "";//kunci jawaban
			
	opsi [70][0] = "A. Membeli baju sesuai tujuan semula";//A
	opsi [70][1] = "B. Membeli baju meskipun tergiur ajakannya";//B
	opsi [70][2] = "C. Membeli baju dulu baru makan";//C
	opsi [70][3] = "D. Menyetujui ajakannya demi menjaga hubungan";//D
	opsi [70][4] = "E. Menyetujui ajakannya dengan senang hati";//E
	opsi [70][5] = "";//kunci jawaban
			
	opsi [71][0] = "A. Memberikannya kepada orang lain";//A
	opsi [71][1] = "B. Menyimpan dan tidak akan menyentuhnya";//B
	opsi [71][2] = "C. Menyimpan sebagai kenangan";//C
	opsi [71][3] = "D. Menggunakan sekedar untuk menyenangkan";//D
	opsi [71][4] = "E. Menggunakan untuk keperluan saya";//E
	opsi [71][5] = "";//kunci jawaban
			
	opsi [72][0] = "A. Berperilaku taat aturan jika sedang dilihat orang atau atasan";//A
	opsi [72][1] = "B. Berperilaku mudah terpancing emosi oleh situasi-situasi yang kurang menyenangkan";//B
	opsi [72][2] = "C. Berperilaku sesuai perasaan saya apa adanya";//C
	opsi [72][3] = "D. Berperilaku santun dan baik hanya kepada orang-orang yang berbuat baik kepada saya";//D
	opsi [72][4] = "E. Berperilaku taat aturan, mampu menahan emosi, dan tetap tanang saat menghadapi masalah";//E
	opsi [72][5] = "";//kunci jawaban
			
	opsi [73][0] = "A. Mencari teman tersebut dan memarahinya";//A
	opsi [73][1] = "B. Tidak berteman dengannya lagi";//B
	opsi [73][2] = "C. Mendiamkannya dan tidak mengajaknya berbicara";//C
	opsi [73][3] = "D. Berniat untuk tidak meminjamkan uang kepadanya lagi";//D
	opsi [73][4] = "E. Menanyakan alasannya tidak menepati janji";//E
	opsi [73][5] = "";//kunci jawaban
			
	opsi [74][0] = "A. Mudah tersinggung";//A
	opsi [74][1] = "B. Kurang bersemangat, enggan melakukan apa-apa";//B
	opsi [74][2] = "C. Melakukan hal-hal yang ingin saya lakukan";//C
	opsi [74][3] = "D. Merenungkan masalah saya";//D
	opsi [74][4] = "E. Membicarakan masalah saya dengan teman";//E
	opsi [74][5] = "";//kunci jawaban
			
	opsi [75][0] = "A. Memarahi dia atas ketidakpeduliannya";//A
	opsi [75][1] = "B. Tidak mengajaknya berbicara";//B
	opsi [75][2] = "C. Mengatakan kecewa kepadanya";//C
	opsi [75][3] = "D. Memarahi dia atas ketidakpeduliannya";//D
	opsi [75][4] = "E. Tetap memaafkannya dan menasihatinya agar lebih berhati-hati";//E
	opsi [75][5] = "";//kunci jawaban
			
	opsi [76][0] = "A. Saya bersikeras mencari upaya pembenaran terhadap usulan tersebut agar dia mau menerimanya";//A
	opsi [76][1] = "B. Merasa sangat kecewa";//B
	opsi [76][2] = "C. Kecewa, namun berusaha melupakan hal tersebut";//C
	opsi [76][3] = "D. Ditolak bukanlah sesuatu yang baru bagi saya";//D
	opsi [76][4] = "E. Mencari alternatif usulan lain yang lebih tepat";//E
	opsi [76][5] = "";//kunci jawaban
			
	opsi [77][0] = "A. Marah terhadap situasi yang tidak menentu";//A
	opsi [77][1] = "B. Meminta tambahan uang saku kepada orang tua";//B
	opsi [77][2] = "C. Merancang penggunaan uang sekaligus minta tambahan uang saku";//C
	opsi [77][3] = "D. Mengurangi pengeluaran untuk hal-hal yang tidak perlu";//D
	opsi [77][4] = "E. Membuat rancangan penggunaan uang saku secara lebih berhati-hat";//E
	opsi [77][5] = "";//kunci jawaban
			
	opsi [78][0] = "A. Tidak mau menerima konsekuensi karena Anda telah berusaha untuk tidak terlambat walaupun akhirnya tetap terlambat";//A
	opsi [78][1] = "B. Memilih untuk tidak masuk kantor";//B
	opsi [78][2] = "C. Menerima konsekuensinya dengan terus Menggerutu";//C
	opsi [78][3] = "D. Menerima konsekuensinya dan membujuk atasan untuk meringankan konsekuensinya";//D
	opsi [78][4] = "E. Menerima konsekuensinya dengan lapang dada karena sadar bahwa itu sepenuhnya adalah kesalahan Anda";//E
	opsi [78][5] = "";//kunci jawaban
			
	opsi [79][0] = "A. Meminjam uang kantor yang Anda pegang tanpa sepengetahuan siapa-siap";//A
	opsi [79][1] = "B. Meminjam uang kantor yang Anda pegang dan mengembalikannya setelah Anda mempunyai uang berlebih";//B
	opsi [79][2] = "C. Meminjam uang kantor yang Anda pegang dan mengembalikannya setelah gajian";//C
	opsi [79][3] = "D. Meminjam uang kantor yang Anda pegang setelah membicarakannya dengan teman";//D
	opsi [79][4] = "E. Meminjam uang dengan kredit kepada koperasi/bank";//E
	opsi [79][5] = "";//kunci jawaban
				
	opsi [80][0] = "A. Menjawab soal yang bisa dan membuat catatan dihari sebelumnya sebagai contekan untuk menjawab soal yang tidak bisa";//A
	opsi [80][1] = "B. Menjawab soal yang bisa dan membuka buku secara diam-diam untuk menjawab soal yang tidak bisa";//B
	opsi [80][2] = "C. Menjawab soal yang bisa dan bertanya kepada teman untuk menjawab soal yang tidak bisa";//C
	opsi [80][3] = "D. Menjawab soal dan menghubungi dosen untuk meminta keringanan";//D
	opsi [80][4] = "E. Menjawab soal semampu Anda sesuai belajar Anda semalam";//E
	opsi [80][5] = "";//kunci jawaban
					
	opsi [81][0] = "A. Buang saja, toh tidak ada tempat sampah, jadi bukan salah saya";//A
	opsi [81][1] = "B. Saya suruh anak kecil untuk membuangnya";//B
	opsi [81][2] = "C. Terpaksa saya buang di belakang pohon atau semak belukar";//C
	opsi [81][3] = "D. Saya suruh tukang taman untuk membuangnya";//D
	opsi [81][4] = "E. Saya kantongi dulu kemudian saya buang ketika menemukan bak sampah";//E
	opsi [81][5] = "";//kunci jawaban
					
	opsi [82][0] = "A. Mengisi daftar hadir lembur 2 jam karena Anda dan atasan Anda akan sama-sama memperoleh keuntungan";//A
	opsi [82][1] = "B. Mengisi daftar hadir lembur 2 jam karena Anda akan menerima gaji lebih";//B
	opsi [82][2] = "C. Mengisi daftar hadir lembur 2 jam karena menuruti perintah atasan";//C
	opsi [82][3] = "D. Mengisi daftar hadir lembur 1 jam dan melaporkan atasan ke bagian kepatuhan internal";//D
	opsi [82][4] = "E. Mengisi daftar hadir lembur 1 jam karena itu adalah salah satu wujud integritas Anda";//E
	opsi [82][5] = "";//kunci jawaban
					
	opsi [83][0] = "A. Karena Anda sungkan dengan atasan Anda yang selalu mengingatkan untuk jujur";//A
	opsi [83][1] = "B. Karena ada pengawasan yang ketat yang mengawasi kinerja Anda";//B
	opsi [83][2] = "C. Karena akan ada hukuman jika Anda tidak jujur";//C
	opsi [83][3] = "D. Karena itu sudah diucapkan dalam sumpah Jabatan";//D
	opsi [83][4] = "E. Karena Anda yakin bahwa itu suatu keharusan";//E
	opsi [83][5] = "";//kunci jawaban
					
	opsi [84][0] = "A. Menerima uang yang sangat besar jumlahnya";//A
	opsi [84][1] = "B. Menerima sesuatu dalam bentuk apapun dari orang yang tidak kita kenal";//B
	opsi [84][2] = "C. Menerima uang dari yang bukan haknya";//C
	opsi [84][3] = "D. Menerima uang untuk melakukan suatu penyelewengan";//D
	opsi [84][4] = "E. Menerima sesuatu dalam bentuk apapun untuk melakukan suatu penyelewengan";//E
	opsi [84][5] = "";//kunci jawaban
					
	opsi [85][0] = "A. Menerima juga suap tersebut karena merasa gaji Anda kurang";//A
	opsi [85][1] = "B. Menerima suap tersebut karena itu berasal dari senior Anda dan agar tidak dimutasi";//B
	opsi [85][2] = "C. Menerima uang suap tetapi tidak menggunakan uang tersebut untuk kebutuhan sehari-hari Anda";//C
	opsi [85][3] = "D. Menolak uang suap dan melakukan resistensi kepada senior Anda";//D
	opsi [85][4] = "E. Menolak uang suap dan mengadukannya ke bagian kepatuhan internal";//E
	opsi [85][5] = "";//kunci jawaban
					
	opsi [86][0] = "A. Meminta jawaban dari dia yang sudah pasti benar";//A
	opsi [86][1] = "B. Diam saja agar Anda tidak diminta menjadi saksi bagi pengawas";//B
	opsi [86][2] = "C. Diam saja karena dia teman saya";//C
	opsi [86][3] = "D. Menasehati dan mengancamnya akan mengadukan ke pengawas jika di lain kesempatan dia mengulanginya";//D
	opsi [86][4] = "E. Langsung melaporkannya ke pengawas";//E
	opsi [86][5] = "";//kunci jawaban
					
	opsi [87][0] = "A. Galak";//A
	opsi [87][1] = "B. Santai";//B
	opsi [87][2] = "C. Mengayomi";//C
	opsi [87][3] = "D. Bijak";//D
	opsi [87][4] = "E. Tanggung jawab";//E
	opsi [87][5] = "";//kunci jawaban
					
	opsi [88][0] = "A. Mencari gara-gara agar dia mau berbaikan kembal";//A
	opsi [88][1] = "B. Menjadi kesepian dan tidak tahu harus bagaimana";//B
	opsi [88][2] = "C. Memancing pembicaraan kembali";//C
	opsi [88][3] = "D. Minta maaf karena waktu itu saya tidak mendengarkannya";//D
	opsi [88][4] = "E. Mengajaknya berbaikan dan minta maaf atas terjadinya perselisihan tersebut";//E
	opsi [88][5] = "";//kunci jawaban
					
	opsi [89][0] = "A. Tidak keberatan memenuhi permintaan";//A
	opsi [89][1] = "B. Memboncengkannya dengan waswas";//B
	opsi [89][2] = "C. Ragu-ragu memenuhi permintaannya";//C
	opsi [89][3] = "D. Menolak permintaan dengan alasan tergesa-gesa";//D
	opsi [89][4] = "E. Menolak permintaannya karena ingin mematuhi peraturan lalu lintas";//E
	opsi [89][5] = "";//kunci jawaban
					
	opsi [90][0] = "A. Menganggap hal itu hanya masalah kecil";//A
	opsi [90][1] = "B. Bingung sehhingga saya tidak dapat tidur";//B
	opsi [90][2] = "C. Merasa takut akan kehilangan teman";//C
	opsi [90][3] = "D. Tetap tenang dan yakin menyelesaikannya";//D
	opsi [90][4] = "E. Berusaha mencari informasi permasalahan yang sebenarnya";//E
	opsi [90][5] = "";//kunci jawaban
					
	opsi [91][0] = "A. Lebih bersemangat bekerja jika menunggu rekan yang lain memulai kerjanya";//A
	opsi [91][1] = "B. Butuh dorongan dari orang lain untuk memutuskan pekerjaan";//B
	opsi [91][2] = "C. Lebih baik menunggu arahan atasan sebelum memulai bekerja";//C
	opsi [91][3] = "D. Melakukan kegiatan yang menyenangkan terlebih dahulu sebelum bekerja agar dapat bekerja dengan baik";//D
	opsi [91][4] = "E. Harus menyelesaikan tugas yang diberikan";//E
	opsi [91][5] = "";//kunci jawaban
					
	opsi [92][0] = "A. Selalu disupervisi oleh atasan";//A
	opsi [92][1] = "B. Selalu dimotivasi";//B
	opsi [92][2] = "C. Ada contoh baik dari rekan kerja";//C
	opsi [92][3] = "D. Dibimbing oleh rekan kerja yang berpengalaman";//D
	opsi [92][4] = "E. Diberikan kemandirian dalam menyelesaikan tugas walaupun beresiko";//E
	opsi [92][5] = "";//kunci jawaban
					
	opsi [93][0] = "A. Tidak setuju karena hanya menambah beban berat hidup";//A
	opsi [93][1] = "B. Tidak setuju karena tidak semua orang membutuhkan pengetahuan baru";//B
	opsi [93][2] = "C. Tidak setuju karena tidak semua orang suka belajar";//C
	opsi [93][3] = "D. Setuju karena sesuai dengan ajaran agama";//D
	opsi [93][4] = "E. Setuju karena berguna bagi diri sendiri dan orang lain";//E
	opsi [93][5] = "";//kunci jawaban
					
	opsi [94][0] = "A. Megatakan pada perusahaan bahwa ia tidak membutuhkan hal tersebut";//A
	opsi [94][1] = "B. Menolak karena merasa rugi jika harus mengeluarkan biaya pribadi";//B
	opsi [94][2] = "C. Membuktikan bahwa tanpa gelar S2 ia bisa sukses";//C
	opsi [94][3] = "D. Menunggu kesempatan lain";//D
	opsi [94][4] = "E. Mencari beasiswa untuk biaya studi";//E
	opsi [94][5] = "";//kunci jawaban
					
	opsi [95][0] = "A. Meninggalkan tugas begitu saja";//A
	opsi [95][1] = "B. Berhenti untuk mencari selingan yang lain";//B
	opsi [95][2] = "C. Berusaha mencari bantuan orang lain";//C
	opsi [95][3] = "D. Sedikit demi sedikit untuk menyelesaikan walau memakan waktu panjang";//D
	opsi [95][4] = "E. Berusaha mencari cara penyelesaian yang tidak membutuhkan waktu panjang";//E
	opsi [95][5] = "";//kunci jawaban
					
	opsi [96][0] = "A. Tidak perlu lagi berusaha";//A
	opsi [96][1] = "B. Berusaha sekadarnya";//B
	opsi [96][2] = "C. Tetap berusaha sekuat tenaga";//C
	opsi [96][3] = "D. Tidak puas dan berusaha lebih baik lagi";//D
	opsi [96][4] = "E. Untuk tugas selanjutnya akan mengerjakan dengan lebih baik lagi";//E
	opsi [96][5] = "";//kunci jawaban
					
	opsi [97][0] = "A. Menjadi kurang bersemangat untuk mempelajarinya";//A
	opsi [97][1] = "B. Tidak mempersoalkan itu";//B
	opsi [97][2] = "C. Mencoba mengerjakan lagi ulangan tersebut";//C
	opsi [97][3] = "D. Menanyakan pelajaran tersebut pada guru";//D
	opsi [97][4] = "E. Menambah waktu belajar pelajaran tersebut";//E
	opsi [97][5] = "";//kunci jawaban
					
	opsi [98][0] = "A. Saling mengharapkan teman lain untuk menyelesaikan tugas tersebut";//A
	opsi [98][1] = "B. Akan bekerja bila ada yang memulai lebih dulu";//B
	opsi [98][2] = "C. Tidak semua mau mengerjakan tugas";//C
	opsi [98][3] = "D. Semua bekerja untuk menyelesaikan tugas tersebut";//D
	opsi [98][4] = "E. Semua aktif terlibat untuk mencapai hasil yang baik";//E
	opsi [98][5] = "";//kunci jawaban
					
	opsi [99][0] = "A. Dengan yakin menolak mengerjakan laporan tersebut";//A
	opsi [99][1] = "B. Berunding dengan atasan untuk menambah anggota tim";//B
	opsi [99][2] = "C. Berunding dengan atasan untuk mengundur deadline laporan kedua";//C
	opsi [99][3] = "D. Mengerjakan kedua laporan tersebut secepat mungkin";//D
	opsi [99][4] = "E. Bersatu-padu untuk mengerjakan kedua laporan sesuai deadline";//E
	opsi [99][5] = "";//kunci jawaban
		
	var datasoal="";//data yang diload
	var datapilihan="";
	//tempatsoal
	var tempatsoal = [];
	var pilihansoal = [];
	for(var y = 0; y < (soalTPA.length - 35); y++){

	tempatsoal[y] = '<label id="soal'+(y+1)+'" class="control-label soal" for="soal">'+soalTPA[y]+'</label>';
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

        tempatsoal[y] = '<label id="soal'+(y+1)+'" class="control-label soal" for="soal">'+soalTPA[y]+'</label>';
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

