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

	// ================================ soal TWK ================================
    soalTPA [0] = '<b>Bacalah paragraf berikut!</b><br> (1) Kita perlu membangun kembali pondasi pola berpikir kita sebagai pengemban tugas berat penerus cita-cita bangsa yang beradab sesuai dengan perilaku kita sebagai orang timur. (2) Langkah awal yang harus dilakukan adalah mencoba menggali potensi yang terdapat pada bangsa kita. (3) Masih banyak potensi yang belum digali yang sangat berpengaruh bagi kita untuk tetap menjaga dan melestraikan eksistensi kultur sosial budaya bangsa Indonesia. (4) Jangan jadikan budaya barat yang masuk melalui era globalisasi sebagai patron pola berpikir karena dari pola berpikir inilah perilaku kita dalam kehidupan sehari-hari terpengaruh oleh budaya barat yang bebas. (5) Kalau tidak cepat dilakukan pembinaan, apa yang akan terjadi pada generasi di masa mendatang?<br><br> Kalimat utama paragraf tersebut adalah ....'
    soalTPA [1] = '<b>Bacalah kutipan tajuk rencana berikut untuk menjawab soal nomor 2 dan 3!</b><br> (1) Kita pertanyakan keseriusan pemerintah menyediakan infrastruktur dan sarana transportasi publik, khususnya angkutan darat. (2) Sampai kini, belum terlihat upaya signifikan ke arah itu. (3) Bahkan, kita melihat kemacetan parah setiap saat di kota-kota besar, khususnya di Jakarta. (4) Kegagalan pemerintah di sektor transportasi publik itulah pemicu konsumsi BBM semakin melonjak. (5) Buktinya, sektor transportasi darat menyedot 90 persen BBM bersubsidi, mobil pribadi mengonsumsi 53 persen dan sepeda motor 40 persen. (6) Menggunakan kendaraan pribadi walau ongkos mahal menjadi pilihan efektif ketika solusi alternatif bagi masyarakat tidak tersedia. (7) Kita ingatkan, jangan sampai pemerintah ingin menghemat anggaran subsidi demi APBN lantas masyarakat berkorban berkali-kali lipat karena kehilangan kesempatan peningkatan produktivitas, akibat kelangkaan BBM yang merugi, melainkan secara umum pertumbuhan ekonomi pun terhambat.<br><br> Masalah dalam kutipan tajuk rencana tersebut adalah ....'
    soalTPA [2] = '<b>Bacalah kutipan tajuk rencana berikut untuk menjawab soal nomor 2 dan 3!</b><br> (1) Kita pertanyakan keseriusan pemerintah menyediakan infrastruktur dan sarana transportasi publik, khususnya angkutan darat. (2) Sampai kini, belum terlihat upaya signifikan ke arah itu. (3) Bahkan, kita melihat kemacetan parah setiap saat di kota-kota besar, khususnya di Jakarta. (4) Kegagalan pemerintah di sektor transportasi publik itulah pemicu konsumsi BBM semakin melonjak. (5) Buktinya, sektor transportasi darat menyedot 90 persen BBM bersubsidi, mobil pribadi mengonsumsi 53 persen dan sepeda motor 40 persen. (6) Menggunakan kendaraan pribadi walau ongkos mahal menjadi pilihan efektif ketika solusi alternatif bagi masyarakat tidak tersedia. (7) Kita ingatkan, jangan sampai pemerintah ingin menghemat anggaran subsidi demi APBN lantas masyarakat berkorban berkali-kali lipat karena kehilangan kesempatan peningkatan produktivitas, akibat kelangkaan BBM yang merugi, melainkan secara umum pertumbuhan ekonomi pun terhambat.<br><br> Opini penulis dalam paragraf tersebut terdapat pada kalimat nomor ...'
    soalTPA [3] = '<b>Cermati kalimat-kalimat berikut!</b><br> (1) Pemilik indekos harus bertindak tegas kepada mereka yang terlibat sebagai pengedar atau pengguna narkoba yaitu mempersilakan meninggalkan tempat indekos.<br> (2) Masalah narkoba di kota besar tidak terlepas dari peran pemilik indekos.<br> (3) Di samping itu, mereka juga dapat terlepas dari hal-hal negatif yang menyesatkan.<br> (4) Aturan tersebut diambil agar para pelajar dan mahasiswa dapat konsentrasi dalam belajar.<br> (5) Sudah selayaknya jika para pemilik indekos membuat aturan bahwa penghuni indekosnya harus bebas narkoba dan obat-obatan terlarang.<br><br> Agar menjadi paragraf yang padu, kalimat-kalimat tersebut harus disusun dengan urutan ....'
    soalTPA [4] = '<b>Cermati paragraf di bawah ini!</b><br> Kapan lagi, kapan lagi diri-diri kita akan berubah. Waktu terus berlalu sedang diri kita begitu dan terus begitu. Malah makin tidak baik. … Kita tingkatkan ilmu kita. Kita tingkatkan iman kita. Kita jadikan diri kita terampil menghadapi masalah, terampil berkarya.<br><br> Kalimat persuasif yang tepat untuk melengkapi teks pidato di atas adalah ....'
    soalTPA [5] = 'Berikut ini merupakan penulisan kalimat yang tidak tepat terdapat pada ...'
    soalTPA [6] = 'Cermati kalimat berikut!<br> Pembangunan apartemen bersubsidi itu tidak lancar.<br><br> Kalimat yang menggunakan kata berimbuhan peN-an yang semakna dengan imbuhan peN-an pada kata “pembangunan” adalah ....'
    soalTPA [7] = 'Gabungan kata berikut yang tidak tepat adalah ....'
    soalTPA [8] = 'Berikut ini yang merupakan salah satu fungsi penggunaan dari tanda petik tunggal (‘...’) adalah ....'
    soalTPA [9] = 'Berikut ini yang merupakan deretan kata baku yaitu ....'
    soalTPA [10] = 'Pancasila sebagai ciri khas bangsa Indonesia dalam sikap dan mental sehingga dapat dibedakan dengan bangsa lain merupakan fungsi dan kedudukan Pancasila sebagai ....'
    soalTPA [11] = 'Makna Pancasila sebagai ideologi terbuka adalah ….'
    soalTPA [12] = 'Perhatikan pernyataan berikut ini!<br> (1) Jaminan atas hak asasi manusia (2) Jaminan atas pemerintahan yang adil dan beradab (3) Ditetapkannya susunan ketatanegaraan yang bersifat mendasar (4) Menguasai sebagian atau seluruhnya dari hajat hidup orang banyak (5) Adanya pembagian atau pembatasan tugas-tugas ketatanegaraan yang juga bersifat mendasar (6) Tidak ada pembagian atau pembatasan tugas-tugas kenegaraan yang bersifat tambahan<br><br> Sebagai hukum dasar tertulis, konstitusi mengatur tiga masalah pokok yaitu pada nomor….'
    soalTPA [13] = 'Ali merupakan orang kaya dan terpandang di kampungnya. Hobinya adalah berfoya-foya dan enggan memberikan pertolongan kepada yang membutuhkan. Meskipun harta yang dia belanjakan adalah hasil kerjanya akan tetapi hal tersebut tidak sesuai dengan nilai-nilai Pancasila yaitu sila ke ....'
    soalTPA [14] = 'Pancasila berasal dari kata panca yang berarti lima dan sila yang berarti sendi, asas, dasar atau peraturan tingkah laku yang penting dan baik. Dengan demikian, Pancasila merupakan lima dasar yang berisi pedoman atau aturan tentang tingkah laku yang penting dan baik, merupakan pengertian Pancasila yang dikemukakan oleh ...'
    soalTPA [15] = 'Rasa cinta tanah air merupakan nilai penting yang harus ditanamkan kepada setiap warga negara agar mereka memiliki kemauan untuk membela dan memajukan bangsa serta negaranya. Namun, rasa cinta tanah air yang berlebihan juga tidaklah baik, menganggap bangsa dan negaranya adalah yang terbaik sehingga cenderung mengganggap rendah bangsa dan negara lain harus dihindari. Perasaan cinta tanah air yang berlebihan dimaksud merupakan pengertian dari ....'
    soalTPA [16] = 'Menurut Undang-Undang Dasar 1945 pasal 13, presiden memiliki wewenang yaitu ….'
    soalTPA [17] = 'Menurut UUD 1945, apabila Dewan Perwakilan Rakyat tidak menyetujui rancangan anggaran pendapatan dan belanja negara yang diusulkan oleh presiden, maka langkah yang dilakukan pemerintah adalah ….'
    soalTPA [18] = 'Undang-Undang Dasar 1945 memuat ketentuan-ketentuan dasar dalam pelaksanaan kehidupan berbangsa dan bernegara. Ketentuan-ketentuan dasar tersebut, dalam amendemen keempat Undang-Undang Dasar 1945 tercantum dalam 16 bab. Adapun berikut ini merupakan hal yang dibahas dalam bab XV, <i>kecuali</i> ...'
    soalTPA [19] = 'Pancasila di negara kita merupakan sumber dari segala hukum di Indonesia. Penjelasan tersebut tercantum pada ...'
    soalTPA [20] = 'Susunan dan keanggotaan DPR yang diatur dalam UU No. 17 Tahun 2014 tentang MPR, DPR, DPD, dan DPRD sebagai berikut, kecuali …'
    soalTPA [21] = 'Sebelum memangku jabatannya, Presiden dan Wakil Presiden bersumpah menurut agama, atau berjanji dengan sungguh-sungguh di hadapan Majelis Permusyawaratan Rakyat atau Dewan Perwakilan Rakyat. Jika Majelis Permusyawaratan Rakyat atau Dewan Perwakilan Rakyat tidak dapat mengadakan sidang, Presiden dan Wakil Presiden bersumpah menurut agama, atau berjanji dengan sungguh-sungguh di hadapan … dengan disaksikan oleh …. '
    soalTPA [22] = 'Polisi akan menilang siapapun yang melanggar tata tertib lalu lintas tanpa memandang sosok si pelanggar, meskipun istrinya sendiri. Perbuatan ini sesuai dengan UUD 1945 pasal ....'
    soalTPA [23] = 'Salah satu karya sastra zaman Kerajaan Majapahit yaitu Kitab Usana Jawa, yang berisi tentang ….'
    soalTPA [24] = 'Salah satu penyebab keruntuhan kekuasaan Kerajaan Majapahit adalah adanya perang saudara yang terjadi dalam kerajaan. Perang saudara tersebut disebut dengan perang ….'
    soalTPA [25] = 'Hotel Des Indes merupakan salah satu hotel yang berada di Batavia atau Jakarta. Hotel ini juga pernah digunakan dalam melaksanakan perjanjian pasca kemerdekaan Indonesia untuk mencapai kedaulatan yaitu perjanjian ….'
    soalTPA [26] = 'Presiden Soekarno menyampaikan Deklarasi Ekonomi yang merupakan strategi dasar dalam ekonomi terpimpin pada tanggal ….'
    soalTPA [27] = 'Pada masa Kabinet Natsir terdapat sistem ekonomi Gerakan Benteng yang memiliki pengertian ....'
    soalTPA [28] = 'Pernyataan berikut ini yang tidak sesuai dengan organisasi Gerakan Non-Blok adalah ….'
    soalTPA [29] = 'Berbagai aspirasi dan pendapat dari berbagai pihak dikumpulkan kemudian digabungkan dan diolah menjadi suatu bentuk aspirasi atau pendapat yang lebih teratur, merupakan fungsi partai politik sebagai ….'
    // ================================ soal TIU ================================
    soalTPA [30] = 'Sinonim dari kata dimensi adalah ….'
    soalTPA [31] = 'Persamaan dari kata cengkar adalah ….'
    soalTPA [32] = 'Antonim dari kata absurd adalah ….'
    soalTPA [33] = 'Lawan dari kata vokal adalah ….'
    soalTPA [34] = 'STETOSKOP : DOKTER = NOZEL : ….'
    soalTPA [35] = 'MENLU : RETNO MARSUDI = ….'
    soalTPA [36] = 'Nilai dari ${3/4} + {3/2} + {9/4} + ... + 24$ adalah ...'
    soalTPA [37] = '$75 × 18 + 43 - 81 × 7 =$ ...' // TOCPNS2 no. 7
    soalTPA [38] = '$3,33...$ dari $11{1/4}$ sama dengan $5/6$ dari ...'
    soalTPA [39] = 'Jika $a$ adalah bilangan bulat positif terkecil yang habis dibagi 10, 15, dan 25, maka nilai dari ${1/3}a - 10$ adalah ...'
    soalTPA [40] = 'Bilangan yang dapat habis dibagi 3 dan 44 adalah ….'
    soalTPA [41] = 'Diketahui bahwa 𝑥 dan 𝑦 adalah bilangan asli dengan 𝑥 > 𝑦. $x^2 - 9x + 14 = 0$ dan ${x^4}y + 2y = 18$, maka nilai $xy$ adalah ...'
    soalTPA [42] = 'Jika −2 < 𝑟 < 6 dan −1 < 𝑠 < 7, maka ….'
    soalTPA [43] = 'Jika 1,23456 … = $x/y$ dengan 𝑥 dan 𝑦 bilangan positif, maka ….'
    soalTPA [44] = 'Jika $b = √a − 2$ dengan 𝑎 dan 𝑏 anggota bilangan asli, maka ….'
    soalTPA [45] = 'Jika $16{x^2} - 49{y^2} = 72$ dan $4x + 7y  = 18$, maka ....'
    soalTPA [46] = 'Jika 𝑒 adalah 1,87% dari 2345 dan 𝑓 adalah 23,45% dari 1870, maka ….'
    soalTPA [47] = 'Sebuah kelas akan memilih seorang murid diantara mereka untuk menjadi ketua kelas. Setiap murid mempunyai kesempatan yang sama untuk dipilih. Peluang murid perempuan terpilih sama dengan $3/5$kali peluang terpilihnya murid laki-laki. Persentase murid laki-laki di kelas tersebut adalah ….'
    soalTPA [48] = 'Kubus dengan panjang rusuk 𝑎 cm diperkecil sehingga panjang rusuknya menjadi seperlima panjang rusuk semula. Jika setelah diperkecil panjang diagonal ruangnya menjadi $b√3$ cm, maka panjang 𝑎 adalah …. cm.'
    soalTPA [49] = 'Pak Sutejo mendapat upah Rp1.710.000,00 setelah bekerja selama 18 hari dengan 6 hari diantaranya lembur. Berapa upah yang didapat pak Sutejo jika ia bekerja selama 12 hari dengan 4 hari diantaranya lembur?'
    soalTPA [50] = 'Seorang pengusaha berencana untuk menghasilkan keuntungan setelah pajak pada tahun 2019 sebesar 40% dari penjualan. Jika besarnya pajak adalah 10% dari keuntungan sebelum pajak dan semua biaya sebesar Rp500 juta, berapa minimal penjualan yang harus dicapai untuk memperoleh keuntungan seperti yang direncanakan?'
    soalTPA [51] = 'Setiap diantara dua suku yang berurutan pada barisan 3, 23, dan 43 disisipkan tiga bilangan sehingga terbentuk barisan aritmatika yang baru. Jumlah enam suku pertama barisan yang terbentuk adalah ….'
    soalTPA [52] = 'B, D, F, J, P, ….'
    soalTPA [53] = '-6, 1, - 1, 6, 4, 11, 9, …, ….'
    soalTPA [54] = '90, 72, 56, 42, 30, 20, ..., ...' //TOCPNS2 no 22
    soalTPA [55] = '2; $3/2$; $1{1/3}$; $5/4$; 1,2; $1{1/6}$; $8/7$; ...' //TOCPNS2 no 23
    soalTPA [56] = 'Semua seniman dapat melukis dengan baik. Sebagian besar lulusan Universitas Berkarya adalah seniman. Santoso dapat melukis dengan baik, Santoso adalah lulusan Universitas Berkarya.'
    soalTPA [57] = 'Singa makan daging rusa. Daging rusa sangat bergizi. Semua yang makan makanan bergizi badannya menjadi sehat.'
    soalTPA [58] = 'Ratna akan berenang jika dan hanya jika Santi berenang. Santi akan berenang jika dan hanya jika Titin berenang. Ternyata Santi berenang.'
    soalTPA [59] = '<b>Perhatikan ilustrasi berikut!</b><br> Delapan siswa yaitu Asni, Bagus, Candra, Deni, Epa, Fitri, Galih, dan Hasim akan dibagi menjadi 2 kelompok belajar oleh gurunya. Masing-masing kelompok belajar terdiri dari 4 orang siswa. Adapun ketentuan dari pembentukan kelompok tersebut yaitu Asni harus satu kelompok dengan Deni, Bagus harus berbeda kelompok dengan Galih, jika Candra masuk dikelompok 1 maka Fitri harus dikelompok 1 juga, dan jika Hasim masuk dikelompok 2 maka Bagus harus dikelompok 1.<br><br>Jika Bagus masuk kelompok 1, maka siswa yang pasti masuk dikelompok 2 adalah ….'
    soalTPA [60] = '<b>Perhatikan ilustrasi berikut!</b><br> Ananda memiliki enam boneka dengan warna berbeda yang ia susun berdampingan dengan nomor urut 1 s.d 6 dengan ketentuan: boneka biru bersebelahan dengan boneka putih, boneka hitam sebelum boneka coklat dan diletakan pada urutan keempat setelah boneka merah, dan boneka kedua setelah boneka kuning adalah boneka putih.<br><br>Boneka pada urutan ketiga adalah ….'
    soalTPA [61] = '<img src="../../assets/img/SKD_p-3/62/soal.png" style="width: auto;"/>'
    soalTPA [62] = '<img src="../../assets/img/SKD_p-3/63/soal.png" style="width: auto;"/>'
    soalTPA [63] = 'Pilihlah gambar yang mempunyai pola berbeda!'
    soalTPA [64] = '<img src="../../assets/img/SKD_p-3/65/soal.png" style="width: auto;"/>'
    // ================================ soal TKP ================================
    soalTPA [65] = 'Ketika sedang di kampus, Anda diminta menemui dosen Anda di ruangannya, kemudian dosen Anda meminta Anda untuk ikut dalam sebuah perlombaan yang dalam waktu dekat akan diselenggarakan oleh universitas tempat Anda berkuliah. Dosen Anda melihat bahwa Anda memiliki talenta dan keahlian sesuai dengan deskripsi dari perlombaan itu, akan tetapi Anda tidak menyadari hal tersebut. Sikap Anda adalah ....'
    soalTPA [66] = 'Beberapa minggu yang lalu atasan Anda pernah memberitahu Anda bahwa dia mempunyai jadwal untuk bisa menandatangani kontrak dengan beberapa orang klien baru dalam beberapa minggu ke depan untuk pengembangan perusahaan, namun tampaknya atasan Anda lupa akan hal tersebut karena terlalu sibuk mengurusi banyak hal dan sering tidak berada di kantor serta dinas ke luar kota, sebagai seorang asisten yang Anda lakukan adalah ....'
    soalTPA [67] = 'Rekan tim kerja Anda dimarahi oleh atasan pada saat mengumpulkan tugas tim karena sudah terlambat satu hari mengumpulkan tugasnya. Hal ini disebabkan karena rekan Anda tersebut harus meng-<i>compile</i> pekerjaan tersebut terlebih dahulu sebelum dikumpulkan kepada atasan, ditambah lagi semua rekan anggota tim mengumpulkan tugas pribadi mereka juga terlambat, sehingga rekan Anda yang bertugas untuk meng-<i>compile</i> setiap pekerjaaan jadi tidak dapat menyelesaikan pekerjaannya tepat waktu. Sikap Anda adalah ....'
    soalTPA [68] = 'Atasan Anda meminta Anda membantunya <i>weekend</i> ini di kantor untuk menyelesaikan beberapa tugas penting. Namun dalam perjalanan menuju ke kantor, kendaraan yang Anda tumpangi tiba-tiba rusak sehingga harus diperbaiki terlebih dahulu dan membutuhkan beberapa jam agar bisa digunakan lagi, sedangkan atasan Anda telah menelepon berulang kali meminta Anda segera datang ke kantor karena dia sangat membutuhkan bantuan Anda. Apakah yang akan Anda lakukan?'
    soalTPA [69] = 'Dalam setiap pekerjaan terkadang kita menemui suatu hambatan atau tantangan, tetapi dengan adanya tantangan tersebut kita bisa berproses menjadi lebih baik dan bisa menemukan hal-hal yang baru dalam penyelesaian masalah. Olah karena itu, saya menyukai tantangan dan hal-hal baru berkaitan dengan pekerjaan saya sehingga dapat meningkatkan kemampuan saya. Hal apakah yang harus saya lakukan untuk peningkatan kemampuan saya tersebut?'
    soalTPA [70] = 'Di perusahaan tempat Anda bekerja saat ini memiliki tingkat disiplin dan aturan yang cukup ketat di mana setiap karyawan diminta untuk mampu bekerja cepat dan menyelesaikan semua tugas serta pekerjaan dengan baik. Anda merupakan seorang karyawan baru yang tentu saja belum terlalu terbiasa akan hal tersebut, dalam melakukan semua pekerjaan Anda di kantor, hal apa yang Anda lakukan?'
    soalTPA [71] = 'Hari ini pekerjaan di kantor sangat berat karena banyak masalah yang terjadi, setelah semua masalah terselesaikan rencananya Anda akan pulang dan beristirahat karena tidak perlu untuk lembur seperti hari-hari sebelumnya. Tetapi rencana Anda untuk pulang cepat kemudian mandi serta menikmati makan malam yang lezat buyar setelah Anda menerima telepon dari seorang teman yang sedang kebingungan dan patah semangat meminta bertemu dengan Anda, reaksi Anda adalah ....'
    soalTPA [72] = 'Setelah bersusah payah selama setahun ini, divisi tempat kerja Anda terpilih menjadi divisi teladan di perusahaan, bahkan mengalahkan divisi lain yang tahun-tahun sebelumnya selalu terpilih menjadi divisi teladan. Anda beserta semua rekan satu divisi merasa senang dan bangga. Agar dapat mempertahankan prestasi ini yang akan Anda lakukan adalah ....'
    soalTPA [73] = 'Anda bercita-cita ingin menjadi seorang PNS agar dapat meningkatkan taraf hidup keluarga Anda. Ketika ada kesempatan tersebut, Anda segera mendaftar dan mengikuti seleksinya. Setelah melalui beberapa tahapan seleksi akhirnya Anda diterima. Sebagai seorang PNS dengan skala kerja se-Indonesia, Anda harus siap bahwa sewaktuwaktu Anda akan ditugaskan di daerah yang bahkan belum pernah Anda mendengarnya. Ketika giliran Anda ditempatkan di daerah tersebut, Anda akan ....'
    soalTPA [74] = 'Di perusahaan tempat Anda bekerja Anda akan menyelenggarakan seminar dengan tema penanaman karakter dalam kehidupan sehari-hari. Anda ditunjuk oleh atasan Anda menjadi ketua panitia seminar tersebut padahal Anda belum berpengalaman menjadi panitia apalagi menjadi ketua seminar, Anda merasa kurang yakin dapat membuat acara menjadi sukses. Apa yang akan Anda lakukan?'
    soalTPA [75] = 'Saya sudah bekerja di bagian SDM selama enam tahun sehingga saya sudah mahir dalam bidang tersebut. Kemudian atasan saya karena alasan tertentu, meminta saya untuk pindah ke bagian keuangan yang mengharuskan saya mengikuti banyak <i>training</i> ataupun diklat. Padahal saya sangat nyaman bekerja di bagian SDM karena saya sudah menguasai dengan mahir pekerjaan di sana dan rekan-rekan di bagian SDM pun sudah sangat akrab dengan saya. Maka yang harus saya lakukan adalah ….'
    soalTPA [76] = 'Anda adalah seorang ASN lulusan 2018 yang kemudian baru ditempatkan di salah satu instansi. Di tempat Anda bertugas Anda mendapati rekan kerja yang pulang 20 menit lebih awal dari jadwal yang seharusnya. Hal ini dilakukan bukan hanya sendiri melainkan banyak rekan kerja yang lain ikut melakukannya. Setelah Anda selidiki ternyata faktor utama dari semua ini adalah lemahnya pengawasan dan evaluasi dari pimpinan. Sikap Anda menghadapi permasalahan ini adalah ....'
    soalTPA [77] = 'Seminggu terakhir, Anda dan rekan kerja diminta untuk dinas ke luar daerah untuk mengerjakan sebuah proyek yang penting dan mendapat tunjangan dinas luar. Pada hari terakhir, tunjangan yang diberikan kantor ternyata masih tersisa. Rekan Anda mempengaruhi Anda untuk memalsukan dokumen pembayaran sehingga sisa tunjangan bisa menjadi milik pribadi. Sikap Anda ….'
    soalTPA [78] = 'Anda dan rekan Anda diberi tugas oleh atasan untuk mewawancarai tokoh masyarakat dalam rangka kelengkapan laporan kerja. Rekan Anda bertugas sebagai pembicara yang akan bertanya langsung dengan narasumber dan Anda bertugas untuk membuat daftar wawancara dan dokumentasi. Tetapi pada hari yang telah dijadwalkan untuk wawancara rekan Anda sakit. Maka yang Anda lakukan adalah ....'
    soalTPA [79] = 'Suatu hari, perusahaan Anda menyelenggarakan rapat secara mendadak karena ada permasalahan penting yang harus segera diselesaikan. Tiba-tiba teman Anda yang berbeda agama meminta izin pulang dahulu untuk beribadah pada saat rapat yang Anda pimpin sedang berlangsung. Padahal dalam rapat tersebut membahas permasalahan yang cukup vital dalam perkembangan perusahaan. Bagaimana sikap Anda? '
    soalTPA [80] = 'Anda adalah seorang suami yang memiliki istri yang sama-sama seorang pekerja di satu perusahaan yang sama. Suatu ketika Anda dihadapkan kepada permasalahan di mana Anda memiliki seorang anak yang masih balita dan rewel karena tidak mau ditinggal bersama pengasuhnya ketika Anda dan istri Anda akan berangkat ke kantor. Menghadapi permasalahan ini, apakah yang akan Anda lakukan?'
    soalTPA [81] = 'Saudara perempuan Anda adalah seorang desainer yang baru saja merintis kariernya. Pada acara <i>fashion show</i> yang diselenggarakan di kota Anda. Saudara perempuan Anda memperagakan pakaian dari desain terbarunya. Sayangnya, roknya tidak cukup bagus dan bagian atasnya terlalu ketat serta warnanya sangat tidak cocok dengan rambutnya. Ketika saudara Anda bertanya pendapat Anda, maka ….'
    soalTPA [82] = 'Anda sedang memiliki masalah pribadi dengan salah satu rekan kerja. Rekan kerja tersebut selalu jengkel dan marah ketika berbicara dengan Anda, padahal Anda merasa tidak berbuat salah dengan rekan kerja tersebut. Kemudian oleh atasan, Anda dan rekan kerja tersebut dipasangkan untuk menjadi partner dalam mengerjakan suatu proyek kerja. Maka yang akan Anda lakukan ….'
    soalTPA [83] = 'Anda adalah seorang mahasiswa di salah satu universitas swasta yang terkenal di daerah Jakarta. Suatu hari, Anda mendapatkan tugas kelompok untuk membuat suatu laporan dengan harus menggunakan beberapa literatur yang diminta oleh dosen pembimbing kelompok Anda. Tetapi ada literatur yang sulit ditemukan, padahal batas pengumpulan tugas tinggal empat hari lagi. Maka yang akan kelompok Anda lakukan adalah ....'
    soalTPA [84] = 'Pada hari Minggu agenda saya biasanya menonton berita di televisi ternyata berita di stasiun-stasiun televisi nasional sedang hangat membicarakan kondisi perekonomian Indonesia saat ini. Sampai-sampai di setiap tayangan <i>talk show</i> selalu menghadirkan pengamat ekonomi dengan prediksi-prediksinya bahwa bulan depan akan terjadi inflasi besar di Indonesia. Hal ini membuat saya menjadi ....'
    soalTPA [85] = 'Saya sedang sibuk mengerjakan tugas kantor dengan tiba-tiba atasan Anda bertanya yang sebenarnya Anda juga kurang paham mengenai hal yang ditanyakan tersebut, akan tetapi ada beberapa yang Anda tahu jawabannya, hal yang ditanyakan itu sama sekali tidak ada hubungannya dengan pekerjaan kantor dan menurut Anda sebagian kurang penting untuk dipertanyakan. Maka yang Anda lakukan ….'
    soalTPA [86] = 'Anisa ingin masuk ke universitas terbaik di Indonesia, tetapi dia sadar masih memiliki beberapa nilai yang tidak melampaui batas nilai untuk masuk universitas tersebut. Sementara itu, ayahnya memiliki kenalan dosen di universitas tersebut yang menawarkan cara instan untuk masuk ke universitas dengan memberikan beberapa imbalan pada dosen itu. Tindakan yang akan dilakukan Anisa adalah ....'
    soalTPA [87] = 'Semalam di daerah Anda dilanda hujan lebat disertai angin kencang yang berakibat beberapa pohon tumbang dan menghalangi jalan di kompleks perumahan tempat tinggal Anda, sehingga mengganggu aktivitas warga perumahan termasuk Anda keesokan harinya. Maka menghadapi permasalahan tersebut yang akan Anda lakukan adalah ....'
    soalTPA [88] = 'Anda sedang melakukan diskusi dengan rekan kerja divisi Anda, kemudian ketika diskusi berlangsung ada seorang rekan kerja Anda yang mengusulkan sebuah ide yang menurutnya sangat baik, namun menurut Anda hal tersebut berisiko besar jika tetap dilakukan, ketika Anda memberikan tanggapan, teman tersebut tidak menanggapi dengan sikap yang baik, seakan-akan tidak mau gagasannya disanggah, sikap Anda ....'
    soalTPA [89] = 'Anda merupakan seorang pelayan pada sebuah restoran. Suatu hari, datang seorang tamu bersama dengan keluarganya untuk makan di restoran tempat Anda bekerja. Pada saat menu sudah dihidangkan di atas meja dan mulai dinikmati oleh tamu tersebut, kemudian dia memanggil Anda dan komplain jika tadi dia minta agar menu yang dia pesan dibuat pedas tetapi yang dihidangkan tidak pedas sama sekali, sikap Anda .... '
    soalTPA [90] = 'Saya adalah seorang mahasiswa di salah satu universitas swasta terkemuka yang letaknya tidak terlalu jauh dari rumah saya. Di dalam keluarga, saya tinggal bersama anggota keluarga yang lain. Kami tidak memiliki pembantu sehingga pekerjaan rumah dilakukan oleh semua anggota keluarga terutama ibu. Saya mempunyai saudara yang usianya tidak jauh beda dengan saya dan sangat malas. Suatu hari, dosen Anda memberikan tugas yang sangat banyak sementara pekerjaan di rumah juga banyak, sikap saya adalah ....'
    soalTPA [91] = 'Di perusahaan tempat Anda bekerja biasanya mengadakan rapat evaluasi kinerja setiap sebulan sekali untuk mengetahui pencapaian target dari masing-masing pegawai. Jika hasil kerja yang Anda lakukan menurut Anda sudah sesuai dengan target tetapi masih mendapat kritik tajam dari rekan kerja Anda saat sedang rapat evaluasi tersebut, padahal Anda merasa bahwa kritik tersebut tidak sesuai dengan kinerja Anda, yang akan Anda lakukan adalah ....'
    soalTPA [92] = 'Anda mempunyai teman dekat yang sama-sama hobi membaca buku. Suatu hari teman dekat Anda meminjam buku novel Anda karena dia juga suka membaca novel tersebut dan belum sempat untuk membelinya. Kemudian Anda meminjamkannya karena Anda sudah selesai membacanya. Beberapa minggu sudah berlalu, buku novel tersebut belum dikembalikan juga sehingga Anda menanyakannya. Ternyata buku novel tersebut dihilangkan oleh teman Anda padahal Anda sangat menyukai buku tersebut dan bermaksud membacanya lagi. Reaksi Anda terhadap hal tersebut adalah ....'
    soalTPA [93] = 'Suatu hari Anda diundang secara tidak resmi untuk menghadiri pesta pejabat tinggi. Ketika tiba di depan pintu masuk, Anda merasa gugup dan menyemangati diri sendiri untu segera masuk ke dalam, dan pada saat yang sama ada seorang tamu pejabat yang melambaikan tangan kepada Anda karena dikira Anda adalah tamu undangan yang diundang secara resmi. Maka sikap Anda ....'
    soalTPA [94] = 'Pagi ini saya terlambat bangun pagi karena kemarin malam begadang mengerjakan tugas dari atasan yang harus segera dikumpulkan. Hal tersebut menyebabkan saya menjadi terburu-buru karena takut terlambat sehingga saat sedang minum saya memecahkan gelas. Padahal saat itu saya harus segera berangkat bekerja ke kantor. Sikap saya adalah ....'
    soalTPA [95] = 'Anda adalah seorang ASN lulusan 2018 yang kemudian baru ditempatkan di salah satu instansi. Di tempat Anda bertugas ternyata Anda mendapat kepercayaan dari atasan untuk memimpin suatu tim kerja. Atasan Anda berharap dengan diangkatnya Anda menjadi pemimpin di tempat tugas tersebut berbagai terobosan dan inovasi baru lahir dari buah hasil pemikiran Anda. Agar menjadi pribadi yang kreatif dan inovatif seperti apa yang diharapkan oleh atasan Anda tersebut. Maka Anda harus ....'
    soalTPA [96] = 'Di tempat saya bekerja baru saja menerapkan sistem presensi secara <i>online</i>. Hal ini dilakukan untuk mempermudah perhitungan kehadiran karyawan. Sistem presensi tersebut dilengkapi dengan kamera yang digunakan untuk memfoto wajah para karyawan. Tetapi kebanyakan karyawan kesulitan saat melakukan presensi karena letak kamera yang kurang sesuai dan pencahayaan yang kurang. Sikap saya adalah ….'
    soalTPA [97] = 'Anda telah memiliki pekerjaan dengan posisi dan gaji yang aman, tapi kurang nyaman dengan sistem kerjanya. Suatu hari Anda ditawari oleh sahabat Anda untuk bekerja di perusahaan sahabat Anda tersebut. Jika menerima tawaran itu, Anda akan menempati posisi sebagai direktur divisi, posisi yang lebih tinggi dibandingkan posisi Anda sekarang dan tentu saja akan memperoleh gaji yang lebih banyak. Sementara di tempat kerja sekarang, Anda sangat dekat dengan atasan Anda karena masih ada hubungan kekerabatan. Maka yang akan Anda lakukan ….'
    soalTPA [98] = 'Anda adalah seorang manajer di salah satu perusahaan swasta yang terkemuka. Beberapa hari ini pekerjaan Anda sangat banyak karena Anda harus menangani proyek yang cukup besar. Selain itu, atasan Anda juga memberikan tugas membuat laporan. Saat waktu mendesak untuk mengumpulkan laporan tersebut, tiba-tiba ada tamu yang datang ke kantor dan memiliki keperluan penting dengan Anda. Apakah yang akan Anda lakukan? '
    soalTPA [99] = 'Anda baru saja diterima sebagai pegawai di salah satu instansi pemerintah yang terletak tidak jauh dari rumah dan Anda ditempatkan di bagian administrasi. Pekerjaan ini adalah pekerjaan pertama Anda karena Anda baru saja lulus kuliah. Anda pasti mengetahui bahwa di dalam setiap pekerjaan tentunya memiliki tugas pokok dan fungsi masing-masing. Apabila Anda telah menyelesaikan pekerjaan Anda sesuai dengan tugas pokok dan fungsi yang Anda miliki, apakah yang akan Anda lakukan?'
    
	var opsi = ArrOpsi(soalTPA.length,6); //deklarasi 2d array untuk pilihan

    // ================================ opsi TWK ================================
    opsi [0][0] = 'A.(1)'
    opsi [0][1] = 'B.(2)'
    opsi [0][2] = 'C.(3)'
    opsi [0][3] = 'D.(4)'
    opsi [0][4] = 'E.(5)'
    opsi [0][5] = '1'
    
    opsi [1][0] = 'A. Pemerintah tidak serius dalam menyediakan infrastruktur dan sarana transportasi publik'
    opsi [1][1] = 'B. Kegagalan pemerintah di sektor transportasi publik memicu konsumsi BBM semakin melonjak'
    opsi [1][2] = 'C. Kemacetan lalu lintas parah terlihat pada setiap saat di kota-kota besar, khususnya di Jakarta'
    opsi [1][3] = 'D. Pemerintah ingin menghemat anggaran subsidi APBN, tetapi dalam kenyataannya malah sebaliknya'
    opsi [1][4] = 'E. Pertumbuhan ekonomi terhambat dan terjadi kelangkaan BBM karena pemerintah menaikkan harga BBM'
    opsi [1][5] = '1'

    opsi [2][0] = 'A. (1) dan (2)'
    opsi [2][1] = 'B. (2) dan (4)'
    opsi [2][2] = 'C. (3) dan (4)'
    opsi [2][3] = 'D. (5) dan (6)'
    opsi [2][4] = 'E. (6) dan (7)'
    opsi [2][5] = '5'

    opsi [3][0] = 'A. (2), (1), (3), (5), dan (4)'
    opsi [3][1] = 'B. (2), (1), (4), (3), dan (5)'
    opsi [3][2] = 'C. (2), (1), (5), (4), dan (3)'
    opsi [3][3] = 'D. (4), (2), (1), (5), dan (3)'
    opsi [3][4] = 'E. (4), (3), (1), (2), dan (4)'
    opsi [3][5] = '2'

    opsi [4][0] = 'A. Mari kita tingkatkan diri kita!'
    opsi [4][1] = 'B. Mari mengubah apa yang ada!'
    opsi [4][2] = 'C. Ayo kita mulai perubahan itu!'
    opsi [4][3] = 'D. Mari terus melangkah maju!'
    opsi [4][4] = 'E. Hendaklah kita bergerak terus!'
    opsi [4][5] = '3'

    opsi [5][0] = 'A. Tegangan listrik yang dihasilkan saluran udara tegangan ekstra tinggi rata-rata sebesar 100.000 volt.'
    opsi [5][1] = 'B. Ibu bertanya,"Kapan kita pulang?"'
    opsi [5][2] = 'C. Nama dia adalah Zaid Bin Ahmad.'
    opsi [5][3] = 'D. Andi telah lulus kuliah dan berhak mencantumkan gelar S.H. dibelakang namanya.'
    opsi [5][4] = 'E. Materi kuliah hari ini membahas tentang Kitab Undang-Undang Hukum Pidana.'
    opsi [5][5] = '3'

    opsi [6][0] = 'A. Berkas perkara pencemaran nama baik itu sudah dilimpahkan kepada pengadilan.'
    opsi [6][1] = 'B. Penggilingan padi satu-satunya di desa kami itu sudah lama tidak berfungsi.'
    opsi [6][2] = 'C. Supaya jernih, penyaringan minyak kelapa sawit itu harus dilakukan beberapa kali.'
    opsi [6][3] = 'D. Pada musim penghujan ini, pemukiman penduduk sudah tergenang air sedalam 50 cm.'
    opsi [6][4] = 'E. Pemutusan hubungan kerja banyak terjadi di berbagai perusahaan akibat krisis moneter.'
    opsi [6][5] = '3'

    opsi [7][0] = 'A. Kasat mata'
    opsi [7][1] = 'B. Barangkali'
    opsi [7][2] = 'C. Hancur leburkan'
    opsi [7][3] = 'D. Dilipatgandakan'
    opsi [7][4] = 'E. Adakalanya'
    opsi [7][5] = '1'

    opsi [8][0] = 'A. Mengapit makna, terjemahan, atau penjelasan kata atau ungkapan'
    opsi [8][1] = 'B. Mengapit petikan langsung yang berasal dari pembicaraan, naskah, atau bahan tertulis lain'
    opsi [8][2] = 'C. Mengapit judul sajak, lagu, film, sinetron, artikel, naskah, atau bab buku yang dipakai dalam kalimat'
    opsi [8][3] = 'D. Mengapit istilah ilmiah yang kurang dikenal atau kata yang mempunyai arti khusus'
    opsi [8][4] = 'E. Menunjukkan bahwa dalam suatu kalimat atau kutipan ada bagian yang dihilangkan'
    opsi [8][5] = '1'

    opsi [9][0] = 'A. Cengkih, distilasi, cengkram, elit, embus, frasa'
    opsi [9][1] = 'B. Cengkih, distilasi, cengkeram, elite, embus, frasa'
    opsi [9][2] = 'C. Cengkeh, destilasi, cengkram, elit, hembus, frase'
    opsi [9][3] = 'D. Cengkeh, distilasi, cengkeram, elit, embus, frase'
    opsi [9][4] = 'E. Cengkih, distilasi, cengkeram, elite, hembus, frasa'
    opsi [9][5] = '2'

    opsi [10][0] = 'A. Pancasila sebagai perjanjian luhur'
    opsi [10][1] = 'B. Pancasila sebagai dasar negara'
    opsi [10][2] = 'C. Pancasila sebagai ideologi negara'
    opsi [10][3] = 'D. Pancasila sebagai kepribadian bangsa'
    opsi [10][4] = 'E. Pancasila sebagai sumber dari segala sumber tertib hukum'
    opsi [10][5] = '4'

    opsi [11][0] = 'A. Menerima perkembangan teknologi, ilmu pengetahuan, dan perkembangan masyarakat untuk diterapkan demi kemajuan rakyat Indonesia'
    opsi [11][1] = 'B. Menerima perkembangan teknologi, ilmu pengetahuan, dan perkembangan masyarakat sesuai dengan kepribadian bangsa'
    opsi [11][2] = 'C. Menerima perkembangan teknologi, ilmu pengetahuan, dan perkembangan masyarakat sesuai dengan citacita nasional'
    opsi [11][3] = 'D. Menerima perkembangan teknologi, ilmu pengetahuan, dan perkembangan masyarakat sesuai dengan undang-undang yang ditetapkan pemerintah'
    opsi [11][4] = 'E. Menerima perkembangan teknologi, ilmu pengetahuan, dan perkembangan masyarakat sesuai dengan semangat untuk menjaga ketertiban dunia'
    opsi [11][5] = '2'

    opsi [12][0] = 'A. 1, 2, 3'
    opsi [12][1] = 'B. 1, 4, 6'
    opsi [12][2] = 'C. 2, 3, 5'
    opsi [12][3] = 'D. 2, 4, 6'
    opsi [12][4] = 'E. 1, 3, 5'
    opsi [12][5] = '5'

    opsi [13][0] = 'A. Satu'
    opsi [13][1] = 'B. Dua'
    opsi [13][2] = 'C. Tiga'
    opsi [13][3] = 'D. Empat'
    opsi [13][4] = 'E. Lima'
    opsi [13][5] = '5'

    opsi [14][0] = 'A. Notonegoro'
    opsi [14][1] = 'B. Muh. Yamin'
    opsi [14][2] = 'C. Ir. Soekarno'
    opsi [14][3] = 'D. Ki Hajar Dewantara'
    opsi [14][4] = 'E. Soepomo'
    opsi [14][5] = '2'

    opsi [15][0] = 'A. Kapitalisme'
    opsi [15][1] = 'B. Sosialisme'
    opsi [15][2] = 'C. Chauvinisme'
    opsi [15][3] = 'D. Fundamentalisme'
    opsi [15][4] = 'E. Liberalisme'
    opsi [15][5] = '3'

    opsi [16][0] = 'A. Mengangkat duta dan konsul dengan memperhatikan pertimbangan Dewan Perwakilan Rakyat (DPR)'
    opsi [16][1] = 'B. Memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung'
    opsi [16][2] = 'C. Memberi amnesti dan abolisi dengan memperhatikan pertimbangan Dewan Perwakilan Rakyat'
    opsi [16][3] = 'D. Menyatakan perang, membuat perdamaian, dan perjanjian dengan negara lain'
    opsi [16][4] = 'E. Memegang kekuasaan yang tertinggi atas Angkatan Darat, Angkatan Laut, dan Angkatan Udara'
    opsi [16][5] = '1'

    opsi [17][0] = 'A. Mengajukan kembali rancangan anggaran pendapatan dan belanja negara setelah melakukan perbaikan pada hal-hal yang dianggap perlu '
    opsi [17][1] = 'B. Tetap menjalankan Anggaran Pendapatan dan Belanja Negara sesuai rencana yang diajukan meski tidak disetujui Dewan Perwakilan Rakyat'
    opsi [17][2] = 'C. Menunggu keputusan Dewan Perwakilan Rakyat selama 30 hari dan menjalankan Anggaran Pendapatan dan Belanja Negara sesuai rencana yang diajukan meski tetap tidak disetujui Dewan Perwakilan Rakyat'
    opsi [17][3] = 'D. Menjalankan Anggaran Pendapatan dan Belanja Negara tahun yang lalu'
    opsi [17][4] = 'E. Merancang Anggaran Pendapatan dan Belanja Negara yang baru untuk kemudian kembali diajukan kepada Dewan Perwakilan Rakyat'
    opsi [17][5] = '4'

    opsi [18][0] = 'A. Semboyan negara'
    opsi [18][1] = 'B. Asas negara'
    opsi [18][2] = 'C. Lambang negara'
    opsi [18][3] = 'D. Bendera negara'
    opsi [18][4] = 'E. Bahasa negara'
    opsi [18][5] = '2'

    opsi [19][0] = 'A. Tap MPRS No. III/MPRS/1963'
    opsi [19][1] = 'B. Tap MPRS No. XII/MPRS/1966'
    opsi [19][2] = 'C. Tap MPRS No. XX/MPRS/1966'
    opsi [19][3] = 'D. Tap MPR No. IV/MPR/1973'
    opsi [19][4] = 'E. Tap MPR No. II/MPR/1978'
    opsi [19][5] = '3'

    opsi [20][0] = 'A. DPR terdiri anggota partai politik peserta pemilu yang dipilih berdasarkan hasil pemilu'
    opsi [20][1] = 'B. Anggota DPR berjumlah 580 orang'
    opsi [20][2] = 'C. Keanggotaan DPR diresmikan dengan keputusan presiden'
    opsi [20][3] = 'D. Anggota DPR berdomisili di ibu kota RI'
    opsi [20][4] = 'E. Masa jabatan anggota DPR adalah 5 tahun dan berakhir saat anggota DPR yang baru mengucapkan sumpah/janji'
    opsi [20][5] = '2'

    opsi [21][0] = 'A. Pimpinan Majelis Permusyawaratan Rakyat dengan disaksikan oleh pimpinan Dewan Perwakilan Rakyat'
    opsi [21][1] = 'B. Pimpinan Mahkamah Agung dengan disaksikan oleh pimpinan Majelis Permusyawaratan Rakyat'
    opsi [21][2] = 'C. Pimpinan Dewan Perwakilan Rakyat dengan disaksikan oleh pimpinan Majelis Permusyawaratan Rakyat'
    opsi [21][3] = 'D. Pimpinan Dewan Perwakilan Rakyat dengan disaksikan oleh pimpinan Mahkamah Agung'
    opsi [21][4] = 'E. Pimpinan Majelis Permusyawaratan Rakyat dengan disaksikan oleh pimpinan Mahkamah Agung'
    opsi [21][5] = '5'

    opsi [22][0] = 'A. 26 ayat 1'
    opsi [22][1] = 'B. 27 ayat 1'
    opsi [22][2] = 'C. 27 ayat 2'
    opsi [22][3] = 'D. 27 ayat 3'
    opsi [22][4] = 'E. 28'
    opsi [22][5] = '2'

    opsi [23][0] = 'A. Riwayat raja-raja Singasari dan Majapahit'
    opsi [23][1] = 'B. Pemberontakan Ranggalawe'
    opsi [23][2] = 'C. Riwayat Raden Wijaya sampai menjadi Raja'
    opsi [23][3] = 'D. Penaklukan Pulau Bali oleh Gajah Mada dan Aryadamar, pemindahan keraton Majapahit ke Gelgel, dan penumpasan raja raksasa Maya Denawa'
    opsi [23][4] = 'E. Kekacauan di Pulau Bali akibat keganasan Maya Denawa yang akhirnya dibunuh oleh dewa'
    opsi [23][5] = '4'

    opsi [24][0] = 'A. Bubat'
    opsi [24][1] = 'B. Paregreg'
    opsi [24][2] = 'C. Padri'
    opsi [24][3] = 'D. Puputan Margarana'
    opsi [24][4] = 'E. Pararaton'
    opsi [24][5] = '2'

    opsi [25][0] = 'A. Roem Roijen'
    opsi [25][1] = 'B. Linggarjati'
    opsi [25][2] = 'C. Konferensi Meja Bundar'
    opsi [25][3] = 'D. Inter Indonesia'
    opsi [25][4] = 'E. Renville'
    opsi [25][5] = '1'

    opsi [26][0] = 'A. 28 Maret 1963'
    opsi [26][1] = 'B. 3 Mei 1964'
    opsi [26][2] = 'C. 12 Januari 1966'
    opsi [26][3] = 'D. 19 Desember 1961'
    opsi [26][4] = 'E. 5 Juli 1959'
    opsi [26][5] = '1'

    opsi [27][0] = 'A. Pemotongan nilai mata uang yang bernilai Rp2,50 ke atas hingga nilainya menjadi setengah '
    opsi [27][1] = 'B. Program perlindungan pengusaha pribumi dengan memberikan bantuan kredit dan bimbingan konkret '
    opsi [27][2] = 'Pemberian kredit untuk pengusaha pribumi (yang disebut Ali) agar dapat bersaing dengan pengusaha Tionghoa (yang disebut Baba)'
    opsi [27][3] = 'D. Program untuk menciptakan ekonomi yang bersifat nasional, demokratis, dan bebas dari imperialisme '
    opsi [27][4] = 'Pemberian perlindungan khusus dalam bentuk pemberian lisensi terhadap segala aktivitas usaha pribumi agar mampu menghadapi persaingan dengan pengusaha asing '
    opsi [27][5] = '2'

    opsi [28][0] = 'A. Dibentuk untuk meredakan ketegangan dunia akibat Perang Dingin antara Blok Barat dan Blok Timur '
    opsi [28][1] = 'B. Salah satu negara penggagas GNB adalah Yugoslavia yang diwakili oleh Presiden Joseph Broz Tito '
    opsi [28][2] = 'C. Konferensi Tingkat Tinggi GNB pertama kali diadakan di Indonesia pada 1 − 6 September 1961 '
    opsi [28][3] = 'D. Indonesia pernah menjadi ketua GNB pada tahun 1992 − 1995 yang diwakili oleh Presiden Soeharto '
    opsi [28][4] = 'Organisasi Gerakan Non-Blok terbentuk karena adanya pengaruh dari suksesnya penyelenggaraan Konferensi Asia Afrika'
    opsi [28][5] = '3'

    opsi [29][0] = 'A. Sarana pengatur konflik'
    opsi [29][1] = 'B. Sarana komunikasi politik'
    opsi [29][2] = 'C. Sarana partisipasi politik'
    opsi [29][3] = 'D. Sarana rekrutmen politik'
    opsi [29][4] = 'E. Sarana sosialisasi politik'
    opsi [29][5] = '2'

    // ================================ opsi TIU ================================
    opsi [30][0] = 'A. Ruang'
    opsi [30][1] = 'B. Bentuk'
    opsi [30][2] = 'C. Ukuran'
    opsi [30][3] = 'D. Tempat'
    opsi [30][4] = 'E. Wadah'
    opsi [30][5] = '3'

    opsi [31][0] = 'A. Tandus'
    opsi [31][1] = 'B. Kering'
    opsi [31][2] = 'C. Gerah'
    opsi [31][3] = 'D. Panas'
    opsi [31][4] = 'E. Kemarau'
    opsi [31][5] = '1'

    opsi [32][0] = 'A. Jelas'
    opsi [32][1] = 'B. Beraturan'
    opsi [32][2] = 'C. Bersih'
    opsi [32][3] = 'D. Terang'
    opsi [32][4] = 'E. Rasional'
    opsi [32][5] = '5'

    opsi [33][0] = 'A. Sumbang'
    opsi [33][1] = 'B. Pendiam'
    opsi [33][2] = 'C. Rendah'
    opsi [33][3] = 'D. Hening'
    opsi [33][4] = 'E. Pales'
    opsi [33][5] = '2'

    opsi [34][0] = 'A. Analis'
    opsi [34][1] = 'B. Apoteker'
    opsi [34][2] = 'C. Polisi'
    opsi [34][3] = 'D. Pemadam kebakaran'
    opsi [34][4] = 'E. Optalmolog'
    opsi [34][5] = '4'

    opsi [35][0] = 'A. Menhan : Mahfud M.D.'
    opsi [35][1] = 'B. Menkopolhukam : Prabowo'
    opsi [35][2] = 'C. Menkeu : Sri Mulyani'
    opsi [35][3] = 'D. Menpora : Nadiem'
    opsi [35][4] = 'E. Mensos : Budi Karya'
    opsi [35][5] = '3'

    opsi [36][0] = 'A. 350'
    opsi [36][1] = 'B. 369'
    opsi [36][2] = 'C. 378'
    opsi [36][3] = 'D. 387'
    opsi [36][4] = 'E. 396'
    opsi [36][5] = '5'

    opsi [37][0] = 'A. 9955'
    opsi [37][1] = 'B. 9184'
    opsi [37][2] = 'C. 8926'
    opsi [37][3] = 'D. 1053'
    opsi [37][4] = 'E. 826'
    opsi [37][5] = '5'

    opsi [38][0] = 'A. 45'
    opsi [38][1] = 'B. 40'
    opsi [38][2] = 'C. 35'
    opsi [38][3] = 'D. 30'
    opsi [38][4] = 'E. 25'
    opsi [38][5] = '1'

    opsi [39][0] = 'A. 42'
    opsi [39][1] = 'B. 40'
    opsi [39][2] = 'C. 38'
    opsi [39][3] = 'D. 36'
    opsi [39][4] = 'E. 34'
    opsi [39][5] = '2'

    opsi [40][0] = 'A. 444'
    opsi [40][1] = 'B. 4444'
    opsi [40][2] = 'C. 44444'
    opsi [40][3] = 'D. 444444'
    opsi [40][4] = 'E. 4444444'
    opsi [40][5] = '4'

    opsi [41][0] = 'A. –2 '
    opsi [41][1] = 'B. 0'
    opsi [41][2] = 'C. 2'
    opsi [41][3] = 'D. 4'
    opsi [41][4] = 'E. 6'
    opsi [41][5] = '3'

    opsi [42][0] = 'A. 𝑟 = 𝑠'
    opsi [42][1] = 'B. 𝑟 ≤ 𝑠'
    opsi [42][2] = 'C. 𝑟 ≥ 𝑠'
    opsi [42][3] = 'D. 𝑟 = 𝑠 + 2'
    opsi [42][4] = 'E. Hubungan 𝑟 dan 𝑠 tidak dapat ditentukan'
    opsi [42][5] = '5'

    opsi [43][0] = 'A. 𝑥 > 𝑦'
    opsi [43][1] = 'B. 𝑥 < 𝑦'
    opsi [43][2] = 'C. 𝑥 = 𝑦'
    opsi [43][3] = 'D. 𝑥 ≤ 𝑦'
    opsi [43][4] = 'E. Hubungan 𝑥 dan 𝑦 tidak dapat ditentukan'
    opsi [43][5] = '1'

    opsi [44][0] = 'A. 𝑎 < 𝑏'
    opsi [44][1] = 'B. 𝑎 > 𝑏'
    opsi [44][2] = 'C. 𝑎 = 𝑏'
    opsi [44][3] = 'D. 𝑎 = 2𝑏'
    opsi [44][4] = 'E. Hubungan 𝑎 dan 𝑏 tidak dapat ditentukan'
    opsi [44][5] = '2'

    opsi [45][0] = 'A. 𝑥 < 𝑦'
    opsi [45][1] = 'B. 𝑥 = 3𝑦'
    opsi [45][2] = 'C. 𝑥 = 𝑦'
    opsi [45][3] = 'D. 𝑥 = 𝑦 + 1,75'
    opsi [45][4] = 'E. Hubungan 𝑥 dan 𝑦 tidak dapat ditentukan'
    opsi [45][5] = '4'

    opsi [46][0] = 'A. 𝑒 < 𝑓'
    opsi [46][1] = 'B. 𝑒 = 𝑓'
    opsi [46][2] = 'C. 𝑒 > 𝑓'
    opsi [46][3] = 'D. 𝑒 = 100𝑓'
    opsi [46][4] = 'E. Hubungan 𝑒 dan 𝑓 tidak dapat ditentukan'
    opsi [46][5] = '1'

    opsi [47][0] = 'A. 15,78%'
    opsi [47][1] = 'B. 37,50%'
    opsi [47][2] = 'C. 48,25%'
    opsi [47][3] = 'D. 62,50%'
    opsi [47][4] = 'E. 84,22%'
    opsi [47][5] = '4'

    opsi [48][0] = 'A. $b√3$'
    opsi [48][1] = 'B. $5b$'
    opsi [48][2] = 'C. $3b$'
    opsi [48][3] = 'D. $5b√3$'
    opsi [48][4] = 'E. $15b$'
    opsi [48][5] = '2'

    opsi [49][0] = 'A. Rp1.420.000,00'
    opsi [49][1] = 'B. Rp1.230.000,00'
    opsi [49][2] = 'C. Rp1.140.000,00'
    opsi [49][3] = 'D. Rp1.050.000,00'
    opsi [49][4] = 'E. Rp960.000,00'
    opsi [49][5] = '3'

    opsi [50][0] = 'A. Rp. 1 milyar'
    opsi [50][1] = 'B. Rp. 950 juta'
    opsi [50][2] = 'C. Rp. 900 juta'
    opsi [50][3] = 'D. Rp. 850 juta'
    opsi [50][4] = 'E. Rp. 800 juta'
    opsi [50][5] = '3'

    opsi [51][0] = 'A. 255'
    opsi [51][1] = 'B. 207'
    opsi [51][2] = 'C. 164'
    opsi [51][3] = 'D. 126'
    opsi [51][4] = 'E. 93'
    opsi [51][5] = '5'

    opsi [52][0] = 'A. U'
    opsi [52][1] = 'B. R'
    opsi [52][2] = 'C. Z'
    opsi [52][3] = 'D. O'
    opsi [52][4] = 'E. Y'
    opsi [52][5] = '3'

    opsi [53][0] = 'A. 16, 14'
    opsi [53][1] = 'B. 11, 9'
    opsi [53][2] = 'C. 11, 14'
    opsi [53][3] = 'D. 16, 9'
    opsi [53][4] = 'E. 14, 16'
    opsi [53][5] = '1'

    opsi [54][0] = 'A. 10, 0'
    opsi [54][1] = 'B. 12, 6'
    opsi [54][2] = 'C. 6, 2'
    opsi [54][3] = 'D. 12, 0'
    opsi [54][4] = 'E. 12, 2'
    opsi [54][5] = '2'

    opsi [55][0] = 'A. $9/7$'
    opsi [55][1] = 'B. $1{1/9}$'
    opsi [55][2] = 'C. 1,125'
    opsi [55][3] = 'D. 1,25'
    opsi [55][4] = 'E. $1{1/10}$'
    opsi [55][5] = '3'

    opsi [56][0] = 'A. Santoso adalah seniman'
    opsi [56][1] = 'B. Santoso bukan seniman'
    opsi [56][2] = 'C. Santoso bukan seniman yang dapat melukis dengan baik'
    opsi [56][3] = 'D. Santoso salah satu seniman lulusan Universitas Berkary'
    opsi [56][4] = 'E. Tidak dapat disimpulkan'
    opsi [56][5] = '5'

    opsi [57][0] = 'A. Badan singa menjadi sehat'
    opsi [57][1] = 'B. Singa lebih sehat daripada rusa'
    opsi [57][2] = 'C. Badan singa menjadi kuat'
    opsi [57][3] = 'D. Singa tidak sehat'
    opsi [57][4] = 'E. Tidak dapat disimpulkan'
    opsi [57][5] = '1'

    opsi [58][0] = 'A. Ratna dan Titin tidak berenang'
    opsi [58][1] = 'B. Ratna dan Titin berenang'
    opsi [58][2] = 'C. Titin berenang dan Ratna belum tentu berenang'
    opsi [58][3] = 'D. Ratna berenang dan Titin belum tentu berenang'
    opsi [58][4] = 'E. Tidak dapat disimpulkan'
    opsi [58][5] = '2'

    opsi [59][0] = 'A. Hasim'
    opsi [59][1] = 'B. Galih'
    opsi [59][2] = 'C. Candra'
    opsi [59][3] = 'D. Asni'
    opsi [59][4] = 'E. Deni'
    opsi [59][5] = '2'

    opsi [60][0] = 'A. Kuning'
    opsi [60][1] = 'B. Putih'
    opsi [60][2] = 'C. Hitam'
    opsi [60][3] = 'D. Merah'
    opsi [60][4] = 'E. Biru'
    opsi [60][5] = '5'

    opsi [61][0] = '<img src="../../assets/img/SKD_p-3/62/A.png"/>'
    opsi [61][1] = '<img src="../../assets/img/SKD_p-3/62/B.png"/>'
    opsi [61][2] = '<img src="../../assets/img/SKD_p-3/62/C.png"/>'
    opsi [61][3] = '<img src="../../assets/img/SKD_p-3/62/D.png"/>'
    opsi [61][4] = '<img src="../../assets/img/SKD_p-3/62/E.png"/>'
    opsi [61][5] = '4'

    opsi [62][0] = '<img src="../../assets/img/SKD_p-3/63/A.png"/>'
    opsi [62][1] = '<img src="../../assets/img/SKD_p-3/63/B.png"/>'
    opsi [62][2] = '<img src="../../assets/img/SKD_p-3/63/C.png"/>'
    opsi [62][3] = '<img src="../../assets/img/SKD_p-3/63/D.png"/>'
    opsi [62][4] = '<img src="../../assets/img/SKD_p-3/63/E.png"/>'
    opsi [62][5] = '3'

    opsi [63][0] = '<img src="../../assets/img/SKD_p-3/64/A.png"/>'
    opsi [63][1] = '<img src="../../assets/img/SKD_p-3/64/B.png"/>'
    opsi [63][2] = '<img src="../../assets/img/SKD_p-3/64/C.png"/>'
    opsi [63][3] = '<img src="../../assets/img/SKD_p-3/64/D.png"/>'
    opsi [63][4] = '<img src="../../assets/img/SKD_p-3/64/E.png"/>'
    opsi [63][5] = '4'

    opsi [64][0] = '<img src="../../assets/img/SKD_p-3/65/A.png"/>'
    opsi [64][1] = '<img src="../../assets/img/SKD_p-3/65/B.png"/>'
    opsi [64][2] = '<img src="../../assets/img/SKD_p-3/65/C.png"/>'
    opsi [64][3] = '<img src="../../assets/img/SKD_p-3/65/D.png"/>'
    opsi [64][4] = '<img src="../../assets/img/SKD_p-3/65/E.png"/>'
    opsi [64][5] = '1'

    // ================================ opsi TKP ================================
    opsi [65][0] = 'A. Berterima kasih kepada dosen tersebut karena telah memuji Anda sebagai seseorang yang bertalenta dan akan ikut berpartisipasi dalam perlombaan tersebut5'
    opsi [65][1] = 'B. Berusaha mengasah lebih dalam talenta yang Anda miliki terlebih dahulu dan setelah yakin baru mengikuti perlombaan tersebut3'
    opsi [65][2] = 'C. Bersedia mengikuti perlombaan tersebut kemudian meminta bantuan dosen untuk membimbing Anda supaya Anda dapat menjuarai perlombaan tersebut4'
    opsi [65][3] = 'D. Bersedia mengikuti perlombaan asalkan dosen Anda mau memberikan bimbingan jika nanti menemui permasalahan1'
    opsi [65][4] = 'E. Menerima dan mengikuti perlombaan tersebut sebisanya saja sebagai pengalaman dan tidak akan kecewa apabila nanti mengalami kegagalan2'
    opsi [65][5] = ''

    opsi [66][0] = 'A. Menunggu atasan membicarakannya lagi, lalu baru melakukan persiapan pertemuan karena pekerjaan atasan sedang banyak-banyaknya1'
    opsi [66][1] = 'B. Memberitahu atasan bahwa dia harus bertemu klien untuk urusan bisnis dalam waktu dekat dan segera mengatur jadwal pertemuan dengan klien5'
    opsi [66][2] = 'C. Membuat rencana pertemuan dengan klien atasan dan baru memberitahukan atasan jika sudah menentukan waktunya2'
    opsi [66][3] = 'D. Membuat rencana pertemuan dan memberitahu atasan untuk disetujui jadwal pertemuan dengan klien4'
    opsi [66][4] = 'E. Mengingatkan atasan bahwa punya rencana untuk bertemu klien dan menunggu perintah atasan selanjutnya3'
    opsi [66][5] = ''

    opsi [67][0] = 'A. Mendengarkan rekan Anda dimarahi setelah itu memberikan semangat untuk tidak dimasukkan ke dalam hati ucapan atasan1'
    opsi [67][1] = 'B. Meminta maaf kepada teman Anda karena keterlambatan juga disebabkan oleh anggota tim yang lain dan ke depannya akan berusaha lebih tepat waktu3'
    opsi [67][2] = 'C. Mengakui kesalahan kepada atasan jika Anda juga turut berkontribusi pada masalah tersebut karena Anda juga terlambat mengumpulkan tugas yang dikerjakan secara pribadi5'
    opsi [67][3] = 'D. Mengakui kesalahan kepada teman dan berjanji tidak akan mengulanginya lagi serta menghibur teman agar tidak merasa sedih setelah dimarahi oleh atasan4'
    opsi [67][4] = 'E. Mengajak rekan Anda yang lain untuk menghiburnya karena rekan Anda dimarahi bukan karena kesalahannya seorang diri tetapi kesalahan bersama tim2'
    opsi [67][5] = ''

    opsi [68][0] = 'A. Berjalan kaki sambil berusaha mencari tumpangan untuk ke kantor5'
    opsi [68][1] = 'B. Meminta bantuan atasan di kantor agar segera dijemput di lokasi kerusakan kendaraan yang Anda tumpangi2'
    opsi [68][2] = 'C. Menunggu kendaraan sampai selesai diperbaiki dan meminta atasan menunggu1'
    opsi [68][3] = 'D. Berusaha secepatnya ke kantor dengan mencoba untuk berjalan kaki4'
    opsi [68][4] = 'E. Meminta pengemudi kendaraan yang Anda tumpangi untuk memperbaiki kendaraannya dengan cepat3'
    opsi [68][5] = ''

    opsi [69][0] = 'A. Banyak berdiskusi tentang informasi terbaru dengan teman sejawat yang sama-sama ingin mendapatkan prestasi yang tinggi3'
    opsi [69][1] = 'B. Menghabiskan waktu di kantor untuk membaca koran dan majalah sehingga dapat mengetahui informasi yang terbaru1'
    opsi [69][2] = 'C. Selalu bertanya kepada orang yang lebih ahli dalam bidang yang saya geluti sehingga saya bisa belajar banyak darinya2'
    opsi [69][3] = 'D. Selalu mengikuti seminar dan workshop yang berkaitan dengan pekerjaan saya sehingga dapat mengembangkan kemampuan diri5'
    opsi [69][4] = 'E. Selalu meluangkan waktu untuk belajar informasi terbaru baik dari buku maupun internet sehingga dapat menambah banyak wawasan4'
    opsi [69][5] = ''

    opsi [70][0] = 'A. Lebih suka pekerjaan yang memberikan saya kebebasan waktu yang lebih fleksibel2'
    opsi [70][1] = 'B. Tekun, teliti, dan bekerja sampai semua pekerjaan dapat cepat terselesaikan5'
    opsi [70][2] = 'C. Melibatkan teman-teman dalam setiap hal-hal kecil terkait pekerjaan yang ada1'
    opsi [70][3] = 'D. Lebih suka bekerja sendiri dan fokus untuk menyelesaikan pekerjaan yang diemban3'
    opsi [70][4] = 'E. Lebih suka jika bekerja dengan suasana kelompok dan bisa saling bertukar pikiran4'
    opsi [70][5] = ''

    opsi [71][0] = 'A. Anda berpikir seharusnya tidak mengangkat teleponnya dan akan menghubunginya kembali setelah makan malam dan beristirahat terlebih dahulu3'
    opsi [71][1] = 'B. Menyarankan kepada teman Anda untuk menghubungi teman yang lain karena Anda sedang mengerjakan <i>deadline</i> dari kantor2'
    opsi [71][2] = 'C. Menjelaskan kepada teman bahwa Anda telah memiliki rencana malam tersebut dan memintanya untuk bertemu keesokan harinya saja1'
    opsi [71][3] = 'D. Memberitahu teman Anda bahwa Anda bersedia bertemu dengannya, namun setelah Anda selesai dengan urusan Anda di rumah4'
    opsi [71][4] = 'E. Membatalkan makan malam yang menyenangkan dan setuju untuk bertemu dengan teman Anda tersebut5'
    opsi [71][5] = ''

    opsi [72][0] = 'A. Mempelajari kelemahan divisi lainnya di perusahaan sebagai bahan perbandingan untuk evaluasi pada divisi tempat Anda bekerja2'
    opsi [72][1] = 'B. Memberikan saran kepada kepala divisi untuk meminta semua anggota divisi agar bekerja lebih giat lagi dan tidak terlena dengan prestasi sekarang sehingga tahun depan dapat terpilih lagi sebagai divisi teladan5'
    opsi [72][2] = 'C. Memberikan semangat kepada seluruh anggota divisi dengan mengajak semuanya untuk sering makan bersama sehingga dapat kompak dan bekerja dengan semangat tanpa beban3'
    opsi [72][3] = 'D. Bekerja lebih giat lagi dengan selalu menyelesaikan tugas tepat waktu dan hasil yang memuaskan karena kinerja individu juga sebagai penilaian dalam pemilihan divisi teladan4'
    opsi [72][4] = 'E. Menyusun rencana untuk menjadikan divisi Anda sebagai divisi teladan pada tahun depan dengan meminta pertimbangan kepala divisi1'
    opsi [72][5] = ''

    opsi [73][0] = 'A. Senang karena Anda dapat berpetualang ke daerah yang sebelumnya Anda tidak pernah tahu dan kunjungi walaupun harus jauh dari keluarga4'
    opsi [73][1] = 'B. Tetap menjalaninya sebagai konsekuensi atas pekerjaan yang telah Anda pilih dan tentunya berusaha melaksanakannya dengan penuh tanggung jawab5'
    opsi [73][2] = 'C. Menjalaninya dan senantiasa berdoa agar suatu saat dipindahkan kembali ke tempat yang dekat dengan keluarga1'
    opsi [73][3] = 'D. Menjalaninya dengan pasrah karena ini sudah keputusan dari pimpinan yang memang tidak bisa untuk diubah dan berharap tidak terlalu lama ditempatkan di daerah tersebut2'
    opsi [73][4] = 'E. Berusaha menjalaninya dengan ikhlas walaupun sebenarnya Anda ingin ditempatkan di daerah yang dekat dengan keluarga Anda3'
    opsi [73][5] = ''

    opsi [74][0] = 'A. Menerimanya baik terpaksa maupun tidak karena penunjukkan atasan adalah tugas yang wajib dilaksanakan dan tidak boleh ditolak4'
    opsi [74][1] = 'B. Menerimanya karena ini adalah perintah atasan yang menyangkut nama baik diri sendiri dan akan mempengaruhi penilaian kinerja saya jika menolaknya3'
    opsi [74][2] = 'C. Menerimanya dan akan mempelajari masalah kepanitiaan dari orang-orang yang sudah berpengalaman agar nantinya dapat menjadi ketua yang benar-benar dapat melaksanakan tugas dengan baik5'
    opsi [74][3] = 'D. Menolak dengan tegas karena berisiko acara seminar menjadi berantakan dan menyarankan kepada atasan untuk menunjuk orang yang lebih berpengalaman untuk menjadi ketua1'
    opsi [74][4] = 'E. Menolak baik-baik dan memberi tahu alasannya bahwa saya belum punya pengalaman menjadi panitia apalagi menjadi ketua seminar2'
    opsi [74][5] = ''

    opsi [75][0] = 'A. Menerimanya dan saya yakin dengan pengalaman yang saya miliki tidak akan kesulitan untuk bekerja di bagian keuangan2'
    opsi [75][1] = 'B. Menerima tawaran tersebut dan tetap mengikuti diklat untuk bekerja di bagian keuangan5'
    opsi [75][2] = 'C. Karena sudah lama bekerja di bagian SDM sehingga saya akan memikirkan dahulu tawaran tersebut1'
    opsi [75][3] = 'D. Menerima tawaran tersebut dan mengikuti diklat karena sudah ada aturan dari perusahaan3'
    opsi [75][4] = 'E. Menerima tawaran tersebut dan akan mengikuti training yang saya belum mengerti materinya untuk bekerja di bagian keuangan4'
    opsi [75][5] = ''

    opsi [76][0] = 'A. Ikut melakukannya karena lemahnya pengawasan dan evaluasi dari pimpinan sehingga jika pulang lebih awal tidak akan dipermasalahkan1'
    opsi [76][1] = 'B. Ikut melakukannya demi menjaga hubungan pertemanan yang baik karena banyak rekan kerja yang lain melakukan hal tersebut dan tidak ada teguran sama sekali2'
    opsi [76][2] = 'C. Tetap ingin mengikuti aturan karena saya baru ditempatkan dan tidak berani untuk melanggar aturan yang berlaku3'
    opsi [76][3] = 'D. Tetap mengikuti aturan yang berlaku sehingga tetap pulang sesuai jadwal yang ditentukan oleh instansi tempat saya bekerja5'
    opsi [76][4] = 'E. Tetap mengikuti aturan agar dinilai sebagai pegawai yang rajin oleh atasan dan nantinya bisa terpilih menjadi pegawai teladan4'
    opsi [76][5] = ''

    opsi [77][0] = 'A. Menolak dengan tegas dan akan menjalankan sesuai aturan yang ada5'
    opsi [77][1] = 'B. Memberi pengertian bahwa itu bukan hak kita dan bersikeras mengembalikan4'
    opsi [77][2] = 'C. Meskipun ajakan yang menggiurkan tetapi akan tetap menolaknya3'
    opsi [77][3] = 'D. Tidak peduli rekan Anda melakukan hal tersebut, Anda berusaha untuk tidak melakukannya2'
    opsi [77][4] = 'E. Sebagai bentuk solidaritas dengan rekan kerja akan menasihatinya dan akan hanya akan setuju untuk mengambil setengahnya saja1'
    opsi [77][5] = ''

    opsi [78][0] = 'A. Tetap berangkat wawancara dan akan berusaha untuk menggantikan tugas rekan Anda meskipun gugup karena belum pernah menjadi pembicara sebelumnya4'
    opsi [78][1] = 'B. Akan tetap berangkat untuk wawancara dengan mengajak rekan kerja lainnya untuk menggantikan rekan kerja yang bertugas sebagai pembicara2'
    opsi [78][2] = 'C. Karena sudah terlanjur yang berkomunikasi dengan narasumber adalah rekan Anda maka akan mengatur jadwal ulang hingga rekan kerja pulih1'
    opsi [78][3] = 'D. Berangkat untuk wawancara dan akan menggantikan rekan kerja sebagai pembicara karena juga sudah mengetahui materi yang akan ditanyakan5'
    opsi [78][4] = 'E. Mengajak rekan kerja lainnya untuk menemani selama wawancara untuk membantu serta agar dapat meminimalisir kesalahan Anda saat menjadi pembicara3'
    opsi [78][5] = ''

    opsi [79][0] = 'A. Membicarakan baik-baik bahwa rapat ini sangat penting dan memintanya untuk memikirkan lagi apakah tetap akan pergi atau tidak2'
    opsi [79][1] = 'B. Mempersilahkannya karena bersangkutan dengan ibadah agar tidak dicap sebagai orang intoleran4'
    opsi [79][2] = 'C. Memastikan apakah ibadah tersebut wajib atau tidak menurut agamanya, jika wajib dipersilahkan, jika tidak wajib tidak dipersilahkan1'
    opsi [79][3] = 'D. Memberikan izin untuk pergi dahulu dengan syarat ke depannya tidak akan diulangi lag3'
    opsi [79][4] = 'E. Mempersilahkannya dan memberikan himbauan agar setelahnya mencari tahu hasil rapat untuk kelangsungan pekerjaannya5'
    opsi [79][5] = ''

    opsi [80][0] = 'A. Menyuruh istri untuk tidak ke kantor lebih dulu hingga anak tenang2'
    opsi [80][1] = 'B. Menyuruh istri untuk tetap berangkat dan Anda yang berusaha menenangkan anak Anda5'
    opsi [80][2] = 'C. Menyuruh istri untuk tidak bekerja pada hari itu1'
    opsi [80][3] = 'D. Berusaha menenangkan anak bersama istri agar dapat segera berangkat bekerja4'
    opsi [80][4] = 'E. Menyuruh istri untuk menenangkan anak terlebih dahulu dengan ditemani oleh Anda3'
    opsi [80][5] = ''

    opsi [81][0] = 'A. Memperhatikan dengan saksama dan tersenyum saja kepada saudara Anda3'
    opsi [81][1] = 'B. Menggumam kata-kata yang ofensif, “Itu bagus, apakah saya telah memberitahumu bahwa baju yang kamu kenakan tampak fantastis?”2'
    opsi [81][2] = 'C. Memberitahukan bahwa Anda tidak dapat terlalu banyak menyanjungnya lalu melanjutkan bekerja4'
    opsi [81][3] = 'D. Memberi komentar dengan berbicara secara cepat dan kurang jelas dan keluar dengan tergesa-gesa1'
    opsi [81][4] = 'E. Mengatakan dengan jujur dan sopan bahwa baju yang dikenakan tidaklah cocok dan memberikan saran untuk perbaikan5'
    opsi [81][5] = ''

    opsi [82][0] = 'A. Tetap bekerja dengan profesional dalam menyelesaikan proyek tersebut dan tidak perlu menyinggung masalah pribadi tersebut2'
    opsi [82][1] = 'B. Demi kelancaran proyek tersebut Anda meminta atasan untuk mempertimbangkan pergantian partner kepada rekan kerja lainnya1'
    opsi [82][2] = 'C. Berusaha untuk menyelesaikan permasalahan dengan rekan kerja agar dalam mengerjakan proyek dapat berjalan dengan lancar dan hasilnya akan baik5'
    opsi [82][3] = 'D. Melakukan kompromi dengan rekan kerja untuk tidak mencampur masalah pribadi dengan proyek kerja tersebut agar pekerjaan selesai dengan baik4'
    opsi [82][4] = 'E. Tetap bersikap ramah dengan rekan kerja tersebut selama mengerjakan proyek kerja untuk hasil pekerjaan yang terbaik3'
    opsi [82][5] = ''

    opsi [83][0] = 'A. Bersama-sama mencari literatur di semua toko buku yang ada di kota Anda3'
    opsi [83][1] = 'B. Membagi tugas untuk mencari literatur di beberapa toko buku maupun perpustakaan yang berbeda4'
    opsi [83][2] = 'C. Meminta pada pembimbing untuk dapat menggunakan literatur yang lebih mudah1'
    opsi [83][3] = 'D. Membagi tugas mencari literatur tersebut dari berbagai media yang ada5'
    opsi [83][4] = 'E. Menemui pembimbing dan meminta bantuan untuk meminjam literatur yang belum ditemukan2'
    opsi [83][5] = ''

    opsi [84][0] = 'A. Tidak mempercayai prediksi tersebut karena prediksi yang buruk seperti itu tidak perlu dipercayai1'
    opsi [84][1] = 'B. Tidak perlu bingung mengantisipasinya karena Anda pandai dalam mengatur keuangan untuk kebutuhan hidup3'
    opsi [84][2] = 'C. Membuat perencanaan dalam berbelanja sebagai antisipasi pada permasalahan tersebut5'
    opsi [84][3] = 'D. Tidak perlu khawatir karena hal tersebut akan segera diatasi oleh pemerintah2'
    opsi [84][4] = 'E. Tidak perlu mengkhawatirkannya karena saya sudah menerapkan hidup hemat dalam berbelanja4'
    opsi [84][5] = ''

    opsi [85][0] = 'A. Meminta maaf kepada atasan dan meminta waktu untuk menyelesaikan tugas kantor terlebih dahulu dan setelah itu baru akan menjawab pertanyaan-pertanyaannya3'
    opsi [85][1] = 'B. Berhenti mengerjakan tugas kantor dan melayani atasan Anda dengan sangat senang dan terbuka serta ikut bercerita sampai masalah pribadi yang Anda alami1'
    opsi [85][2] = 'C. Menjawab seperlunya dengan tidak menimbulkan perasaan tersinggung atasan5'
    opsi [85][3] = 'D. Menjawab seperlunya dan mengatakan bahwa Anda sedang fokus mengerjakan tugas4'
    opsi [85][4] = 'E. Menjawab seperlunya dan mengatakan dengan sopan bahwa atasan cukup mengganggu Anda yang sedang bekerja2'
    opsi [85][5] = ''

    opsi [86][0] = 'A. Memilih mengikuti les tambahan untuk meningkatkan nilai agar dapat melampaui batas nilai di universitas tersebut5'
    opsi [86][1] = 'B. Menolak karena takut jika nantinya akan ketahuan oleh pihak universitas bisa menimbulkan masalah baru dan berakibat <i>drop out</i>4'
    opsi [86][2] = 'C. Musyawarah dengan orang tua dahulu mengenai penawaran tersebut karena segala sesutunya harus dipikirkan baik-baik sebelum mengambil keputusan2'
    opsi [86][3] = 'D. Menerima karena sudah bercita-cita untuk masuk ke universitas tersebut dan tawaran ini adalah kesempatan yang baik sehingga tidak boleh dilewatkan1'
    opsi [86][4] = 'E. Menenangkan diri dengan memikirkan baik buruknya penawaran tersebut bagi masa depan saya nantinya di kemudian hari setelah saya masuk di universitas tersebut3'
    opsi [86][5] = ''

    opsi [87][0] = 'A. Meminta pertanggungjawaban ketua RT mengenai pohon tumbang tersebut1'
    opsi [87][1] = 'B. Menelepon pemadam kebakaran untuk menyingkirkan pohon tersebut2'
    opsi [87][2] = 'C. Mengajak warga kompleks untuk menyingkirkan pohon tersebut5'
    opsi [87][3] = 'D. Menyingkirkan pohon tumbang tersebut sembari menunggu petugas pemadam kebakaran datang membantu4'
    opsi [87][4] = 'E. Menyuruh warga kerja bakti untuk menyingkirkan pohon tersebut3'
    opsi [87][5] = ''

    opsi [88][0] = 'A. Bersikap mengalah dan mengikuti semua gagasannya demi menghindari konflik2'
    opsi [88][1] = 'B. Memintanya untuk memberikan gagasan yang lebih realistis dan risikonya kecil3'
    opsi [88][2] = 'C. Memintanya untuk memikirkan kembali gagasan yang diusulkan4'
    opsi [88][3] = 'D. Mengajaknya untuk bicara santai dan fokus pada tujuan awal5'
    opsi [88][4] = 'E. Keluar dari ruang diskusi dan memberitahukan kepada atasan1'
    opsi [88][5] = ''

    opsi [89][0] = 'A. Meminta maaf dan memohon untuk menunggu agar dibuatkan yang baru3'
    opsi [89][1] = 'B. Meminta maaf dan menyuruh bagian dapur untuk mengganti menu tersebut4'
    opsi [89][2] = 'C. Meminta maaf dan melaporkan pada bagian dapur agar segera ditindaklanjuti5'
    opsi [89][3] = 'D. Meminta maaf dan akan membuatkan menu baru sesuai pesanan2'
    opsi [89][4] = 'E. Melaporkan kepada bagian dapur yang bertugas memasak1'
    opsi [89][5] = ''

    opsi [90][0] = 'A. Membantu pekerjaan rumah tetapi meminta orang tua untuk bersikap adil karena saudara tidak membantu dan selalu bersikap malas-malasan4'
    opsi [90][1] = 'B. Meminta bantuan saudara saya mengerjakan pekerjaan rumah karena saya harus mengerjakan tugas dari dosen yang sangat banyak3'
    opsi [90][2] = 'C. Membantu pekerjaan yang bisa saya lakukan saja tanpa bantuan saudara1'
    opsi [90][3] = 'D. Mengajak saudara bersama-sama menyelesaikan pekerjaan rumah tersebut5'
    opsi [90][4] = 'E. Pulang lebih malam menunggu pekerjaan rumah selesai agar saudara tidak hanya bermalas-malasan saja di rumah2'
    opsi [90][5] = ''
    
    opsi [91][0] = 'A. Mengklarifikasi dengan teman Anda tentang pencapaian Anda yang sebenarnya saat evaluasi masih berlangsung1'
    opsi [91][1] = 'B. Mengklarifikasi dengan teman Anda tentang pencapaian Anda yang sebenarnya saat evaluasi sudah selesai3'
    opsi [91][2] = 'C. Menerima kritik tersebut dengan sukarela walaupun tidak sesuai dengan kinerja yang telah Anda lakukan4'
    opsi [91][3] = 'D. Menerima kritik tersebut dengan sukarela untuk mencegah konflik dengan rekan kerja Anda5'
    opsi [91][4] = 'E. Mengadukan rekan kerja Anda kepada atasan atas perlakukannya kepada saya agar mendapat teguran2'
    opsi [91][5] = ''
    
    opsi [92][0] = 'A. Memintanya untuk mengganti dan memintanya untuk lebih berhati-hati untuk jika meminjam buku novel Anda lagi3'
    opsi [92][1] = 'B. Menyuruh teman Anda untuk meminta maaf dan mengatakan untuk lebih bertanggung jawab jika meminjam sesuatu dari orang lain4'
    opsi [92][2] = 'C. Memakluminya dan mengatakan lain kali harus lebih berhati-hati dan menjaga barang yang sudah dipinjamkan5'
    opsi [92][3] = 'D. Memintanya untuk mengganti buku novel tersebut karena Anda sangat menyukai buku tersebut dan akan berpikir lagi jika meminjamkan barang kepada orang lain1'
    opsi [92][4] = 'E. Meminta teman Anda untuk mengganti buku novel tersebut sebagai bentuk dari pertanggungjawaban karena telah menghilangkannya2'
    opsi [92][5] = ''

    opsi [93][0] = 'A. Dengan senang hati membalas lampaian tangan dan memerankan peran bahwa Anda adalah tamu yang dimaksudkan3'
    opsi [93][1] = 'B. Kembali ke rumah karena Anda tidak dapat masuk tanpa membawa undangan1'
    opsi [93][2] = 'C. Menunggu orang yang mengundang Anda secara tidak resmi supaya masuk bersamanya5'
    opsi [93][3] = 'D. Ikut masuk dengan identitas baru Anda lalu buru-buru menghilang dari mereka dan menikmati pesta sendirian2'
    opsi [93][4] = 'E. Berkata bahwa dia menyama-nyamakan dia dengan orang lain tetapi mengajaknyamengobrol supaya dapat masuk bersama4'
    opsi [93][5] = ''

    opsi [94][0] = 'A. Membersihkan dengan cepat pecahan gelas karena jika dibiarkan akan membahayakan orang lain, selanjutnya saya langsung berangkat ke kantor5'
    opsi [94][1] = 'B. Memberi kabar kepada atasan bahwa saya akan datang terlambat karena harus membersihkan pecahan gelas yang jika dibiarkan akan membahayakan orang lain4'
    opsi [94][2] = 'C. Memberikan tulisan peringatan “awas banyak pecahan kaca” dan akan membereskannya nanti setelah saya pulang bekerja2'
    opsi [94][3] = 'D. Meminta tolong asisten rumah tangga untuk membersihkannya karena saya harus segera berangkat bekerja ke kantor3'
    opsi [94][4] = 'E. Langsung berangkat bekerja ke kantor karena yakin pasti nanti akan dibereskan oleh orang lain yang ada di rumah1'
    opsi [94][5] = ''

    opsi [95][0] = 'A. Berlatih dengan melakukan sesuatu hal baru agar menghasilkan ide dan cara-cara baru dalam memecahkan berbagai persoalan3'
    opsi [95][1] = 'B. Berani mencoba melakukan sesuatu yang baru yang dampaknya bisa memberikan manfaat pada orang lain5'
    opsi [95][2] = 'C. Memperbanyak membaca buku motivasi cara menumbuhkan semangat untuk menghasilkan ide dan caracara baru dalam memecahkan masalah1'
    opsi [95][3] = 'D. Berusaha selalu berkreasi sesuai kemampuan dan berusaha menemukan peluang pada setiap pekerjaan2'
    opsi [95][4] = 'E. Membiasakan diri untuk melakukan sesuatu yang baru dengan cara-cara baru dalam memecahkan masalah dan menemukan peluang4'
    opsi [95][5] = ''

    opsi [96][0] = 'A. Akan melakukan presensi <i>online</i> setelah sistem diperbaiki dan sementara waktu melakukan presensi manual2'
    opsi [96][1] = 'B. Menjalankan presensi <i>online</i> meskipun sedikit kesulitan dan akan senang jika segera diperbaiki3'
    opsi [96][2] = 'C. Tetap melakukan presensi <i>online</i> sebagai pembuktian telah hadir di kantor dan menaati peraturan4'
    opsi [96][3] = 'D. Mengusulkan untuk kembali ke sistem presensi manual sementara waktu sampai sistem presensi <i>online</i> dapat digunakan secara penuh1'
    opsi [96][4] = 'E. Melakukan presensi online dan mengusulkan agar sistem presensi <i>online</i> diperbaiki kembali agar benar-benar memudahkan penggunanya5'
    opsi [96][5] = ''

    opsi [97][0] = 'A. Meskipun ingin bekerja di tempat sahabat Anda tetapi Anda sungkan dengan atasan yang masih ada hubungan kekerabatan2'
    opsi [97][1] = 'B. Meskipun menerima tawaran pekerjaan yang lebik baik tetapi Anda belum yakin siap akan jabatan tersebut dan sungkan juga untuk menolak tawaran sahabat Anda1'
    opsi [97][2] = 'C. Agar tidak sungkan meninggalkan pekerjaan sekarang, Anda akan membicarakan baik-baik dengan atasan bahwa Anda ingin mengembangkan kemampuan diri pada posisi di perusahaan sahabat Anda5'
    opsi [97][3] = 'D. Mencoba membicarakan dengan kerabat Anda tersebut bagaimana sebaiknya Anda bertindak agar tidak sungkan di kedua pihak3'
    opsi [97][4] = 'E. Akan menerima tawaran pekerjaan di perusahaan sahabat Anda karena ingin mengembangkan diri serta sudah tidak nyaman dengan sistem kerja di tempat Anda bekerja sekarang4'
    opsi [97][5] = ''

    opsi [98][0] = 'A. Mempersilahkan tamu untuk datang ke ruangan saya kemudian saya mempersilahkan menyampaikan tujuannya sambil saya tinggal mengerjakan laporan4'
    opsi [98][1] = 'B. Mempersilahkan tamu untuk datang ke ruangan saya dan memohonnya untuk menunggu sebentar sampai laporan yang saya kerjakan selesai5'
    opsi [98][2] = 'C. Meminta maaf dan memberi pengertian kepada tamu bahwa ada laporan yang harus segera saya selesaikan sehingga memintanya untuk datang kembali esok hari3'
    opsi [98][3] = 'D. Meminta bantuan kepada rekan kerja untuk menemui tamu tersebut dan mendengarkan apa yang ingin disampaikannya karena saya harus menyelesaikan laporan terlebih dahulu2'
    opsi [98][4] = 'E. Mempersilahkan tamu untuk datang ke ruangan dan saya tinggal mengerjakan laporan sehingga tamu tersebut akan menyadari bahwa saya sedang sibuk dan akan datang di lain waktu1'
    opsi [98][5] = ''

    opsi [99][0] = 'A. Saya hanya akan melakukan pekerjaan di luar tugas pokok dan fungsi yang saya miliki apabila diminta oleh atasan untuk mengerjakannya3'
    opsi [99][1] = 'B. Di tengah-tengah kesibukan pekerjaan, saya tetap ingin membantu teman untuk menyelesaikan pekerjaannya yang tertunda1'
    opsi [99][2] = 'C. Saya mau mempelajari hal-hal lain di luar tugas pokok dan fungsi yang saya miliki untuk menambah pengalaman dan kemampuan saya5'
    opsi [99][3] = 'D. Saya akan membantu teman saya yang lain jika dimintai pertolongan dan tentunya atas seizin atasan serta memberikan bantuan dengan batasan tertentu agar tidak menyalahi aturan yang ada2'
    opsi [99][4] = 'E. Saya akan mempertimbangkan dahulu apakah saya akan berkontribusi lebih dari apa yang telah dikerjakan saat ini atau tidak4'
    opsi [99][5] = ''


	
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

