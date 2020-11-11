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

	pertanyaan [0]  = 'No sooner … the homework than his mother came into his bedroom.'//121
	pertanyaan [1]  = 'The police insisted that the case … investigated soon.'//122
	pertanyaan [2]  = 'Condoleezza Rice, …, delivered the speech in front of the congress.'//128
	pertanyaan [3]  = 'The workers … the holiday for a month by next week.'//131
	pertanyaan [4]  = 'They looked … to watching “The War Of The Planet Of The Apes” in cinema.'//133
	pertanyaan [5]  = 'Go to the extraction field, …'//134
	pertanyaan [6]  = 'The elected president rode … in the palace.'//139
	pertanyaan [7]  = 'Mr. Benjamin Netanyahu thought his … showed that he didn’t agree about the resolution proposed by UN.'//143
	pertanyaan [8]  = 'Those buildings … by the U.S Coalition if they were used to shelter the terrorists.'//147
	pertanyaan [9]  = 'The Range Rover which he parked near the bench is … car in the parking area.'//149
	pertanyaan [10] = 'Katherine likes to talk <b><u>to</u></b> her cats, <b><u>takes</u></b> them <b><u>for</u></b> a walk, and <b><u>playing</u></b> with them every day. '//152
	pertanyaan [11] = '<b><u>After</u></b> exercising, Lance is get used to <b><u>have</u></b> a glass of <b><u>vitamin water</u></b> to keep <b><u>her</u></b> healthy.'//153
	pertanyaan [12] = 'The wall <b><u>was hitting</u></b> by a truck <b><u>during</u></b> a <b><u>sudden</u></b> accident <b><u>last month.</u></b>'//157
	pertanyaan [13] = '<b><u>Not</u></b> woman had an idea to give <b><u>education</u></b> for women in Indonesia <b><u>until</u></b> RA. Kartini was brave <b><u>enough</u></b> to speak'//158
	pertanyaan [14] = 'The <b><u>big</u></b> castle, <b><u>standing</u></b> from the north to south Carolina, is the <b><u>longer</u></b> castle in <b><u>this</u></b> town'//159
	pertanyaan [15] = ' The origins of the horse go back to eohippus the "dawn horse" of me Eocene only 10 to 20 inches tall. Like its relatives the ancient tapir and rhinoceros, eohippus had four toes on its front feet, three on the rear, and teeth adapted to a forest diet of soft leaves. Eohippus died out about 5.1 million years ago in both North America and Europe.<br><br> Late ancestral horse types moved from their forest niche out onto the grassy plains. Their teeth acted to accommodate to hard siliceous grass. No longer could these protohorses slip away through thick forest when danger threatened. Escape now demanded speed and endurance Limbs crew longer. Extra toes became vestiges that were not visible externally.<br><br>The passage mainly discusses the …'//176
	pertanyaan [16] = ' The origins of the horse go back to eohippus the "dawn horse" of me Eocene only 10 to 20 inches tall. Like its relatives the ancient tapir and rhinoceros, eohippus had four toes on its front feet, three on the rear, and teeth adapted to a forest diet of soft leaves. Eohippus died out about 5.1 million years ago in both North America and Europe.<br><br> Late ancestral horse types moved from their forest niche out onto the grassy plains. Their teeth acted to accommodate to hard siliceous grass. No longer could these protohorses slip away through thick forest when danger threatened. Escape now demanded speed and endurance Limbs crew longer. Extra toes became vestiges that were not visible externally.<br><br>The author states that eohippus was related to the …'//177
	pertanyaan [17] = ' The origins of the horse go back to eohippus the "dawn horse" of me Eocene only 10 to 20 inches tall. Like its relatives the ancient tapir and rhinoceros, eohippus had four toes on its front feet, three on the rear, and teeth adapted to a forest diet of soft leaves. Eohippus died out about 5.1 million years ago in both North America and Europe.<br><br> Late ancestral horse types moved from their forest niche out onto the grassy plains. Their teeth acted to accommodate to hard siliceous grass. No longer could these protohorses slip away through thick forest when danger threatened. Escape now demanded speed and endurance Limbs crew longer. Extra toes became vestiges that were not visible externally.<br><br>What did the eohippus eat?'//178
	pertanyaan [18] = ' The origins of the horse go back to eohippus the "dawn horse" of me Eocene only 10 to 20 inches tall. Like its relatives the ancient tapir and rhinoceros, eohippus had four toes on its front feet, three on the rear, and teeth adapted to a forest diet of soft leaves. Eohippus died out about 5.1 million years ago in both North America and Europe.<br><br> Late ancestral horse types moved from their forest niche out onto the grassy plains. Their teeth acted to accommodate to hard siliceous grass. No longer could these protohorses slip away through thick forest when danger threatened. Escape now demanded speed and endurance Limbs crew longer. Extra toes became vestiges that were not visible externally.<br><br>In what way did predators present less of a threat to eohippus than to later proto horses?'//179
	pertanyaan [19] = ' The origins of the horse go back to eohippus the "dawn horse" of me Eocene only 10 to 20 inches tall. Like its relatives the ancient tapir and rhinoceros, eohippus had four toes on its front feet, three on the rear, and teeth adapted to a forest diet of soft leaves. Eohippus died out about 5.1 million years ago in both North America and Europe.<br><br> Late ancestral horse types moved from their forest niche out onto the grassy plains. Their teeth acted to accommodate to hard siliceous grass. No longer could these protohorses slip away through thick forest when danger threatened. Escape now demanded speed and endurance Limbs crew longer. Extra toes became vestiges that were not visible externally.<br><br>The paragraph following the passage most probably discusses …'//180
	//pilihan
	var opsi = ArrOpsi(pertanyaan.length,6); //deklarasi 2d array untuk pilihan
	// var pilihan = '';
	opsi [0][0] = 'Rudy had done';//A
	opsi [0][1] = 'Rudy done';//B
	opsi [0][2] = 'had Rudy done';//C
	opsi [0][3] = 'did Rudy done';//D
	opsi [0][4] = '';//E
	opsi [0][5] = '3';//kunci jawaban

	opsi [1][0] = 'should be';//A
	opsi [1][1] = 'should';//B
	opsi [1][2] = 'be';//C
	opsi [1][3] = 'will be';//D
	opsi [1][4] = '';//E
	opsi [1][5] = '3';//kunci jawaban

	opsi [2][0] = 'is the secretary of state';//A
	opsi [2][1] = 'the secretary of state';//B
	opsi [2][2] = 'which the secretary of state';//C
	opsi [2][3] = 'who secretary of state';//D
	opsi [2][4] = '';//E
	opsi [2][5] = '2';//kunci jawaban

	opsi [3][0] = 'will have taken';//A
	opsi [3][1] = 'are going to take';//B
	opsi [3][2] = 'will take';//C
	opsi [3][3] = 'would take';//D
	opsi [3][4] = '';//E
	opsi [3][5] = '1';//kunci jawaban

	opsi [4][0] = 'after';//A
	opsi [4][1] = 'forward';//B
	opsi [4][2] = 'down';//C
	opsi [4][3] = 'at';//D
	opsi [4][4] = '';//E
	opsi [4][5] = '2';//kunci jawaban

	opsi [5][0] = 'don’t you?';//A
	opsi [5][1] = 'do you?';//B
	opsi [5][2] = 'won’t you?';//C
	opsi [5][3] = 'are you?';//D
	opsi [5][4] = '';//E
	opsi [5][5] = '3';//kunci jawaban

	opsi [6][0] = 'beautiful black big Friesian horse';//A
	opsi [6][1] = 'beautiful big black Friesian horse';//B
	opsi [6][2] = 'beautiful Friesian big black horse';//C
	opsi [6][3] = 'beautiful Friesian horse big black';//D
	opsi [6][4] = '';//E
	opsi [6][5] = '2';//kunci jawaban

	opsi [7][0] = 'leave';//A
	opsi [7][1] = 'leaving';//B
	opsi [7][2] = 'left';//C
	opsi [7][3] = 'leaves';//D
	opsi [7][4] = '';//E
	opsi [7][5] = '2';//kunci jawaban

	opsi [8][0] = 'would be attacked';//A
	opsi [8][1] = 'would attacked';//B
	opsi [8][2] = 'would attack';//C
	opsi [8][3] = 'were attacked';//D
	opsi [8][4] = '';//E
	opsi [8][5] = '1';//kunci jawaban

	opsi [9][0] = 'the most costly';//A
	opsi [9][1] = 'more costly';//B
	opsi [9][2] = 'the much costly';//C
	opsi [9][3] = 'costlier';//D
	opsi [9][4] = '';//E
	opsi [9][5] = '1';//kunci jawaban

	opsi [10][0] = 'to';//A
	opsi [10][1] = 'takes';//B
	opsi [10][2] = 'for';//C
	opsi [10][3] = 'playing';//D
	opsi [10][4] = '';//E
	opsi [10][5] = '4';//kunci jawaban

	opsi [11][0] = 'after';//A
	opsi [11][1] = 'have';//B
	opsi [11][2] = 'vitamin water';//C
	opsi [11][3] = 'her';//D
	opsi [11][4] = '';//E
	opsi [11][5] = '2';//kunci jawaban

	opsi [12][0] = 'was hitting';//A
	opsi [12][1] = 'during';//B
	opsi [12][2] = 'sudden';//C
	opsi [12][3] = 'last month';//D
	opsi [12][4] = '';//E
	opsi [12][5] = '1';//kunci jawaban

	opsi [13][0] = 'not';//A
	opsi [13][1] = 'education';//B
	opsi [13][2] = 'until';//C
	opsi [13][3] = 'enough';//D
	opsi [13][4] = '';//E
	opsi [13][5] = '1';//kunci jawaban

	opsi [14][0] = 'big';//A
	opsi [14][1] = 'standing';//B
	opsi [14][2] = 'longer';//C
	opsi [14][3] = 'this';//D
	opsi [14][4] = '';//E
	opsi [14][5] = '3';//kunci jawaban

	opsi [15][0] = 'evolution of the horse';//A
	opsi [15][1] = 'size of eohippus';//B
	opsi [15][2] = 'animals of the Eocene';//C
	opsi [15][3] = 'plight of endangered species';//D
	opsi [15][4] = '';//E
	opsi [15][5] = '1';//kunci jawaban

	opsi [16][0] = 'Horsefly';//A
	opsi [16][1] = 'Tapeworm';//B
	opsi [16][2] = 'Hippopotamus';//C
	opsi [16][3] = 'rhinoceros';//D
	opsi [16][4] = '';//E
	opsi [16][5] = '4';//kunci jawaban

	opsi [17][0] = 'Rhinoceros meat';//A
	opsi [17][1] = 'Soft leaves';//B
	opsi [17][2] = 'Hard siliceous grass';//C
	opsi [17][3] = 'Other horses';//D
	opsi [17][4] = '';//E
	opsi [17][5] = '2';//kunci jawaban

	opsi [18][0] = 'Eohippus was hidden by the forest';//A
	opsi [18][1] = 'Eohippus could run farther';//B
	opsi [18][2] = 'Eohippus was not edible';//C
	opsi [18][3] = 'Eohippus was larger and stronger';//D
	opsi [18][4] = '';//E
	opsi [18][5] = '1';//kunci jawaban

	opsi [19][0] = 'other changes that the rhinoceros has undergone';//A
	opsi [19][1] = 'more reasons for the extinction of eohippus';//B
	opsi [19][2] = 'further development of early horse types';//C
	opsi [19][3] = 'the diet of eohippus';//D
	opsi [19][4] = '';//E
	opsi [19][5] = '3';//kunci jawaban

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

