//This program creates a library of congress callnumber by adding to together randomly selected parts

//Yes, this program is primitive. I know.
//My goal is to continually improve this program through various iterations to encourage myself to make many small programs
// and in doing so, demonstrate how a simple idea can be developed into something complex. 

LC_Class=["AC","AE","AG","AI","AM","AN","AP","AS","AY","AZ","B","BC","BD","BF","BH","BJ","BL","BM","BP","BQ","BR","BS","BT","BV","BX","CB","CC","CD","CE","CJ","CN","CR","CS","CT","D","DA","DAW","DB","DC","DD","DE","DF","DG","DH","DJ","DJK","DK","DL","DP","DQ","DR","DS","DT","DU","DX","E","F","G","GA","GB","GC","GE","GF","GN","GR","GT","GV","H","HA","HB","HC","HD","HE","HF","HG","HJ","HM","HN","HQ","HS","HT","HV","HX","J","JA","JC","JF","JJ","JK","JL","JN","JQ","JS","JV","JX","JZ","K","KB","KBM","KBP","KBR","KBS","KBT","KBU","KD","KDZ","KE","KF","KG","KH","KJ","KL","KZ","L","LA","LB","LC","LD","LE","LF","LG","LH","LJ","LT","M","ML","MT","N","NA","NB","NC","ND","NE","NK","NX","P","PA","PB","PC","PD","PE","PF","PG","PH","PJ","PK","PL","PM","PN","PQ","PR","PS","PT","PZ","Q","QA","QB","QC","QD","QE","QH","QK","QL","QM","QP","QR","R","RA","RB","RC","RD","RE","RF","RG","RJ","RK","RL","RM","RS","RT","RV","RX","RZ","S","SB","SD","SF","SH","SK","T","TA","TC","TD","TE","TF","TG","TH","TJ","TK","TL","TN","TP","TR","TS","TT","TX","U","UA","UB","UC","UD","UE","UF","UG","UH","V","VA","VB","VC","VD","VE","VF","VG","VK","VM","Z","ZA"];

Cutter=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var RandomLC = Math.floor(Math.random()*227);
var RandomLCNum = Math.floor(Math.random()*9998+1);
var RandomLCDec = Math.floor(Math.random()*9);
var RandomCutter = Math.floor(Math.random()*26);

alert(LC_Class[RandomLC]+RandomLCNum+"."+RandomLCDec+Cutter[RandomCutter]);

